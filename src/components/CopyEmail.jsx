'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  // Respaldo para navegadores sin Clipboard API (o sin HTTPS).
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  const ok = document.execCommand('copy');
  area.remove();
  if (!ok) throw new Error('copy failed');
}

function CopyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

// El email llega codificado (base64 invertido) para que no aparezca en el HTML
// y los bots que recolectan correos no lo lean. Solo se decodifica al hacer click.
const decode = (encoded) => atob(encoded.split('').reverse().join(''));

export default function CopyEmail({ encoded, labels }) {
  const [status, setStatus] = useState('idle'); // idle | copied | failed
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const onCopy = async () => {
    clearTimeout(timer.current);
    try {
      await copyText(decode(encoded));
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
    timer.current = setTimeout(() => setStatus('idle'), 2200);
  };

  const copied = status === 'copied';

  return (
    <div className={styles.copyWrap}>
      <button
        type="button"
        onClick={onCopy}
        className={styles.copy}
        data-status={status}
      >
        <span className={styles.copyAction}>
          <span className={styles.iconSwap} data-copied={copied}>
            <span className={styles.iconCopy}><CopyIcon /></span>
            <span className={styles.iconCheck}><CheckIcon /></span>
          </span>
          {copied ? labels.copied : labels.copy}
        </span>
      </button>
      <p className={styles.status} role="status" aria-live="polite">
        {status === 'copied' ? labels.copied : status === 'failed' ? labels.copyFailed : ''}
      </p>
    </div>
  );
}
