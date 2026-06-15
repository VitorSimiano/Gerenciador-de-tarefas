import { AuthService } from './auth.service';
export declare class LoginDto {
    nome: string;
    senha: string;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<{
        id: number;
        nome: string;
        cargo: import("../generated/prisma/enums").CargoUsuario;
    }>;
}
