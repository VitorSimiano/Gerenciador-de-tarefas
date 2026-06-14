import { Usuario } from "../../types/usuario";

interface Props {
  usuarios: Usuario[];
  onDelete: (id: number) => void;
}

export default function UsuarioTable({
  usuarios,
  onDelete,
}: Props) {
  return (
    <div className="overflow-auto rounded-lg bg-white shadow">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">
              Nome
            </th>

            <th className="p-3 text-left">
              Cargo
            </th>

            <th className="p-3">
              Ações
            </th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((usuario) => (
            <tr
              key={usuario.id}
              className="border-b"
            >
              <td className="p-3">
                {usuario.nome}
              </td>

              <td className="p-3">
                {usuario.cargo}
              </td>

              <td className="p-3">
                <button
                  onClick={() =>
                    onDelete(usuario.id)
                  }
                  className="rounded bg-red-500 px-3 py-1 text-white"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}