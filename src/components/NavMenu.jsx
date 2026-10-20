'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavMenu.module.css';

export default function NavMenu({ links, label, openLabel, closeLabel }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const rootRef = useRef(null);

  // Cerrar al cambiar de página.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Mientras está abierto: cerrar con Escape, al hacer click fuera o al pasar a escritorio.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onPointer = (e) => !rootRef.current?.contains(e.target) && setOpen(false);
    const desktop = window.matchMedia('(min-width: 769px)');
    const onDesktop = (e) => e.matches && setOpen(false);

    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    desktop.addEventListener('change', onDesktop);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      desktop.removeEventListener('change', onDesktop);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={styles.root}>
      {/* Escritorio */}
      <nav aria-label={label} className={styles.desktop}>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Móvil */}
      <button
        type="button"
        className={styles.burger}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      <nav id={panelId} aria-label={label} className={styles.panel} data-open={open} inert={!open}>
        <ul className={styles.list}>
          {links.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: open ? `${0.04 * i + 0.05}s` : '0s' }}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
