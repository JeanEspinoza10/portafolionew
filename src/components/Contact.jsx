import { profile } from '@/data/profile';
import CopyEmail from './CopyEmail';
import styles from './Contact.module.css';

export default function Contact({ t }) {
  return (
    <section id="contact" className={`section s-reveal ${styles.contact}`}>
      <h2 className={styles.title}>{t.contact.title}</h2>
      <p className={styles.body}>{t.contact.body}</p>
      <CopyEmail
        encoded={Buffer.from(profile.email).toString('base64').split('').reverse().join('')}
        labels={{ copy: t.contact.copy, copied: t.contact.copied, copyFailed: t.contact.copyFailed }}
      />
    </section>
  );
}
