import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefas.dto';
import { UpdateTarefaDto } from './dto/update-tarefas.dto';
import { CreateColaboradorDto } from '../usuario/dto/create-usuario.dto';
export declare class TarefasController {
    private readonly tarefaService;
    constructor(tarefaService: TarefasService);
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
    adicionarColaborador(tarefaId: number, body: CreateColaboradorDto): Promise<{
        usuarioId: number;
        id: number;
        tarefaId: number;
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
    findColaboradores(tarefaId: number): Promise<{
        usuarioId: number;
        id: number;
        tarefaId: number;
    }[]>;
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
    removerColaborador(tarefaId: number, usuarioId: number): Promise<import("../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
