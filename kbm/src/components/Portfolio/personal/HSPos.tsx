// src/components/Portfolio/personal/HSPos.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { personalProjects } from '../data';
import styles from '../Detail.module.scss';

export default function HSPos() {
  const { slug } = useParams<{ slug: string }>();
  // slug 파라미터로 프로젝트를 찾아냅니다
  const proj = personalProjects.find(p => p.slug === slug);
  if (!proj) return <p>Project not found.</p>;

  return (
    <article className={styles.detail}>
      <Link to="/portfolio" className={styles.back}>
        ← Back to Portfolio
      </Link>
      <h1>{proj.title}</h1>
      <p><strong>Year:</strong> {proj.year}</p>
      <p><strong>Tags:</strong> {proj.tags.join(', ')}</p>
      <div className={styles.description}>
        {/* 여기에 HS POS 프로젝트 상세 설명을 작성하세요 */}
        HS POS 프로젝트는 …  
      </div>
    </article>
  );
}
