import { getDictionary } from '@/i18n/getDictionary';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Stack from '@/components/Stack';
import Contact from '@/components/Contact';

export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <main className="container">
      <Hero locale={locale} t={t} />
      <Experience locale={locale} t={t} />
      <Projects locale={locale} t={t} />
      <Certifications locale={locale} t={t} />
      <Stack locale={locale} t={t} />
      <Contact t={t} />
    </main>
  );
}
