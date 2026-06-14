"use client";

import { useEffect, useState } from "react";

import UsuarioForm from "../components/usuarios/UsuarioForm";
import UsuarioTable from "../components/usuarios/UsuarioTable";

import { usuarioService } from "../service/usuario.service";
import { Usuario } from "../types/usuario";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function UsuariosPage() {
  const [usuarios, setUsuarios] =
    useState<Usuario[]>([]);

  async function carregarUsuarios() {
    const data =
      await usuarioService.listar();

    setUsuarios(data);
  }

  async function criarUsuario(
    usuario: {
      nome: string;
      cargo:
        | "CHEFE"
        | "FUNCIONARIO";
    }
  ) {
    await usuarioService.criar(
      usuario
    );

    carregarUsuarios();
  }

  async function excluirUsuario(
    id: number
  ) {
    await usuarioService.remover(id);

    carregarUsuarios();
  }

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <div className="flex h-screen bg-slate-100 text-black">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="min-h-screen bg-slate-100 p-6">
          <div className="mx-auto max-w-6xl space-y-6">
            <h1 className="text-3xl font-bold">
              Usuários
            </h1>

            <UsuarioForm
              onSubmit={criarUsuario}
            />

            <UsuarioTable
              usuarios={usuarios}
              onDelete={excluirUsuario}
            />
          </div>
        </main>
      </div>
    </div>
  );
}