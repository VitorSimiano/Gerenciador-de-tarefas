import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TarefaModel = runtime.Types.Result.DefaultSelection<Prisma.$TarefaPayload>;
export type AggregateTarefa = {
    _count: TarefaCountAggregateOutputType | null;
    _avg: TarefaAvgAggregateOutputType | null;
    _sum: TarefaSumAggregateOutputType | null;
    _min: TarefaMinAggregateOutputType | null;
    _max: TarefaMaxAggregateOutputType | null;
};
export type TarefaAvgAggregateOutputType = {
    id: number | null;
    criadoPor: number | null;
    atribuidoA: number | null;
};
export type TarefaSumAggregateOutputType = {
    id: number | null;
    criadoPor: number | null;
    atribuidoA: number | null;
};
export type TarefaMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    descricao: string | null;
    prazo: Date | null;
    status: $Enums.StatusTarefa | null;
    criadoPor: number | null;
    atribuidoA: number | null;
    criadoEm: Date | null;
    concluidoEm: Date | null;
};
export type TarefaMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    descricao: string | null;
    prazo: Date | null;
    status: $Enums.StatusTarefa | null;
    criadoPor: number | null;
    atribuidoA: number | null;
    criadoEm: Date | null;
    concluidoEm: Date | null;
};
export type TarefaCountAggregateOutputType = {
    id: number;
    titulo: number;
    descricao: number;
    prazo: number;
    status: number;
    criadoPor: number;
    atribuidoA: number;
    criadoEm: number;
    concluidoEm: number;
    _all: number;
};
export type TarefaAvgAggregateInputType = {
    id?: true;
    criadoPor?: true;
    atribuidoA?: true;
};
export type TarefaSumAggregateInputType = {
    id?: true;
    criadoPor?: true;
    atribuidoA?: true;
};
export type TarefaMinAggregateInputType = {
    id?: true;
    titulo?: true;
    descricao?: true;
    prazo?: true;
    status?: true;
    criadoPor?: true;
    atribuidoA?: true;
    criadoEm?: true;
    concluidoEm?: true;
};
export type TarefaMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    descricao?: true;
    prazo?: true;
    status?: true;
    criadoPor?: true;
    atribuidoA?: true;
    criadoEm?: true;
    concluidoEm?: true;
};
export type TarefaCountAggregateInputType = {
    id?: true;
    titulo?: true;
    descricao?: true;
    prazo?: true;
    status?: true;
    criadoPor?: true;
    atribuidoA?: true;
    criadoEm?: true;
    concluidoEm?: true;
    _all?: true;
};
export type TarefaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarefaWhereInput;
    orderBy?: Prisma.TarefaOrderByWithRelationInput | Prisma.TarefaOrderByWithRelationInput[];
    cursor?: Prisma.TarefaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TarefaCountAggregateInputType;
    _avg?: TarefaAvgAggregateInputType;
    _sum?: TarefaSumAggregateInputType;
    _min?: TarefaMinAggregateInputType;
    _max?: TarefaMaxAggregateInputType;
};
export type GetTarefaAggregateType<T extends TarefaAggregateArgs> = {
    [P in keyof T & keyof AggregateTarefa]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTarefa[P]> : Prisma.GetScalarType<T[P], AggregateTarefa[P]>;
};
export type TarefaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarefaWhereInput;
    orderBy?: Prisma.TarefaOrderByWithAggregationInput | Prisma.TarefaOrderByWithAggregationInput[];
    by: Prisma.TarefaScalarFieldEnum[] | Prisma.TarefaScalarFieldEnum;
    having?: Prisma.TarefaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TarefaCountAggregateInputType | true;
    _avg?: TarefaAvgAggregateInputType;
    _sum?: TarefaSumAggregateInputType;
    _min?: TarefaMinAggregateInputType;
    _max?: TarefaMaxAggregateInputType;
};
export type TarefaGroupByOutputType = {
    id: number;
    titulo: string;
    descricao: string | null;
    prazo: Date;
    status: $Enums.StatusTarefa;
    criadoPor: number;
    atribuidoA: number;
    criadoEm: Date;
    concluidoEm: Date | null;
    _count: TarefaCountAggregateOutputType | null;
    _avg: TarefaAvgAggregateOutputType | null;
    _sum: TarefaSumAggregateOutputType | null;
    _min: TarefaMinAggregateOutputType | null;
    _max: TarefaMaxAggregateOutputType | null;
};
export type GetTarefaGroupByPayload<T extends TarefaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TarefaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TarefaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TarefaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TarefaGroupByOutputType[P]>;
}>>;
export type TarefaWhereInput = {
    AND?: Prisma.TarefaWhereInput | Prisma.TarefaWhereInput[];
    OR?: Prisma.TarefaWhereInput[];
    NOT?: Prisma.TarefaWhereInput | Prisma.TarefaWhereInput[];
    id?: Prisma.IntFilter<"Tarefa"> | number;
    titulo?: Prisma.StringFilter<"Tarefa"> | string;
    descricao?: Prisma.StringNullableFilter<"Tarefa"> | string | null;
    prazo?: Prisma.DateTimeFilter<"Tarefa"> | Date | string;
    status?: Prisma.EnumStatusTarefaFilter<"Tarefa"> | $Enums.StatusTarefa;
    criadoPor?: Prisma.IntFilter<"Tarefa"> | number;
    atribuidoA?: Prisma.IntFilter<"Tarefa"> | number;
    criadoEm?: Prisma.DateTimeFilter<"Tarefa"> | Date | string;
    concluidoEm?: Prisma.DateTimeNullableFilter<"Tarefa"> | Date | string | null;
    criador?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    responsavel?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    comentarios?: Prisma.ComentarioListRelationFilter;
    scores?: Prisma.ScoreListRelationFilter;
    colaboradores?: Prisma.TarefaColaboradorListRelationFilter;
};
export type TarefaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descricao?: Prisma.SortOrderInput | Prisma.SortOrder;
    prazo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    criadoPor?: Prisma.SortOrder;
    atribuidoA?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    concluidoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    criador?: Prisma.UsuarioOrderByWithRelationInput;
    responsavel?: Prisma.UsuarioOrderByWithRelationInput;
    comentarios?: Prisma.ComentarioOrderByRelationAggregateInput;
    scores?: Prisma.ScoreOrderByRelationAggregateInput;
    colaboradores?: Prisma.TarefaColaboradorOrderByRelationAggregateInput;
};
export type TarefaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TarefaWhereInput | Prisma.TarefaWhereInput[];
    OR?: Prisma.TarefaWhereInput[];
    NOT?: Prisma.TarefaWhereInput | Prisma.TarefaWhereInput[];
    titulo?: Prisma.StringFilter<"Tarefa"> | string;
    descricao?: Prisma.StringNullableFilter<"Tarefa"> | string | null;
    prazo?: Prisma.DateTimeFilter<"Tarefa"> | Date | string;
    status?: Prisma.EnumStatusTarefaFilter<"Tarefa"> | $Enums.StatusTarefa;
    criadoPor?: Prisma.IntFilter<"Tarefa"> | number;
    atribuidoA?: Prisma.IntFilter<"Tarefa"> | number;
    criadoEm?: Prisma.DateTimeFilter<"Tarefa"> | Date | string;
    concluidoEm?: Prisma.DateTimeNullableFilter<"Tarefa"> | Date | string | null;
    criador?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    responsavel?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    comentarios?: Prisma.ComentarioListRelationFilter;
    scores?: Prisma.ScoreListRelationFilter;
    colaboradores?: Prisma.TarefaColaboradorListRelationFilter;
}, "id">;
export type TarefaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descricao?: Prisma.SortOrderInput | Prisma.SortOrder;
    prazo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    criadoPor?: Prisma.SortOrder;
    atribuidoA?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    concluidoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TarefaCountOrderByAggregateInput;
    _avg?: Prisma.TarefaAvgOrderByAggregateInput;
    _max?: Prisma.TarefaMaxOrderByAggregateInput;
    _min?: Prisma.TarefaMinOrderByAggregateInput;
    _sum?: Prisma.TarefaSumOrderByAggregateInput;
};
export type TarefaScalarWhereWithAggregatesInput = {
    AND?: Prisma.TarefaScalarWhereWithAggregatesInput | Prisma.TarefaScalarWhereWithAggregatesInput[];
    OR?: Prisma.TarefaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TarefaScalarWhereWithAggregatesInput | Prisma.TarefaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Tarefa"> | number;
    titulo?: Prisma.StringWithAggregatesFilter<"Tarefa"> | string;
    descricao?: Prisma.StringNullableWithAggregatesFilter<"Tarefa"> | string | null;
    prazo?: Prisma.DateTimeWithAggregatesFilter<"Tarefa"> | Date | string;
    status?: Prisma.EnumStatusTarefaWithAggregatesFilter<"Tarefa"> | $Enums.StatusTarefa;
    criadoPor?: Prisma.IntWithAggregatesFilter<"Tarefa"> | number;
    atribuidoA?: Prisma.IntWithAggregatesFilter<"Tarefa"> | number;
    criadoEm?: Prisma.DateTimeWithAggregatesFilter<"Tarefa"> | Date | string;
    concluidoEm?: Prisma.DateTimeNullableWithAggregatesFilter<"Tarefa"> | Date | string | null;
};
export type TarefaCreateInput = {
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
    criador: Prisma.UsuarioCreateNestedOneWithoutTarefasCriadasInput;
    responsavel: Prisma.UsuarioCreateNestedOneWithoutTarefasAtribuidasInput;
    comentarios?: Prisma.ComentarioCreateNestedManyWithoutTarefaInput;
    scores?: Prisma.ScoreCreateNestedManyWithoutTarefaInput;
    colaboradores?: Prisma.TarefaColaboradorCreateNestedManyWithoutTarefaInput;
};
export type TarefaUncheckedCreateInput = {
    id?: number;
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    criadoPor: number;
    atribuidoA: number;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
    comentarios?: Prisma.ComentarioUncheckedCreateNestedManyWithoutTarefaInput;
    scores?: Prisma.ScoreUncheckedCreateNestedManyWithoutTarefaInput;
    colaboradores?: Prisma.TarefaColaboradorUncheckedCreateNestedManyWithoutTarefaInput;
};
export type TarefaUpdateInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    criador?: Prisma.UsuarioUpdateOneRequiredWithoutTarefasCriadasNestedInput;
    responsavel?: Prisma.UsuarioUpdateOneRequiredWithoutTarefasAtribuidasNestedInput;
    comentarios?: Prisma.ComentarioUpdateManyWithoutTarefaNestedInput;
    scores?: Prisma.ScoreUpdateManyWithoutTarefaNestedInput;
    colaboradores?: Prisma.TarefaColaboradorUpdateManyWithoutTarefaNestedInput;
};
export type TarefaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoPor?: Prisma.IntFieldUpdateOperationsInput | number;
    atribuidoA?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    comentarios?: Prisma.ComentarioUncheckedUpdateManyWithoutTarefaNestedInput;
    scores?: Prisma.ScoreUncheckedUpdateManyWithoutTarefaNestedInput;
    colaboradores?: Prisma.TarefaColaboradorUncheckedUpdateManyWithoutTarefaNestedInput;
};
export type TarefaCreateManyInput = {
    id?: number;
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    criadoPor: number;
    atribuidoA: number;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
};
export type TarefaUpdateManyMutationInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TarefaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoPor?: Prisma.IntFieldUpdateOperationsInput | number;
    atribuidoA?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TarefaListRelationFilter = {
    every?: Prisma.TarefaWhereInput;
    some?: Prisma.TarefaWhereInput;
    none?: Prisma.TarefaWhereInput;
};
export type TarefaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TarefaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    prazo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    criadoPor?: Prisma.SortOrder;
    atribuidoA?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    concluidoEm?: Prisma.SortOrder;
};
export type TarefaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    criadoPor?: Prisma.SortOrder;
    atribuidoA?: Prisma.SortOrder;
};
export type TarefaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    prazo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    criadoPor?: Prisma.SortOrder;
    atribuidoA?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    concluidoEm?: Prisma.SortOrder;
};
export type TarefaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    prazo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    criadoPor?: Prisma.SortOrder;
    atribuidoA?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    concluidoEm?: Prisma.SortOrder;
};
export type TarefaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    criadoPor?: Prisma.SortOrder;
    atribuidoA?: Prisma.SortOrder;
};
export type TarefaScalarRelationFilter = {
    is?: Prisma.TarefaWhereInput;
    isNot?: Prisma.TarefaWhereInput;
};
export type TarefaCreateNestedManyWithoutCriadorInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutCriadorInput, Prisma.TarefaUncheckedCreateWithoutCriadorInput> | Prisma.TarefaCreateWithoutCriadorInput[] | Prisma.TarefaUncheckedCreateWithoutCriadorInput[];
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutCriadorInput | Prisma.TarefaCreateOrConnectWithoutCriadorInput[];
    createMany?: Prisma.TarefaCreateManyCriadorInputEnvelope;
    connect?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
};
export type TarefaCreateNestedManyWithoutResponsavelInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutResponsavelInput, Prisma.TarefaUncheckedCreateWithoutResponsavelInput> | Prisma.TarefaCreateWithoutResponsavelInput[] | Prisma.TarefaUncheckedCreateWithoutResponsavelInput[];
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutResponsavelInput | Prisma.TarefaCreateOrConnectWithoutResponsavelInput[];
    createMany?: Prisma.TarefaCreateManyResponsavelInputEnvelope;
    connect?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
};
export type TarefaUncheckedCreateNestedManyWithoutCriadorInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutCriadorInput, Prisma.TarefaUncheckedCreateWithoutCriadorInput> | Prisma.TarefaCreateWithoutCriadorInput[] | Prisma.TarefaUncheckedCreateWithoutCriadorInput[];
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutCriadorInput | Prisma.TarefaCreateOrConnectWithoutCriadorInput[];
    createMany?: Prisma.TarefaCreateManyCriadorInputEnvelope;
    connect?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
};
export type TarefaUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutResponsavelInput, Prisma.TarefaUncheckedCreateWithoutResponsavelInput> | Prisma.TarefaCreateWithoutResponsavelInput[] | Prisma.TarefaUncheckedCreateWithoutResponsavelInput[];
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutResponsavelInput | Prisma.TarefaCreateOrConnectWithoutResponsavelInput[];
    createMany?: Prisma.TarefaCreateManyResponsavelInputEnvelope;
    connect?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
};
export type TarefaUpdateManyWithoutCriadorNestedInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutCriadorInput, Prisma.TarefaUncheckedCreateWithoutCriadorInput> | Prisma.TarefaCreateWithoutCriadorInput[] | Prisma.TarefaUncheckedCreateWithoutCriadorInput[];
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutCriadorInput | Prisma.TarefaCreateOrConnectWithoutCriadorInput[];
    upsert?: Prisma.TarefaUpsertWithWhereUniqueWithoutCriadorInput | Prisma.TarefaUpsertWithWhereUniqueWithoutCriadorInput[];
    createMany?: Prisma.TarefaCreateManyCriadorInputEnvelope;
    set?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    disconnect?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    delete?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    connect?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    update?: Prisma.TarefaUpdateWithWhereUniqueWithoutCriadorInput | Prisma.TarefaUpdateWithWhereUniqueWithoutCriadorInput[];
    updateMany?: Prisma.TarefaUpdateManyWithWhereWithoutCriadorInput | Prisma.TarefaUpdateManyWithWhereWithoutCriadorInput[];
    deleteMany?: Prisma.TarefaScalarWhereInput | Prisma.TarefaScalarWhereInput[];
};
export type TarefaUpdateManyWithoutResponsavelNestedInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutResponsavelInput, Prisma.TarefaUncheckedCreateWithoutResponsavelInput> | Prisma.TarefaCreateWithoutResponsavelInput[] | Prisma.TarefaUncheckedCreateWithoutResponsavelInput[];
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutResponsavelInput | Prisma.TarefaCreateOrConnectWithoutResponsavelInput[];
    upsert?: Prisma.TarefaUpsertWithWhereUniqueWithoutResponsavelInput | Prisma.TarefaUpsertWithWhereUniqueWithoutResponsavelInput[];
    createMany?: Prisma.TarefaCreateManyResponsavelInputEnvelope;
    set?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    disconnect?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    delete?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    connect?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    update?: Prisma.TarefaUpdateWithWhereUniqueWithoutResponsavelInput | Prisma.TarefaUpdateWithWhereUniqueWithoutResponsavelInput[];
    updateMany?: Prisma.TarefaUpdateManyWithWhereWithoutResponsavelInput | Prisma.TarefaUpdateManyWithWhereWithoutResponsavelInput[];
    deleteMany?: Prisma.TarefaScalarWhereInput | Prisma.TarefaScalarWhereInput[];
};
export type TarefaUncheckedUpdateManyWithoutCriadorNestedInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutCriadorInput, Prisma.TarefaUncheckedCreateWithoutCriadorInput> | Prisma.TarefaCreateWithoutCriadorInput[] | Prisma.TarefaUncheckedCreateWithoutCriadorInput[];
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutCriadorInput | Prisma.TarefaCreateOrConnectWithoutCriadorInput[];
    upsert?: Prisma.TarefaUpsertWithWhereUniqueWithoutCriadorInput | Prisma.TarefaUpsertWithWhereUniqueWithoutCriadorInput[];
    createMany?: Prisma.TarefaCreateManyCriadorInputEnvelope;
    set?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    disconnect?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    delete?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    connect?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    update?: Prisma.TarefaUpdateWithWhereUniqueWithoutCriadorInput | Prisma.TarefaUpdateWithWhereUniqueWithoutCriadorInput[];
    updateMany?: Prisma.TarefaUpdateManyWithWhereWithoutCriadorInput | Prisma.TarefaUpdateManyWithWhereWithoutCriadorInput[];
    deleteMany?: Prisma.TarefaScalarWhereInput | Prisma.TarefaScalarWhereInput[];
};
export type TarefaUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutResponsavelInput, Prisma.TarefaUncheckedCreateWithoutResponsavelInput> | Prisma.TarefaCreateWithoutResponsavelInput[] | Prisma.TarefaUncheckedCreateWithoutResponsavelInput[];
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutResponsavelInput | Prisma.TarefaCreateOrConnectWithoutResponsavelInput[];
    upsert?: Prisma.TarefaUpsertWithWhereUniqueWithoutResponsavelInput | Prisma.TarefaUpsertWithWhereUniqueWithoutResponsavelInput[];
    createMany?: Prisma.TarefaCreateManyResponsavelInputEnvelope;
    set?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    disconnect?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    delete?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    connect?: Prisma.TarefaWhereUniqueInput | Prisma.TarefaWhereUniqueInput[];
    update?: Prisma.TarefaUpdateWithWhereUniqueWithoutResponsavelInput | Prisma.TarefaUpdateWithWhereUniqueWithoutResponsavelInput[];
    updateMany?: Prisma.TarefaUpdateManyWithWhereWithoutResponsavelInput | Prisma.TarefaUpdateManyWithWhereWithoutResponsavelInput[];
    deleteMany?: Prisma.TarefaScalarWhereInput | Prisma.TarefaScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumStatusTarefaFieldUpdateOperationsInput = {
    set?: $Enums.StatusTarefa;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type TarefaCreateNestedOneWithoutComentariosInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutComentariosInput, Prisma.TarefaUncheckedCreateWithoutComentariosInput>;
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutComentariosInput;
    connect?: Prisma.TarefaWhereUniqueInput;
};
export type TarefaUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutComentariosInput, Prisma.TarefaUncheckedCreateWithoutComentariosInput>;
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutComentariosInput;
    upsert?: Prisma.TarefaUpsertWithoutComentariosInput;
    connect?: Prisma.TarefaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TarefaUpdateToOneWithWhereWithoutComentariosInput, Prisma.TarefaUpdateWithoutComentariosInput>, Prisma.TarefaUncheckedUpdateWithoutComentariosInput>;
};
export type TarefaCreateNestedOneWithoutScoresInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutScoresInput, Prisma.TarefaUncheckedCreateWithoutScoresInput>;
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutScoresInput;
    connect?: Prisma.TarefaWhereUniqueInput;
};
export type TarefaUpdateOneRequiredWithoutScoresNestedInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutScoresInput, Prisma.TarefaUncheckedCreateWithoutScoresInput>;
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutScoresInput;
    upsert?: Prisma.TarefaUpsertWithoutScoresInput;
    connect?: Prisma.TarefaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TarefaUpdateToOneWithWhereWithoutScoresInput, Prisma.TarefaUpdateWithoutScoresInput>, Prisma.TarefaUncheckedUpdateWithoutScoresInput>;
};
export type TarefaCreateNestedOneWithoutColaboradoresInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutColaboradoresInput, Prisma.TarefaUncheckedCreateWithoutColaboradoresInput>;
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutColaboradoresInput;
    connect?: Prisma.TarefaWhereUniqueInput;
};
export type TarefaUpdateOneRequiredWithoutColaboradoresNestedInput = {
    create?: Prisma.XOR<Prisma.TarefaCreateWithoutColaboradoresInput, Prisma.TarefaUncheckedCreateWithoutColaboradoresInput>;
    connectOrCreate?: Prisma.TarefaCreateOrConnectWithoutColaboradoresInput;
    upsert?: Prisma.TarefaUpsertWithoutColaboradoresInput;
    connect?: Prisma.TarefaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TarefaUpdateToOneWithWhereWithoutColaboradoresInput, Prisma.TarefaUpdateWithoutColaboradoresInput>, Prisma.TarefaUncheckedUpdateWithoutColaboradoresInput>;
};
export type TarefaCreateWithoutCriadorInput = {
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
    responsavel: Prisma.UsuarioCreateNestedOneWithoutTarefasAtribuidasInput;
    comentarios?: Prisma.ComentarioCreateNestedManyWithoutTarefaInput;
    scores?: Prisma.ScoreCreateNestedManyWithoutTarefaInput;
    colaboradores?: Prisma.TarefaColaboradorCreateNestedManyWithoutTarefaInput;
};
export type TarefaUncheckedCreateWithoutCriadorInput = {
    id?: number;
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    atribuidoA: number;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
    comentarios?: Prisma.ComentarioUncheckedCreateNestedManyWithoutTarefaInput;
    scores?: Prisma.ScoreUncheckedCreateNestedManyWithoutTarefaInput;
    colaboradores?: Prisma.TarefaColaboradorUncheckedCreateNestedManyWithoutTarefaInput;
};
export type TarefaCreateOrConnectWithoutCriadorInput = {
    where: Prisma.TarefaWhereUniqueInput;
    create: Prisma.XOR<Prisma.TarefaCreateWithoutCriadorInput, Prisma.TarefaUncheckedCreateWithoutCriadorInput>;
};
export type TarefaCreateManyCriadorInputEnvelope = {
    data: Prisma.TarefaCreateManyCriadorInput | Prisma.TarefaCreateManyCriadorInput[];
    skipDuplicates?: boolean;
};
export type TarefaCreateWithoutResponsavelInput = {
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
    criador: Prisma.UsuarioCreateNestedOneWithoutTarefasCriadasInput;
    comentarios?: Prisma.ComentarioCreateNestedManyWithoutTarefaInput;
    scores?: Prisma.ScoreCreateNestedManyWithoutTarefaInput;
    colaboradores?: Prisma.TarefaColaboradorCreateNestedManyWithoutTarefaInput;
};
export type TarefaUncheckedCreateWithoutResponsavelInput = {
    id?: number;
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    criadoPor: number;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
    comentarios?: Prisma.ComentarioUncheckedCreateNestedManyWithoutTarefaInput;
    scores?: Prisma.ScoreUncheckedCreateNestedManyWithoutTarefaInput;
    colaboradores?: Prisma.TarefaColaboradorUncheckedCreateNestedManyWithoutTarefaInput;
};
export type TarefaCreateOrConnectWithoutResponsavelInput = {
    where: Prisma.TarefaWhereUniqueInput;
    create: Prisma.XOR<Prisma.TarefaCreateWithoutResponsavelInput, Prisma.TarefaUncheckedCreateWithoutResponsavelInput>;
};
export type TarefaCreateManyResponsavelInputEnvelope = {
    data: Prisma.TarefaCreateManyResponsavelInput | Prisma.TarefaCreateManyResponsavelInput[];
    skipDuplicates?: boolean;
};
export type TarefaUpsertWithWhereUniqueWithoutCriadorInput = {
    where: Prisma.TarefaWhereUniqueInput;
    update: Prisma.XOR<Prisma.TarefaUpdateWithoutCriadorInput, Prisma.TarefaUncheckedUpdateWithoutCriadorInput>;
    create: Prisma.XOR<Prisma.TarefaCreateWithoutCriadorInput, Prisma.TarefaUncheckedCreateWithoutCriadorInput>;
};
export type TarefaUpdateWithWhereUniqueWithoutCriadorInput = {
    where: Prisma.TarefaWhereUniqueInput;
    data: Prisma.XOR<Prisma.TarefaUpdateWithoutCriadorInput, Prisma.TarefaUncheckedUpdateWithoutCriadorInput>;
};
export type TarefaUpdateManyWithWhereWithoutCriadorInput = {
    where: Prisma.TarefaScalarWhereInput;
    data: Prisma.XOR<Prisma.TarefaUpdateManyMutationInput, Prisma.TarefaUncheckedUpdateManyWithoutCriadorInput>;
};
export type TarefaScalarWhereInput = {
    AND?: Prisma.TarefaScalarWhereInput | Prisma.TarefaScalarWhereInput[];
    OR?: Prisma.TarefaScalarWhereInput[];
    NOT?: Prisma.TarefaScalarWhereInput | Prisma.TarefaScalarWhereInput[];
    id?: Prisma.IntFilter<"Tarefa"> | number;
    titulo?: Prisma.StringFilter<"Tarefa"> | string;
    descricao?: Prisma.StringNullableFilter<"Tarefa"> | string | null;
    prazo?: Prisma.DateTimeFilter<"Tarefa"> | Date | string;
    status?: Prisma.EnumStatusTarefaFilter<"Tarefa"> | $Enums.StatusTarefa;
    criadoPor?: Prisma.IntFilter<"Tarefa"> | number;
    atribuidoA?: Prisma.IntFilter<"Tarefa"> | number;
    criadoEm?: Prisma.DateTimeFilter<"Tarefa"> | Date | string;
    concluidoEm?: Prisma.DateTimeNullableFilter<"Tarefa"> | Date | string | null;
};
export type TarefaUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: Prisma.TarefaWhereUniqueInput;
    update: Prisma.XOR<Prisma.TarefaUpdateWithoutResponsavelInput, Prisma.TarefaUncheckedUpdateWithoutResponsavelInput>;
    create: Prisma.XOR<Prisma.TarefaCreateWithoutResponsavelInput, Prisma.TarefaUncheckedCreateWithoutResponsavelInput>;
};
export type TarefaUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: Prisma.TarefaWhereUniqueInput;
    data: Prisma.XOR<Prisma.TarefaUpdateWithoutResponsavelInput, Prisma.TarefaUncheckedUpdateWithoutResponsavelInput>;
};
export type TarefaUpdateManyWithWhereWithoutResponsavelInput = {
    where: Prisma.TarefaScalarWhereInput;
    data: Prisma.XOR<Prisma.TarefaUpdateManyMutationInput, Prisma.TarefaUncheckedUpdateManyWithoutResponsavelInput>;
};
export type TarefaCreateWithoutComentariosInput = {
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
    criador: Prisma.UsuarioCreateNestedOneWithoutTarefasCriadasInput;
    responsavel: Prisma.UsuarioCreateNestedOneWithoutTarefasAtribuidasInput;
    scores?: Prisma.ScoreCreateNestedManyWithoutTarefaInput;
    colaboradores?: Prisma.TarefaColaboradorCreateNestedManyWithoutTarefaInput;
};
export type TarefaUncheckedCreateWithoutComentariosInput = {
    id?: number;
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    criadoPor: number;
    atribuidoA: number;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
    scores?: Prisma.ScoreUncheckedCreateNestedManyWithoutTarefaInput;
    colaboradores?: Prisma.TarefaColaboradorUncheckedCreateNestedManyWithoutTarefaInput;
};
export type TarefaCreateOrConnectWithoutComentariosInput = {
    where: Prisma.TarefaWhereUniqueInput;
    create: Prisma.XOR<Prisma.TarefaCreateWithoutComentariosInput, Prisma.TarefaUncheckedCreateWithoutComentariosInput>;
};
export type TarefaUpsertWithoutComentariosInput = {
    update: Prisma.XOR<Prisma.TarefaUpdateWithoutComentariosInput, Prisma.TarefaUncheckedUpdateWithoutComentariosInput>;
    create: Prisma.XOR<Prisma.TarefaCreateWithoutComentariosInput, Prisma.TarefaUncheckedCreateWithoutComentariosInput>;
    where?: Prisma.TarefaWhereInput;
};
export type TarefaUpdateToOneWithWhereWithoutComentariosInput = {
    where?: Prisma.TarefaWhereInput;
    data: Prisma.XOR<Prisma.TarefaUpdateWithoutComentariosInput, Prisma.TarefaUncheckedUpdateWithoutComentariosInput>;
};
export type TarefaUpdateWithoutComentariosInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    criador?: Prisma.UsuarioUpdateOneRequiredWithoutTarefasCriadasNestedInput;
    responsavel?: Prisma.UsuarioUpdateOneRequiredWithoutTarefasAtribuidasNestedInput;
    scores?: Prisma.ScoreUpdateManyWithoutTarefaNestedInput;
    colaboradores?: Prisma.TarefaColaboradorUpdateManyWithoutTarefaNestedInput;
};
export type TarefaUncheckedUpdateWithoutComentariosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoPor?: Prisma.IntFieldUpdateOperationsInput | number;
    atribuidoA?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scores?: Prisma.ScoreUncheckedUpdateManyWithoutTarefaNestedInput;
    colaboradores?: Prisma.TarefaColaboradorUncheckedUpdateManyWithoutTarefaNestedInput;
};
export type TarefaCreateWithoutScoresInput = {
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
    criador: Prisma.UsuarioCreateNestedOneWithoutTarefasCriadasInput;
    responsavel: Prisma.UsuarioCreateNestedOneWithoutTarefasAtribuidasInput;
    comentarios?: Prisma.ComentarioCreateNestedManyWithoutTarefaInput;
    colaboradores?: Prisma.TarefaColaboradorCreateNestedManyWithoutTarefaInput;
};
export type TarefaUncheckedCreateWithoutScoresInput = {
    id?: number;
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    criadoPor: number;
    atribuidoA: number;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
    comentarios?: Prisma.ComentarioUncheckedCreateNestedManyWithoutTarefaInput;
    colaboradores?: Prisma.TarefaColaboradorUncheckedCreateNestedManyWithoutTarefaInput;
};
export type TarefaCreateOrConnectWithoutScoresInput = {
    where: Prisma.TarefaWhereUniqueInput;
    create: Prisma.XOR<Prisma.TarefaCreateWithoutScoresInput, Prisma.TarefaUncheckedCreateWithoutScoresInput>;
};
export type TarefaUpsertWithoutScoresInput = {
    update: Prisma.XOR<Prisma.TarefaUpdateWithoutScoresInput, Prisma.TarefaUncheckedUpdateWithoutScoresInput>;
    create: Prisma.XOR<Prisma.TarefaCreateWithoutScoresInput, Prisma.TarefaUncheckedCreateWithoutScoresInput>;
    where?: Prisma.TarefaWhereInput;
};
export type TarefaUpdateToOneWithWhereWithoutScoresInput = {
    where?: Prisma.TarefaWhereInput;
    data: Prisma.XOR<Prisma.TarefaUpdateWithoutScoresInput, Prisma.TarefaUncheckedUpdateWithoutScoresInput>;
};
export type TarefaUpdateWithoutScoresInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    criador?: Prisma.UsuarioUpdateOneRequiredWithoutTarefasCriadasNestedInput;
    responsavel?: Prisma.UsuarioUpdateOneRequiredWithoutTarefasAtribuidasNestedInput;
    comentarios?: Prisma.ComentarioUpdateManyWithoutTarefaNestedInput;
    colaboradores?: Prisma.TarefaColaboradorUpdateManyWithoutTarefaNestedInput;
};
export type TarefaUncheckedUpdateWithoutScoresInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoPor?: Prisma.IntFieldUpdateOperationsInput | number;
    atribuidoA?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    comentarios?: Prisma.ComentarioUncheckedUpdateManyWithoutTarefaNestedInput;
    colaboradores?: Prisma.TarefaColaboradorUncheckedUpdateManyWithoutTarefaNestedInput;
};
export type TarefaCreateWithoutColaboradoresInput = {
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
    criador: Prisma.UsuarioCreateNestedOneWithoutTarefasCriadasInput;
    responsavel: Prisma.UsuarioCreateNestedOneWithoutTarefasAtribuidasInput;
    comentarios?: Prisma.ComentarioCreateNestedManyWithoutTarefaInput;
    scores?: Prisma.ScoreCreateNestedManyWithoutTarefaInput;
};
export type TarefaUncheckedCreateWithoutColaboradoresInput = {
    id?: number;
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    criadoPor: number;
    atribuidoA: number;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
    comentarios?: Prisma.ComentarioUncheckedCreateNestedManyWithoutTarefaInput;
    scores?: Prisma.ScoreUncheckedCreateNestedManyWithoutTarefaInput;
};
export type TarefaCreateOrConnectWithoutColaboradoresInput = {
    where: Prisma.TarefaWhereUniqueInput;
    create: Prisma.XOR<Prisma.TarefaCreateWithoutColaboradoresInput, Prisma.TarefaUncheckedCreateWithoutColaboradoresInput>;
};
export type TarefaUpsertWithoutColaboradoresInput = {
    update: Prisma.XOR<Prisma.TarefaUpdateWithoutColaboradoresInput, Prisma.TarefaUncheckedUpdateWithoutColaboradoresInput>;
    create: Prisma.XOR<Prisma.TarefaCreateWithoutColaboradoresInput, Prisma.TarefaUncheckedCreateWithoutColaboradoresInput>;
    where?: Prisma.TarefaWhereInput;
};
export type TarefaUpdateToOneWithWhereWithoutColaboradoresInput = {
    where?: Prisma.TarefaWhereInput;
    data: Prisma.XOR<Prisma.TarefaUpdateWithoutColaboradoresInput, Prisma.TarefaUncheckedUpdateWithoutColaboradoresInput>;
};
export type TarefaUpdateWithoutColaboradoresInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    criador?: Prisma.UsuarioUpdateOneRequiredWithoutTarefasCriadasNestedInput;
    responsavel?: Prisma.UsuarioUpdateOneRequiredWithoutTarefasAtribuidasNestedInput;
    comentarios?: Prisma.ComentarioUpdateManyWithoutTarefaNestedInput;
    scores?: Prisma.ScoreUpdateManyWithoutTarefaNestedInput;
};
export type TarefaUncheckedUpdateWithoutColaboradoresInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoPor?: Prisma.IntFieldUpdateOperationsInput | number;
    atribuidoA?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    comentarios?: Prisma.ComentarioUncheckedUpdateManyWithoutTarefaNestedInput;
    scores?: Prisma.ScoreUncheckedUpdateManyWithoutTarefaNestedInput;
};
export type TarefaCreateManyCriadorInput = {
    id?: number;
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    atribuidoA: number;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
};
export type TarefaCreateManyResponsavelInput = {
    id?: number;
    titulo: string;
    descricao?: string | null;
    prazo: Date | string;
    status: $Enums.StatusTarefa;
    criadoPor: number;
    criadoEm?: Date | string;
    concluidoEm?: Date | string | null;
};
export type TarefaUpdateWithoutCriadorInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responsavel?: Prisma.UsuarioUpdateOneRequiredWithoutTarefasAtribuidasNestedInput;
    comentarios?: Prisma.ComentarioUpdateManyWithoutTarefaNestedInput;
    scores?: Prisma.ScoreUpdateManyWithoutTarefaNestedInput;
    colaboradores?: Prisma.TarefaColaboradorUpdateManyWithoutTarefaNestedInput;
};
export type TarefaUncheckedUpdateWithoutCriadorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    atribuidoA?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    comentarios?: Prisma.ComentarioUncheckedUpdateManyWithoutTarefaNestedInput;
    scores?: Prisma.ScoreUncheckedUpdateManyWithoutTarefaNestedInput;
    colaboradores?: Prisma.TarefaColaboradorUncheckedUpdateManyWithoutTarefaNestedInput;
};
export type TarefaUncheckedUpdateManyWithoutCriadorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    atribuidoA?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TarefaUpdateWithoutResponsavelInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    criador?: Prisma.UsuarioUpdateOneRequiredWithoutTarefasCriadasNestedInput;
    comentarios?: Prisma.ComentarioUpdateManyWithoutTarefaNestedInput;
    scores?: Prisma.ScoreUpdateManyWithoutTarefaNestedInput;
    colaboradores?: Prisma.TarefaColaboradorUpdateManyWithoutTarefaNestedInput;
};
export type TarefaUncheckedUpdateWithoutResponsavelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoPor?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    comentarios?: Prisma.ComentarioUncheckedUpdateManyWithoutTarefaNestedInput;
    scores?: Prisma.ScoreUncheckedUpdateManyWithoutTarefaNestedInput;
    colaboradores?: Prisma.TarefaColaboradorUncheckedUpdateManyWithoutTarefaNestedInput;
};
export type TarefaUncheckedUpdateManyWithoutResponsavelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prazo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusTarefaFieldUpdateOperationsInput | $Enums.StatusTarefa;
    criadoPor?: Prisma.IntFieldUpdateOperationsInput | number;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concluidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TarefaCountOutputType = {
    comentarios: number;
    scores: number;
    colaboradores: number;
};
export type TarefaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comentarios?: boolean | TarefaCountOutputTypeCountComentariosArgs;
    scores?: boolean | TarefaCountOutputTypeCountScoresArgs;
    colaboradores?: boolean | TarefaCountOutputTypeCountColaboradoresArgs;
};
export type TarefaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaCountOutputTypeSelect<ExtArgs> | null;
};
export type TarefaCountOutputTypeCountComentariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComentarioWhereInput;
};
export type TarefaCountOutputTypeCountScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScoreWhereInput;
};
export type TarefaCountOutputTypeCountColaboradoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarefaColaboradorWhereInput;
};
export type TarefaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    descricao?: boolean;
    prazo?: boolean;
    status?: boolean;
    criadoPor?: boolean;
    atribuidoA?: boolean;
    criadoEm?: boolean;
    concluidoEm?: boolean;
    criador?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    responsavel?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    comentarios?: boolean | Prisma.Tarefa$comentariosArgs<ExtArgs>;
    scores?: boolean | Prisma.Tarefa$scoresArgs<ExtArgs>;
    colaboradores?: boolean | Prisma.Tarefa$colaboradoresArgs<ExtArgs>;
    _count?: boolean | Prisma.TarefaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tarefa"]>;
