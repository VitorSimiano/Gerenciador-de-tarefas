import { ScoreService } from './score.service';
import { CreateScoreDto } from './dto/create-score.dto';
export declare class ScoreController {
    private readonly scoreService;
    constructor(scoreService: ScoreService);
    create(createScoreDto: CreateScoreDto): Promise<{
        usuarioId: number;
        criadoEm: Date;
        id: number;
        pontos: number;
        tarefaId: number;
    }>;
    findAll(): Promise<{
        usuarioId: number;
        criadoEm: Date;
        id: number;
        pontos: number;
        tarefaId: number;
    }[]>;
    findRanking(): Promise<(import("../generated/prisma/internal/prismaNamespace").PickEnumerable<import("../generated/prisma/models").ScoreGroupByOutputType, "usuarioId"[]> & {
        _sum: {
            pontos: number | null;
        };
    })[]>;
    findByUsuario(usuarioId: number): Promise<{
        usuarioId: number;
        criadoEm: Date;
        id: number;
        pontos: number;
        tarefaId: number;
    }[]>;
    findOne(id: number): Promise<{
        usuarioId: number;
        criadoEm: Date;
        id: number;
        pontos: number;
        tarefaId: number;
    }>;
    remove(id: number): Promise<{
        usuarioId: number;
        criadoEm: Date;
        id: number;
        pontos: number;
        tarefaId: number;
    }>;
}
