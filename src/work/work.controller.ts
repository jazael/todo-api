import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkService } from './work.service';
import { Work, WorkStatus } from './entities/work.entity';

@Controller('works')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post()
  create(@Body() createWorkDto: { title: string; subtitle: string }) {
    return this.workService.create(createWorkDto.title, createWorkDto.subtitle);
  }

  @Get()
  findAll() {
    return this.workService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkDto: Partial<Work>) {
    return this.workService.update(+id, updateWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workService.remove(+id);
  }

  @Patch(':id/status')
  changeStatus(@Param('id') id: string, @Body('status') status: WorkStatus) {
    return this.workService.changeStatus(+id, status);
  }
}
