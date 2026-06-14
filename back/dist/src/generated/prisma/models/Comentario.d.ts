import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ComentarioModel = runtime.Types.Result.DefaultSelection<Prisma.$ComentarioPayload>;
export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null;
    _avg: ComentarioAvgAggregateOutputType | null;
    _sum: ComentarioSumAggregateOutputType | null;
    _min: ComentarioMinAggregateOutputType | null;
    _max: ComentarioMaxAggregateOutputType | null;
};
export type ComentarioAvgAggregateOutputType = {
    id: number | null;
    tarefaId: number | null;
    usuarioId: number | null;
};
export type ComentarioSumAggregateOutputType = {
    id: number | null;
    tarefaId: number | null;
    usuarioId: number | null;
};
export type ComentarioMinAggregateOutputType = {
    id: number | null;
    conteudo: string | null;
    tarefaId: number | null;
    usuarioId: number | null;
    criadoEm: Date | null;
};
export type ComentarioMaxAggregateOutputType = {
    id: number | null;
    conteudo: string | null;
    tarefaId: number | null;
    usuarioId: number | null;
    criadoEm: Date | null;
};
export type ComentarioCountAggregateOutputType = {
    id: number;
    conteudo: number;
    tarefaId: number;
    usuarioId: number;
    criadoEm: number;
    _all: number;
};
export type ComentarioAvgAggregateInputType = {
    id?: true;
    tarefaId?: true;
    usuarioId?: true;
};
export type ComentarioSumAggregateInputType = {
    id?: true;
    tarefaId?: true;
    usuarioId?: true;
};
export type ComentarioMinAggregateInputType = {
    id?: true;
    conteudo?: true;
    tarefaId?: true;
    usuarioId?: true;
    criadoEm?: true;
};
export type ComentarioMaxAggregateInputType = {
    id?: true;
    conteudo?: true;
    tarefaId?: true;
    usuarioId?: true;
    criadoEm?: true;
};
export type ComentarioCountAggregateInputType = {
    id?: true;
    conteudo?: true;
    tarefaId?: true;
    usuarioId?: true;
    criadoEm?: true;
    _all?: true;
};
export type ComentarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComentarioWhereInput;
    orderBy?: Prisma.ComentarioOrderByWithRelationInput | Prisma.ComentarioOrderByWithRelationInput[];
    cursor?: Prisma.ComentarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ComentarioCountAggregateInputType;
    _avg?: ComentarioAvgAggregateInputType;
    _sum?: ComentarioSumAggregateInputType;
    _min?: ComentarioMinAggregateInputType;
    _max?: ComentarioMaxAggregateInputType;
};
export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
    [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComentario[P]> : Prisma.GetScalarType<T[P], AggregateComentario[P]>;
};
export type ComentarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComentarioWhereInput;
    orderBy?: Prisma.ComentarioOrderByWithAggregationInput | Prisma.ComentarioOrderByWithAggregationInput[];
    by: Prisma.ComentarioScalarFieldEnum[] | Prisma.ComentarioScalarFieldEnum;
    having?: Prisma.ComentarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ComentarioCountAggregateInputType | true;
    _avg?: ComentarioAvgAggregateInputType;
    _sum?: ComentarioSumAggregateInputType;
    _min?: ComentarioMinAggregateInputType;
    _max?: ComentarioMaxAggregateInputType;
};
export type ComentarioGroupByOutputType = {
    id: number;
    conteudo: string;
    tarefaId: number;
    usuarioId: number;
    criadoEm: Date;
    _count: ComentarioCountAggregateOutputType | null;
    _avg: ComentarioAvgAggregateOutputType | null;
    _sum: ComentarioSumAggregateOutputType | null;
    _min: ComentarioMinAggregateOutputType | null;
    _max: ComentarioMaxAggregateOutputType | null;
};
export type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ComentarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ComentarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ComentarioGroupByOutputType[P]>;
}>>;
export type ComentarioWhereInput = {
    AND?: Prisma.ComentarioWhereInput | Prisma.ComentarioWhereInput[];
    OR?: Prisma.ComentarioWhereInput[];
    NOT?: Prisma.ComentarioWhereInput | Prisma.ComentarioWhereInput[];
    id?: Prisma.IntFilter<"Comentario"> | number;
    conteudo?: Prisma.StringFilter<"Comentario"> | string;
    tarefaId?: Prisma.IntFilter<"Comentario"> | number;
    usuarioId?: Prisma.IntFilter<"Comentario"> | number;
    criadoEm?: Prisma.DateTimeFilter<"Comentario"> | Date | string;
    tarefa?: Prisma.XOR<Prisma.TarefaScalarRelationFilter, Prisma.TarefaWhereInput>;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
};
export type ComentarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    conteudo?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    tarefa?: Prisma.TarefaOrderByWithRelationInput;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
};
export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ComentarioWhereInput | Prisma.ComentarioWhereInput[];
    OR?: Prisma.ComentarioWhereInput[];
    NOT?: Prisma.ComentarioWhereInput | Prisma.ComentarioWhereInput[];
    conteudo?: Prisma.StringFilter<"Comentario"> | string;
    tarefaId?: Prisma.IntFilter<"Comentario"> | number;
    usuarioId?: Prisma.IntFilter<"Comentario"> | number;
    criadoEm?: Prisma.DateTimeFilter<"Comentario"> | Date | string;
    tarefa?: Prisma.XOR<Prisma.TarefaScalarRelationFilter, Prisma.TarefaWhereInput>;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
}, "id">;
export type ComentarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    conteudo?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    _count?: Prisma.ComentarioCountOrderByAggregateInput;
    _avg?: Prisma.ComentarioAvgOrderByAggregateInput;
    _max?: Prisma.ComentarioMaxOrderByAggregateInput;
    _min?: Prisma.ComentarioMinOrderByAggregateInput;
    _sum?: Prisma.ComentarioSumOrderByAggregateInput;
};
export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.ComentarioScalarWhereWithAggregatesInput | Prisma.ComentarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.ComentarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ComentarioScalarWhereWithAggregatesInput | Prisma.ComentarioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Comentario"> | number;
    conteudo?: Prisma.StringWithAggregatesFilter<"Comentario"> | string;
    tarefaId?: Prisma.IntWithAggregatesFilter<"Comentario"> | number;
    usuarioId?: Prisma.IntWithAggregatesFilter<"Comentario"> | number;
    criadoEm?: Prisma.DateTimeWithAggregatesFilter<"Comentario"> | Date | string;
};
export type ComentarioCreateInput = {
    conteudo: string;
    criadoEm?: Date | string;
    tarefa: Prisma.TarefaCreateNestedOneWithoutComentariosInput;
    usuario: Prisma.UsuarioCreateNestedOneWithoutComentariosInput;
};
export type ComentarioUncheckedCreateInput = {
    id?: number;
    conteudo: string;
    tarefaId: number;
    usuarioId: number;
    criadoEm?: Date | string;
};
export type ComentarioUpdateInput = {
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefa?: Prisma.TarefaUpdateOneRequiredWithoutComentariosNestedInput;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutComentariosNestedInput;
};
export type ComentarioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    tarefaId?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComentarioCreateManyInput = {
    id?: number;
    conteudo: string;
    tarefaId: number;
    usuarioId: number;
    criadoEm?: Date | string;
};
export type ComentarioUpdateManyMutationInput = {
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComentarioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    tarefaId?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComentarioListRelationFilter = {
    every?: Prisma.ComentarioWhereInput;
    some?: Prisma.ComentarioWhereInput;
    none?: Prisma.ComentarioWhereInput;
};
export type ComentarioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ComentarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    conteudo?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
};
export type ComentarioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type ComentarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    conteudo?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
};
export type ComentarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    conteudo?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
};
export type ComentarioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type ComentarioCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.ComentarioCreateWithoutUsuarioInput, Prisma.ComentarioUncheckedCreateWithoutUsuarioInput> | Prisma.ComentarioCreateWithoutUsuarioInput[] | Prisma.ComentarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.ComentarioCreateOrConnectWithoutUsuarioInput | Prisma.ComentarioCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.ComentarioCreateManyUsuarioInputEnvelope;
    connect?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
};
export type ComentarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.ComentarioCreateWithoutUsuarioInput, Prisma.ComentarioUncheckedCreateWithoutUsuarioInput> | Prisma.ComentarioCreateWithoutUsuarioInput[] | Prisma.ComentarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.ComentarioCreateOrConnectWithoutUsuarioInput | Prisma.ComentarioCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.ComentarioCreateManyUsuarioInputEnvelope;
    connect?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
};
export type ComentarioUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.ComentarioCreateWithoutUsuarioInput, Prisma.ComentarioUncheckedCreateWithoutUsuarioInput> | Prisma.ComentarioCreateWithoutUsuarioInput[] | Prisma.ComentarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.ComentarioCreateOrConnectWithoutUsuarioInput | Prisma.ComentarioCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.ComentarioUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.ComentarioUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.ComentarioCreateManyUsuarioInputEnvelope;
    set?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    disconnect?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    delete?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    connect?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    update?: Prisma.ComentarioUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.ComentarioUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.ComentarioUpdateManyWithWhereWithoutUsuarioInput | Prisma.ComentarioUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.ComentarioScalarWhereInput | Prisma.ComentarioScalarWhereInput[];
};
export type ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.ComentarioCreateWithoutUsuarioInput, Prisma.ComentarioUncheckedCreateWithoutUsuarioInput> | Prisma.ComentarioCreateWithoutUsuarioInput[] | Prisma.ComentarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.ComentarioCreateOrConnectWithoutUsuarioInput | Prisma.ComentarioCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.ComentarioUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.ComentarioUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.ComentarioCreateManyUsuarioInputEnvelope;
    set?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    disconnect?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    delete?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    connect?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    update?: Prisma.ComentarioUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.ComentarioUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.ComentarioUpdateManyWithWhereWithoutUsuarioInput | Prisma.ComentarioUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.ComentarioScalarWhereInput | Prisma.ComentarioScalarWhereInput[];
};
export type ComentarioCreateNestedManyWithoutTarefaInput = {
    create?: Prisma.XOR<Prisma.ComentarioCreateWithoutTarefaInput, Prisma.ComentarioUncheckedCreateWithoutTarefaInput> | Prisma.ComentarioCreateWithoutTarefaInput[] | Prisma.ComentarioUncheckedCreateWithoutTarefaInput[];
    connectOrCreate?: Prisma.ComentarioCreateOrConnectWithoutTarefaInput | Prisma.ComentarioCreateOrConnectWithoutTarefaInput[];
    createMany?: Prisma.ComentarioCreateManyTarefaInputEnvelope;
    connect?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
};
export type ComentarioUncheckedCreateNestedManyWithoutTarefaInput = {
    create?: Prisma.XOR<Prisma.ComentarioCreateWithoutTarefaInput, Prisma.ComentarioUncheckedCreateWithoutTarefaInput> | Prisma.ComentarioCreateWithoutTarefaInput[] | Prisma.ComentarioUncheckedCreateWithoutTarefaInput[];
    connectOrCreate?: Prisma.ComentarioCreateOrConnectWithoutTarefaInput | Prisma.ComentarioCreateOrConnectWithoutTarefaInput[];
    createMany?: Prisma.ComentarioCreateManyTarefaInputEnvelope;
    connect?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
};
export type ComentarioUpdateManyWithoutTarefaNestedInput = {
    create?: Prisma.XOR<Prisma.ComentarioCreateWithoutTarefaInput, Prisma.ComentarioUncheckedCreateWithoutTarefaInput> | Prisma.ComentarioCreateWithoutTarefaInput[] | Prisma.ComentarioUncheckedCreateWithoutTarefaInput[];
    connectOrCreate?: Prisma.ComentarioCreateOrConnectWithoutTarefaInput | Prisma.ComentarioCreateOrConnectWithoutTarefaInput[];
    upsert?: Prisma.ComentarioUpsertWithWhereUniqueWithoutTarefaInput | Prisma.ComentarioUpsertWithWhereUniqueWithoutTarefaInput[];
    createMany?: Prisma.ComentarioCreateManyTarefaInputEnvelope;
    set?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    disconnect?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    delete?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    connect?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    update?: Prisma.ComentarioUpdateWithWhereUniqueWithoutTarefaInput | Prisma.ComentarioUpdateWithWhereUniqueWithoutTarefaInput[];
    updateMany?: Prisma.ComentarioUpdateManyWithWhereWithoutTarefaInput | Prisma.ComentarioUpdateManyWithWhereWithoutTarefaInput[];
    deleteMany?: Prisma.ComentarioScalarWhereInput | Prisma.ComentarioScalarWhereInput[];
};
export type ComentarioUncheckedUpdateManyWithoutTarefaNestedInput = {
    create?: Prisma.XOR<Prisma.ComentarioCreateWithoutTarefaInput, Prisma.ComentarioUncheckedCreateWithoutTarefaInput> | Prisma.ComentarioCreateWithoutTarefaInput[] | Prisma.ComentarioUncheckedCreateWithoutTarefaInput[];
    connectOrCreate?: Prisma.ComentarioCreateOrConnectWithoutTarefaInput | Prisma.ComentarioCreateOrConnectWithoutTarefaInput[];
    upsert?: Prisma.ComentarioUpsertWithWhereUniqueWithoutTarefaInput | Prisma.ComentarioUpsertWithWhereUniqueWithoutTarefaInput[];
    createMany?: Prisma.ComentarioCreateManyTarefaInputEnvelope;
    set?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    disconnect?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    delete?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    connect?: Prisma.ComentarioWhereUniqueInput | Prisma.ComentarioWhereUniqueInput[];
    update?: Prisma.ComentarioUpdateWithWhereUniqueWithoutTarefaInput | Prisma.ComentarioUpdateWithWhereUniqueWithoutTarefaInput[];
    updateMany?: Prisma.ComentarioUpdateManyWithWhereWithoutTarefaInput | Prisma.ComentarioUpdateManyWithWhereWithoutTarefaInput[];
    deleteMany?: Prisma.ComentarioScalarWhereInput | Prisma.ComentarioScalarWhereInput[];
};
export type ComentarioCreateWithoutUsuarioInput = {
    conteudo: string;
    criadoEm?: Date | string;
    tarefa: Prisma.TarefaCreateNestedOneWithoutComentariosInput;
};
export type ComentarioUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    conteudo: string;
    tarefaId: number;
    criadoEm?: Date | string;
};
export type ComentarioCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.ComentarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComentarioCreateWithoutUsuarioInput, Prisma.ComentarioUncheckedCreateWithoutUsuarioInput>;
};
export type ComentarioCreateManyUsuarioInputEnvelope = {
    data: Prisma.ComentarioCreateManyUsuarioInput | Prisma.ComentarioCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type ComentarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.ComentarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.ComentarioUpdateWithoutUsuarioInput, Prisma.ComentarioUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.ComentarioCreateWithoutUsuarioInput, Prisma.ComentarioUncheckedCreateWithoutUsuarioInput>;
};
export type ComentarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.ComentarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.ComentarioUpdateWithoutUsuarioInput, Prisma.ComentarioUncheckedUpdateWithoutUsuarioInput>;
};
export type ComentarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.ComentarioScalarWhereInput;
    data: Prisma.XOR<Prisma.ComentarioUpdateManyMutationInput, Prisma.ComentarioUncheckedUpdateManyWithoutUsuarioInput>;
};
export type ComentarioScalarWhereInput = {
    AND?: Prisma.ComentarioScalarWhereInput | Prisma.ComentarioScalarWhereInput[];
    OR?: Prisma.ComentarioScalarWhereInput[];
    NOT?: Prisma.ComentarioScalarWhereInput | Prisma.ComentarioScalarWhereInput[];
    id?: Prisma.IntFilter<"Comentario"> | number;
    conteudo?: Prisma.StringFilter<"Comentario"> | string;
    tarefaId?: Prisma.IntFilter<"Comentario"> | number;
    usuarioId?: Prisma.IntFilter<"Comentario"> | number;
    criadoEm?: Prisma.DateTimeFilter<"Comentario"> | Date | string;
};
export type ComentarioCreateWithoutTarefaInput = {
    conteudo: string;
    criadoEm?: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutComentariosInput;
};
export type ComentarioUncheckedCreateWithoutTarefaInput = {
    id?: number;
    conteudo: string;
    usuarioId: number;
    criadoEm?: Date | string;
};
export type ComentarioCreateOrConnectWithoutTarefaInput = {
    where: Prisma.ComentarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComentarioCreateWithoutTarefaInput, Prisma.ComentarioUncheckedCreateWithoutTarefaInput>;
};
export type ComentarioCreateManyTarefaInputEnvelope = {
    data: Prisma.ComentarioCreateManyTarefaInput | Prisma.ComentarioCreateManyTarefaInput[];
    skipDuplicates?: boolean;
};
export type ComentarioUpsertWithWhereUniqueWithoutTarefaInput = {
    where: Prisma.ComentarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.ComentarioUpdateWithoutTarefaInput, Prisma.ComentarioUncheckedUpdateWithoutTarefaInput>;
    create: Prisma.XOR<Prisma.ComentarioCreateWithoutTarefaInput, Prisma.ComentarioUncheckedCreateWithoutTarefaInput>;
};
export type ComentarioUpdateWithWhereUniqueWithoutTarefaInput = {
    where: Prisma.ComentarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.ComentarioUpdateWithoutTarefaInput, Prisma.ComentarioUncheckedUpdateWithoutTarefaInput>;
};
export type ComentarioUpdateManyWithWhereWithoutTarefaInput = {
    where: Prisma.ComentarioScalarWhereInput;
    data: Prisma.XOR<Prisma.ComentarioUpdateManyMutationInput, Prisma.ComentarioUncheckedUpdateManyWithoutTarefaInput>;
};
export type ComentarioCreateManyUsuarioInput = {
    id?: number;
    conteudo: string;
    tarefaId: number;
    criadoEm?: Date | string;
};
export type ComentarioUpdateWithoutUsuarioInput = {
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarefa?: Prisma.TarefaUpdateOneRequiredWithoutComentariosNestedInput;
};
export type ComentarioUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    tarefaId?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComentarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    tarefaId?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComentarioCreateManyTarefaInput = {
    id?: number;
    conteudo: string;
    usuarioId: number;
    criadoEm?: Date | string;
};
export type ComentarioUpdateWithoutTarefaInput = {
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutComentariosNestedInput;
};
export type ComentarioUncheckedUpdateWithoutTarefaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComentarioUncheckedUpdateManyWithoutTarefaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    conteudo?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ComentarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    conteudo?: boolean;
    tarefaId?: boolean;
    usuarioId?: boolean;
    criadoEm?: boolean;
    tarefa?: boolean | Prisma.TarefaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["comentario"]>;
