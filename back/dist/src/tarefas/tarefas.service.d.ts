import { CreateTarefaDto } from './dto/create-tarefas.dto';
import { UpdateTarefaDto } from './dto/update-tarefas.dto';
import { PrismaService } from '../prisma/prisma.service';
import { StatusTarefa } from '../generated/prisma/enums';
export declare class TarefasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTarefaDto: CreateTarefaDto): Promise<{
        titulo: string;
        descricao: string | null;
        prazo: Date;
        status: StatusTarefa;
        criadoEm: Date;
        concluidoEm: Date | null;
        id: number;
        criadoPor: number;
        atribuidoA: number;
    }>;
    findAll(): Promise<{
        titulo: string;
        descricao: string | null;
        prazo: Date;
        status: StatusTarefa;
        criadoEm: Date;
        concluidoEm: Date | null;
        id: number;
        criadoPor: number;
        atribuidoA: number;
    }[]>;
    findOne(id: number): Promise<{
        titulo: string;
        descricao: string | null;
        prazo: Date;
        status: StatusTarefa;
        criadoEm: Date;
        concluidoEm: Date | null;
        id: number;
        criadoPor: number;
        atribuidoA: number;
    }>;
    update(id: number, updateTarefaDto: UpdateTarefaDto): Promise<{
        titulo: string;
        descricao: string | null;
        prazo: Date;
        status: StatusTarefa;
        criadoEm: Date;
        concluidoEm: Date | null;
        id: number;
        criadoPor: number;
        atribuidoA: number;
    }>;
    remove(id: number): Promise<{
        titulo: string;
        descricao: string | null;
        prazo: Date;
        status: StatusTarefa;
        criadoEm: Date;
        concluidoEm: Date | null;
        id: number;
        criadoPor: number;
        atribuidoA: number;
    }>;
    concluirTarefa(id: number): Promise<{
        tarefaConcluida: {
            titulo: string;
            descricao: string | null;
            prazo: Date;
            status: StatusTarefa;
            criadoEm: Date;
            concluidoEm: Date | null;
            id: number;
            criadoPor: number;
            atribuidoA: number;
        };
        pontos: number;
    }>;
    findAtrasadas(): Promise<{
        titulo: string;
        descricao: string | null;
        prazo: Date;
        status: StatusTarefa;
        criadoEm: Date;
        concluidoEm: Date | null;
        id: number;
        criadoPor: number;
        atribuidoA: number;
    }[]>;
    adicionarColaborador(tarefaId: number, usuarioId: number): Promise<{
        id: number;
        tarefaId: number;
        usuarioId: number;
    }>;
    removerColaborador(tarefaId: number, usuarioId: number): Promise<import("../generated/prisma/internal/prismaNamespace").BatchPayload>;
    findColaboradores(tarefaId: number): Promise<{
        id: number;
        tarefaId: number;
        usuarioId: number;
    }[]>;
}
