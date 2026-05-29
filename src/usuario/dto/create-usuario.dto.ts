import { IsString, IsNotEmpty, IsEnum, IsInt } from 'class-validator';
import { CargoUsuario } from '@prisma/client';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @IsEnum(CargoUsuario)
  cargo!: CargoUsuario;
}

export class CreateColaboradorDto {
  @IsInt()
  usuarioId!: number;
}
