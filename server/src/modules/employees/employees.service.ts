import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import {
  CreateEmployeeDto,
  UpdateEmployeeDto,
  QueryEmployeesDto,
} from './dto/employee.dto';
import {
  getPaginationParams,
  createPaginatedResponse,
} from '../../common/utils/pagination.util';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) { }

  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = await this.prisma.employeeProfile.create({
      data: createEmployeeDto,
      include: {
        user: { select: { id: true, name: true, email: true, role: true } },
      },
    });

    return employee;
  }

  async findAll(query: QueryEmployeesDto) {
    const { search, department, page, limit } = query;
    const {
      skip,
      take,
      page: currentPage,
      limit: currentLimit,
    } = getPaginationParams({ page, limit });

    const where: any = {};

    if (search) {
      where.OR = [
        { user: { name: { contains: search, mode: 'insensitive' } } },
        { user: { email: { contains: search, mode: 'insensitive' } } },
        { employeeCode: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (department) {
      where.department = department;
    }

    const [employees, total] = await Promise.all([
      this.prisma.employeeProfile.findMany({
        where,
        skip,
        take,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              role: true,
              status: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.employeeProfile.count({ where }),
    ]);

    return createPaginatedResponse(employees, total, currentPage, currentLimit);
  }

  async findOne(id: string) {
    const employee = await this.prisma.employeeProfile.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            status: true,
          },
        },
      },
    });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    return employee;
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    try {
      const employee = await this.prisma.employeeProfile.update({
        where: { id },
        data: updateEmployeeDto,
        include: {
          user: { select: { id: true, name: true, email: true, role: true } },
        },
      });

      return employee;
    } catch (error) {
      throw new NotFoundException('Employee not found');
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.employeeProfile.delete({
        where: { id },
      });

      return { message: 'Employee deleted successfully' };
    } catch (error) {
      throw new NotFoundException('Employee not found');
    }
  }
}
