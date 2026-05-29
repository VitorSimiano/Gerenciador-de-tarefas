import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateComentarioDto {
  @IsString()
  @IsNotEmpty()
  conteudo!: string;

  @IsInt()
  tarefaId!: number;

  @IsInt()
  usuarioId!: number;
}