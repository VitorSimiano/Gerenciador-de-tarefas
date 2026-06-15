import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const senhaHash = await bcrypt.hash(createUsuarioDto.senha, 10);
    return await this.prisma.usuario.create({
      data: {
        ...createUsuarioDto,
        senha: senhaHash,
      },
    });
  }

  async findAll() {
    return await this.prisma.usuario.findMany({
      select: { id: true, nome: true, cargo: true, criadoEm: true }
    });
  }

  async findOne(id: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
      select: { id: true, nome: true, cargo: true, criadoEm: true }
    });

    if (!usuario) {
      throw new NotFoundException(`Usuário #${id} não encontrado`);
    }

    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    await this.findOne(id);
    return await this.prisma.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.prisma.usuario.delete({
      where: { id },
    });
  }
}