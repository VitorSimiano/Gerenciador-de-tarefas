'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

 async function handleLogin() {
  setErro('');
  setCarregando(true);

  try {
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, senha }),
    });

    if (!res.ok) {
      setErro('Nome ou senha inválidos.');
      return;
    }

    const usuario = await res.json();

    // Salva no localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Salva no cookie para o middleware
    document.cookie = `usuario=${JSON.stringify(usuario)}; path=/`;

    router.push('/dashboard');
  } catch {
    setErro('Erro ao conectar com o servidor.');
  } finally {
    setCarregando(false);
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 text-black">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-zinc-800 mb-6 text-center">
          Gerenciador de Tarefas
        </h1>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-zinc-600">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1 w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-600">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-1 w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
              placeholder="Sua senha"
            />
          </div>

          {erro && (
            <p className="text-red-500 text-sm text-center">{erro}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={carregando}
            className="w-full bg-zinc-800 text-white py-2 rounded-lg text-sm font-medium hover:bg-zinc-700 transition disabled:opacity-50"
          >
            {carregando ? 'Entrando...' : 'Entrar'}
          </button>
        </div>
      </div>
    </div>
  );
}