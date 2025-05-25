// src/components/Portfolio/team/TeamDetail.tsx
import { useParams, Link } from 'react-router-dom';
import { teamProjects, type TeamProject } from '../data';
import styles from './TeamDetail.module.scss';

interface SectionConfig {
  heading1: string;
  heading2: string;
  heading3: string;
}

// 슬러그별로 렌더링할 섹션 타이틀 매핑
const sectionConfigs: Record<string, SectionConfig> = {
  'vending-machine': {
    heading1: '프로젝트 개요',
    heading2: '작동 방식',
    heading3: '테마 예시',
  },
  'developer-erp': {
    heading1: 'ERP 시스템 개요',
    heading2: '주요 기능',
    heading3: '결론',
  },
  'machine-learning': {
    heading1: '프로젝트 개요',
    heading2: '주요 기능',
    heading3: '프로젝트 목표',
  },
};

export default function TeamDetail() {
  const { slug } = useParams<{ slug: string }>();
  const projIndex = teamProjects.findIndex(p => p.slug === slug);
  const proj: TeamProject | undefined = teamProjects[projIndex];

  if (!proj) return <p>Project not found.</p>;

  const nextProj = teamProjects[projIndex + 1];
  const nextSlug = nextProj?.slug;

  const { heading1, heading2, heading3 } =
    sectionConfigs[proj.slug] || sectionConfigs['vending-machine'];

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
            <Link to={`/portfolio/team/${nextSlug}`} className={styles.next}>
              Next Project →
            </Link>
          )}
        </div>

        <h1 className={titleClass}>{proj.title}</h1>

        <div className={styles.reason}>
          <h3 className={styles.heading}>{heading1}</h3>
          <p>{proj.overview}</p>

          <h3 className={styles.heading}>{heading2}</h3>
          <ul>
            {proj.workflow.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>

          <h3 className={styles.heading}>{heading3}</h3>
          <p>{proj.themeExample}</p>
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

        {/* — 배포 URL / 진행 상태 */}
        <div className={styles.deploy}>
          {proj.deployUrl
            ? <a href={proj.deployUrl} target="_blank" rel="noopener noreferrer" className={styles.deployButton}>
                Visit Live Site
              </a>
            : <span className={styles.deployPlaceholder}>NO URL</span>
          }
        </div>
      </section>
    </div>
  );
}
