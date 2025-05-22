import React, { useState } from 'react';
import styles from './About.module.scss';

declare module '*.png';

const features = [
  { title: 'Who I Am', content: '팝업 및 인터랙티브 UI 경험을 중시하는 프론트엔드 개발자입니다. 사용자 여정을 최적화하고, 감각적인 애니메이션으로 브랜드 메시지를 전달합니다.' },
  { title: 'Core Skills', content: 'React, Next.js, TypeScript, SCSS, GSAP, Web Accessibility, Performance Optimization' },
  { title: 'Vision', content: '모든 사용자가 편리하게 이용할 수 있는 웹을 구축하여, 디지털 장벽을 허무는 것을 목표로 합니다.' },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.photoBox}>
  <img src="/images/me.png" alt="Profile" className={styles.photoImg} />
</div>
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.featureTabs}>
        {features.map((f, i) => (
          <button
            key={f.title}
            className={i === activeIndex ? styles.tabActive : styles.tab}
            onClick={() => setActiveIndex(i)}
          >
            {f.title}
          </button>
        ))}
      </div>
      <div className={styles.featureContent}>
        <p>{features[activeIndex].content}</p>
      </div>
    </section>
  );
}
