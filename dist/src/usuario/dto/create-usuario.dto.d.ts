import { CargoUsuario } from '@prisma/client';
export declare class CreateUsuarioDto {
    nome: string;
    cargo: CargoUsuario;
}
export declare class CreateColaboradorDto {
    usuarioId: number;
}
