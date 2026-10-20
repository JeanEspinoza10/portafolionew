import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';

// El blog se implementará más adelante. Los posts ya están en content/blog/<idioma>/*.md.
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  return {
    title: t.blog.title,
    alternates: { canonical: `/${locale}/blog`, languages: { es: '/es/blog', en: '/en/blog' } },
    robots: { index: false },
  };
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <main className="container" style={{ maxWidth: 720, padding: '96px 24px 120px' }}>
      <Link href={`/${locale}`} className="a-up" style={{ fontSize: 15, color: 'var(--muted)' }}>
        {t.blog.back}
      </Link>
      <h1 className="a-up" style={{ margin: '24px 0 0', fontSize: 44, fontWeight: 600, letterSpacing: '-0.03em', animationDelay: '0.08s' }}>
        {t.blog.title}
      </h1>
      <p className="a-up mono" style={{ margin: '12px 0 0', fontSize: 14, color: 'var(--accent)', animationDelay: '0.16s' }}>
        {t.blog.comingSoon}
      </p>
      <p className="a-up" style={{ margin: '20px 0 0', fontSize: 18, color: 'var(--text-2)', animationDelay: '0.24s' }}>
        {t.blog.intro}
      </p>
    </main>
  );
}