export type ComentarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    conteudo?: boolean;
    tarefaId?: boolean;
    usuarioId?: boolean;
    criadoEm?: boolean;
    tarefa?: boolean | Prisma.TarefaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["comentario"]>;
export type ComentarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    conteudo?: boolean;
    tarefaId?: boolean;
    usuarioId?: boolean;
    criadoEm?: boolean;
    tarefa?: boolean | Prisma.TarefaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["comentario"]>;
export type ComentarioSelectScalar = {
    id?: boolean;
    conteudo?: boolean;
    tarefaId?: boolean;
    usuarioId?: boolean;
    criadoEm?: boolean;
};
export type ComentarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "conteudo" | "tarefaId" | "usuarioId" | "criadoEm", ExtArgs["result"]["comentario"]>;
export type ComentarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tarefa?: boolean | Prisma.TarefaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type ComentarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tarefa?: boolean | Prisma.TarefaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type ComentarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tarefa?: boolean | Prisma.TarefaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $ComentarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Comentario";
    objects: {
        tarefa: Prisma.$TarefaPayload<ExtArgs>;
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        conteudo: string;
        tarefaId: number;
        usuarioId: number;
        criadoEm: Date;
    }, ExtArgs["result"]["comentario"]>;
    composites: {};
};
export type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ComentarioPayload, S>;
export type ComentarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ComentarioCountAggregateInputType | true;
};
export interface ComentarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Comentario'];
        meta: {
            name: 'Comentario';
        };
    };
    findUnique<T extends ComentarioFindUniqueArgs>(args: Prisma.SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ComentarioClient<runtime.Types.Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComentarioClient<runtime.Types.Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ComentarioFindFirstArgs>(args?: Prisma.SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__ComentarioClient<runtime.Types.Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComentarioClient<runtime.Types.Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ComentarioFindManyArgs>(args?: Prisma.SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ComentarioCreateArgs>(args: Prisma.SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma.Prisma__ComentarioClient<runtime.Types.Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ComentarioCreateManyArgs>(args?: Prisma.SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ComentarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ComentarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ComentarioDeleteArgs>(args: Prisma.SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma.Prisma__ComentarioClient<runtime.Types.Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ComentarioUpdateArgs>(args: Prisma.SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma.Prisma__ComentarioClient<runtime.Types.Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ComentarioUpdateManyArgs>(args: Prisma.SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ComentarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ComentarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ComentarioUpsertArgs>(args: Prisma.SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma.Prisma__ComentarioClient<runtime.Types.Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ComentarioCountArgs>(args?: Prisma.Subset<T, ComentarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ComentarioCountAggregateOutputType> : number>;
    aggregate<T extends ComentarioAggregateArgs>(args: Prisma.Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>;
    groupBy<T extends ComentarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ComentarioGroupByArgs['orderBy'];
    } : {
        orderBy?: ComentarioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ComentarioFieldRefs;
}
export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tarefa<T extends Prisma.TarefaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TarefaDefaultArgs<ExtArgs>>): Prisma.Prisma__TarefaClient<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ComentarioFieldRefs {
    readonly id: Prisma.FieldRef<"Comentario", 'Int'>;
    readonly conteudo: Prisma.FieldRef<"Comentario", 'String'>;
    readonly tarefaId: Prisma.FieldRef<"Comentario", 'Int'>;
    readonly usuarioId: Prisma.FieldRef<"Comentario", 'Int'>;
    readonly criadoEm: Prisma.FieldRef<"Comentario", 'DateTime'>;
}
export type ComentarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComentarioSelect<ExtArgs> | null;
    omit?: Prisma.ComentarioOmit<ExtArgs> | null;
    include?: Prisma.ComentarioInclude<ExtArgs> | null;
    where: Prisma.ComentarioWhereUniqueInput;
};
export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComentarioSelect<ExtArgs> | null;
    omit?: Prisma.ComentarioOmit<ExtArgs> | null;
    include?: Prisma.ComentarioInclude<ExtArgs> | null;
    where: Prisma.ComentarioWhereUniqueInput;
};
export type ComentarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ComentarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ComentarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ComentarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComentarioSelect<ExtArgs> | null;
    omit?: Prisma.ComentarioOmit<ExtArgs> | null;
    include?: Prisma.ComentarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComentarioCreateInput, Prisma.ComentarioUncheckedCreateInput>;
};
export type ComentarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ComentarioCreateManyInput | Prisma.ComentarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ComentarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComentarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComentarioOmit<ExtArgs> | null;
    data: Prisma.ComentarioCreateManyInput | Prisma.ComentarioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ComentarioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ComentarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComentarioSelect<ExtArgs> | null;
    omit?: Prisma.ComentarioOmit<ExtArgs> | null;
    include?: Prisma.ComentarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComentarioUpdateInput, Prisma.ComentarioUncheckedUpdateInput>;
    where: Prisma.ComentarioWhereUniqueInput;
};
export type ComentarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ComentarioUpdateManyMutationInput, Prisma.ComentarioUncheckedUpdateManyInput>;
    where?: Prisma.ComentarioWhereInput;
    limit?: number;
};
export type ComentarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComentarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComentarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComentarioUpdateManyMutationInput, Prisma.ComentarioUncheckedUpdateManyInput>;
    where?: Prisma.ComentarioWhereInput;
    limit?: number;
    include?: Prisma.ComentarioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ComentarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComentarioSelect<ExtArgs> | null;
    omit?: Prisma.ComentarioOmit<ExtArgs> | null;
    include?: Prisma.ComentarioInclude<ExtArgs> | null;
    where: Prisma.ComentarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComentarioCreateInput, Prisma.ComentarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ComentarioUpdateInput, Prisma.ComentarioUncheckedUpdateInput>;
};
export type ComentarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComentarioSelect<ExtArgs> | null;
    omit?: Prisma.ComentarioOmit<ExtArgs> | null;
    include?: Prisma.ComentarioInclude<ExtArgs> | null;
    where: Prisma.ComentarioWhereUniqueInput;
};
export type ComentarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComentarioWhereInput;
    limit?: number;
};
export type ComentarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComentarioSelect<ExtArgs> | null;
    omit?: Prisma.ComentarioOmit<ExtArgs> | null;
    include?: Prisma.ComentarioInclude<ExtArgs> | null;
};
