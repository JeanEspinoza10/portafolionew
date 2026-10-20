import { certifications } from '@/data/certifications';
import { localized } from '@/lib/format';
import CertSkills from './CertSkills';
import styles from './Cards.module.css';

function MedalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
    </svg>
  );
}

// Más recientes primero. sort() es estable: con el mismo año se mantiene el orden del archivo.
const sorted = [...certifications].sort((a, b) => b.year - a.year);

export default function Certifications({ locale, t }) {
  return (
    <section id="certifications" className="section">
      <div className="section-head s-reveal">
        <h2 className="section-title">{t.certifications.title}</h2>
        <span className="section-meta">{t.certifications.summary}</span>
      </div>
      <div className={`${styles.grid} ${styles.gridSmall}`}>
        {sorted.map((cert) => (
          <article key={cert.url} className={`card h-card s-reveal ${styles.card}`}>
            <div className={styles.certTop}>
              <span className={styles.badgeIcon}>
                <MedalIcon />
              </span>
              <span className={styles.year}>{cert.year}</span>
            </div>
            <div>
              <h3 className={styles.title}>{cert.title[locale]}</h3>
              <p className={styles.issuer}>{localized(cert.issuer, locale)}</p>
            </div>
            <CertSkills
              skills={localized(cert.skills, locale)}
              title={cert.title[locale]}
              issuer={localized(cert.issuer, locale)}
              labels={{
                more: t.certifications.more,
                moreLabel: t.certifications.moreLabel,
                skills: t.certifications.skills,
                close: t.certifications.close,
              }}
            />
            <div className={styles.links}>
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                {t.certifications.view} ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
