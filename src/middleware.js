import { NextResponse } from 'next/server';
import { locales, defaultLocale, LOCALE_COOKIE } from './i18n/config';

// Elige el idioma: 1) el que el usuario eligió antes (cookie), 2) el del navegador, 3) español.
function preferredLocale(request) {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (locales.includes(saved)) return saved;

  const header = request.headers.get('accept-language') || '';
  const fromBrowser = header
    .split(',')
    .map((part) => part.split(';')[0].trim().toLowerCase().slice(0, 2))
    .find((lang) => locales.includes(lang));

  return fromBrowser || defaultLocale;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Todo excepto rutas internas de Next y archivos con extensión (imágenes, sitemap.xml, robots.txt…).
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
