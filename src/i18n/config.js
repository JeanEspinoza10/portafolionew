export const locales = ['es', 'en'];
export const defaultLocale = 'es';

// Cookie (no localStorage) porque el middleware se ejecuta en el servidor y necesita leerla.
export const LOCALE_COOKIE = 'NEXT_LOCALE';

export const isLocale = (value) => locales.includes(value);
