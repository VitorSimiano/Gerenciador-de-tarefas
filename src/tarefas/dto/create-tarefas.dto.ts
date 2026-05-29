import { IsString, IsDateString, IsNotEmpty, IsOptional , IsInt, IsEnum, IsDate } from 'class-validator';
import { StatusTarefa } from '@prisma/client';

export class CreateTarefaDto {
@IsString()
@IsNotEmpty()
titulo!: string;

@IsDateString()
@IsNotEmpty()
prazo!: Date;

@IsString()
@IsOptional()
descricao?: string;

@IsEnum(StatusTarefa)
@IsNotEmpty()
status!: StatusTarefa;

@IsInt()
@IsNotEmpty()
atribuidoA!: number;

@IsInt()
@IsNotEmpty()
criadoPor!: number;


}