"use client";

import { useState } from "react";

interface TarefaFormProps {
  onSubmit: (data: {
    titulo: string;
    descricao?: string;
    prazo: string;
    status: "PENDENTE" | "EM_ANDAMENTO" | "FINALIZADA";
    criadoPor: number;
    atribuidoA: number;
  }) => Promise<void>;
}

export default function TarefaForm({ onSubmit }: TarefaFormProps) {
  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    prazo: "",
    status: "PENDENTE" as
      | "PENDENTE"
      | "EM_ANDAMENTO"
      | "FINALIZADA",
    criadoPor: 1,
    atribuidoA: 1,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await onSubmit(form);

    setForm({
      titulo: "",
      descricao: "",
      prazo: "",
      status: "PENDENTE",
      criadoPor: 1,
      atribuidoA: 1,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl bg-white p-6 shadow"
    >
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Nova Tarefa
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Título da Tarefa
          </label>

          <input
            type="text"
            value={form.titulo}
            onChange={(e) =>
              setForm({
                ...form,
                titulo: e.target.value,
              })
            }
            className="w-full rounded-lg border p-2"
            placeholder="Digite o título da tarefa"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Prazo
          </label>

          <input
            type="date"
            value={form.prazo}
            onChange={(e) =>
              setForm({
                ...form,
                prazo: e.target.value,
              })
            }
            className="w-full rounded-lg border p-2"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Descrição
          </label>

          <textarea
            value={form.descricao}
            onChange={(e) =>
              setForm({
                ...form,
                descricao: e.target.value,
              })
            }
            className="w-full rounded-lg border p-2"
            rows={4}
            placeholder="Descreva a tarefa"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Status
          </label>

          <select
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value as
                  | "PENDENTE"
                  | "EM_ANDAMENTO"
                  | "FINALIZADA",
              })
            }
            className="w-full rounded-lg border p-2"
          >
            <option value="PENDENTE">
              Pendente
            </option>

            <option value="EM_ANDAMENTO">
              Em andamento
            </option>

            <option value="FINALIZADA">
              Finalizada
            </option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            ID do Criador
          </label>

          <input
            type="number"
            value={form.criadoPor}
            onChange={(e) =>
              setForm({
                ...form,
                criadoPor: Number(
                  e.target.value
                ),
              })
            }
            className="w-full rounded-lg border p-2"
            placeholder="Informe o ID do criador"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-slate-700">
            ID do Responsável
          </label>

          <input
            type="number"
            value={form.atribuidoA}
            onChange={(e) =>
              setForm({
                ...form,
                atribuidoA: Number(
                  e.target.value
                ),
              })
            }
            className="w-full rounded-lg border p-2"
            placeholder="Informe o ID do responsável"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Criar Tarefa
        </button>
      </div>
    </form>
  );
}