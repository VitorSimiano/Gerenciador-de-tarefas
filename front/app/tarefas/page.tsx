"use client";

import { useEffect, useState } from "react";

import TarefaForm from "../components/tarefas/TarefaForm";
import TarefaCard from "../components/tarefas/TarefaCard";

import { tarefaService } from "../service/tarefa.service";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

interface Tarefa {
  id: number;
  titulo: string;
  descricao?: string;
  prazo: string;
  status: "PENDENTE" | "EM_ANDAMENTO" | "FINALIZADA";
  criadoPor: number;
  atribuidoA: number;
  criadoEm: string;
  concluidoEm?: string;
}

export default function TarefasPage() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [loading, setLoading] = useState(true);

  async function carregarTarefas() {
    try {
      const data = await tarefaService.listar();
      setTarefas(data);
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
    } finally {
      setLoading(false);
    }
  }

  async function criarTarefa(data: {
    titulo: string;
    descricao?: string;
    prazo: string;
    status: "PENDENTE" | "EM_ANDAMENTO" | "FINALIZADA";
    criadoPor: number;
    atribuidoA: number;
  }) {
    try {
      await tarefaService.criar(data);
      await carregarTarefas();
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  }

  async function concluirTarefa(id: number) {
    try {
      await tarefaService.concluir(id);
      await carregarTarefas();
    } catch (error) {
      console.error("Erro ao concluir tarefa:", error);
    }
  }

  async function excluirTarefa(id: number) {
    const confirmar = confirm("Deseja realmente excluir esta tarefa?");

    if (!confirmar) return;

    try {
      await tarefaService.remover(id);
      await carregarTarefas();
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  }

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="min-h-screen bg-slate-100 p-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Gerenciamento de Tarefas</h1>

              <p className="mt-2 text-slate-600">
                Cadastre, acompanhe e conclua tarefas.
              </p>
            </div>

            <div className="mb-8">
              <TarefaForm onSubmit={criarTarefa} />
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">Lista de Tarefas</h2>

              {loading ? (
                <div className="rounded-lg bg-white p-6 shadow">
                  Carregando tarefas...
                </div>
              ) : tarefas.length === 0 ? (
                <div className="rounded-lg bg-white p-6 shadow">
                  Nenhuma tarefa cadastrada.
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {tarefas.map((tarefa) => (
                    <TarefaCard
                      key={tarefa.id}
                      tarefa={tarefa}
                      onConcluir={concluirTarefa}
                      onExcluir={excluirTarefa}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
