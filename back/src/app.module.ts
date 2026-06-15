import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { ScoreModule } from './score/score.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UsuarioModule, TarefasModule, ComentariosModule, ScoreModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}