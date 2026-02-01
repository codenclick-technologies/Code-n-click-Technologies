import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import { TaskStatus, ApplicationStatus } from '@prisma/client';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getSummary() {
    const [
      totalEmployees,
      activeJobs,
      totalApplicationsToday,
      totalApplicationsWeek,
      totalApplicationsMonth,
      tasksSummary,
    ] = await Promise.all([
      // Total employees
      this.prisma.employeeProfile.count(),

      // Active jobs
      this.prisma.job.count({
        where: { isActive: true, isVisibleOnWebsite: true },
      }),

      // Applications today
      this.prisma.application.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),

      // Applications this week
      this.prisma.application.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          },
        },
      }),

      // Applications this month
      this.prisma.application.count({
        where: {
          createdAt: {
            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          },
        },
      }),

      // Tasks summary
      this.prisma.task.groupBy({
        by: ['status'],
        _count: true,
      }),
    ]);

    const tasksData = {
      total: tasksSummary.reduce((sum, item) => sum + item._count, 0),
      completed:
        tasksSummary.find((t) => t.status === TaskStatus.COMPLETED)?._count ||
        0,
      inProgress:
        tasksSummary.find((t) => t.status === TaskStatus.IN_PROGRESS)?._count ||
        0,
      blocked:
        tasksSummary.find((t) => t.status === TaskStatus.BLOCKED)?._count || 0,
      todo: tasksSummary.find((t) => t.status === TaskStatus.TODO)?._count || 0,
    };

    return {
      totalEmployees,
      activeJobs,
      applications: {
        today: totalApplicationsToday,
        thisWeek: totalApplicationsWeek,
        thisMonth: totalApplicationsMonth,
      },
      tasks: tasksData,
    };
  }

  async getTasksByStatus() {
    const tasks = await this.prisma.task.groupBy({
      by: ['status'],
      _count: true,
    });

    return {
      labels: tasks.map((t) => t.status),
      values: tasks.map((t) => t._count),
    };
  }

  async getApplicationsByStatus() {
    const applications = await this.prisma.application.groupBy({
      by: ['status'],
      _count: true,
    });

    return {
      labels: applications.map((a) => a.status),
      values: applications.map((a) => a._count),
    };
  }

  async getTasksByEmployee() {
    const tasks = await this.prisma.task.groupBy({
      by: ['assignedToId'],
      _count: true,
    });

    const employeeIds = tasks.map((t) => t.assignedToId);
    const employees = await this.prisma.user.findMany({
      where: { id: { in: employeeIds } },
      select: { id: true, name: true },
    });

    return {
      labels: tasks.map((t) => {
        const employee = employees.find((e) => e.id === t.assignedToId);
        return employee?.name || 'Unknown';
      }),
      values: tasks.map((t) => t._count),
    };
  }

  async getJobsByDepartment() {
    const jobs = await this.prisma.job.groupBy({
      by: ['department'],
      _count: true,
      where: { isActive: true },
    });

    return {
      labels: jobs.map((j) => j.department),
      values: jobs.map((j) => j._count),
    };
  }

  async getApplicationTrend(days: number = 30) {
    const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

    const applications = await this.prisma.application.findMany({
      where: {
        createdAt: { gte: startDate },
      },
      select: {
        createdAt: true,
      },
    });

    // Group by date
    const dateMap = new Map<string, number>();
    applications.forEach((app) => {
      const date = app.createdAt.toISOString().split('T')[0];
      dateMap.set(date, (dateMap.get(date) || 0) + 1);
    });

    const labels = Array.from(dateMap.keys()).sort();
    const values = labels.map((label) => dateMap.get(label) || 0);

    return { labels, values };
  }
}
