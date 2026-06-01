export declare const CargoUsuario: {
    readonly CHEFE: "CHEFE";
    readonly FUNCIONARIO: "FUNCIONARIO";
};
export type CargoUsuario = (typeof CargoUsuario)[keyof typeof CargoUsuario];
export declare const StatusTarefa: {
    readonly PENDENTE: "PENDENTE";
    readonly EM_ANDAMENTO: "EM_ANDAMENTO";
    readonly FINALIZADA: "FINALIZADA";
};
export type StatusTarefa = (typeof StatusTarefa)[keyof typeof StatusTarefa];
