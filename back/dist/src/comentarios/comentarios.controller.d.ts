import { ComentariosService } from './comentarios.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
export declare class ComentariosController {
    private readonly comentariosService;
    constructor(comentariosService: ComentariosService);
    create(createComentarioDto: CreateComentarioDto): Promise<{
        usuarioId: number;
        criadoEm: Date;
        id: number;
        tarefaId: number;
        conteudo: string;
    }>;
    findAll(): Promise<{
        usuarioId: number;
        criadoEm: Date;
        id: number;
        tarefaId: number;
        conteudo: string;
    }[]>;
    findByTarefa(tarefaId: number): Promise<{
        usuarioId: number;
        criadoEm: Date;
        id: number;
        tarefaId: number;
        conteudo: string;
    }[]>;
    findOne(id: number): Promise<{
        usuarioId: number;
        criadoEm: Date;
        id: number;
        tarefaId: number;
        conteudo: string;
    }>;
    update(id: number, updateComentarioDto: UpdateComentarioDto): Promise<{
        usuarioId: number;
        criadoEm: Date;
        id: number;
        tarefaId: number;
        conteudo: string;
    }>;
    remove(id: number): Promise<{
        usuarioId: number;
        criadoEm: Date;
        id: number;
        tarefaId: number;
        conteudo: string;
    }>;
}
