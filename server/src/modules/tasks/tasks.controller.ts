import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiConsumes,
} from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import {
  CreateTaskDto,
  UpdateTaskDto,
  QueryTasksDto,
  CreateTaskCommentDto,
} from './dto/task.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@ApiTags('Tasks')
@Controller('tasks')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @Roles(Role.OWNER, Role.MANAGER)
  @ApiOperation({ summary: 'Create task (Manager/Owner)' })
  create(@Body() createTaskDto: CreateTaskDto, @CurrentUser() user: any) {
    return this.tasksService.create(createTaskDto, user.id);
  }

  @Get()
  @Roles(Role.OWNER, Role.MANAGER)
  @ApiOperation({ summary: 'Get all tasks (Manager/Owner)' })
  findAll(@Query() query: QueryTasksDto) {
    return this.tasksService.findAll(query);
  }

  @Get('my-tasks')
  @ApiOperation({ summary: 'Get my assigned tasks' })
  findMyTasks(@CurrentUser() user: any, @Query() query: QueryTasksDto) {
    return this.tasksService.findMyTasks(user.id, query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get task by ID' })
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.OWNER, Role.MANAGER)
  @ApiOperation({ summary: 'Update task (Manager/Owner)' })
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @CurrentUser() user: any,
  ) {
    return this.tasksService.update(id, updateTaskDto, user.id, user.role);
  }

  @Patch('my-tasks/:id')
  @ApiOperation({ summary: 'Update my task (status/progress only)' })
  updateMyTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @CurrentUser() user: any,
  ) {
    return this.tasksService.updateMyTask(id, updateTaskDto, user.id);
  }

  @Post(':id/comments')
  @ApiOperation({ summary: 'Add comment to task' })
  addComment(
    @Param('id') id: string,
    @Body() createCommentDto: CreateTaskCommentDto,
    @CurrentUser() user: any,
  ) {
    return this.tasksService.addComment(id, createCommentDto, user.id);
  }

  @Post(':id/attachments')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Add attachment to task' })
  @ApiConsumes('multipart/form-data')
  addAttachment(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user: any,
  ) {
    return this.tasksService.addAttachment(id, file, user.id);
  }

  @Delete(':id')
  @Roles(Role.OWNER, Role.MANAGER)
  @ApiOperation({ summary: 'Delete task' })
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
