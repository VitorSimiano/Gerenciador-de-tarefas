import { StatusTarefa } from '../../generated/prisma/enums';
export declare class CreateTarefaDto {
    titulo: string;
    prazo: Date;
    descricao?: string;
    status: StatusTarefa;
    atribuidoA: number;
    criadoPor: number;
}
