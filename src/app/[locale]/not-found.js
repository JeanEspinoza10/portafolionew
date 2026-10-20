import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container" style={{ padding: '120px 24px', minHeight: '60vh' }}>
      <p className="mono" style={{ color: 'var(--muted)', margin: 0 }}>404</p>
      <h1 style={{ fontSize: 36, margin: '12px 0' }}>Página no encontrada · Page not found</h1>
      <Link href="/" style={{ color: 'var(--accent)' }}>← Inicio · Home</Link>
    </main>
  );
}
