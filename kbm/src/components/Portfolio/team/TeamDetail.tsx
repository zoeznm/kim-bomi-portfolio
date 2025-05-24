// src/components/Portfolio/team/TeamDetail.tsx

import { useParams, Link } from 'react-router-dom';
import { teamProjects, type ProjectDetail } from '../data';
import styles from './TeamDetail.module.scss';

export default function TeamDetail() {
  const { slug } = useParams<{ slug: string }>();
  const projIndex = teamProjects.findIndex(p => p.slug === slug);
  const proj: ProjectDetail | undefined = teamProjects[projIndex];

  if (!proj) return <p>Project not found.</p>;

  const nextProj = teamProjects[projIndex + 1];
  const nextSlug = nextProj?.slug;

  return (
    <div className={styles.detailContainer}>
      <aside className={styles.images}>
        {proj.images.map((src, i) => (
          <img key={i} src={src} alt={`${proj.title} screenshot ${i + 1}`} />
        ))}
      </aside>

      <section className={styles.info}>
        <div className={styles.navButtons}>
          <Link to="/portfolio" className={styles.back}>
            ← Back to Home
          </Link>
          {nextSlug && (
            <Link
              to={`/portfolio/team/${nextSlug}`}
              className={styles.next}
            >
              Next Project →
            </Link>
          )}
        </div>

        <h1 className={styles.title}>{proj.title}</h1>
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
        {/* ... reason, stack, features ... */}
      </section>
    </div>
  );
}
