export declare const CargoUsuario: {
    readonly Chefe: "Chefe";
    readonly funcionario: "funcionario";
};
export type CargoUsuario = (typeof CargoUsuario)[keyof typeof CargoUsuario];
export declare const StatusTarefa: {
    readonly EmAndamento: "EmAndamento";
    readonly Finalizada: "Finalizada";
    readonly Pendente: "Pendente";
};
export type StatusTarefa = (typeof StatusTarefa)[keyof typeof StatusTarefa];
