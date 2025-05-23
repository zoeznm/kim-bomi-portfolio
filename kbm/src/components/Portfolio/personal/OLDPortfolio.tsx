// src/components/Portfolio/personal/OLDPortfolio.tsx

import { useParams, Link } from 'react-router-dom';
import { personalProjects, type ProjectDetail } from '../data';
import styles from './MyWishlist.module.scss'; // 같은 스타일 사용

export default function OLDPortfolio() {
  const { slug } = useParams<{ slug: string }>();
  const proj: ProjectDetail | undefined = personalProjects.find(
    (p) => p.slug === slug
  );

  if (!proj) return <p>Project not found.</p>;

  return (
    <div className={styles.detailContainer}>
      <aside className={styles.images}>
        {proj.images.map((src, i) => (
          <img key={i} src={src} alt={`${proj.title} screenshot ${i + 1}`} />
        ))}
      </aside>
      <section className={styles.info}>
        <Link to="/portfolio" className={styles.back}>
          ← Back to Portfolio
        </Link>
        <h1 className={styles.title}>{proj.title}</h1>

        <div className={styles.reason}>
          <h2>만든 이유</h2>
          <p>{proj.reason}</p>
        </div>

        <div className={styles.stack}>
          <h2>사용한 스택</h2>
          <ul>
            {proj.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.features}>
          <h2>핵심 기능</h2>
          <ul>
            {proj.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
