import { locales } from '@/i18n/config';
import { profile } from '@/data/profile';

export default function sitemap() {
  return locales.map((locale) => ({
    url: `${profile.siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === 'es' ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${profile.siteUrl}/${l}`])),
    },
  }));
}
