import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TarefaColaboradorModel = runtime.Types.Result.DefaultSelection<Prisma.$TarefaColaboradorPayload>;
export type AggregateTarefaColaborador = {
    _count: TarefaColaboradorCountAggregateOutputType | null;
    _avg: TarefaColaboradorAvgAggregateOutputType | null;
    _sum: TarefaColaboradorSumAggregateOutputType | null;
    _min: TarefaColaboradorMinAggregateOutputType | null;
    _max: TarefaColaboradorMaxAggregateOutputType | null;
};
export type TarefaColaboradorAvgAggregateOutputType = {
    id: number | null;
    tarefaId: number | null;
    usuarioId: number | null;
};
export type TarefaColaboradorSumAggregateOutputType = {
    id: number | null;
    tarefaId: number | null;
    usuarioId: number | null;
};
export type TarefaColaboradorMinAggregateOutputType = {
    id: number | null;
    tarefaId: number | null;
    usuarioId: number | null;
};
export type TarefaColaboradorMaxAggregateOutputType = {
    id: number | null;
    tarefaId: number | null;
    usuarioId: number | null;
};
export type TarefaColaboradorCountAggregateOutputType = {
    id: number;
    tarefaId: number;
    usuarioId: number;
    _all: number;
};
export type TarefaColaboradorAvgAggregateInputType = {
    id?: true;
    tarefaId?: true;
    usuarioId?: true;
};
export type TarefaColaboradorSumAggregateInputType = {
    id?: true;
    tarefaId?: true;
    usuarioId?: true;
};
export type TarefaColaboradorMinAggregateInputType = {
    id?: true;
    tarefaId?: true;
    usuarioId?: true;
};
export type TarefaColaboradorMaxAggregateInputType = {
    id?: true;
    tarefaId?: true;
    usuarioId?: true;
};
export type TarefaColaboradorCountAggregateInputType = {
    id?: true;
    tarefaId?: true;
    usuarioId?: true;
    _all?: true;
};
export type TarefaColaboradorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarefaColaboradorWhereInput;
    orderBy?: Prisma.TarefaColaboradorOrderByWithRelationInput | Prisma.TarefaColaboradorOrderByWithRelationInput[];
    cursor?: Prisma.TarefaColaboradorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TarefaColaboradorCountAggregateInputType;
    _avg?: TarefaColaboradorAvgAggregateInputType;
    _sum?: TarefaColaboradorSumAggregateInputType;
    _min?: TarefaColaboradorMinAggregateInputType;
    _max?: TarefaColaboradorMaxAggregateInputType;
};
export type GetTarefaColaboradorAggregateType<T extends TarefaColaboradorAggregateArgs> = {
    [P in keyof T & keyof AggregateTarefaColaborador]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTarefaColaborador[P]> : Prisma.GetScalarType<T[P], AggregateTarefaColaborador[P]>;
};
export type TarefaColaboradorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarefaColaboradorWhereInput;
    orderBy?: Prisma.TarefaColaboradorOrderByWithAggregationInput | Prisma.TarefaColaboradorOrderByWithAggregationInput[];
    by: Prisma.TarefaColaboradorScalarFieldEnum[] | Prisma.TarefaColaboradorScalarFieldEnum;
    having?: Prisma.TarefaColaboradorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TarefaColaboradorCountAggregateInputType | true;
    _avg?: TarefaColaboradorAvgAggregateInputType;
    _sum?: TarefaColaboradorSumAggregateInputType;
    _min?: TarefaColaboradorMinAggregateInputType;
    _max?: TarefaColaboradorMaxAggregateInputType;
};
export type TarefaColaboradorGroupByOutputType = {
    id: number;
    tarefaId: number;
    usuarioId: number;
    _count: TarefaColaboradorCountAggregateOutputType | null;
    _avg: TarefaColaboradorAvgAggregateOutputType | null;
    _sum: TarefaColaboradorSumAggregateOutputType | null;
    _min: TarefaColaboradorMinAggregateOutputType | null;
    _max: TarefaColaboradorMaxAggregateOutputType | null;
};
export type GetTarefaColaboradorGroupByPayload<T extends TarefaColaboradorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TarefaColaboradorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TarefaColaboradorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TarefaColaboradorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TarefaColaboradorGroupByOutputType[P]>;
}>>;
export type TarefaColaboradorWhereInput = {
    AND?: Prisma.TarefaColaboradorWhereInput | Prisma.TarefaColaboradorWhereInput[];
    OR?: Prisma.TarefaColaboradorWhereInput[];
    NOT?: Prisma.TarefaColaboradorWhereInput | Prisma.TarefaColaboradorWhereInput[];
    id?: Prisma.IntFilter<"TarefaColaborador"> | number;
    tarefaId?: Prisma.IntFilter<"TarefaColaborador"> | number;
    usuarioId?: Prisma.IntFilter<"TarefaColaborador"> | number;
    tarefa?: Prisma.XOR<Prisma.TarefaScalarRelationFilter, Prisma.TarefaWhereInput>;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
};
export type TarefaColaboradorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    tarefa?: Prisma.TarefaOrderByWithRelationInput;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
};
export type TarefaColaboradorWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TarefaColaboradorWhereInput | Prisma.TarefaColaboradorWhereInput[];
    OR?: Prisma.TarefaColaboradorWhereInput[];
    NOT?: Prisma.TarefaColaboradorWhereInput | Prisma.TarefaColaboradorWhereInput[];
    tarefaId?: Prisma.IntFilter<"TarefaColaborador"> | number;
    usuarioId?: Prisma.IntFilter<"TarefaColaborador"> | number;
    tarefa?: Prisma.XOR<Prisma.TarefaScalarRelationFilter, Prisma.TarefaWhereInput>;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
}, "id">;
export type TarefaColaboradorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    _count?: Prisma.TarefaColaboradorCountOrderByAggregateInput;
    _avg?: Prisma.TarefaColaboradorAvgOrderByAggregateInput;
    _max?: Prisma.TarefaColaboradorMaxOrderByAggregateInput;
    _min?: Prisma.TarefaColaboradorMinOrderByAggregateInput;
    _sum?: Prisma.TarefaColaboradorSumOrderByAggregateInput;
};
export type TarefaColaboradorScalarWhereWithAggregatesInput = {
    AND?: Prisma.TarefaColaboradorScalarWhereWithAggregatesInput | Prisma.TarefaColaboradorScalarWhereWithAggregatesInput[];
    OR?: Prisma.TarefaColaboradorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TarefaColaboradorScalarWhereWithAggregatesInput | Prisma.TarefaColaboradorScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TarefaColaborador"> | number;
    tarefaId?: Prisma.IntWithAggregatesFilter<"TarefaColaborador"> | number;
    usuarioId?: Prisma.IntWithAggregatesFilter<"TarefaColaborador"> | number;
};
export type TarefaColaboradorCreateInput = {
    tarefa: Prisma.TarefaCreateNestedOneWithoutColaboradoresInput;
    usuario: Prisma.UsuarioCreateNestedOneWithoutColaboracoesInput;
};
export type TarefaColaboradorUncheckedCreateInput = {
    id?: number;
    tarefaId: number;
    usuarioId: number;
};
export type TarefaColaboradorUpdateInput = {
    tarefa?: Prisma.TarefaUpdateOneRequiredWithoutColaboradoresNestedInput;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutColaboracoesNestedInput;
};
export type TarefaColaboradorUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tarefaId?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TarefaColaboradorCreateManyInput = {
    id?: number;
    tarefaId: number;
    usuarioId: number;
};
export type TarefaColaboradorUpdateManyMutationInput = {};
export type TarefaColaboradorUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tarefaId?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TarefaColaboradorListRelationFilter = {
    every?: Prisma.TarefaColaboradorWhereInput;
    some?: Prisma.TarefaColaboradorWhereInput;
    none?: Prisma.TarefaColaboradorWhereInput;
};
export type TarefaColaboradorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TarefaColaboradorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type TarefaColaboradorAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type TarefaColaboradorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type TarefaColaboradorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type TarefaColaboradorSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tarefaId?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type TarefaColaboradorCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.TarefaColaboradorCreateWithoutUsuarioInput, Prisma.TarefaColaboradorUncheckedCreateWithoutUsuarioInput> | Prisma.TarefaColaboradorCreateWithoutUsuarioInput[] | Prisma.TarefaColaboradorUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.TarefaColaboradorCreateOrConnectWithoutUsuarioInput | Prisma.TarefaColaboradorCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.TarefaColaboradorCreateManyUsuarioInputEnvelope;
    connect?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
};
export type TarefaColaboradorUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.TarefaColaboradorCreateWithoutUsuarioInput, Prisma.TarefaColaboradorUncheckedCreateWithoutUsuarioInput> | Prisma.TarefaColaboradorCreateWithoutUsuarioInput[] | Prisma.TarefaColaboradorUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.TarefaColaboradorCreateOrConnectWithoutUsuarioInput | Prisma.TarefaColaboradorCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.TarefaColaboradorCreateManyUsuarioInputEnvelope;
    connect?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
};
export type TarefaColaboradorUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.TarefaColaboradorCreateWithoutUsuarioInput, Prisma.TarefaColaboradorUncheckedCreateWithoutUsuarioInput> | Prisma.TarefaColaboradorCreateWithoutUsuarioInput[] | Prisma.TarefaColaboradorUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.TarefaColaboradorCreateOrConnectWithoutUsuarioInput | Prisma.TarefaColaboradorCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.TarefaColaboradorUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.TarefaColaboradorUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.TarefaColaboradorCreateManyUsuarioInputEnvelope;
    set?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    disconnect?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    delete?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    connect?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    update?: Prisma.TarefaColaboradorUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.TarefaColaboradorUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.TarefaColaboradorUpdateManyWithWhereWithoutUsuarioInput | Prisma.TarefaColaboradorUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.TarefaColaboradorScalarWhereInput | Prisma.TarefaColaboradorScalarWhereInput[];
};
export type TarefaColaboradorUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.TarefaColaboradorCreateWithoutUsuarioInput, Prisma.TarefaColaboradorUncheckedCreateWithoutUsuarioInput> | Prisma.TarefaColaboradorCreateWithoutUsuarioInput[] | Prisma.TarefaColaboradorUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.TarefaColaboradorCreateOrConnectWithoutUsuarioInput | Prisma.TarefaColaboradorCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.TarefaColaboradorUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.TarefaColaboradorUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.TarefaColaboradorCreateManyUsuarioInputEnvelope;
    set?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    disconnect?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    delete?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    connect?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    update?: Prisma.TarefaColaboradorUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.TarefaColaboradorUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.TarefaColaboradorUpdateManyWithWhereWithoutUsuarioInput | Prisma.TarefaColaboradorUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.TarefaColaboradorScalarWhereInput | Prisma.TarefaColaboradorScalarWhereInput[];
};
export type TarefaColaboradorCreateNestedManyWithoutTarefaInput = {
    create?: Prisma.XOR<Prisma.TarefaColaboradorCreateWithoutTarefaInput, Prisma.TarefaColaboradorUncheckedCreateWithoutTarefaInput> | Prisma.TarefaColaboradorCreateWithoutTarefaInput[] | Prisma.TarefaColaboradorUncheckedCreateWithoutTarefaInput[];
    connectOrCreate?: Prisma.TarefaColaboradorCreateOrConnectWithoutTarefaInput | Prisma.TarefaColaboradorCreateOrConnectWithoutTarefaInput[];
    createMany?: Prisma.TarefaColaboradorCreateManyTarefaInputEnvelope;
    connect?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
};
export type TarefaColaboradorUncheckedCreateNestedManyWithoutTarefaInput = {
    create?: Prisma.XOR<Prisma.TarefaColaboradorCreateWithoutTarefaInput, Prisma.TarefaColaboradorUncheckedCreateWithoutTarefaInput> | Prisma.TarefaColaboradorCreateWithoutTarefaInput[] | Prisma.TarefaColaboradorUncheckedCreateWithoutTarefaInput[];
    connectOrCreate?: Prisma.TarefaColaboradorCreateOrConnectWithoutTarefaInput | Prisma.TarefaColaboradorCreateOrConnectWithoutTarefaInput[];
    createMany?: Prisma.TarefaColaboradorCreateManyTarefaInputEnvelope;
    connect?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
};
export type TarefaColaboradorUpdateManyWithoutTarefaNestedInput = {
    create?: Prisma.XOR<Prisma.TarefaColaboradorCreateWithoutTarefaInput, Prisma.TarefaColaboradorUncheckedCreateWithoutTarefaInput> | Prisma.TarefaColaboradorCreateWithoutTarefaInput[] | Prisma.TarefaColaboradorUncheckedCreateWithoutTarefaInput[];
    connectOrCreate?: Prisma.TarefaColaboradorCreateOrConnectWithoutTarefaInput | Prisma.TarefaColaboradorCreateOrConnectWithoutTarefaInput[];
    upsert?: Prisma.TarefaColaboradorUpsertWithWhereUniqueWithoutTarefaInput | Prisma.TarefaColaboradorUpsertWithWhereUniqueWithoutTarefaInput[];
    createMany?: Prisma.TarefaColaboradorCreateManyTarefaInputEnvelope;
    set?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    disconnect?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    delete?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    connect?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    update?: Prisma.TarefaColaboradorUpdateWithWhereUniqueWithoutTarefaInput | Prisma.TarefaColaboradorUpdateWithWhereUniqueWithoutTarefaInput[];
    updateMany?: Prisma.TarefaColaboradorUpdateManyWithWhereWithoutTarefaInput | Prisma.TarefaColaboradorUpdateManyWithWhereWithoutTarefaInput[];
    deleteMany?: Prisma.TarefaColaboradorScalarWhereInput | Prisma.TarefaColaboradorScalarWhereInput[];
};
export type TarefaColaboradorUncheckedUpdateManyWithoutTarefaNestedInput = {
    create?: Prisma.XOR<Prisma.TarefaColaboradorCreateWithoutTarefaInput, Prisma.TarefaColaboradorUncheckedCreateWithoutTarefaInput> | Prisma.TarefaColaboradorCreateWithoutTarefaInput[] | Prisma.TarefaColaboradorUncheckedCreateWithoutTarefaInput[];
    connectOrCreate?: Prisma.TarefaColaboradorCreateOrConnectWithoutTarefaInput | Prisma.TarefaColaboradorCreateOrConnectWithoutTarefaInput[];
    upsert?: Prisma.TarefaColaboradorUpsertWithWhereUniqueWithoutTarefaInput | Prisma.TarefaColaboradorUpsertWithWhereUniqueWithoutTarefaInput[];
    createMany?: Prisma.TarefaColaboradorCreateManyTarefaInputEnvelope;
    set?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    disconnect?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    delete?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    connect?: Prisma.TarefaColaboradorWhereUniqueInput | Prisma.TarefaColaboradorWhereUniqueInput[];
    update?: Prisma.TarefaColaboradorUpdateWithWhereUniqueWithoutTarefaInput | Prisma.TarefaColaboradorUpdateWithWhereUniqueWithoutTarefaInput[];
    updateMany?: Prisma.TarefaColaboradorUpdateManyWithWhereWithoutTarefaInput | Prisma.TarefaColaboradorUpdateManyWithWhereWithoutTarefaInput[];
    deleteMany?: Prisma.TarefaColaboradorScalarWhereInput | Prisma.TarefaColaboradorScalarWhereInput[];
};
export type TarefaColaboradorCreateWithoutUsuarioInput = {
    tarefa: Prisma.TarefaCreateNestedOneWithoutColaboradoresInput;
};
export type TarefaColaboradorUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    tarefaId: number;
};
export type TarefaColaboradorCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.TarefaColaboradorWhereUniqueInput;
    create: Prisma.XOR<Prisma.TarefaColaboradorCreateWithoutUsuarioInput, Prisma.TarefaColaboradorUncheckedCreateWithoutUsuarioInput>;
};
export type TarefaColaboradorCreateManyUsuarioInputEnvelope = {
    data: Prisma.TarefaColaboradorCreateManyUsuarioInput | Prisma.TarefaColaboradorCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type TarefaColaboradorUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.TarefaColaboradorWhereUniqueInput;
    update: Prisma.XOR<Prisma.TarefaColaboradorUpdateWithoutUsuarioInput, Prisma.TarefaColaboradorUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.TarefaColaboradorCreateWithoutUsuarioInput, Prisma.TarefaColaboradorUncheckedCreateWithoutUsuarioInput>;
};
export type TarefaColaboradorUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.TarefaColaboradorWhereUniqueInput;
    data: Prisma.XOR<Prisma.TarefaColaboradorUpdateWithoutUsuarioInput, Prisma.TarefaColaboradorUncheckedUpdateWithoutUsuarioInput>;
};
export type TarefaColaboradorUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.TarefaColaboradorScalarWhereInput;
    data: Prisma.XOR<Prisma.TarefaColaboradorUpdateManyMutationInput, Prisma.TarefaColaboradorUncheckedUpdateManyWithoutUsuarioInput>;
};
export type TarefaColaboradorScalarWhereInput = {
    AND?: Prisma.TarefaColaboradorScalarWhereInput | Prisma.TarefaColaboradorScalarWhereInput[];
    OR?: Prisma.TarefaColaboradorScalarWhereInput[];
    NOT?: Prisma.TarefaColaboradorScalarWhereInput | Prisma.TarefaColaboradorScalarWhereInput[];
    id?: Prisma.IntFilter<"TarefaColaborador"> | number;
    tarefaId?: Prisma.IntFilter<"TarefaColaborador"> | number;
    usuarioId?: Prisma.IntFilter<"TarefaColaborador"> | number;
};
export type TarefaColaboradorCreateWithoutTarefaInput = {
    usuario: Prisma.UsuarioCreateNestedOneWithoutColaboracoesInput;
};
export type TarefaColaboradorUncheckedCreateWithoutTarefaInput = {
    id?: number;
    usuarioId: number;
};
export type TarefaColaboradorCreateOrConnectWithoutTarefaInput = {
    where: Prisma.TarefaColaboradorWhereUniqueInput;
    create: Prisma.XOR<Prisma.TarefaColaboradorCreateWithoutTarefaInput, Prisma.TarefaColaboradorUncheckedCreateWithoutTarefaInput>;
};
export type TarefaColaboradorCreateManyTarefaInputEnvelope = {
    data: Prisma.TarefaColaboradorCreateManyTarefaInput | Prisma.TarefaColaboradorCreateManyTarefaInput[];
    skipDuplicates?: boolean;
};
export type TarefaColaboradorUpsertWithWhereUniqueWithoutTarefaInput = {
    where: Prisma.TarefaColaboradorWhereUniqueInput;
    update: Prisma.XOR<Prisma.TarefaColaboradorUpdateWithoutTarefaInput, Prisma.TarefaColaboradorUncheckedUpdateWithoutTarefaInput>;
    create: Prisma.XOR<Prisma.TarefaColaboradorCreateWithoutTarefaInput, Prisma.TarefaColaboradorUncheckedCreateWithoutTarefaInput>;
};
export type TarefaColaboradorUpdateWithWhereUniqueWithoutTarefaInput = {
    where: Prisma.TarefaColaboradorWhereUniqueInput;
    data: Prisma.XOR<Prisma.TarefaColaboradorUpdateWithoutTarefaInput, Prisma.TarefaColaboradorUncheckedUpdateWithoutTarefaInput>;
};
export type TarefaColaboradorUpdateManyWithWhereWithoutTarefaInput = {
    where: Prisma.TarefaColaboradorScalarWhereInput;
    data: Prisma.XOR<Prisma.TarefaColaboradorUpdateManyMutationInput, Prisma.TarefaColaboradorUncheckedUpdateManyWithoutTarefaInput>;
};
export type TarefaColaboradorCreateManyUsuarioInput = {
    id?: number;
    tarefaId: number;
};
export type TarefaColaboradorUpdateWithoutUsuarioInput = {
    tarefa?: Prisma.TarefaUpdateOneRequiredWithoutColaboradoresNestedInput;
};
export type TarefaColaboradorUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tarefaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TarefaColaboradorUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tarefaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TarefaColaboradorCreateManyTarefaInput = {
    id?: number;
    usuarioId: number;
};
export type TarefaColaboradorUpdateWithoutTarefaInput = {
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutColaboracoesNestedInput;
};
export type TarefaColaboradorUncheckedUpdateWithoutTarefaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TarefaColaboradorUncheckedUpdateManyWithoutTarefaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TarefaColaboradorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tarefaId?: boolean;
    usuarioId?: boolean;
    tarefa?: boolean | Prisma.TarefaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tarefaColaborador"]>;
