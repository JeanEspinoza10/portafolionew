import Image from 'next/image';
import { stack } from '@/data/stack';
import styles from './Stack.module.css';

export default function Stack({ locale, t }) {
  return (
    <section id="stack" className="section">
      <div className="section-head s-reveal">
        <h2 className="section-title">{t.stack.title}</h2>
      </div>
      <div className={styles.groups}>
        {stack.map((group) => (
          <div key={group.group.es} className={`${styles.row} s-reveal`}>
            <h3 className={styles.label}>{group.group[locale]}</h3>
            <ul className={styles.chips}>
              {group.items.map((item) => (
                <li key={item.name} className={styles.chip}>
                  {item.icon ? (
                    <Image src={item.icon} alt="" width={32} height={32} className={styles.icon} />
                  ) : (
                    <span className={`${styles.icon} ${styles.mono}`} aria-hidden="true">
                      {item.mono}
                    </span>
                  )}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
