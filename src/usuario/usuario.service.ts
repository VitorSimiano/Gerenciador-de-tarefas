import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CargoUsuario } from '../generated/prisma/enums';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

 async create(createUsuarioDto: CreateUsuarioDto) {
  return await this.prisma.usuario.create({
    data: {
      nome: createUsuarioDto.nome,
      cargo: createUsuarioDto.cargo as unknown as CargoUsuario,
    },
    });
  }

  async findAll() {
    return await this.prisma.usuario.findMany();
  }

  async findOne(id: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
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