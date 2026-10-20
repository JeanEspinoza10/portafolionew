import Image from 'next/image';
import { profile, yearsOfExperience } from '@/data/profile';
import { interpolate } from '@/lib/format';
import styles from './Hero.module.css';

const WORD_DELAY = 0.08;
const FIRST_WORD = 0.35;

export default function Hero({ locale, t }) {
  const h = t.hero;
  const accentDelay = FIRST_WORD + h.titleWords.length * WORD_DELAY;

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.photo}>
        <span className={`${styles.ring} a-ring`} aria-hidden="true" />
        <Image
          src="/photo.jpg"
          alt={h.photoAlt}
          width={112}
          height={112}
          priority
          className={`${styles.img} a-photo`}
        />
      </div>

      <p className={`${styles.role} a-up`} style={{ animationDelay: '0.25s' }}>
        {h.role}
      </p>

      <h1 className={styles.title}>
        {h.titleWords.map((word, i) => (
          <span
            key={`${locale}-${i}`}
            className="a-word"
            style={{ animationDelay: `${(FIRST_WORD + i * WORD_DELAY).toFixed(2)}s`, marginRight: '0.24em' }}
          >
            {word}
          </span>
        ))}
        <span className={`a-word ${styles.accent}`} style={{ animationDelay: `${accentDelay.toFixed(2)}s` }}>
          <span className="a-under">{h.titleAccent}</span>
        </span>
      </h1>

      <p className={`${styles.bio} a-up`} style={{ animationDelay: '1s' }}>
        {interpolate(h.bio, { years: yearsOfExperience() })}
      </p>

      <div className={`${styles.actions} a-up`} style={{ animationDelay: '1.15s' }}>
        <a href="#contact" className={`${styles.btn} ${styles.primary}`}>
          {h.contact}
        </a>
        {profile.cvUrl && (
          <a href={profile.cvUrl} className={`${styles.btn} ${styles.secondary}`} download>
            {h.cv}
          </a>
        )}
        <a href={profile.github} className={styles.link} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a href={profile.linkedin} className={styles.link} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
