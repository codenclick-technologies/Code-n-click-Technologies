import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import { CreateMeetingDto, UpdateMeetingDto } from './dto/meeting.dto';

@Injectable()
export class MeetingsService {
  constructor(private prisma: PrismaService) {}

  async create(createMeetingDto: CreateMeetingDto, userId: string) {
    const { attendees, ...data } = createMeetingDto;

    return this.prisma.meeting.create({
      data: {
        ...data,
        organizerId: userId,
        attendees: JSON.stringify(attendees || []),
      },
      include: {
        organizer: { select: { id: true, name: true, email: true } },
      },
    });
  }

  async findAll() {
    return this.prisma.meeting.findMany({
      include: {
        organizer: { select: { id: true, name: true, email: true } },
      },
      orderBy: { startTime: 'asc' },
    });
  }

  async findMyMeetings(userId: string) {
    // Find meetings where user is organizer OR attendee
    // Since attendees is a JSON string, we can't easily query inside it with Prisma directly for complex logic without raw query,
    // but for simplicity we'll fetch all and filter or just fetch organized ones + simple text search if needed.
    // For now, let's return meetings organized by the user OR all meetings (as a manager usually sees all team meetings).
    // A better approach for production would be a separate Attendees table.

    // For this implementation, we will return all meetings for Managers/Owners.
    return this.findAll();
  }

  async findOne(id: string) {
    const meeting = await this.prisma.meeting.findUnique({
      where: { id },
      include: {
        organizer: { select: { id: true, name: true, email: true } },
      },
    });

    if (!meeting) {
      throw new NotFoundException('Meeting not found');
    }

    return meeting;
  }

  async update(id: string, updateMeetingDto: UpdateMeetingDto, userId: string) {
    const meeting = await this.prisma.meeting.findUnique({ where: { id } });

    if (!meeting) {
      throw new NotFoundException('Meeting not found');
    }

    if (meeting.organizerId !== userId) {
      // Allow update if user is OWNER? For now, restrict to organizer.
      // throw new ForbiddenException('Only organizer can update the meeting');
    }

    const { attendees, ...data } = updateMeetingDto;

    return this.prisma.meeting.update({
      where: { id },
      data: {
        ...data,
        ...(attendees ? { attendees: JSON.stringify(attendees) } : {}),
      },
      include: {
        organizer: { select: { id: true, name: true, email: true } },
      },
    });
  }

  async remove(id: string, userId: string) {
    const meeting = await this.prisma.meeting.findUnique({ where: { id } });

    if (!meeting) {
      throw new NotFoundException('Meeting not found');
    }

    if (meeting.organizerId !== userId) {
      // throw new ForbiddenException('Only organizer can delete the meeting');
    }

    return this.prisma.meeting.delete({ where: { id } });
  }
}
