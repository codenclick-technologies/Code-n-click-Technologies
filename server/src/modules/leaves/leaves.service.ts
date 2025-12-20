import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import {
  CreateLeaveDto,
  UpdateLeaveDto,
  QueryLeavesDto,
} from './dto/leave.dto';
import { LeaveStatus } from '@prisma/client';

@Injectable()
export class LeavesService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createLeaveDto: CreateLeaveDto) {
    // Validate dates
    const startDate = new Date(createLeaveDto.startDate);
    const endDate = new Date(createLeaveDto.endDate);

    if (endDate < startDate) {
      throw new BadRequestException('End date must be after start date');
    }

    // Check for overlapping leaves
    const overlapping = await this.prisma.leave.findFirst({
      where: {
        userId,
        status: { in: [LeaveStatus.PENDING, LeaveStatus.APPROVED] },
        OR: [
          {
            AND: [
              { startDate: { lte: endDate } },
              { endDate: { gte: startDate } },
            ],
          },
        ],
      },
    });

    if (overlapping) {
      throw new BadRequestException(
        'You already have a leave request for these dates',
      );
    }

    return this.prisma.leave.create({
      data: {
        userId,
        ...createLeaveDto,
        startDate,
        endDate,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async findAll(query: QueryLeavesDto, userId?: string) {
    const where: any = {};

    if (userId) {
      where.userId = userId;
    }

    if (query.status) {
      where.status = query.status;
    }

    if (query.startDate || query.endDate) {
      where.AND = [];
      if (query.startDate) {
        where.AND.push({ startDate: { gte: new Date(query.startDate) } });
      }
      if (query.endDate) {
        where.AND.push({ endDate: { lte: new Date(query.endDate) } });
      }
    }

    return this.prisma.leave.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            employeeProfile: {
              select: {
                designation: true,
                department: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string, userId?: string) {
    const leave = await this.prisma.leave.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            employeeProfile: true,
          },
        },
      },
    });

    if (!leave) {
      throw new NotFoundException('Leave not found');
    }

    // Check if user has permission to view this leave
    if (userId && leave.userId !== userId) {
      throw new ForbiddenException('You can only view your own leaves');
    }

    return leave;
  }

  async update(
    id: string,
    updateLeaveDto: UpdateLeaveDto,
    approverId?: string,
  ) {
    const leave = await this.findOne(id);

    if (leave.status !== LeaveStatus.PENDING && updateLeaveDto.status) {
      throw new BadRequestException('Can only update pending leaves');
    }

    const data: any = {};

    if (updateLeaveDto.status) {
      data.status = updateLeaveDto.status;
      if (updateLeaveDto.status === LeaveStatus.APPROVED && approverId) {
        data.approvedBy = approverId;
      } else if (updateLeaveDto.status === LeaveStatus.REJECTED && approverId) {
        data.rejectedBy = approverId;
      }
    }

    if (updateLeaveDto.approvalNote) {
      data.approvalNote = updateLeaveDto.approvalNote;
    }

    return this.prisma.leave.update({
      where: { id },
      data,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async cancel(id: string, userId: string) {
    const leave = await this.findOne(id, userId);

    if (leave.status !== LeaveStatus.PENDING) {
      throw new BadRequestException('Can only cancel pending leaves');
    }

    return this.prisma.leave.update({
      where: { id },
      data: { status: LeaveStatus.CANCELLED },
    });
  }

  async getLeaveBalance(userId: string, year: number) {
    const leaves = await this.prisma.leave.findMany({
      where: {
        userId,
        status: { in: [LeaveStatus.APPROVED, LeaveStatus.PENDING] },
        startDate: {
          gte: new Date(`${year}-01-01`),
          lte: new Date(`${year}-12-31`),
        },
      },
    });

    const totalDays = leaves.reduce(
      (sum: number, leave: any) => sum + leave.days,
      0,
    );
    const annualLeaveQuota = 24; // Default quota

    return {
      year,
      totalQuota: annualLeaveQuota,
      used: totalDays,
      remaining: annualLeaveQuota - totalDays,
      leaves,
    };
  }
}
