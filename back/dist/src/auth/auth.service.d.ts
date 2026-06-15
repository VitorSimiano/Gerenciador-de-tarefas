import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    login(nome: string, senha: string): Promise<{
        id: number;
        nome: string;
        cargo: import("../generated/prisma/enums").CargoUsuario;
    }>;
}
