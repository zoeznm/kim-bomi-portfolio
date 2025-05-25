// src/components/Portfolio/personal/PersonalDetail.tsx
import { useParams, Link } from 'react-router-dom';
import { personalProjects, type ProjectDetail } from '../data';
import styles from './PersonalDetail.module.scss';

export default function PersonalDetail() {
  const { slug } = useParams<{ slug: string }>();
  const projIndex = personalProjects.findIndex(p => p.slug === slug);
  const proj: ProjectDetail | undefined = personalProjects[projIndex];

  if (!proj) return <p>Project not found.</p>;

  const nextProj = personalProjects[projIndex + 1];
  const nextSlug = nextProj?.slug;

  // 기본 .title 외에 slug 기반 modifier 클래스를 추가
  const titleClass = `${styles.title} ${styles[proj.slug] || ''}`;

  return (
    <div className={styles.detailContainer}>
      <aside className={styles.images}>
        {proj.images.map((src, i) => (
          <img key={i} src={src} alt={`${proj.title} screenshot ${i + 1}`} />
        ))}
      </aside>

      <section className={styles.info}>
        <div className={styles.navButtons}>
          <Link to="/portfolio" className={styles.back}>← Back to Home</Link>
          {nextSlug && (
            <Link to={`/portfolio/personal/${nextSlug}`} className={styles.next}>
              Next Project →
            </Link>
          )}
        </div>

        <h1 className={titleClass}>{proj.title}</h1>

        <div className={styles.reason}>
          <h2>Why I Made This</h2>
          <p>{proj.reason}</p>
        </div>
        <div className={styles.stack}>
          <h2>Tech Stack</h2>
          <ul>
            {proj.stack.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className={styles.features}>
          <h2>Core Features</h2>
          <ul>
            {proj.features.map(f => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </section>
    </div>
  );
}
