import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Usuario: "Usuario";
    readonly Tarefa: "Tarefa";
    readonly Comentario: "Comentario";
    readonly Score: "Score";
    readonly TarefaColaborador: "TarefaColaborador";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly senha: "senha";
    readonly cargo: "cargo";
    readonly criadoEm: "criadoEm";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const TarefaScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly descricao: "descricao";
    readonly prazo: "prazo";
    readonly status: "status";
    readonly criadoPor: "criadoPor";
    readonly atribuidoA: "atribuidoA";
    readonly criadoEm: "criadoEm";
    readonly concluidoEm: "concluidoEm";
};
export type TarefaScalarFieldEnum = (typeof TarefaScalarFieldEnum)[keyof typeof TarefaScalarFieldEnum];
export declare const ComentarioScalarFieldEnum: {
    readonly id: "id";
    readonly conteudo: "conteudo";
    readonly tarefaId: "tarefaId";
    readonly usuarioId: "usuarioId";
    readonly criadoEm: "criadoEm";
};
export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum];
export declare const ScoreScalarFieldEnum: {
    readonly id: "id";
    readonly usuarioId: "usuarioId";
    readonly tarefaId: "tarefaId";
    readonly pontos: "pontos";
    readonly criadoEm: "criadoEm";
};
export type ScoreScalarFieldEnum = (typeof ScoreScalarFieldEnum)[keyof typeof ScoreScalarFieldEnum];
export declare const TarefaColaboradorScalarFieldEnum: {
    readonly id: "id";
    readonly tarefaId: "tarefaId";
    readonly usuarioId: "usuarioId";
};
export type TarefaColaboradorScalarFieldEnum = (typeof TarefaColaboradorScalarFieldEnum)[keyof typeof TarefaColaboradorScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
