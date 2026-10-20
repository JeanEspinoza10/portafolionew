import { projects } from '@/data/projects';
import styles from './Cards.module.css';

export default function Projects({ locale, t }) {
  return (
    <section id="projects" className="section">
      <div className="section-head s-reveal">
        <h2 className="section-title">{t.projects.title}</h2>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.name} className={`card h-card s-reveal ${styles.card}`}>
            <h3 className={styles.title}>{project.name}</h3>
            <p className={styles.text}>{project.description[locale]}</p>
            <p className={styles.stack}>{project.stack.join(' · ')}</p>
            <div className={styles.links}>
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label[locale]} ↗
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
