"use client";

import { useState } from "react";

interface Props {
  onSubmit: (data: {
    nome: string;
    cargo: "CHEFE" | "FUNCIONARIO";
  }) => void;
}

export default function UsuarioForm({
  onSubmit,
}: Props) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] =
    useState<"CHEFE" | "FUNCIONARIO">(
      "FUNCIONARIO"
    );

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    onSubmit({
      nome,
      cargo,
    });

    setNome("");
    setCargo("FUNCIONARIO");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg bg-white p-6 shadow"
    >
      <input
        value={nome}
        onChange={(e) =>
          setNome(e.target.value)
        }
        placeholder="Nome"
        className="w-full rounded border p-2"
      />

      <select
        value={cargo}
        onChange={(e) =>
          setCargo(
            e.target.value as
              | "CHEFE"
              | "FUNCIONARIO"
          )
        }
        className="w-full rounded border p-2"
      >
        <option value="CHEFE">
          Chefe
        </option>

        <option value="FUNCIONARIO">
          Funcionário
        </option>
      </select>

      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Salvar
      </button>
    </form>
  );
}