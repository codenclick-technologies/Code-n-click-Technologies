import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import {
  CreateNotificationDto,
  UpdateNotificationDto,
  QueryNotificationsDto,
} from './dto/notification.dto';
import {
  getPaginationParams,
  createPaginatedResponse,
} from '../../common/utils/pagination.util';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async create(
    createNotificationDto: CreateNotificationDto,
    createdById: string,
  ) {
    const notification = await this.prisma.notificationBanner.create({
      data: {
        ...createNotificationDto,
        createdById,
      },
      include: {
        createdBy: { select: { id: true, name: true } },
      },
    });

    return notification;
  }

  async findAll(query: QueryNotificationsDto) {
    const { type, isActive, page, limit } = query;
    const {
      skip,
      take,
      page: currentPage,
      limit: currentLimit,
    } = getPaginationParams({ page, limit });

    const where: any = {};

    if (type) {
      where.type = type;
    }

    if (isActive !== undefined) {
      where.isActive = isActive;
    }

    const [notifications, total] = await Promise.all([
      this.prisma.notificationBanner.findMany({
        where,
        skip,
        take,
        include: {
          createdBy: { select: { id: true, name: true } },
        },
        orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }],
      }),
      this.prisma.notificationBanner.count({ where }),
    ]);

    return createPaginatedResponse(
      notifications,
      total,
      currentPage,
      currentLimit,
    );
  }

  async findActivePublic() {
    const now = new Date();

    const notifications = await this.prisma.notificationBanner.findMany({
      where: {
        isActive: true,
        OR: [
          {
            AND: [
              { startDateTime: { lte: now } },
              { endDateTime: { gte: now } },
            ],
          },
          {
            AND: [{ startDateTime: null }, { endDateTime: null }],
          },
          {
            AND: [{ startDateTime: { lte: now } }, { endDateTime: null }],
          },
        ],
      },
      select: {
        id: true,
        title: true,
        message: true,
        type: true,
        displayType: true,
        htmlContent: true,
        imageUrl: true,
        linkUrl: true,
        linkText: true,
        priority: true,
      },
      orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }],
    });

    return notifications;
  }

  async findOne(id: string) {
    const notification = await this.prisma.notificationBanner.findUnique({
      where: { id },
      include: {
        createdBy: { select: { id: true, name: true } },
      },
    });

    if (!notification) {
      throw new NotFoundException('Notification not found');
    }

    return notification;
  }

  async update(id: string, updateNotificationDto: UpdateNotificationDto) {
    try {
      const notification = await this.prisma.notificationBanner.update({
        where: { id },
        data: updateNotificationDto,
        include: {
          createdBy: { select: { id: true, name: true } },
        },
      });

      return notification;
    } catch (error) {
      throw new NotFoundException('Notification not found');
    }
  }

  async toggleStatus(id: string) {
    const notification = await this.prisma.notificationBanner.findUnique({
      where: { id },
    });

    if (!notification) {
      throw new NotFoundException('Notification not found');
    }

    return this.prisma.notificationBanner.update({
      where: { id },
      data: { isActive: !notification.isActive },
    });
  }

  async remove(id: string) {
    try {
      await this.prisma.notificationBanner.delete({
        where: { id },
      });

      return { message: 'Notification deleted successfully' };
    } catch (error) {
      throw new NotFoundException('Notification not found');
    }
  }
}
