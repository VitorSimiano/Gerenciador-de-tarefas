import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        nome: string;
        cargo: import("../generated/prisma/enums").CargoUsuario;
        criadoEm: Date;
        id: number;
    }>;
    findAll(): Promise<{
        nome: string;
        cargo: import("../generated/prisma/enums").CargoUsuario;
        criadoEm: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        nome: string;
        cargo: import("../generated/prisma/enums").CargoUsuario;
        criadoEm: Date;
        id: number;
    }>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        nome: string;
        cargo: import("../generated/prisma/enums").CargoUsuario;
        criadoEm: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        nome: string;
        cargo: import("../generated/prisma/enums").CargoUsuario;
        criadoEm: Date;
        id: number;
    }>;
}
