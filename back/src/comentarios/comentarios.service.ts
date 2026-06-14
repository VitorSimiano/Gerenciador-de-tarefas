import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ComentariosService {
  constructor(private prisma: PrismaService) {}

  async create(createComentarioDto: CreateComentarioDto) {
    return await this.prisma.comentario.create({
      data: createComentarioDto,
    });
  }

  async findAll() {
    return await this.prisma.comentario.findMany();
  }

  async findByTarefa(tarefaId: number) {
    return await this.prisma.comentario.findMany({
      where: { tarefaId },
    });
  }

  async findOne(id: number) {
    const comentario = await this.prisma.comentario.findUnique({
      where: { id },
    });

    if (!comentario) {
      throw new NotFoundException(`Comentário #${id} não encontrado`);
    }

    return comentario;
  }

  async update(id: number, updateComentarioDto: UpdateComentarioDto) {
    await this.findOne(id);

    return await this.prisma.comentario.update({
      where: { id },
      data: updateComentarioDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.prisma.comentario.delete({
      where: { id },
    });
  }
}