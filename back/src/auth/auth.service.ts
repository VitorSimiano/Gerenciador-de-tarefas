import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(nome: string, senha: string) {
    const usuario = await this.prisma.usuario.findFirst({
  where: { nome },
  select: {
    id: true,
    nome: true,
    senha: true,
    cargo: true,
  }
});
    if (!usuario) {
      throw new UnauthorizedException('Usuário ou senha inválidos.');
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      throw new UnauthorizedException('Usuário ou senha inválidos.');
    }

    return {
      id: usuario.id,
      nome: usuario.nome,
      cargo: usuario.cargo,
    };
  }
}