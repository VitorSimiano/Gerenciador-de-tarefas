import { CreateScoreDto } from './dto/create-score.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class ScoreService {
    private prisma;
    constructor(prisma: PrismaService);
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
