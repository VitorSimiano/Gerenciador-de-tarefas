import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsuarioModel = runtime.Types.Result.DefaultSelection<Prisma.$UsuarioPayload>;
export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type UsuarioAvgAggregateOutputType = {
    id: number | null;
};
export type UsuarioSumAggregateOutputType = {
    id: number | null;
};
export type UsuarioMinAggregateOutputType = {
    id: number | null;
    nome: string | null;
    senha: string | null;
    cargo: $Enums.CargoUsuario | null;
    criadoEm: Date | null;
};
export type UsuarioMaxAggregateOutputType = {
    id: number | null;
    nome: string | null;
    senha: string | null;
    cargo: $Enums.CargoUsuario | null;
    criadoEm: Date | null;
};
export type UsuarioCountAggregateOutputType = {
    id: number;
    nome: number;
    senha: number;
    cargo: number;
    criadoEm: number;
    _all: number;
};
export type UsuarioAvgAggregateInputType = {
    id?: true;
};
export type UsuarioSumAggregateInputType = {
    id?: true;
};
export type UsuarioMinAggregateInputType = {
    id?: true;
    nome?: true;
    senha?: true;
    cargo?: true;
    criadoEm?: true;
};
export type UsuarioMaxAggregateInputType = {
    id?: true;
    nome?: true;
    senha?: true;
    cargo?: true;
    criadoEm?: true;
};
export type UsuarioCountAggregateInputType = {
    id?: true;
    nome?: true;
    senha?: true;
    cargo?: true;
    criadoEm?: true;
    _all?: true;
};
export type UsuarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuarioCountAggregateInputType;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuario[P]> : Prisma.GetScalarType<T[P], AggregateUsuario[P]>;
};
export type UsuarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithAggregationInput | Prisma.UsuarioOrderByWithAggregationInput[];
    by: Prisma.UsuarioScalarFieldEnum[] | Prisma.UsuarioScalarFieldEnum;
    having?: Prisma.UsuarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioCountAggregateInputType | true;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type UsuarioGroupByOutputType = {
    id: number;
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm: Date;
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]>;
}>>;
export type UsuarioWhereInput = {
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    id?: Prisma.IntFilter<"Usuario"> | number;
    nome?: Prisma.StringFilter<"Usuario"> | string;
    senha?: Prisma.StringFilter<"Usuario"> | string;
    cargo?: Prisma.EnumCargoUsuarioFilter<"Usuario"> | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    tarefasCriadas?: Prisma.TarefaListRelationFilter;
    tarefasAtribuidas?: Prisma.TarefaListRelationFilter;
    comentarios?: Prisma.ComentarioListRelationFilter;
    scores?: Prisma.ScoreListRelationFilter;
    colaboracoes?: Prisma.TarefaColaboradorListRelationFilter;
};
export type UsuarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    senha?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    tarefasCriadas?: Prisma.TarefaOrderByRelationAggregateInput;
    tarefasAtribuidas?: Prisma.TarefaOrderByRelationAggregateInput;
    comentarios?: Prisma.ComentarioOrderByRelationAggregateInput;
    scores?: Prisma.ScoreOrderByRelationAggregateInput;
    colaboracoes?: Prisma.TarefaColaboradorOrderByRelationAggregateInput;
};
export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    nome?: Prisma.StringFilter<"Usuario"> | string;
    senha?: Prisma.StringFilter<"Usuario"> | string;
    cargo?: Prisma.EnumCargoUsuarioFilter<"Usuario"> | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    tarefasCriadas?: Prisma.TarefaListRelationFilter;
    tarefasAtribuidas?: Prisma.TarefaListRelationFilter;
    comentarios?: Prisma.ComentarioListRelationFilter;
    scores?: Prisma.ScoreListRelationFilter;
    colaboracoes?: Prisma.TarefaColaboradorListRelationFilter;
}, "id">;
export type UsuarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    senha?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    _count?: Prisma.UsuarioCountOrderByAggregateInput;
    _avg?: Prisma.UsuarioAvgOrderByAggregateInput;
    _max?: Prisma.UsuarioMaxOrderByAggregateInput;
    _min?: Prisma.UsuarioMinOrderByAggregateInput;
    _sum?: Prisma.UsuarioSumOrderByAggregateInput;
};
export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsuarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Usuario"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    senha?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    cargo?: Prisma.EnumCargoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeWithAggregatesFilter<"Usuario"> | Date | string;
};
export type UsuarioCreateInput = {
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm?: Date | string;
    tarefasCriadas?: Prisma.TarefaCreateNestedManyWithoutCriadorInput;
    tarefasAtribuidas?: Prisma.TarefaCreateNestedManyWithoutResponsavelInput;
    comentarios?: Prisma.ComentarioCreateNestedManyWithoutUsuarioInput;
    scores?: Prisma.ScoreCreateNestedManyWithoutUsuarioInput;
    colaboracoes?: Prisma.TarefaColaboradorCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateInput = {
    id?: number;
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm?: Date | string;
    tarefasCriadas?: Prisma.TarefaUncheckedCreateNestedManyWithoutCriadorInput;
    tarefasAtribuidas?: Prisma.TarefaUncheckedCreateNestedManyWithoutResponsavelInput;
    comentarios?: Prisma.ComentarioUncheckedCreateNestedManyWithoutUsuarioInput;
    scores?: Prisma.ScoreUncheckedCreateNestedManyWithoutUsuarioInput;
    colaboracoes?: Prisma.TarefaColaboradorUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefasCriadas?: Prisma.TarefaUpdateManyWithoutCriadorNestedInput;
    tarefasAtribuidas?: Prisma.TarefaUpdateManyWithoutResponsavelNestedInput;
    comentarios?: Prisma.ComentarioUpdateManyWithoutUsuarioNestedInput;
    scores?: Prisma.ScoreUpdateManyWithoutUsuarioNestedInput;
    colaboracoes?: Prisma.TarefaColaboradorUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefasCriadas?: Prisma.TarefaUncheckedUpdateManyWithoutCriadorNestedInput;
    tarefasAtribuidas?: Prisma.TarefaUncheckedUpdateManyWithoutResponsavelNestedInput;
    comentarios?: Prisma.ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput;
    scores?: Prisma.ScoreUncheckedUpdateManyWithoutUsuarioNestedInput;
    colaboracoes?: Prisma.TarefaColaboradorUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateManyInput = {
    id?: number;
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm?: Date | string;
};
export type UsuarioUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    senha?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
};
export type UsuarioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsuarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    senha?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
};
export type UsuarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    senha?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
};
export type UsuarioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsuarioScalarRelationFilter = {
    is?: Prisma.UsuarioWhereInput;
    isNot?: Prisma.UsuarioWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumCargoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.CargoUsuario;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UsuarioCreateNestedOneWithoutTarefasCriadasInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutTarefasCriadasInput, Prisma.UsuarioUncheckedCreateWithoutTarefasCriadasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutTarefasCriadasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioCreateNestedOneWithoutTarefasAtribuidasInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutTarefasAtribuidasInput, Prisma.UsuarioUncheckedCreateWithoutTarefasAtribuidasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutTarefasAtribuidasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutTarefasCriadasNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutTarefasCriadasInput, Prisma.UsuarioUncheckedCreateWithoutTarefasCriadasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutTarefasCriadasInput;
    upsert?: Prisma.UsuarioUpsertWithoutTarefasCriadasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutTarefasCriadasInput, Prisma.UsuarioUpdateWithoutTarefasCriadasInput>, Prisma.UsuarioUncheckedUpdateWithoutTarefasCriadasInput>;
};
export type UsuarioUpdateOneRequiredWithoutTarefasAtribuidasNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutTarefasAtribuidasInput, Prisma.UsuarioUncheckedCreateWithoutTarefasAtribuidasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutTarefasAtribuidasInput;
    upsert?: Prisma.UsuarioUpsertWithoutTarefasAtribuidasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutTarefasAtribuidasInput, Prisma.UsuarioUpdateWithoutTarefasAtribuidasInput>, Prisma.UsuarioUncheckedUpdateWithoutTarefasAtribuidasInput>;
};
export type UsuarioCreateNestedOneWithoutComentariosInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutComentariosInput, Prisma.UsuarioUncheckedCreateWithoutComentariosInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutComentariosInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutComentariosInput, Prisma.UsuarioUncheckedCreateWithoutComentariosInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutComentariosInput;
    upsert?: Prisma.UsuarioUpsertWithoutComentariosInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutComentariosInput, Prisma.UsuarioUpdateWithoutComentariosInput>, Prisma.UsuarioUncheckedUpdateWithoutComentariosInput>;
};
export type UsuarioCreateNestedOneWithoutScoresInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutScoresInput, Prisma.UsuarioUncheckedCreateWithoutScoresInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutScoresInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutScoresNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutScoresInput, Prisma.UsuarioUncheckedCreateWithoutScoresInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutScoresInput;
    upsert?: Prisma.UsuarioUpsertWithoutScoresInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutScoresInput, Prisma.UsuarioUpdateWithoutScoresInput>, Prisma.UsuarioUncheckedUpdateWithoutScoresInput>;
};
export type UsuarioCreateNestedOneWithoutColaboracoesInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutColaboracoesInput, Prisma.UsuarioUncheckedCreateWithoutColaboracoesInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutColaboracoesInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutColaboracoesNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutColaboracoesInput, Prisma.UsuarioUncheckedCreateWithoutColaboracoesInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutColaboracoesInput;
    upsert?: Prisma.UsuarioUpsertWithoutColaboracoesInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutColaboracoesInput, Prisma.UsuarioUpdateWithoutColaboracoesInput>, Prisma.UsuarioUncheckedUpdateWithoutColaboracoesInput>;
};
export type UsuarioCreateWithoutTarefasCriadasInput = {
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm?: Date | string;
    tarefasAtribuidas?: Prisma.TarefaCreateNestedManyWithoutResponsavelInput;
    comentarios?: Prisma.ComentarioCreateNestedManyWithoutUsuarioInput;
    scores?: Prisma.ScoreCreateNestedManyWithoutUsuarioInput;
    colaboracoes?: Prisma.TarefaColaboradorCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutTarefasCriadasInput = {
    id?: number;
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm?: Date | string;
    tarefasAtribuidas?: Prisma.TarefaUncheckedCreateNestedManyWithoutResponsavelInput;
    comentarios?: Prisma.ComentarioUncheckedCreateNestedManyWithoutUsuarioInput;
    scores?: Prisma.ScoreUncheckedCreateNestedManyWithoutUsuarioInput;
    colaboracoes?: Prisma.TarefaColaboradorUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutTarefasCriadasInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutTarefasCriadasInput, Prisma.UsuarioUncheckedCreateWithoutTarefasCriadasInput>;
};
export type UsuarioCreateWithoutTarefasAtribuidasInput = {
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm?: Date | string;
    tarefasCriadas?: Prisma.TarefaCreateNestedManyWithoutCriadorInput;
    comentarios?: Prisma.ComentarioCreateNestedManyWithoutUsuarioInput;
    scores?: Prisma.ScoreCreateNestedManyWithoutUsuarioInput;
    colaboracoes?: Prisma.TarefaColaboradorCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutTarefasAtribuidasInput = {
    id?: number;
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm?: Date | string;
    tarefasCriadas?: Prisma.TarefaUncheckedCreateNestedManyWithoutCriadorInput;
    comentarios?: Prisma.ComentarioUncheckedCreateNestedManyWithoutUsuarioInput;
    scores?: Prisma.ScoreUncheckedCreateNestedManyWithoutUsuarioInput;
    colaboracoes?: Prisma.TarefaColaboradorUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutTarefasAtribuidasInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutTarefasAtribuidasInput, Prisma.UsuarioUncheckedCreateWithoutTarefasAtribuidasInput>;
};
export type UsuarioUpsertWithoutTarefasCriadasInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutTarefasCriadasInput, Prisma.UsuarioUncheckedUpdateWithoutTarefasCriadasInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutTarefasCriadasInput, Prisma.UsuarioUncheckedCreateWithoutTarefasCriadasInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutTarefasCriadasInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutTarefasCriadasInput, Prisma.UsuarioUncheckedUpdateWithoutTarefasCriadasInput>;
};
export type UsuarioUpdateWithoutTarefasCriadasInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefasAtribuidas?: Prisma.TarefaUpdateManyWithoutResponsavelNestedInput;
    comentarios?: Prisma.ComentarioUpdateManyWithoutUsuarioNestedInput;
    scores?: Prisma.ScoreUpdateManyWithoutUsuarioNestedInput;
    colaboracoes?: Prisma.TarefaColaboradorUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutTarefasCriadasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefasAtribuidas?: Prisma.TarefaUncheckedUpdateManyWithoutResponsavelNestedInput;
    comentarios?: Prisma.ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput;
    scores?: Prisma.ScoreUncheckedUpdateManyWithoutUsuarioNestedInput;
    colaboracoes?: Prisma.TarefaColaboradorUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUpsertWithoutTarefasAtribuidasInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutTarefasAtribuidasInput, Prisma.UsuarioUncheckedUpdateWithoutTarefasAtribuidasInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutTarefasAtribuidasInput, Prisma.UsuarioUncheckedCreateWithoutTarefasAtribuidasInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutTarefasAtribuidasInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutTarefasAtribuidasInput, Prisma.UsuarioUncheckedUpdateWithoutTarefasAtribuidasInput>;
};
export type UsuarioUpdateWithoutTarefasAtribuidasInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefasCriadas?: Prisma.TarefaUpdateManyWithoutCriadorNestedInput;
    comentarios?: Prisma.ComentarioUpdateManyWithoutUsuarioNestedInput;
    scores?: Prisma.ScoreUpdateManyWithoutUsuarioNestedInput;
    colaboracoes?: Prisma.TarefaColaboradorUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutTarefasAtribuidasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefasCriadas?: Prisma.TarefaUncheckedUpdateManyWithoutCriadorNestedInput;
    comentarios?: Prisma.ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput;
    scores?: Prisma.ScoreUncheckedUpdateManyWithoutUsuarioNestedInput;
    colaboracoes?: Prisma.TarefaColaboradorUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutComentariosInput = {
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm?: Date | string;
    tarefasCriadas?: Prisma.TarefaCreateNestedManyWithoutCriadorInput;
    tarefasAtribuidas?: Prisma.TarefaCreateNestedManyWithoutResponsavelInput;
    scores?: Prisma.ScoreCreateNestedManyWithoutUsuarioInput;
    colaboracoes?: Prisma.TarefaColaboradorCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutComentariosInput = {
    id?: number;
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm?: Date | string;
    tarefasCriadas?: Prisma.TarefaUncheckedCreateNestedManyWithoutCriadorInput;
    tarefasAtribuidas?: Prisma.TarefaUncheckedCreateNestedManyWithoutResponsavelInput;
    scores?: Prisma.ScoreUncheckedCreateNestedManyWithoutUsuarioInput;
    colaboracoes?: Prisma.TarefaColaboradorUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutComentariosInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutComentariosInput, Prisma.UsuarioUncheckedCreateWithoutComentariosInput>;
};
export type UsuarioUpsertWithoutComentariosInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutComentariosInput, Prisma.UsuarioUncheckedUpdateWithoutComentariosInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutComentariosInput, Prisma.UsuarioUncheckedCreateWithoutComentariosInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutComentariosInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutComentariosInput, Prisma.UsuarioUncheckedUpdateWithoutComentariosInput>;
};
export type UsuarioUpdateWithoutComentariosInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefasCriadas?: Prisma.TarefaUpdateManyWithoutCriadorNestedInput;
    tarefasAtribuidas?: Prisma.TarefaUpdateManyWithoutResponsavelNestedInput;
    scores?: Prisma.ScoreUpdateManyWithoutUsuarioNestedInput;
    colaboracoes?: Prisma.TarefaColaboradorUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutComentariosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefasCriadas?: Prisma.TarefaUncheckedUpdateManyWithoutCriadorNestedInput;
    tarefasAtribuidas?: Prisma.TarefaUncheckedUpdateManyWithoutResponsavelNestedInput;
    scores?: Prisma.ScoreUncheckedUpdateManyWithoutUsuarioNestedInput;
    colaboracoes?: Prisma.TarefaColaboradorUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutScoresInput = {
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm?: Date | string;
    tarefasCriadas?: Prisma.TarefaCreateNestedManyWithoutCriadorInput;
    tarefasAtribuidas?: Prisma.TarefaCreateNestedManyWithoutResponsavelInput;
    comentarios?: Prisma.ComentarioCreateNestedManyWithoutUsuarioInput;
    colaboracoes?: Prisma.TarefaColaboradorCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutScoresInput = {
    id?: number;
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm?: Date | string;
    tarefasCriadas?: Prisma.TarefaUncheckedCreateNestedManyWithoutCriadorInput;
    tarefasAtribuidas?: Prisma.TarefaUncheckedCreateNestedManyWithoutResponsavelInput;
    comentarios?: Prisma.ComentarioUncheckedCreateNestedManyWithoutUsuarioInput;
    colaboracoes?: Prisma.TarefaColaboradorUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutScoresInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutScoresInput, Prisma.UsuarioUncheckedCreateWithoutScoresInput>;
};
export type UsuarioUpsertWithoutScoresInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutScoresInput, Prisma.UsuarioUncheckedUpdateWithoutScoresInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutScoresInput, Prisma.UsuarioUncheckedCreateWithoutScoresInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutScoresInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutScoresInput, Prisma.UsuarioUncheckedUpdateWithoutScoresInput>;
};
export type UsuarioUpdateWithoutScoresInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefasCriadas?: Prisma.TarefaUpdateManyWithoutCriadorNestedInput;
    tarefasAtribuidas?: Prisma.TarefaUpdateManyWithoutResponsavelNestedInput;
    comentarios?: Prisma.ComentarioUpdateManyWithoutUsuarioNestedInput;
    colaboracoes?: Prisma.TarefaColaboradorUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutScoresInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefasCriadas?: Prisma.TarefaUncheckedUpdateManyWithoutCriadorNestedInput;
    tarefasAtribuidas?: Prisma.TarefaUncheckedUpdateManyWithoutResponsavelNestedInput;
    comentarios?: Prisma.ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput;
    colaboracoes?: Prisma.TarefaColaboradorUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutColaboracoesInput = {
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm?: Date | string;
    tarefasCriadas?: Prisma.TarefaCreateNestedManyWithoutCriadorInput;
    tarefasAtribuidas?: Prisma.TarefaCreateNestedManyWithoutResponsavelInput;
    comentarios?: Prisma.ComentarioCreateNestedManyWithoutUsuarioInput;
    scores?: Prisma.ScoreCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutColaboracoesInput = {
    id?: number;
    nome: string;
    senha: string;
    cargo: $Enums.CargoUsuario;
    criadoEm?: Date | string;
    tarefasCriadas?: Prisma.TarefaUncheckedCreateNestedManyWithoutCriadorInput;
    tarefasAtribuidas?: Prisma.TarefaUncheckedCreateNestedManyWithoutResponsavelInput;
    comentarios?: Prisma.ComentarioUncheckedCreateNestedManyWithoutUsuarioInput;
    scores?: Prisma.ScoreUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutColaboracoesInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutColaboracoesInput, Prisma.UsuarioUncheckedCreateWithoutColaboracoesInput>;
};
export type UsuarioUpsertWithoutColaboracoesInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutColaboracoesInput, Prisma.UsuarioUncheckedUpdateWithoutColaboracoesInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutColaboracoesInput, Prisma.UsuarioUncheckedCreateWithoutColaboracoesInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutColaboracoesInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutColaboracoesInput, Prisma.UsuarioUncheckedUpdateWithoutColaboracoesInput>;
};
export type UsuarioUpdateWithoutColaboracoesInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefasCriadas?: Prisma.TarefaUpdateManyWithoutCriadorNestedInput;
    tarefasAtribuidas?: Prisma.TarefaUpdateManyWithoutResponsavelNestedInput;
    comentarios?: Prisma.ComentarioUpdateManyWithoutUsuarioNestedInput;
    scores?: Prisma.ScoreUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutColaboracoesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    senha?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefasCriadas?: Prisma.TarefaUncheckedUpdateManyWithoutCriadorNestedInput;
    tarefasAtribuidas?: Prisma.TarefaUncheckedUpdateManyWithoutResponsavelNestedInput;
    comentarios?: Prisma.ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput;
    scores?: Prisma.ScoreUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCountOutputType = {
    tarefasCriadas: number;
    tarefasAtribuidas: number;
    comentarios: number;
    scores: number;
    colaboracoes: number;
};
export type UsuarioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tarefasCriadas?: boolean | UsuarioCountOutputTypeCountTarefasCriadasArgs;
    tarefasAtribuidas?: boolean | UsuarioCountOutputTypeCountTarefasAtribuidasArgs;
    comentarios?: boolean | UsuarioCountOutputTypeCountComentariosArgs;
    scores?: boolean | UsuarioCountOutputTypeCountScoresArgs;
    colaboracoes?: boolean | UsuarioCountOutputTypeCountColaboracoesArgs;
};
export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioCountOutputTypeSelect<ExtArgs> | null;
};
export type UsuarioCountOutputTypeCountTarefasCriadasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarefaWhereInput;
};
export type UsuarioCountOutputTypeCountTarefasAtribuidasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarefaWhereInput;
};
export type UsuarioCountOutputTypeCountComentariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComentarioWhereInput;
};
export type UsuarioCountOutputTypeCountScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScoreWhereInput;
};
export type UsuarioCountOutputTypeCountColaboracoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarefaColaboradorWhereInput;
};
export type UsuarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    senha?: boolean;
    cargo?: boolean;
    criadoEm?: boolean;
    tarefasCriadas?: boolean | Prisma.Usuario$tarefasCriadasArgs<ExtArgs>;
    tarefasAtribuidas?: boolean | Prisma.Usuario$tarefasAtribuidasArgs<ExtArgs>;
    comentarios?: boolean | Prisma.Usuario$comentariosArgs<ExtArgs>;
    scores?: boolean | Prisma.Usuario$scoresArgs<ExtArgs>;
    colaboracoes?: boolean | Prisma.Usuario$colaboracoesArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    senha?: boolean;
    cargo?: boolean;
    criadoEm?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    senha?: boolean;
    cargo?: boolean;
    criadoEm?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectScalar = {
    id?: boolean;
    nome?: boolean;
    senha?: boolean;
    cargo?: boolean;
    criadoEm?: boolean;
};
export type UsuarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "senha" | "cargo" | "criadoEm", ExtArgs["result"]["usuario"]>;
export type UsuarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tarefasCriadas?: boolean | Prisma.Usuario$tarefasCriadasArgs<ExtArgs>;
    tarefasAtribuidas?: boolean | Prisma.Usuario$tarefasAtribuidasArgs<ExtArgs>;
    comentarios?: boolean | Prisma.Usuario$comentariosArgs<ExtArgs>;
    scores?: boolean | Prisma.Usuario$scoresArgs<ExtArgs>;
    colaboracoes?: boolean | Prisma.Usuario$colaboracoesArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UsuarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Usuario";
    objects: {
        tarefasCriadas: Prisma.$TarefaPayload<ExtArgs>[];
        tarefasAtribuidas: Prisma.$TarefaPayload<ExtArgs>[];
        comentarios: Prisma.$ComentarioPayload<ExtArgs>[];
        scores: Prisma.$ScorePayload<ExtArgs>[];
        colaboracoes: Prisma.$TarefaColaboradorPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nome: string;
        senha: string;
        cargo: $Enums.CargoUsuario;
        criadoEm: Date;
    }, ExtArgs["result"]["usuario"]>;
    composites: {};
};
export type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsuarioPayload, S>;
export type UsuarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioCountAggregateInputType | true;
};
export interface UsuarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Usuario'];
        meta: {
            name: 'Usuario';
        };
    };
    findUnique<T extends UsuarioFindUniqueArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsuarioFindFirstArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsuarioFindManyArgs>(args?: Prisma.SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsuarioCreateArgs>(args: Prisma.SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsuarioCreateManyArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsuarioDeleteArgs>(args: Prisma.SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsuarioUpdateArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsuarioUpdateManyArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsuarioUpsertArgs>(args: Prisma.SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsuarioCountArgs>(args?: Prisma.Subset<T, UsuarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuarioCountAggregateOutputType> : number>;
    aggregate<T extends UsuarioAggregateArgs>(args: Prisma.Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>;
    groupBy<T extends UsuarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsuarioGroupByArgs['orderBy'];
    } : {
        orderBy?: UsuarioGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsuarioFieldRefs;
}
export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tarefasCriadas<T extends Prisma.Usuario$tarefasCriadasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$tarefasCriadasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tarefasAtribuidas<T extends Prisma.Usuario$tarefasAtribuidasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$tarefasAtribuidasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comentarios<T extends Prisma.Usuario$comentariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    scores<T extends Prisma.Usuario$scoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    colaboracoes<T extends Prisma.Usuario$colaboracoesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$colaboracoesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsuarioFieldRefs {
    readonly id: Prisma.FieldRef<"Usuario", 'Int'>;
    readonly nome: Prisma.FieldRef<"Usuario", 'String'>;
    readonly senha: Prisma.FieldRef<"Usuario", 'String'>;
    readonly cargo: Prisma.FieldRef<"Usuario", 'CargoUsuario'>;
    readonly criadoEm: Prisma.FieldRef<"Usuario", 'DateTime'>;
}
export type UsuarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
};
export type UsuarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
};
export type UsuarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type Usuario$tarefasCriadasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaSelect<ExtArgs> | null;
    omit?: Prisma.TarefaOmit<ExtArgs> | null;
    include?: Prisma.TarefaInclude<ExtArgs> | null;
    where?: Prisma.TarefaWhereInput;
    orderBy?: Prisma.TarefaOrderByWithRelationInput | Prisma.TarefaOrderByWithRelationInput[];
    cursor?: Prisma.TarefaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TarefaScalarFieldEnum | Prisma.TarefaScalarFieldEnum[];
};
export type Usuario$tarefasAtribuidasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaSelect<ExtArgs> | null;
    omit?: Prisma.TarefaOmit<ExtArgs> | null;
    include?: Prisma.TarefaInclude<ExtArgs> | null;
    where?: Prisma.TarefaWhereInput;
    orderBy?: Prisma.TarefaOrderByWithRelationInput | Prisma.TarefaOrderByWithRelationInput[];
    cursor?: Prisma.TarefaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TarefaScalarFieldEnum | Prisma.TarefaScalarFieldEnum[];
};
export type Usuario$comentariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComentarioSelect<ExtArgs> | null;
    omit?: Prisma.ComentarioOmit<ExtArgs> | null;
    include?: Prisma.ComentarioInclude<ExtArgs> | null;
    where?: Prisma.ComentarioWhereInput;
    orderBy?: Prisma.ComentarioOrderByWithRelationInput | Prisma.ComentarioOrderByWithRelationInput[];
    cursor?: Prisma.ComentarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComentarioScalarFieldEnum | Prisma.ComentarioScalarFieldEnum[];
};
export type Usuario$scoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScoreSelect<ExtArgs> | null;
    omit?: Prisma.ScoreOmit<ExtArgs> | null;
    include?: Prisma.ScoreInclude<ExtArgs> | null;
    where?: Prisma.ScoreWhereInput;
    orderBy?: Prisma.ScoreOrderByWithRelationInput | Prisma.ScoreOrderByWithRelationInput[];
    cursor?: Prisma.ScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScoreScalarFieldEnum | Prisma.ScoreScalarFieldEnum[];
};
export type Usuario$colaboracoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.TarefaColaboradorOmit<ExtArgs> | null;
    include?: Prisma.TarefaColaboradorInclude<ExtArgs> | null;
    where?: Prisma.TarefaColaboradorWhereInput;
    orderBy?: Prisma.TarefaColaboradorOrderByWithRelationInput | Prisma.TarefaColaboradorOrderByWithRelationInput[];
    cursor?: Prisma.TarefaColaboradorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TarefaColaboradorScalarFieldEnum | Prisma.TarefaColaboradorScalarFieldEnum[];
};
export type UsuarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
};
