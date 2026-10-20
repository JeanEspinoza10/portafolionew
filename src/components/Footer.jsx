import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 12,
          paddingTop: 24,
          paddingBottom: 24,
          fontSize: 14,
          color: 'var(--muted)',
        }}
      >
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
