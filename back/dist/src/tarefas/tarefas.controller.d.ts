import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefas.dto';
import { UpdateTarefaDto } from './dto/update-tarefas.dto';
import { CreateColaboradorDto } from '../usuario/dto/create-usuario.dto';
export declare class TarefasController {
    private readonly tarefaService;
    constructor(tarefaService: TarefasService);
    create(createTarefaDto: CreateTarefaDto): Promise<{
        titulo: string;
        descricao: string | null;
        prazo: Date;
        status: import("../generated/prisma/enums").StatusTarefa;
        criadoEm: Date;
        concluidoEm: Date | null;
        id: number;
        criadoPor: number;
        atribuidoA: number;
    }>;
    adicionarColaborador(tarefaId: number, body: CreateColaboradorDto): Promise<{
        id: number;
        tarefaId: number;
        usuarioId: number;
    }>;
    findAll(): Promise<{
        titulo: string;
        descricao: string | null;
        prazo: Date;
        status: import("../generated/prisma/enums").StatusTarefa;
        criadoEm: Date;
        concluidoEm: Date | null;
        id: number;
        criadoPor: number;
        atribuidoA: number;
    }[]>;
    findAtrasadas(): Promise<{
        titulo: string;
        descricao: string | null;
        prazo: Date;
        status: import("../generated/prisma/enums").StatusTarefa;
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
        status: import("../generated/prisma/enums").StatusTarefa;
        criadoEm: Date;
        concluidoEm: Date | null;
        id: number;
        criadoPor: number;
        atribuidoA: number;
    }>;
    findColaboradores(tarefaId: number): Promise<{
        id: number;
        tarefaId: number;
        usuarioId: number;
    }[]>;
    concluirTarefa(id: number): Promise<{
        tarefaConcluida: {
            titulo: string;
            descricao: string | null;
            prazo: Date;
            status: import("../generated/prisma/enums").StatusTarefa;
            criadoEm: Date;
            concluidoEm: Date | null;
            id: number;
            criadoPor: number;
            atribuidoA: number;
        };
        pontos: number;
    }>;
    update(id: number, updateTarefaDto: UpdateTarefaDto): Promise<{
        titulo: string;
        descricao: string | null;
        prazo: Date;
        status: import("../generated/prisma/enums").StatusTarefa;
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
        status: import("../generated/prisma/enums").StatusTarefa;
        criadoEm: Date;
        concluidoEm: Date | null;
        id: number;
        criadoPor: number;
        atribuidoA: number;
    }>;
    removerColaborador(tarefaId: number, usuarioId: number): Promise<import("../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
