"use client";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import RankingCard from "../components/dashboard/RankingCard";
import TarefasPendentesCard from "../components/dashboard/TarefasPendentesCard";
import { scoreService } from "../service/score.service";
import { usuarioService } from "../service/usuario.service";
import { tarefaService } from "../service/tarefa.service";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [ranking, setRanking] = useState([]);
const [tarefas, setTarefas] = useState([]);

async function carregarDados() {
  try {
    const rankingApi =
      await scoreService.listarRanking();

    const usuarios =
      await usuarioService.listar();

    const rankingFormatado =
      rankingApi.map((item: any) => {
        const usuario = usuarios.find(
          (u: any) =>
            u.id === item.usuarioId
        );

        return {
          usuarioId: item.usuarioId,
          nome:
            usuario?.nome ??
            `Usuário ${item.usuarioId}`,
          pontos:
            item._sum?.pontos ?? 0,
        };
      });

    const tarefasApi =
      await tarefaService.listar();

    const pendentes =
      tarefasApi.filter(
        (t: any) =>
          t.status !== "FINALIZADA"
      );

    setRanking(rankingFormatado);
    setTarefas(pendentes);
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
  carregarDados();
}, []);

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">
              Dashboard
            </h2>

            <p className="text-slate-500">
              Visão geral da equipe
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <RankingCard ranking={ranking} />

            <TarefasPendentesCard
              tarefas={tarefas}
            />
          </div>
        </main>
      </div>
    </div>
  );
}