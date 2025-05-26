// src/components/CustomCursor.tsx
import { useEffect, useState } from 'react';
import styles from './CustomCursor.module.scss';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{ top: pos.y, left: pos.x }}
    >
      ✦
    </div>
  );
}
