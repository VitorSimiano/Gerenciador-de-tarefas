import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ScoreService {
  constructor(private prisma: PrismaService) {}

  async create(createScoreDto: CreateScoreDto) {
    return await this.prisma.score.create({
      data: createScoreDto,
    });
  }

  async findAll() {
    return await this.prisma.score.findMany();
  }

  async findRanking() {
    return await this.prisma.score.groupBy({
      by: ['usuarioId'],
      _sum: { pontos: true },
      orderBy: { _sum: { pontos: 'desc' } },
    });
  }

  async findByUsuario(usuarioId: number) {
    return await this.prisma.score.findMany({
      where: { usuarioId },
    });
  }

  async findOne(id: number) {
    const score = await this.prisma.score.findUnique({
      where: { id },
    });

    if (!score) {
      throw new NotFoundException(`Score #${id} não encontrado`);
    }

    return score;
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.prisma.score.delete({
      where: { id },
    });
  }
}