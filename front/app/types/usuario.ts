export type CargoUsuario = "CHEFE" | "FUNCIONARIO";

export interface Usuario {
  id: number;
  nome: string;
  cargo: CargoUsuario;
  criadoEm: string;
}

export interface CreateUsuarioDto {
  nome: string;
  cargo: CargoUsuario;
}