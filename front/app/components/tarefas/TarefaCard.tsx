"use client";

interface Tarefa {
  id: number;
  titulo: string;
  descricao?: string;
  prazo: string;
  status:
    | "PENDENTE"
    | "EM_ANDAMENTO"
    | "FINALIZADA";
  atribuidoA: number;
}

interface TarefaCardProps {
  tarefa: Tarefa;
  onConcluir: (
    id: number
  ) => Promise<void>;
  onExcluir: (
    id: number
  ) => Promise<void>;
}

export default function TarefaCard({
  tarefa,
  onConcluir,
  onExcluir,
}: TarefaCardProps) {
  function corStatus() {
    switch (tarefa.status) {
      case "PENDENTE":
        return "bg-yellow-100 text-yellow-700";

      case "EM_ANDAMENTO":
        return "bg-blue-100 text-blue-700";

      case "FINALIZADA":
        return "bg-green-100 text-green-700";

      default:
        return "";
    }
  }

  return (
    <div className="rounded-lg bg-white p-5 shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">
          {tarefa.titulo}
        </h2>

        <span
          className={`rounded px-3 py-1 text-sm ${corStatus()}`}
        >
          {tarefa.status}
        </span>
      </div>

      {tarefa.descricao && (
        <p className="mt-2 text-slate-600">
          {tarefa.descricao}
        </p>
      )}

      <div className="mt-4 text-sm text-slate-500">
        <p>
          Prazo:{" "}
          {new Date(
            tarefa.prazo
          ).toLocaleDateString()}
        </p>

        <p>
          Responsável:{" "}
          {tarefa.atribuidoA}
        </p>
      </div>

      <div className="mt-4 flex gap-2">
        {tarefa.status !==
          "FINALIZADA" && (
          <button
            onClick={() =>
              onConcluir(tarefa.id)
            }
            className="rounded bg-green-600 px-3 py-2 text-white"
          >
            Concluir
          </button>
        )}

        <button
          onClick={() =>
            onExcluir(tarefa.id)
          }
          className="rounded bg-red-600 px-3 py-2 text-white"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}