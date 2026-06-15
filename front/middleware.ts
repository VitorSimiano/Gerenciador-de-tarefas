import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const rotasApenasChefe = ['/tarefas', '/usuario'];
  const pathname = request.nextUrl.pathname;

  const usuarioCookie = request.cookies.get('usuario');

  if (!usuarioCookie) {
    if (pathname !== '/') {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  const usuario = JSON.parse(usuarioCookie.value);

  const rotaRestrita = rotasApenasChefe.some((rota) =>
    pathname.startsWith(rota)
  );

  if (rotaRestrita && usuario.cargo !== 'CHEFE') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/tarefas/:path*', '/usuario/:path*', '/ranking/:path*'],
};