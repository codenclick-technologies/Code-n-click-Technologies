import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import {
  CheckInDto,
  CheckOutDto,
  QueryAttendanceDto,
} from './dto/attendance.dto';
import { AttendanceStatus } from '@prisma/client';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  async checkIn(userId: string, checkInDto: CheckInDto) {
    const now = new Date();
    const today = new Date(
      Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()),
    );

    // Check if already checked in today
    const existing = await this.prisma.attendance.findUnique({
      where: {
        userId_date: {
          userId,
          date: today,
        },
      },
    });

    if (existing && existing.checkIn) {
      throw new BadRequestException('Already checked in today');
    }

    if (existing) {
      // Update existing record
      return this.prisma.attendance.update({
        where: { id: existing.id },
        data: {
          checkIn: now,
          status: AttendanceStatus.PRESENT,
          notes: checkInDto.notes,
        },
      });
    }

    // Create new record
    return this.prisma.attendance.create({
      data: {
        userId,
        date: today,
        checkIn: now,
        status: AttendanceStatus.PRESENT,
        notes: checkInDto.notes,
      },
    });
  }

  async checkOut(userId: string, checkOutDto: CheckOutDto) {
    const now = new Date();
    const today = new Date(
      Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()),
    );

    const attendance = await this.prisma.attendance.findUnique({
      where: {
        userId_date: {
          userId,
          date: today,
        },
      },
    });

    if (!attendance) {
      throw new BadRequestException('No check-in record found for today');
    }

    if (attendance.checkOut) {
      throw new BadRequestException('Already checked out today');
    }

    const checkOutTime = new Date();

    return this.prisma.attendance.update({
      where: { id: attendance.id },
      data: {
        checkOut: checkOutTime,
        notes: checkOutDto.notes || attendance.notes,
      },
    });
  }

  async getTodayStatus(userId: string) {
    const now = new Date();
    const today = new Date(
      Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()),
    );

    const attendance = await this.prisma.attendance.findUnique({
      where: {
        userId_date: {
          userId,
          date: today,
        },
      },
    });

    return {
      date: today,
      hasCheckedIn: !!attendance?.checkIn,
      hasCheckedOut: !!attendance?.checkOut,
      checkIn: attendance?.checkIn,
      checkOut: attendance?.checkOut,
      status: attendance?.status || AttendanceStatus.ABSENT,
    };
  }

  async getMyRecords(userId: string, query: QueryAttendanceDto) {
    const where: any = { userId };

    if (query.startDate && query.endDate) {
      where.date = {
        gte: new Date(query.startDate),
        lte: new Date(query.endDate),
      };
    } else if (query.month && query.year) {
      const startDate = new Date(query.year, query.month - 1, 1);
      const endDate = new Date(query.year, query.month, 0);
      where.date = {
        gte: startDate,
        lte: endDate,
      };
    }

    return this.prisma.attendance.findMany({
      where,
      orderBy: {
        date: 'desc',
      },
    });
  }

  async getAllRecords(query: QueryAttendanceDto) {
    const where: any = {};

    if (query.startDate && query.endDate) {
      where.date = {
        gte: new Date(query.startDate),
        lte: new Date(query.endDate),
      };
    } else if (query.month && query.year) {
      const startDate = new Date(query.year, query.month - 1, 1);
      const endDate = new Date(query.year, query.month, 0);
      where.date = {
        gte: startDate,
        lte: endDate,
      };
    }

    return this.prisma.attendance.findMany({
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
                employeeCode: true,
              },
            },
          },
        },
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async getMonthlyReport(userId: string, month: number, year: number) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    const records = await this.prisma.attendance.findMany({
      where: {
        userId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: {
        date: 'asc',
      },
    });

    const totalDays = endDate.getDate();
    const presentDays = records.filter(
      (r: any) => r.status === AttendanceStatus.PRESENT,
    ).length;
    const absentDays = records.filter(
      (r: any) => r.status === AttendanceStatus.ABSENT,
    ).length;
    const leaveDays = records.filter(
      (r: any) => r.status === AttendanceStatus.LEAVE,
    ).length;
    const halfDays = records.filter(
      (r: any) => r.status === AttendanceStatus.HALF_DAY,
    ).length;

    return {
      month,
      year,
      totalDays,
      presentDays,
      absentDays,
      leaveDays,
      halfDays,
      attendancePercentage: ((presentDays + halfDays * 0.5) / totalDays) * 100,
      records,
    };
  }

  async update(id: string, updateAttendanceDto: any) {
    const { checkIn, checkOut } = updateAttendanceDto;

    if (checkIn && checkOut) {
      const checkInTime = new Date(checkIn).getTime();
      const checkOutTime = new Date(checkOut).getTime();

      if (checkOutTime <= checkInTime) {
        throw new BadRequestException(
          'Check-out time must be after check-in time',
        );
      }
    }

    return this.prisma.attendance.update({
      where: { id },
      data: updateAttendanceDto,
    });
  }
}
