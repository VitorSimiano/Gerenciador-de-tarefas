import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CargoGuard implements CanActivate {
  constructor(private reflector: Reflector, private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const cargosPermitidos = this.reflector.get<string[]>('cargos', context.getHandler());

    if (!cargosPermitidos) return true;

    const request = context.switchToHttp().getRequest();
    const usuarioId = Number(request.headers['usuario-id']);

    if (!usuarioId) {
      throw new ForbiddenException('Header usuario-id é obrigatório.');
    }

    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
    });

    if (!usuario || !cargosPermitidos.includes(usuario.cargo)) {
      throw new ForbiddenException('Você não tem permissão para essa ação.');
    }

    return true;
  }
}