export type TarefaColaboradorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tarefaId?: boolean;
    usuarioId?: boolean;
    tarefa?: boolean | Prisma.TarefaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tarefaColaborador"]>;
export type TarefaColaboradorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tarefaId?: boolean;
    usuarioId?: boolean;
    tarefa?: boolean | Prisma.TarefaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tarefaColaborador"]>;
export type TarefaColaboradorSelectScalar = {
    id?: boolean;
    tarefaId?: boolean;
    usuarioId?: boolean;
};
export type TarefaColaboradorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tarefaId" | "usuarioId", ExtArgs["result"]["tarefaColaborador"]>;
export type TarefaColaboradorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tarefa?: boolean | Prisma.TarefaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type TarefaColaboradorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tarefa?: boolean | Prisma.TarefaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type TarefaColaboradorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tarefa?: boolean | Prisma.TarefaDefaultArgs<ExtArgs>;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $TarefaColaboradorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TarefaColaborador";
    objects: {
        tarefa: Prisma.$TarefaPayload<ExtArgs>;
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        tarefaId: number;
        usuarioId: number;
    }, ExtArgs["result"]["tarefaColaborador"]>;
    composites: {};
};
export type TarefaColaboradorGetPayload<S extends boolean | null | undefined | TarefaColaboradorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload, S>;
export type TarefaColaboradorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TarefaColaboradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TarefaColaboradorCountAggregateInputType | true;
};
export interface TarefaColaboradorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TarefaColaborador'];
        meta: {
            name: 'TarefaColaborador';
        };
    };
    findUnique<T extends TarefaColaboradorFindUniqueArgs>(args: Prisma.SelectSubset<T, TarefaColaboradorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TarefaColaboradorClient<runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TarefaColaboradorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TarefaColaboradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TarefaColaboradorClient<runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TarefaColaboradorFindFirstArgs>(args?: Prisma.SelectSubset<T, TarefaColaboradorFindFirstArgs<ExtArgs>>): Prisma.Prisma__TarefaColaboradorClient<runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TarefaColaboradorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TarefaColaboradorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TarefaColaboradorClient<runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TarefaColaboradorFindManyArgs>(args?: Prisma.SelectSubset<T, TarefaColaboradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TarefaColaboradorCreateArgs>(args: Prisma.SelectSubset<T, TarefaColaboradorCreateArgs<ExtArgs>>): Prisma.Prisma__TarefaColaboradorClient<runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TarefaColaboradorCreateManyArgs>(args?: Prisma.SelectSubset<T, TarefaColaboradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TarefaColaboradorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TarefaColaboradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TarefaColaboradorDeleteArgs>(args: Prisma.SelectSubset<T, TarefaColaboradorDeleteArgs<ExtArgs>>): Prisma.Prisma__TarefaColaboradorClient<runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TarefaColaboradorUpdateArgs>(args: Prisma.SelectSubset<T, TarefaColaboradorUpdateArgs<ExtArgs>>): Prisma.Prisma__TarefaColaboradorClient<runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TarefaColaboradorDeleteManyArgs>(args?: Prisma.SelectSubset<T, TarefaColaboradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TarefaColaboradorUpdateManyArgs>(args: Prisma.SelectSubset<T, TarefaColaboradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TarefaColaboradorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TarefaColaboradorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TarefaColaboradorUpsertArgs>(args: Prisma.SelectSubset<T, TarefaColaboradorUpsertArgs<ExtArgs>>): Prisma.Prisma__TarefaColaboradorClient<runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TarefaColaboradorCountArgs>(args?: Prisma.Subset<T, TarefaColaboradorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TarefaColaboradorCountAggregateOutputType> : number>;
    aggregate<T extends TarefaColaboradorAggregateArgs>(args: Prisma.Subset<T, TarefaColaboradorAggregateArgs>): Prisma.PrismaPromise<GetTarefaColaboradorAggregateType<T>>;
    groupBy<T extends TarefaColaboradorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TarefaColaboradorGroupByArgs['orderBy'];
    } : {
        orderBy?: TarefaColaboradorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TarefaColaboradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarefaColaboradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TarefaColaboradorFieldRefs;
}
export interface Prisma__TarefaColaboradorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tarefa<T extends Prisma.TarefaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TarefaDefaultArgs<ExtArgs>>): Prisma.Prisma__TarefaClient<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TarefaColaboradorFieldRefs {
    readonly id: Prisma.FieldRef<"TarefaColaborador", 'Int'>;
    readonly tarefaId: Prisma.FieldRef<"TarefaColaborador", 'Int'>;
    readonly usuarioId: Prisma.FieldRef<"TarefaColaborador", 'Int'>;
}
export type TarefaColaboradorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.TarefaColaboradorOmit<ExtArgs> | null;
    include?: Prisma.TarefaColaboradorInclude<ExtArgs> | null;
    where: Prisma.TarefaColaboradorWhereUniqueInput;
};
export type TarefaColaboradorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.TarefaColaboradorOmit<ExtArgs> | null;
    include?: Prisma.TarefaColaboradorInclude<ExtArgs> | null;
    where: Prisma.TarefaColaboradorWhereUniqueInput;
};
export type TarefaColaboradorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TarefaColaboradorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TarefaColaboradorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TarefaColaboradorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.TarefaColaboradorOmit<ExtArgs> | null;
    include?: Prisma.TarefaColaboradorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TarefaColaboradorCreateInput, Prisma.TarefaColaboradorUncheckedCreateInput>;
};
export type TarefaColaboradorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TarefaColaboradorCreateManyInput | Prisma.TarefaColaboradorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TarefaColaboradorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaColaboradorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TarefaColaboradorOmit<ExtArgs> | null;
    data: Prisma.TarefaColaboradorCreateManyInput | Prisma.TarefaColaboradorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TarefaColaboradorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TarefaColaboradorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.TarefaColaboradorOmit<ExtArgs> | null;
    include?: Prisma.TarefaColaboradorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TarefaColaboradorUpdateInput, Prisma.TarefaColaboradorUncheckedUpdateInput>;
    where: Prisma.TarefaColaboradorWhereUniqueInput;
};
export type TarefaColaboradorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TarefaColaboradorUpdateManyMutationInput, Prisma.TarefaColaboradorUncheckedUpdateManyInput>;
    where?: Prisma.TarefaColaboradorWhereInput;
    limit?: number;
};
export type TarefaColaboradorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaColaboradorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TarefaColaboradorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TarefaColaboradorUpdateManyMutationInput, Prisma.TarefaColaboradorUncheckedUpdateManyInput>;
    where?: Prisma.TarefaColaboradorWhereInput;
    limit?: number;
    include?: Prisma.TarefaColaboradorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TarefaColaboradorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.TarefaColaboradorOmit<ExtArgs> | null;
    include?: Prisma.TarefaColaboradorInclude<ExtArgs> | null;
    where: Prisma.TarefaColaboradorWhereUniqueInput;
    create: Prisma.XOR<Prisma.TarefaColaboradorCreateInput, Prisma.TarefaColaboradorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TarefaColaboradorUpdateInput, Prisma.TarefaColaboradorUncheckedUpdateInput>;
};
export type TarefaColaboradorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.TarefaColaboradorOmit<ExtArgs> | null;
    include?: Prisma.TarefaColaboradorInclude<ExtArgs> | null;
    where: Prisma.TarefaColaboradorWhereUniqueInput;
};
export type TarefaColaboradorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarefaColaboradorWhereInput;
    limit?: number;
};
export type TarefaColaboradorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaColaboradorSelect<ExtArgs> | null;
    omit?: Prisma.TarefaColaboradorOmit<ExtArgs> | null;
    include?: Prisma.TarefaColaboradorInclude<ExtArgs> | null;
};
