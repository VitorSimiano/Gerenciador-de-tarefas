export type StatusTarefa =
  | "PENDENTE"
  | "EM_ANDAMENTO"
  | "FINALIZADA";

export interface Tarefa {
  id: number;
  titulo: string;
  descricao?: string;
  prazo: string;
  status: StatusTarefa;
  criadoPor: number;
  atribuidoA: number;
  criadoEm: string;
  concluidoEm?: string;
}