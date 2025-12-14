import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { PrismaService } from './config/prisma.service';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

// Modules
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { ApplicationsModule } from './modules/applications/applications.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { CommonModule } from './modules/common/common.module';
import { LeavesModule } from './modules/leaves/leaves.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { CelebrationsModule } from './modules/celebrations/celebrations.module';
import { PoliciesModule } from './modules/policies/policies.module';
import { PayrollModule } from './modules/payroll/payroll.module';
import { ContactModule } from './modules/contact/contact.module';
import { ResourcesModule } from './modules/resources/resources.module';
import { MeetingsModule } from './modules/meetings/meetings.module';


@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // ThrottlerModule.forRoot([
    //   {
    //     ttl: 60000, // 60 seconds
    //     limit: 1000, // 1000 requests per TTL
    //   },
    // ]),

    // Feature modules
    AuthModule,
    UsersModule,
    EmployeesModule,
    JobsModule,
    ApplicationsModule,
    TasksModule,
    NotificationsModule,
    DashboardModule,
    CommonModule,
    LeavesModule,
    AttendanceModule,
    CelebrationsModule,
    PoliciesModule,
    PayrollModule,
    ContactModule,
    ResourcesModule,
    MeetingsModule,

  ],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    /*
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    */
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule { }
