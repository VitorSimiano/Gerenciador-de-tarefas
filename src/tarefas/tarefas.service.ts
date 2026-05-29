import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefas.dto';
import { UpdateTarefaDto } from './dto/update-tarefas.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TarefasService {
  constructor(private prisma: PrismaService) {}

  async create(createTarefaDto: CreateTarefaDto) {
    return await this.prisma.tarefa.create({
      data: createTarefaDto,
    });
  }

  async findAll() {
    return await this.prisma.tarefa.findMany();
  }

  async findOne(id: number) {
    const tarefa = await this.prisma.tarefa.findUnique({
      where: { id },
    });

    if (!tarefa) {
      throw new NotFoundException(`Tarefa #${id} não encontrada`);
    }

    return tarefa;
  }

  async update(id: number, updateTarefaDto: UpdateTarefaDto) {
    await this.findOne(id);

    return await this.prisma.tarefa.update({
      where: { id },
      data: updateTarefaDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.prisma.tarefa.delete({
      where: { id },
    });
  }
}