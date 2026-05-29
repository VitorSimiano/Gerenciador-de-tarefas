import { CreateTarefaDto } from './dto/create-tarefas.dto';
import { UpdateTarefaDto } from './dto/update-tarefas.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class TarefasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTarefaDto: CreateTarefaDto): Promise<{
        criadoEm: Date;
        id: number;
        titulo: string;
        prazo: Date;
        descricao: string | null;
        status: import("../generated/prisma/enums").StatusTarefa;
        atribuidoA: number;
        criadoPor: number;
        concluidoEm: Date | null;
    }>;
    findAll(): Promise<{
        criadoEm: Date;
        id: number;
        titulo: string;
        prazo: Date;
        descricao: string | null;
        status: import("../generated/prisma/enums").StatusTarefa;
        atribuidoA: number;
        criadoPor: number;
        concluidoEm: Date | null;
    }[]>;
    findOne(id: number): Promise<{
        criadoEm: Date;
        id: number;
        titulo: string;
        prazo: Date;
        descricao: string | null;
        status: import("../generated/prisma/enums").StatusTarefa;
        atribuidoA: number;
        criadoPor: number;
        concluidoEm: Date | null;
    }>;
    update(id: number, updateTarefaDto: UpdateTarefaDto): Promise<{
        criadoEm: Date;
        id: number;
        titulo: string;
        prazo: Date;
        descricao: string | null;
        status: import("../generated/prisma/enums").StatusTarefa;
        atribuidoA: number;
        criadoPor: number;
        concluidoEm: Date | null;
    }>;
    remove(id: number): Promise<{
        criadoEm: Date;
        id: number;
        titulo: string;
        prazo: Date;
        descricao: string | null;
        status: import("../generated/prisma/enums").StatusTarefa;
        atribuidoA: number;
        criadoPor: number;
        concluidoEm: Date | null;
    }>;
    concluirTarefa(id: number): Promise<{
        tarefaConcluida: {
            criadoEm: Date;
            id: number;
            titulo: string;
            prazo: Date;
            descricao: string | null;
            status: import("../generated/prisma/enums").StatusTarefa;
            atribuidoA: number;
            criadoPor: number;
            concluidoEm: Date | null;
        };
        pontos: number;
    }>;
    findAtrasadas(): Promise<{
        criadoEm: Date;
        id: number;
        titulo: string;
        prazo: Date;
        descricao: string | null;
        status: import("../generated/prisma/enums").StatusTarefa;
        atribuidoA: number;
        criadoPor: number;
        concluidoEm: Date | null;
    }[]>;
    adicionarColaborador(tarefaId: number, usuarioId: number): Promise<{
        usuarioId: number;
        id: number;
        tarefaId: number;
    }>;
    removerColaborador(tarefaId: number, usuarioId: number): Promise<import("../generated/prisma/internal/prismaNamespace").BatchPayload>;
    findColaboradores(tarefaId: number): Promise<{
        usuarioId: number;
        id: number;
        tarefaId: number;
    }[]>;
}