export type TarefaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    descricao?: boolean;
    prazo?: boolean;
    status?: boolean;
    criadoPor?: boolean;
    atribuidoA?: boolean;
    criadoEm?: boolean;
    concluidoEm?: boolean;
    criador?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    responsavel?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tarefa"]>;
export type TarefaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    descricao?: boolean;
    prazo?: boolean;
    status?: boolean;
    criadoPor?: boolean;
    atribuidoA?: boolean;
    criadoEm?: boolean;
    concluidoEm?: boolean;
    criador?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    responsavel?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tarefa"]>;
export type TarefaSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    descricao?: boolean;
    prazo?: boolean;
    status?: boolean;
    criadoPor?: boolean;
    atribuidoA?: boolean;
    criadoEm?: boolean;
    concluidoEm?: boolean;
};
export type TarefaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "descricao" | "prazo" | "status" | "criadoPor" | "atribuidoA" | "criadoEm" | "concluidoEm", ExtArgs["result"]["tarefa"]>;
export type TarefaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    criador?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    responsavel?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    comentarios?: boolean | Prisma.Tarefa$comentariosArgs<ExtArgs>;
    scores?: boolean | Prisma.Tarefa$scoresArgs<ExtArgs>;
    colaboradores?: boolean | Prisma.Tarefa$colaboradoresArgs<ExtArgs>;
    _count?: boolean | Prisma.TarefaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TarefaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    criador?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    responsavel?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type TarefaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    criador?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    responsavel?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $TarefaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Tarefa";
    objects: {
        criador: Prisma.$UsuarioPayload<ExtArgs>;
        responsavel: Prisma.$UsuarioPayload<ExtArgs>;
        comentarios: Prisma.$ComentarioPayload<ExtArgs>[];
        scores: Prisma.$ScorePayload<ExtArgs>[];
        colaboradores: Prisma.$TarefaColaboradorPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string;
        descricao: string | null;
        prazo: Date;
        status: $Enums.StatusTarefa;
        criadoPor: number;
        atribuidoA: number;
        criadoEm: Date;
        concluidoEm: Date | null;
    }, ExtArgs["result"]["tarefa"]>;
    composites: {};
};
export type TarefaGetPayload<S extends boolean | null | undefined | TarefaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TarefaPayload, S>;
export type TarefaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TarefaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TarefaCountAggregateInputType | true;
};
export interface TarefaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Tarefa'];
        meta: {
            name: 'Tarefa';
        };
    };
    findUnique<T extends TarefaFindUniqueArgs>(args: Prisma.SelectSubset<T, TarefaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TarefaClient<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TarefaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TarefaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TarefaClient<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TarefaFindFirstArgs>(args?: Prisma.SelectSubset<T, TarefaFindFirstArgs<ExtArgs>>): Prisma.Prisma__TarefaClient<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TarefaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TarefaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TarefaClient<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TarefaFindManyArgs>(args?: Prisma.SelectSubset<T, TarefaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TarefaCreateArgs>(args: Prisma.SelectSubset<T, TarefaCreateArgs<ExtArgs>>): Prisma.Prisma__TarefaClient<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TarefaCreateManyArgs>(args?: Prisma.SelectSubset<T, TarefaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TarefaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TarefaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TarefaDeleteArgs>(args: Prisma.SelectSubset<T, TarefaDeleteArgs<ExtArgs>>): Prisma.Prisma__TarefaClient<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TarefaUpdateArgs>(args: Prisma.SelectSubset<T, TarefaUpdateArgs<ExtArgs>>): Prisma.Prisma__TarefaClient<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TarefaDeleteManyArgs>(args?: Prisma.SelectSubset<T, TarefaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TarefaUpdateManyArgs>(args: Prisma.SelectSubset<T, TarefaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TarefaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TarefaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TarefaUpsertArgs>(args: Prisma.SelectSubset<T, TarefaUpsertArgs<ExtArgs>>): Prisma.Prisma__TarefaClient<runtime.Types.Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TarefaCountArgs>(args?: Prisma.Subset<T, TarefaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TarefaCountAggregateOutputType> : number>;
    aggregate<T extends TarefaAggregateArgs>(args: Prisma.Subset<T, TarefaAggregateArgs>): Prisma.PrismaPromise<GetTarefaAggregateType<T>>;
    groupBy<T extends TarefaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TarefaGroupByArgs['orderBy'];
    } : {
        orderBy?: TarefaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TarefaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarefaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TarefaFieldRefs;
}
export interface Prisma__TarefaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    criador<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    responsavel<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    comentarios<T extends Prisma.Tarefa$comentariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tarefa$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    scores<T extends Prisma.Tarefa$scoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tarefa$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    colaboradores<T extends Prisma.Tarefa$colaboradoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tarefa$colaboradoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TarefaColaboradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TarefaFieldRefs {
    readonly id: Prisma.FieldRef<"Tarefa", 'Int'>;
    readonly titulo: Prisma.FieldRef<"Tarefa", 'String'>;
    readonly descricao: Prisma.FieldRef<"Tarefa", 'String'>;
    readonly prazo: Prisma.FieldRef<"Tarefa", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Tarefa", 'StatusTarefa'>;
    readonly criadoPor: Prisma.FieldRef<"Tarefa", 'Int'>;
    readonly atribuidoA: Prisma.FieldRef<"Tarefa", 'Int'>;
    readonly criadoEm: Prisma.FieldRef<"Tarefa", 'DateTime'>;
    readonly concluidoEm: Prisma.FieldRef<"Tarefa", 'DateTime'>;
}
export type TarefaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaSelect<ExtArgs> | null;
    omit?: Prisma.TarefaOmit<ExtArgs> | null;
    include?: Prisma.TarefaInclude<ExtArgs> | null;
    where: Prisma.TarefaWhereUniqueInput;
};
export type TarefaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaSelect<ExtArgs> | null;
    omit?: Prisma.TarefaOmit<ExtArgs> | null;
    include?: Prisma.TarefaInclude<ExtArgs> | null;
    where: Prisma.TarefaWhereUniqueInput;
};
export type TarefaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TarefaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TarefaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TarefaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaSelect<ExtArgs> | null;
    omit?: Prisma.TarefaOmit<ExtArgs> | null;
    include?: Prisma.TarefaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TarefaCreateInput, Prisma.TarefaUncheckedCreateInput>;
};
export type TarefaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TarefaCreateManyInput | Prisma.TarefaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TarefaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TarefaOmit<ExtArgs> | null;
    data: Prisma.TarefaCreateManyInput | Prisma.TarefaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TarefaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TarefaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaSelect<ExtArgs> | null;
    omit?: Prisma.TarefaOmit<ExtArgs> | null;
    include?: Prisma.TarefaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TarefaUpdateInput, Prisma.TarefaUncheckedUpdateInput>;
    where: Prisma.TarefaWhereUniqueInput;
};
export type TarefaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TarefaUpdateManyMutationInput, Prisma.TarefaUncheckedUpdateManyInput>;
    where?: Prisma.TarefaWhereInput;
    limit?: number;
};
export type TarefaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TarefaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TarefaUpdateManyMutationInput, Prisma.TarefaUncheckedUpdateManyInput>;
    where?: Prisma.TarefaWhereInput;
    limit?: number;
    include?: Prisma.TarefaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TarefaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaSelect<ExtArgs> | null;
    omit?: Prisma.TarefaOmit<ExtArgs> | null;
    include?: Prisma.TarefaInclude<ExtArgs> | null;
    where: Prisma.TarefaWhereUniqueInput;
    create: Prisma.XOR<Prisma.TarefaCreateInput, Prisma.TarefaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TarefaUpdateInput, Prisma.TarefaUncheckedUpdateInput>;
};
export type TarefaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaSelect<ExtArgs> | null;
    omit?: Prisma.TarefaOmit<ExtArgs> | null;
    include?: Prisma.TarefaInclude<ExtArgs> | null;
    where: Prisma.TarefaWhereUniqueInput;
};
export type TarefaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TarefaWhereInput;
    limit?: number;
};
export type Tarefa$comentariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tarefa$scoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tarefa$colaboradoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TarefaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TarefaSelect<ExtArgs> | null;
    omit?: Prisma.TarefaOmit<ExtArgs> | null;
    include?: Prisma.TarefaInclude<ExtArgs> | null;
};
