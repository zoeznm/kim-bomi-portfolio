// src/components/Portfolio/DetailLayout.tsx

import React from 'react';
import styles from './DetailLayout.module.scss';

interface DetailLayoutProps {
  title: string;
  images: string[];       // 왼쪽 스크롤할 이미지 URL 리스트
  reason: React.ReactNode; // 만든 이유
  stack: React.ReactNode;  // 사용한 스택
  features: React.ReactNode; // 핵심 기능
}

export default function DetailLayout({
  
  title,
  images,
  reason,
  stack,
  features
}: DetailLayoutProps) {
  return (
    <div className={styles.detailContainer}>
      <aside className={styles.images}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`${title} screenshot ${i+1}`} />
        ))}
      </aside>
      <section className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.reason}>
          <h2>만든 이유</h2>
          {reason}
        </div>
        <div className={styles.stack}>
          <h2>사용한 스택</h2>
          {stack}
        </div>
        <div className={styles.features}>
          <h2>핵심 기능</h2>
          {features}
        </div>
      </section>
    </div>
  );
}
