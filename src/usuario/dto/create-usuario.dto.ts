import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { CargoUsuario } from '@prisma/client';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @IsEnum(CargoUsuario)
  cargo!: CargoUsuario;
}