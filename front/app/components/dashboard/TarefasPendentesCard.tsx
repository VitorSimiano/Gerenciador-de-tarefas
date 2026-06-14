interface Tarefa {
  id: number;
  titulo: string;
  status: string;
}

interface Props {
  tarefas: Tarefa[];
}

export default function TarefasPendentesCard({
  tarefas,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Tarefas Pendentes
      </h2>

      <div className="space-y-3">
        {tarefas.map((tarefa) => (
          <div
            key={tarefa.id}
            className="rounded-lg border p-3"
          >
            <h3 className="font-semibold">
              {tarefa.titulo}
            </h3>

            <p className="text-sm text-slate-500">
              {tarefa.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}