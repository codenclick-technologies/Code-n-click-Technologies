import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  ForbiddenException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../config/prisma.service';
import {
  RegisterDto,
  LoginDto,
  ChangePasswordDto,
  ForgotPasswordDto,
  ResetPasswordDto,
  AdminResetPasswordDto,
} from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { Role, UserStatus } from '@prisma/client';

/**
 * Enhanced Authentication Service
 * Includes password reset, mustChangePassword logic, and admin user creation
 */
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) { }

  /**
   * Admin-only user creation (NO PUBLIC REGISTRATION)
   * OWNER can create any role, HR can only create EMPLOYEE
   */
  async createUser(registerDto: RegisterDto, currentUser: any) {
    const { name, email, password, role, mustChangePassword } = registerDto;

    // Verify admin permissions
    if (!currentUser) {
      throw new ForbiddenException('Only administrators can create users');
    }

    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Role-based creation validation
    const requestedRole = role || Role.EMPLOYEE;

    if (currentUser.role === Role.OWNER) {
      // Owner can create any role
    } else if (currentUser.role === Role.HR) {
      // HR can only create EMPLOYEE
      if (requestedRole !== Role.EMPLOYEE) {
        throw new ForbiddenException('HR can only create EMPLOYEE users');
      }
    } else if (currentUser.role === Role.MANAGER) {
      // MANAGER can only create EMPLOYEE
      if (requestedRole !== Role.EMPLOYEE) {
        throw new ForbiddenException('Managers can only create EMPLOYEE users');
      }
    } else {
      throw new ForbiddenException(
        'You do not have permission to create users',
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user with mustChangePassword flag
    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role: requestedRole,
        status: UserStatus.ACTIVE,
        mustChangePassword:
          mustChangePassword !== undefined ? mustChangePassword : true,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        mustChangePassword: true,
        createdAt: true,
      },
    });

    return {
      message: 'User created successfully',
      user,
    };
  }

  /**
   * Login with mustChangePassword check
   */
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check if user is active
    if (user.status !== UserStatus.ACTIVE) {
      throw new UnauthorizedException('Account is not active');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Update lastLoginAt
    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    // Generate tokens
    const tokens = await this.generateTokens(user.id, user.email, user.role);

    return {
      ...tokens,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        mustChangePassword: user.mustChangePassword,
      },
    };
  }

  /**
   * Change password (for logged-in users)
   */
  async changePassword(userId: string, changePasswordDto: ChangePasswordDto) {
    const { currentPassword, newPassword } = changePasswordDto;

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.passwordHash,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    // Hash new password
    const newPasswordHash = await bcrypt.hash(newPassword, 10);

    // Update password and clear mustChangePassword flag
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        passwordHash: newPasswordHash,
        mustChangePassword: false,
      },
    });

    return { message: 'Password changed successfully' };
  }

  /**
   * Forgot password - Generate reset token
   */
  async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    const { email } = forgotPasswordDto;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Don't reveal if user exists
      return { message: 'If the email exists, a reset link has been sent' };
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    // Store token with 1 hour expiration
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await this.prisma.passwordResetToken.create({
      data: {
        token: hashedToken,
        userId: user.id,
        expiresAt,
      },
    });

    // TODO: Send email with reset link containing resetToken
    // For now, return token (in production, send via email)
    console.log(`Password reset token for ${email}: ${resetToken}`);

    return {
      message: 'If the email exists, a reset link has been sent',
      // Remove this in production - only for development
      resetToken: resetToken,
    };
  }

  /**
   * Reset password using token
   */
  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const { token, newPassword } = resetPasswordDto;

    // Hash the token to match database
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    // Find valid token
    const resetToken = await this.prisma.passwordResetToken.findFirst({
      where: {
        token: hashedToken,
        used: false,
        expiresAt: { gte: new Date() },
      },
      include: { user: true },
    });

    if (!resetToken) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    // Hash new password
    const newPasswordHash = await bcrypt.hash(newPassword, 10);

    // Update password and mark token as used
    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: resetToken.userId },
        data: {
          passwordHash: newPasswordHash,
          mustChangePassword: false,
        },
      }),
      this.prisma.passwordResetToken.update({
        where: { id: resetToken.id },
        data: { used: true },
      }),
      // Delete all refresh tokens (force re-login)
      this.prisma.refreshToken.deleteMany({
        where: { userId: resetToken.userId },
      }),
    ]);

    return { message: 'Password reset successfully' };
  }

  /**
   * Admin reset user password (HR/OWNER only)
   */
  async adminResetPassword(
    targetUserId: string,
    adminResetDto: AdminResetPasswordDto,
    currentUser: any,
  ) {
    const { temporaryPassword, mustChangePassword } = adminResetDto;

    // Verify admin permissions
    if (
      currentUser.role !== Role.OWNER &&
      currentUser.role !== Role.HR &&
      currentUser.role !== Role.MANAGER
    ) {
      throw new ForbiddenException(
        'Only HR, MANAGER, or OWNER can reset passwords',
      );
    }

    const targetUser = await this.prisma.user.findUnique({
      where: { id: targetUserId },
    });

    if (!targetUser) {
      throw new NotFoundException('User not found');
    }

    // HR and MANAGER can only reset EMPLOYEE passwords
    if (
      (currentUser.role === Role.HR || currentUser.role === Role.MANAGER) &&
      targetUser.role !== Role.EMPLOYEE
    ) {
      throw new ForbiddenException(
        'HR and Managers can only reset EMPLOYEE passwords',
      );
    }

    // Hash temporary password
    const passwordHash = await bcrypt.hash(temporaryPassword, 10);

    // Update password and set mustChangePassword
    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: targetUserId },
        data: {
          passwordHash,
          mustChangePassword:
            mustChangePassword !== undefined ? mustChangePassword : true,
        },
      }),
      // Delete all refresh tokens (force re-login)
      this.prisma.refreshToken.deleteMany({
        where: { userId: targetUserId },
      }),
    ]);

    return {
      message: 'Password reset successfully',
      mustChangePassword:
        mustChangePassword !== undefined ? mustChangePassword : true,
    };
  }

  /**
   * Refresh access token
   */
  async refreshToken(refreshToken: string) {
    try {
      // Verify refresh token
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      });

      // Check if refresh token exists in database
      const storedToken = await this.prisma.refreshToken.findUnique({
        where: { token: refreshToken },
        include: { user: true },
      });

      if (!storedToken) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      // Check if token is expired
      if (storedToken.expiresAt < new Date()) {
        await this.prisma.refreshToken.delete({
          where: { id: storedToken.id },
        });
        throw new UnauthorizedException('Refresh token expired');
      }

      // Generate new tokens
      const tokens = await this.generateTokens(
        storedToken.user.id,
        storedToken.user.email,
        storedToken.user.role,
      );

      // Delete old refresh token
      await this.prisma.refreshToken.delete({
        where: { id: storedToken.id },
      });

      return {
        ...tokens,
        user: {
          id: storedToken.user.id,
          name: storedToken.user.name,
          email: storedToken.user.email,
          role: storedToken.user.role,
          mustChangePassword: storedToken.user.mustChangePassword,
        },
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  /**
   * Logout user (invalidate refresh token)
   */
  async logout(userId: string) {
    await this.prisma.refreshToken.deleteMany({
      where: { userId },
    });

    return { message: 'Logged out successfully' };
  }

  /**
   * Generate access and refresh tokens
   */
  private async generateTokens(userId: string, email: string, role: Role) {
    const [accessToken, refreshToken] = await Promise.all([
      // Access token
      this.jwtService.signAsync(
        { sub: userId, email, role },
        {
          secret: this.configService.get('JWT_SECRET'),
          expiresIn: this.configService.get('JWT_EXPIRES_IN') || '15m',
        },
      ),
      // Refresh token
      this.jwtService.signAsync(
        { sub: userId, email, role },
        {
          secret: this.configService.get('JWT_REFRESH_SECRET'),
          expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN') || '7d',
        },
      ),
    ]);

    // Store refresh token in database
    const expiresIn = this.configService.get('JWT_REFRESH_EXPIRES_IN') || '7d';
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

    await this.prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId,
        expiresAt,
      },
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  /**
   * Validate user (used by JWT strategy)
   */
  async validateUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        mustChangePassword: true,
      },
    });

    if (!user || user.status !== UserStatus.ACTIVE) {
      throw new UnauthorizedException('User not found or inactive');
    }

    return user;
  }
}
