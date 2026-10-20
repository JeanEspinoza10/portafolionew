import { experience } from '@/data/experience';
import { yearsOfExperience } from '@/data/profile';
import { formatMonth, interpolate } from '@/lib/format';
import Highlight from './Highlight';
import styles from './Experience.module.css';

export default function Experience({ locale, t }) {
  return (
    <section id="experience" className="section">
      <div className="section-head s-reveal">
        <h2 className="section-title">{t.experience.title}</h2>
        <span className="section-meta">
          {interpolate(t.experience.summary, { years: yearsOfExperience(), roles: experience.length })}
        </span>
      </div>

      <div className={styles.timeline}>
        <span className={styles.track} aria-hidden="true" />
        <span className={`${styles.track} ${styles.progress} s-line`} aria-hidden="true" />

        <ol className={styles.list}>
          {experience.map((job) => {
            const current = job.end === null;
            const range = `${formatMonth(job.start, locale)} — ${
              current ? t.dates.present : formatMonth(job.end, locale)
            }`;

            return (
              <li key={`${job.company}-${job.start}`} className={styles.item}>
                <span className={`${styles.dot} ${current ? styles.dotCurrent : ''} s-dot`} aria-hidden="true">
                  {current && <span className={`${styles.pulse} a-pulse`} />}
                </span>

                <article className={`card h-card s-slide ${styles.card}`}>
                  <div className={styles.top}>
                    <h3 className={styles.title}>{job.title[locale]}</h3>
                    {current ? (
                      <span className={styles.badge}>
                        {t.experience.current} · {range}
                      </span>
                    ) : (
                      <span className={styles.date}>{range}</span>
                    )}
                  </div>
                  <p className={styles.company}>{job.company}</p>
                  <ul className={styles.highlights}>
                    {job.highlights[locale].map((text) => (
                      <li key={text}>
                        <Highlight text={text} />
                      </li>
                    ))}
                  </ul>
                  <div className={styles.tags}>
                    {job.tags[locale].map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
