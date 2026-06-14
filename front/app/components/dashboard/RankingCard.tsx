interface RankingItem {
  usuarioId: number;
  nome: string;
  pontos: number;
}

interface Props {
  ranking: RankingItem[];
}

export default function RankingCard({
  ranking,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Ranking Geral
      </h2>

      <div className="space-y-3">
        {ranking.slice(0, 5).map((item, index) => (
          <div
            key={item.usuarioId}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <div>
              <span className="font-semibold">
                #{index + 1}
              </span>{" "}
              {item.nome}
            </div>

            <span className="font-bold text-green-600">
              {item.pontos} pts
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}