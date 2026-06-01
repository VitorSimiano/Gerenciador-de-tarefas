import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CargoUsuario } from '../generated/prisma/enums';
export declare class UsuarioService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        nome: string;
        cargo: CargoUsuario;
        criadoEm: Date;
        id: number;
    }>;
    findAll(): Promise<{
        nome: string;
        cargo: CargoUsuario;
        criadoEm: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        nome: string;
        cargo: CargoUsuario;
        criadoEm: Date;
        id: number;
    }>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        nome: string;
        cargo: CargoUsuario;
        criadoEm: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        nome: string;
        cargo: CargoUsuario;
        criadoEm: Date;
        id: number;
    }>;
}
