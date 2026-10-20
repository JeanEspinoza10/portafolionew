import { notFound } from 'next/navigation';
import { Geist, JetBrains_Mono } from 'next/font/google';
import { locales, isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';
import { profile } from '@/data/profile';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const sans = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

// Solo existen /es y /en; cualquier otro idioma da 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return {
    metadataBase: new URL(profile.siteUrl),
    title: { default: t.meta.title, template: `%s | ${profile.name}` },
    description: t.meta.description,
    authors: [{ name: profile.name }],
    alternates: {
      canonical: `/${locale}`,
      languages: { es: '/es', en: '/en', 'x-default': '/es' },
    },
    openGraph: {
      type: 'website',
      url: `/${locale}`,
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === 'es' ? 'es_PE' : 'en_US',
      images: ['/preview.png'],
    },
    twitter: { card: 'summary_large_image' },
    icons: { icon: '/icono.png' },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <html lang={locale} className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Header locale={locale} t={t} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
