'use client';

import { useId, useRef } from 'react';
import { interpolate } from '@/lib/format';
import styles from './CertSkills.module.css';

const VISIBLE = 2;

export default function CertSkills({ skills, title, issuer, labels }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  const visible = skills.slice(0, VISIBLE);
  const hidden = skills.length - VISIBLE;

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <div className={styles.chips}>
      {visible.map((skill) => (
        <span key={skill} className={`chip ${styles.chip}`}>
          {skill}
        </span>
      ))}

      {hidden > 0 && (
        <>
          <button
            type="button"
            className={styles.more}
            onClick={open}
            aria-haspopup="dialog"
            aria-label={interpolate(labels.moreLabel, { count: skills.length, title })}
          >
            {interpolate(labels.more, { count: hidden })}
          </button>

          {/* <dialog> nativo: Escape cierra, el foco queda atrapado dentro y vuelve al botón al cerrar. */}
          <dialog
            ref={dialogRef}
            className={styles.dialog}
            aria-labelledby={titleId}
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <div className={styles.panel}>
              <div className={styles.head}>
                <div>
                  <p className={styles.eyebrow}>{labels.skills}</p>
                  <h3 id={titleId} className={styles.title}>
                    {title}
                  </h3>
                  <p className={styles.issuer}>{issuer}</p>
                </div>
                <button type="button" className={styles.close} onClick={close} aria-label={labels.close}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>
              <ul className={styles.list}>
                {skills.map((skill, i) => (
                  <li key={skill} className="chip" style={{ animationDelay: `${0.05 + i * 0.04}s` }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </dialog>
        </>
      )}
    </div>
  );
}
