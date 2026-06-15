import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const rotasProtegidas = ['/tarefas', '/usuario'];
  const pathname = request.nextUrl.pathname;

  const rotaProtegida = rotasProtegidas.some((rota) =>
    pathname.startsWith(rota)
  );

  if (rotaProtegida) {
    const usuario = request.cookies.get('usuario');
    if (!usuario) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    const dados = JSON.parse(usuario.value);
    if (dados.cargo !== 'CHEFE') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/tarefas/:path*', '/usuario/:path*'],
};