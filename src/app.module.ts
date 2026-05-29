import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { ScoreModule } from './score/score.module';
import {ValidationPipe} from '@nestjs/common';

@Module({
  imports: [PrismaModule, UsuarioModule, TarefasModule, ComentariosModule, ScoreModule],
  controllers: [AppController],
  providers: [AppService, ValidationPipe],
})
export class AppModule {}
