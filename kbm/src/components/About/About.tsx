import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import styles from './About.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<'profile'|'skills'|'vision'>('profile');

  // 스크롤 애니메이션 (optional)
  useEffect(() => {
    const el = ref.current!;
    gsap.fromTo(
      el,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={ref} className={styles.about}>
      <div className={styles.inner}>
        {/* 왼쪽: 사진 */}
        <div className={styles.photoBox}>
          <img
            src="/images/profile-placeholder.jpg"
            alt="Profile"
          />
        </div>

        {/* 오른쪽: 한줄 소개 + 토글 */}
        <div className={styles.content}>
          <p className={styles.tagline}>
            사용자 중심의 인터랙티브 웹을 구현하는 프론트엔드 엔지니어
          </p>

          {/* 세 개의 원 버튼 */}
          <div className={styles.tabs}>
            <button
              className={active === 'profile' ? styles.active : ''}
              onClick={() => setActive('profile')}
            >
              Profile
            </button>
            <button
              className={active === 'skills' ? styles.active : ''}
              onClick={() => setActive('skills')}
            >
              Skills
            </button>
            <button
              className={active === 'vision' ? styles.active : ''}
              onClick={() => setActive('vision')}
            >
              Vision
            </button>
          </div>

          {/* 토글 콘텐츠 */}
          <div className={styles.tabContent}>
            {active === 'profile' && (
              <div className={styles.panel}>
                <h3>간단한 프로필 요약</h3>
                <p>Front-end 개발 3년 차, React·TypeScript 전문</p>
              </div>
            )}
            {active === 'skills' && (
              <div className={styles.panel}>
                <h3>핵심 역량</h3>
                <ul>
                  <li>React / Next.js</li>
                  <li>TypeScript / SCSS</li>
                  <li>GSAP 애니메이션</li>
                </ul>
              </div>
            )}
            {active === 'vision' && (
              <div className={styles.panel}>
                <h3>비전 & 목표</h3>
                <p>접근성 높고, 사용자 참여를 이끄는 인터랙티브 경험 제공</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
