import { PartialType } from '@nestjs/mapped-types';
import { CreateTarefaDto } from './create-tarefas.dto';

export class UpdateTarefaDto extends PartialType(CreateTarefaDto) {}
