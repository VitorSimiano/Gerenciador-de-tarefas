"use client";

import { useEffect, useState } from "react";

import { scoreService } from "../service/score.service";
import { usuarioService } from "../service/usuario.service";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

interface RankingItem {
  usuarioId: number;
  nome: string;
  pontos: number;
}

export default function RankingPage() {
  const [ranking, setRanking] = useState<RankingItem[]>([]);

  async function carregarRanking() {
    try {
      const rankingApi = await scoreService.listarRanking();

      const usuarios = await usuarioService.listar();

      const rankingCompleto = rankingApi.map((item: any) => {
        const usuario = usuarios.find((u: any) => u.id === item.usuarioId);

        return {
          usuarioId: item.usuarioId,
          nome: usuario?.nome ?? `Usuário ${item.usuarioId}`,
          pontos: item._sum?.pontos ?? 0,
        };
      });

      setRanking(rankingCompleto);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    carregarRanking();
  }, []);

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="min-h-screen bg-slate-100 p-6">
          <div className="mx-auto max-w-5xl">
            <h1 className="mb-8 text-3xl font-bold">🏆 Ranking Geral</h1>

            <div className="overflow-hidden rounded-xl bg-white shadow">
              <table className="w-full">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="p-4 text-left">Posição</th>

                    <th className="p-4 text-left">Funcionário</th>

                    <th className="p-4 text-left">Pontos</th>
                  </tr>
                </thead>

                <tbody>
                  {ranking.map((usuario, index) => (
                    <tr key={usuario.usuarioId} className="border-b">
                      <td className="p-4">
                        {index === 0
                          ? "🥇"
                          : index === 1
                            ? "🥈"
                            : index === 2
                              ? "🥉"
                              : `#${index + 1}`}
                      </td>

                      <td className="p-4">{usuario.nome}</td>

                      <td className="p-4 font-bold text-green-600">
                        {usuario.pontos}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
