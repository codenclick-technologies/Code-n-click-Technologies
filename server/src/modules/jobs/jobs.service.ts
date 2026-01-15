import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import { CreateJobDto, UpdateJobDto, QueryJobsDto } from './dto/job.dto';
import {
  getPaginationParams,
  createPaginatedResponse,
} from '../../common/utils/pagination.util';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  async create(createJobDto: CreateJobDto, userId: string) {
    const job = await this.prisma.job.create({
      data: {
        ...createJobDto,
        createdById: userId,
      },
      include: {
        createdBy: { select: { id: true, name: true, email: true } },
      },
    });

    return job;
  }

  async findAll(query: QueryJobsDto, isPublic = false) {
    const {
      search,
      department,
      jobType,
      experienceLevel,
      location,
      page,
      limit,
    } = query;
    const {
      skip,
      take,
      page: currentPage,
      limit: currentLimit,
    } = getPaginationParams({ page, limit });

    const where: any = {};

    if (isPublic) {
      where.isActive = true;
      where.isVisibleOnWebsite = true;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (department) {
      where.department = department;
    }

    if (jobType) {
      where.jobType = jobType;
    }

    if (experienceLevel) {
      where.experienceLevel = experienceLevel;
    }

    if (location) {
      where.location = { contains: location, mode: 'insensitive' };
    }

    const [jobs, total] = await Promise.all([
      this.prisma.job.findMany({
        where,
        skip,
        take,
        include: {
          createdBy: { select: { id: true, name: true } },
          _count: { select: { applications: true } },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.job.count({ where }),
    ]);

    return createPaginatedResponse(jobs, total, currentPage, currentLimit);
  }

  async findOne(id: string, isPublic = false) {
    const where: any = { id };

    if (isPublic) {
      where.isActive = true;
      where.isVisibleOnWebsite = true;
    }

    const job = await this.prisma.job.findFirst({
      where,
      include: {
        createdBy: { select: { id: true, name: true } },
        _count: { select: { applications: true } },
      },
    });

    if (!job) {
      throw new NotFoundException('Job not found');
    }

    return job;
  }

  async update(id: string, updateJobDto: UpdateJobDto) {
    try {
      const job = await this.prisma.job.update({
        where: { id },
        data: updateJobDto,
        include: {
          createdBy: { select: { id: true, name: true } },
        },
      });

      return job;
    } catch (error) {
      throw new NotFoundException('Job not found');
    }
  }

  async toggleVisibility(id: string) {
    const job = await this.prisma.job.findUnique({ where: { id } });

    if (!job) {
      throw new NotFoundException('Job not found');
    }

    return this.prisma.job.update({
      where: { id },
      data: { isVisibleOnWebsite: !job.isVisibleOnWebsite },
    });
  }

  async remove(id: string) {
    try {
      await this.prisma.job.delete({
        where: { id },
      });

      return { message: 'Job deleted successfully' };
    } catch (error) {
      throw new NotFoundException('Job not found');
    }
  }
}
