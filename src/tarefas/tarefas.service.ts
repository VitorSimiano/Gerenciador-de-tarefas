import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefas.dto';
import { UpdateTarefaDto } from './dto/update-tarefas.dto';
import { PrismaService } from '../prisma/prisma.service';
import { StatusTarefa } from '../generated/prisma/enums';

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

async concluirTarefa(id: number) {
  const tarefa = await this.findOne(id);

  if (tarefa.status === StatusTarefa.FINALIZADA) {
    throw new BadRequestException('Essa tarefa já foi concluída.');
  }

  const agora = new Date();
  const prazo = new Date(tarefa.prazo);
  const diasRestantes = Math.ceil((prazo.getTime() - agora.getTime()) / (1000 * 60 * 60 * 24));
  const pontos = diasRestantes > 0 ? diasRestantes * 10 : 5;

  const tarefaConcluida = await this.prisma.tarefa.update({
    where: { id },
    data: {
      status: StatusTarefa.FINALIZADA,
      concluidoEm: agora,
    },
  });

  await this.prisma.score.create({
    data: {
      usuarioId: tarefa.atribuidoA,
      tarefaId: id,
      pontos,
    },
  });

  return { tarefaConcluida, pontos };
}
async findAtrasadas() {
  return await this.prisma.tarefa.findMany({
    where: {
      prazo: { lt: new Date() },
      status: { not: StatusTarefa.FINALIZADA },
    },
  });
}
async adicionarColaborador(tarefaId: number, usuarioId: number) {
  await this.findOne(tarefaId);

  const jaExiste = await this.prisma.tarefaColaborador.findFirst({
    where: { tarefaId, usuarioId },
  });

  if (jaExiste) {
    throw new BadRequestException('Usuário já é colaborador dessa tarefa.');
  }

  return await this.prisma.tarefaColaborador.create({
    data: { tarefaId, usuarioId },
  });
}

async removerColaborador(tarefaId: number, usuarioId: number) {
  await this.findOne(tarefaId);

  return await this.prisma.tarefaColaborador.deleteMany({
    where: { tarefaId, usuarioId },
  });
}

async findColaboradores(tarefaId: number) {
  await this.findOne(tarefaId);

  return await this.prisma.tarefaColaborador.findMany({
    where: { tarefaId },
  });
}
}