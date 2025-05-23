// src/components/Portfolio/personal/PersonalDetail.tsx

import { useParams, Link } from 'react-router-dom';
import { personalProjects } from '../data';
import styles from '../Detail.module.scss';

export default function PersonalDetail() {
  const { slug } = useParams<{ slug: string }>();
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
        {/* 여기에 {proj.title} 상세 설명을 작성하세요 */}
        {proj.title} 프로젝트 상세 내용…
      </div>
    </article>
  );
}
