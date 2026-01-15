import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import { UploadService } from '../../common/services/upload.service';
import {
  CreateTaskDto,
  UpdateTaskDto,
  QueryTasksDto,
  CreateTaskCommentDto,
} from './dto/task.dto';
import {
  getPaginationParams,
  createPaginatedResponse,
} from '../../common/utils/pagination.util';

@Injectable()
export class TasksService {
  constructor(
    private prisma: PrismaService,
    private uploadService: UploadService,
  ) {}

  async create(createTaskDto: CreateTaskDto, createdById: string) {
    const task = await this.prisma.task.create({
      data: {
        ...createTaskDto,
        createdById,
      },
      include: {
        createdBy: { select: { id: true, name: true } },
        assignedTo: { select: { id: true, name: true, email: true } },
      },
    });

    return task;
  }

  async findAll(query: QueryTasksDto) {
    const { assignedToId, status, priority, page, limit } = query;
    const {
      skip,
      take,
      page: currentPage,
      limit: currentLimit,
    } = getPaginationParams({ page, limit });

    const where: any = {};

    if (assignedToId) {
      where.assignedToId = assignedToId;
    }

    if (status) {
      where.status = status;
    }

    if (priority) {
      where.priority = priority;
    }

    const [tasks, total] = await Promise.all([
      this.prisma.task.findMany({
        where,
        skip,
        take,
        include: {
          createdBy: { select: { id: true, name: true } },
          assignedTo: { select: { id: true, name: true, email: true } },
          _count: { select: { comments: true, attachments: true } },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.task.count({ where }),
    ]);

    return createPaginatedResponse(tasks, total, currentPage, currentLimit);
  }

  async findMyTasks(userId: string, query: QueryTasksDto) {
    return this.findAll({ ...query, assignedToId: userId });
  }

  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
      include: {
        createdBy: { select: { id: true, name: true } },
        assignedTo: { select: { id: true, name: true, email: true } },
        comments: {
          include: { user: { select: { id: true, name: true } } },
          orderBy: { createdAt: 'desc' },
        },
        attachments: {
          include: { user: { select: { id: true, name: true } } },
          orderBy: { uploadedAt: 'desc' },
        },
      },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  async update(
    id: string,
    updateTaskDto: UpdateTaskDto,
    userId: string,
    userRole: string,
  ) {
    const task = await this.prisma.task.findUnique({ where: { id } });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    // Only creator or OWNER can update certain fields
    if (task.createdById !== userId && userRole !== 'OWNER') {
      throw new ForbiddenException(
        'Only task creator or owner can update this task',
      );
    }

    try {
      const updatedTask = await this.prisma.task.update({
        where: { id },
        data: updateTaskDto,
        include: {
          createdBy: { select: { id: true, name: true } },
          assignedTo: { select: { id: true, name: true } },
        },
      });

      return updatedTask;
    } catch (error) {
      throw new NotFoundException('Task not found');
    }
  }

  async updateMyTask(id: string, updateTaskDto: UpdateTaskDto, userId: string) {
    const task = await this.prisma.task.findUnique({ where: { id } });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    if (task.assignedToId !== userId) {
      throw new ForbiddenException('You can only update your own tasks');
    }

    // Employees can only update status and progress
    const allowedFields = {
      status: updateTaskDto.status,
      progressPercentage: updateTaskDto.progressPercentage,
    };

    return this.prisma.task.update({
      where: { id },
      data: allowedFields,
      include: {
        createdBy: { select: { id: true, name: true } },
        assignedTo: { select: { id: true, name: true } },
      },
    });
  }

  async addComment(
    taskId: string,
    createCommentDto: CreateTaskCommentDto,
    userId: string,
  ) {
    const comment = await this.prisma.taskComment.create({
      data: {
        taskId,
        userId,
        comment: createCommentDto.comment,
      },
      include: {
        user: { select: { id: true, name: true } },
      },
    });

    return comment;
  }

  async addAttachment(
    taskId: string,
    file: Express.Multer.File,
    userId: string,
  ) {
    const fileUrl = await this.uploadService.uploadFile(
      file,
      'task-attachments',
    );

    const attachment = await this.prisma.taskAttachment.create({
      data: {
        taskId,
        fileUrl,
        fileName: file.originalname,
        fileSize: file.size,
        uploadedBy: userId,
      },
      include: {
        user: { select: { id: true, name: true } },
      },
    });

    return attachment;
  }

  async remove(id: string) {
    try {
      await this.prisma.task.delete({
        where: { id },
      });

      return { message: 'Task deleted successfully' };
    } catch (error) {
      throw new NotFoundException('Task not found');
    }
  }
}
