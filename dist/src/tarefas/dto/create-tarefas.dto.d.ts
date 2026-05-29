import { StatusTarefa } from '../../generated/prisma/client';
export declare class CreateTarefaDto {
    titulo: string;
    prazo: Date;
    descricao?: string;
    status: StatusTarefa;
    atribuidoA: number;
    criadoPor: number;
}
