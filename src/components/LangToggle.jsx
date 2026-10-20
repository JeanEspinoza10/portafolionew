'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { LOCALE_COOKIE, locales } from '@/i18n/config';
import styles from './LangToggle.module.css';

const SCROLL_KEY = 'lang-switch-scroll';

export default function LangToggle({ locale, label }) {
  const pathname = usePathname();
  const router = useRouter();

  // Tras cambiar de idioma, volver a la misma altura en la que estaba el usuario.
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(SCROLL_KEY);
      if (saved !== null) {
        sessionStorage.removeItem(SCROLL_KEY);
        window.scrollTo({ top: Number(saved), behavior: 'instant' });
      }
    } catch {
      // sessionStorage no disponible (modo privado estricto): se queda arriba.
    }
  }, []);

  const change = (next) => {
    if (next === locale) return;
    // Recordar la preferencia un año; el middleware la usa al entrar a "/".
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    try {
      sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
    } catch {}
    // Sin el #hash: si no, el navegador saltaría a la última sección del menú.
    const rest = pathname.replace(/^\/(es|en)(?=\/|$)/, '');
    router.push(`/${next}${rest}`, { scroll: false });
  };

  return (
    <div role="group" aria-label={label} className={styles.toggle} data-active={locale}>
      <span className={styles.pill} aria-hidden="true" />
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          className={styles.option}
          aria-pressed={code === locale}
          lang={code}
          onClick={() => change(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
