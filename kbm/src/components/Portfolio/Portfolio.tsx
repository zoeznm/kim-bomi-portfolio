// src/components/Portfolio/Portfolio.tsx
import { useState, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Portfolio.module.scss';

interface Work {
  slug: string;
  year: string;
  title: string;
  tags: string[];
  previewSrc: string;     // ← 여기에 미리보기 이미지 경로를 넣습니다
}

// Personal Works 데이터
const personalWorks: Work[] = [
  {
    slug: 'my-wishlist',
    year: '2024',
    title: 'My Wishlist',
    tags: ['UI/UX', 'Design', 'Development'],
    previewSrc: new URL('../../assets/images/mywishlist/mywishlist_1.png', import.meta.url).href
  },
  {
    slug: 'old-portfolio',
    year: '2024',
    title: 'OLD Portfolio',
    tags: ['UI/UX', 'Design', 'Development'],
    previewSrc: new URL('../../assets/images/oldversion/old_1.png', import.meta.url).href
  },
  {
    slug: 'hs-pos',
    year: '2025',
    title: 'HS POS',
    tags: ['UI/UX', 'Design', 'Animation'],
    previewSrc: new URL('../../assets/images/hspos/hspos_1.png', import.meta.url).href
  },
  {
    slug: 'graduation-show',
    year: '2025',
    title: 'Graduation SHOW',
    tags: ['CSS', 'Responsive'],
    previewSrc: new URL('../../assets/images/graduation/show_1.png', import.meta.url).href
  },
  {
    slug: 'new-portfolio',
    year: '2025',
    title: 'NEW Portfolio',
    tags: ['CSS', 'Responsive'],
    previewSrc: new URL('../../assets/images/newversion/new_1.png', import.meta.url).href
  },
];

// Team Works 데이터
const teamWorks: Work[] = [
  {
    slug: 'vending-machine',
    year: '2024',
    title: 'Vending Machine',
    tags: ['UI/UX', 'Development'],
    previewSrc: new URL('../../assets/images/vendingmachine/vending_1.png', import.meta.url).href
  },
  {
    slug: 'developer-erp',
    year: '2024',
    title: 'Developer ERP',
    tags: ['UI/UX', 'Design', 'Development'],
    previewSrc: new URL('../../assets/images/erp/erp1.png', import.meta.url).href
  },
  {
    slug: 'machine-learning',
    year: '2024',
    title: 'Machine Learning',
    tags: ['UI/UX', 'Motion'],
    previewSrc: new URL('../../assets/images/machinelearning/ml4.png', import.meta.url).href
  },
];

export default function Portfolio() {
  const [hoverSrc, setHoverSrc] = useState<string | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseEnter = (src: string) => {
    setHoverSrc(src);
  };
  const handleMouseMove = (e: MouseEvent) => {
    setHoverPos({ x: e.clientX, y: e.clientY });
  };
  const handleMouseLeave = () => {
    setHoverSrc(null);
  };

  return (
    <section id="portfolio" className={styles.portfolioSection}>
                  <div className={styles.marquee}>
        <div className={styles.marqueeInner}>
          <div className={styles.group}>
            Portfolio <span className={styles.star}>✦</span> Portfolio <span className={styles.star}>✦</span> Portfolio <span className={styles.star}>✦</span> Portfolio <span className={styles.star}>✦</span> Portfolio <span className={styles.star}>✦</span> Portfolio
          </div>
          <div className={styles.group}>
          <span className={styles.star}>✦</span> Portfolio <span className={styles.star}>✦</span> Portfolio <span className={styles.star}>✦</span> Portfolio <span className={styles.star}>✦</span> Portfolio <span className={styles.star}>✦</span> Portfolio <span className={styles.star}>✦</span> Portfolio
          </div>
        </div>
      </div>
      {/* 커서 따라다니는 미리보기 */}
      {hoverSrc && (
        <img
          src={hoverSrc}
          alt="preview"
          className={styles.hoverImage}
          style={{
            top: hoverPos.y + 16,
            left: hoverPos.x + 16,
          }}
        />
      )}

      {/* Personal Works */}
      <section id="personal-works" className={styles.section}>
        <h2 className={styles.sectionTitle}>= Personal Works</h2>
        <ul className={styles.list}>
          {personalWorks.map((w) => (
            <li
              key={w.slug}
              className={styles.item}
              onMouseEnter={() => handleMouseEnter(w.previewSrc)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={`/portfolio/personal/${w.slug}`} className={styles.cardLink}>
                <span className={styles.year}>{w.year}</span>
                <h3 className={styles.title}>{w.title}</h3>
                <div className={styles.tags}>
                  {w.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Team Works */}
      <section id="team-works" className={styles.section}>
        <h2 className={styles.sectionTitle}>= Team Works</h2>
        <ul className={styles.list}>
          {teamWorks.map((w) => (
            <li
              key={w.slug}
              className={styles.item}
              onMouseEnter={() => handleMouseEnter(w.previewSrc)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={`/portfolio/team/${w.slug}`} className={styles.cardLink}>
                <span className={styles.year}>{w.year}</span>
                <h3 className={styles.title}>{w.title}</h3>
                <div className={styles.tags}>
                  {w.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
