// Muestra **texto** como <strong>.
export default function Highlight({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} style={{ color: 'var(--text)' }}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}
