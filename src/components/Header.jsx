import Link from 'next/link';
import LangToggle from './LangToggle';
import NavMenu from './NavMenu';
import styles from './Header.module.css';

export default function Header({ locale, t }) {
  const home = `/${locale}`;
  const links = [
    { href: `${home}#experience`, label: t.nav.experience },
    { href: `${home}#projects`, label: t.nav.projects },
    { href: `${home}#certifications`, label: t.nav.certifications },
    { href: `${home}/blog`, label: t.nav.blog },
    { href: `${home}#contact`, label: t.nav.contact },
  ];

  return (
    <header className={`${styles.header} a-header`}>
      <div className={`container ${styles.inner}`}>
        <Link href={home} className={styles.brand}>
          Jean Espinoza
        </Link>
        <div className={styles.right}>
          <div className={styles.menu}>
            <NavMenu links={links} label={t.nav.label} openLabel={t.nav.open} closeLabel={t.nav.close} />
          </div>
          <LangToggle locale={locale} label={t.nav.language} />
        </div>
      </div>
    </header>
  );
}
