import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateScoreDto {
  @IsInt()
  @IsNotEmpty()
  usuarioId!: number;

  @IsInt()
  @IsNotEmpty()
  tarefaId!: number;

  @IsInt()
  @IsNotEmpty()
  pontos!: number;
}