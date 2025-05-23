// src/components/Portfolio/personal/MyWishlist.tsx


import { useParams, Link } from 'react-router-dom';
import { personalProjects } from '../data';
import styles from './MyWishlist.module.scss';

export default function MyWishlist() {
  const { slug } = useParams<{ slug: string }>();
  const proj = personalProjects.find(p => p.slug === slug);
  if (!proj) return <p>Project not found.</p>;

  // 예시 이미지 리스트 (public/images 아래에 파일이 있어야 합니다)
  const images = [
    `/images/${proj.slug}-1.png`,
    `/images/${proj.slug}-2.png`,
    `/images/${proj.slug}-3.png`,
  ];

  return (
    <div className={styles.detailContainer}>
      {/* 왼쪽: 스크롤되는 이미지들 */}
      <aside className={styles.images}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`${proj.title} screenshot ${i + 1}`} />
        ))}
      </aside>

      {/* 오른쪽: 고정된 정보 영역 */}
      <section className={styles.info}>
        <Link to="/portfolio" className={styles.back}>
          ← Back to Portfolio
        </Link>
        <h1 className={styles.title}>{proj.title}</h1>

        <div className={styles.reason}>
          <h2>만든 이유</h2>
          <p>…프로젝트를 만든 이유를 여기에 작성하세요…</p>
        </div>

        <div className={styles.stack}>
          <h2>사용한 스택</h2>
          <ul>
            {proj.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className={styles.features}>
          <h2>핵심 기능</h2>
          <ul>
            <li>핵심 기능 A</li>
            <li>핵심 기능 B</li>
            <li>핵심 기능 C</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
