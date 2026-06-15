"use client";

import Link from "next/link";
import { LayoutDashboard, ListTodo, Trophy, Users, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const router = useRouter();
  const [cargo, setCargo] = useState<string | null>(null);

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) {
      router.push("/");
      return;
    }
    const dados = JSON.parse(usuario);
    setCargo(dados.cargo);
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("usuario");
    router.push("/");
  }

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="border-b border-slate-700 p-6">
        <h2 className="text-lg font-bold">Menu</h2>
      </div>

      <nav className="flex flex-col gap-2 p-4 flex-1">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-slate-800"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="/ranking"
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-slate-800"
        >
          <Trophy size={20} />
          Ranking
        </Link>

        {cargo === "CHEFE" && (
          <>
            <Link
              href="/tarefas"
              className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-slate-800"
            >
              <ListTodo size={20} />
              Tarefas
            </Link>

            <Link
              href="/usuario"
              className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-slate-800"
            >
              <Users size={20} />
              Funcionários
            </Link>
          </>
        )}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 rounded-lg px-4 py-3 w-full transition hover:bg-slate-800 text-red-400"
        >
          <LogOut size={20} />
          Sair
        </button>
      </div>
    </aside>
  );
}