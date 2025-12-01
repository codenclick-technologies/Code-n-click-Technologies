import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { MeetingsService } from './meetings.service';
import { CreateMeetingDto, UpdateMeetingDto } from './dto/meeting.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Meetings')
@Controller('meetings')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class MeetingsController {
    constructor(private readonly meetingsService: MeetingsService) { }

    @Post()
    @ApiOperation({ summary: 'Create a meeting' })
    create(@Body() createMeetingDto: CreateMeetingDto, @CurrentUser() user: any) {
        return this.meetingsService.create(createMeetingDto, user.id);
    }

    @Get()
    @ApiOperation({ summary: 'Get all meetings' })
    findAll() {
        return this.meetingsService.findAll();
    }

    @Get('my-meetings')
    @ApiOperation({ summary: 'Get my meetings' })
    findMyMeetings(@CurrentUser() user: any) {
        return this.meetingsService.findMyMeetings(user.id);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get meeting by ID' })
    findOne(@Param('id') id: string) {
        return this.meetingsService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update meeting' })
    update(
        @Param('id') id: string,
        @Body() updateMeetingDto: UpdateMeetingDto,
        @CurrentUser() user: any,
    ) {
        return this.meetingsService.update(id, updateMeetingDto, user.id);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete meeting' })
    remove(@Param('id') id: string, @CurrentUser() user: any) {
        return this.meetingsService.remove(id, user.id);
    }
}
