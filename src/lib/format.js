// "2025-11" -> "nov 2025" (es) / "Nov 2025" (en)
export function formatMonth(yearMonth, locale) {
  const [year, month] = yearMonth.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, 1));
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'es-PE', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
    .format(date)
    .replace('.', '');
}

// "Hola {name}" + { name: 'Jean' } -> "Hola Jean"
export function interpolate(text, values) {
  return text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
}
