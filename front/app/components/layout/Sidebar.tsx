"use client";

import Link from "next/link";
import { LayoutDashboard, ListTodo, Trophy, Users } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white">
      <div className="border-b border-slate-700 p-6">
        <h2 className="text-lg font-bold">
          Menu
        </h2>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-slate-800"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="/tarefas"
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-slate-800"
        >
          <ListTodo size={20} />
          Tarefas
        </Link>

        <Link
          href="/ranking"
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-slate-800"
        >
          <Trophy size={20} />
          Ranking
        </Link>

        <Link
          href="/usuario"
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-slate-800"
        >
          <Users size={20} />
          Funcionários
        </Link>
      </nav>
    </aside>
  );
}