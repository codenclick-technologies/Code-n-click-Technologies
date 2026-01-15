import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import { UploadService } from '../../common/services/upload.service';
import {
  CreateApplicationDto,
  UpdateApplicationDto,
  QueryApplicationsDto,
} from './dto/application.dto';
import {
  getPaginationParams,
  createPaginatedResponse,
} from '../../common/utils/pagination.util';

@Injectable()
export class ApplicationsService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}

  async create(
    jobId: string,
    createApplicationDto: CreateApplicationDto,
    resumeFile: Express.Multer.File,
  ) {
    // Upload resume
    const resumeUrl = await this.uploadService.uploadFile(
      resumeFile,
      'resumes',
    );

    const application = await this.prisma.application.create({
      data: {
        ...createApplicationDto,
        jobId,
        resumeUrl,
        resumeFileName: resumeFile.originalname,
      },
      include: {
        job: { select: { id: true, title: true, department: true } },
      },
    });

    return application;
  }

  async findAll(query: QueryApplicationsDto) {
    const { jobId, status, search, page, limit } = query;
    const {
      skip,
      take,
      page: currentPage,
      limit: currentLimit,
    } = getPaginationParams({ page, limit });

    const where: any = {};

    if (jobId) {
      where.jobId = jobId;
    }

    if (status) {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search } },
        { skills: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [applications, total] = await Promise.all([
      this.prisma.application.findMany({
        where,
        skip,
        take,
        include: {
          job: { select: { id: true, title: true, department: true } },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.application.count({ where }),
    ]);

    return createPaginatedResponse(
      applications,
      total,
      currentPage,
      currentLimit,
    );
  }

  async findOne(id: string) {
    const application = await this.prisma.application.findUnique({
      where: { id },
      include: {
        job: true,
      },
    });

    if (!application) {
      throw new NotFoundException('Application not found');
    }

    return application;
  }

  async updateStatus(id: string, status: string) {
    try {
      const application = await this.prisma.application.update({
        where: { id },
        data: { status: status as any },
        include: {
          job: { select: { id: true, title: true } },
        },
      });

      return application;
    } catch (error) {
      throw new NotFoundException('Application not found');
    }
  }

  async updateNotes(id: string, notes: string) {
    try {
      const application = await this.prisma.application.update({
        where: { id },
        data: { notes },
      });

      return application;
    } catch (error) {
      throw new NotFoundException('Application not found');
    }
  }

  async remove(id: string) {
    try {
      const application = await this.prisma.application.findUnique({
        where: { id },
      });

      if (application) {
        await this.uploadService.deleteFile(application.resumeUrl);
      }

      await this.prisma.application.delete({
        where: { id },
      });

      return { message: 'Application deleted successfully' };
    } catch (error) {
      throw new NotFoundException('Application not found');
    }
  }
}
