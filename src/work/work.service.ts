import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Work, WorkStatus } from './entities/work.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class WorkService {
  constructor(
    @InjectModel(Work)
    private workModel: typeof Work,
  ) {}

  async create(title: string, subtitle: string): Promise<Work> {
    return this.workModel.create({ title, subtitle });
  }

  async findAll(): Promise<Work[]> {
    return this.workModel.findAll();
  }

  async findOne(id: number): Promise<Work> {
    return this.workModel.findByPk(id);
  }

  async update(id: number, data: Partial<Work>): Promise<[number, Work[]]> {
    const [affectedCount, affectedRows] = await this.workModel.update(
      { ...data, updatedate: new Date() },
      { where: { id }, returning: true },
    );
    return [affectedCount, affectedRows];
  }

  async remove(id: number): Promise<number> {
    return this.workModel.destroy({ where: { id } });
  }

  async changeStatus(
    id: number,
    newStatus: WorkStatus,
  ): Promise<[number, Work[]]> {
    return this.update(id, { status: newStatus });
  }
}
