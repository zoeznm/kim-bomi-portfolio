// src/components/MainPage/MainPage.tsx

import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './MainPage.module.scss';

export default function MainPage() {
  const { pathname } = useLocation();

  // 상세 페이지 여부
  const isDetail =
    pathname.startsWith('/portfolio/personal/') ||
    pathname.startsWith('/portfolio/team/');

  // 상세 진입 시 최상단으로 스크롤
  useEffect(() => {
    if (isDetail) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [isDetail]);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.navLeft}>
          <span>PTFOLIO</span>
          <span className={styles.separator}>&mdash;</span>
          <span>WEB DEVELOPER</span>
        </nav>
      </header>

      {/* Hero 섹션: 상세 페이지일 땐 숨김 */}
      {!isDetail && (
        <main className={styles.hero}>
          <h1 className={styles.name}>
            Front-end <span className={styles.star}>✹</span> Engineer
          </h1>
          <div className={styles.tagline}>
            <p>I design clean modern</p>
            <p>websites that embody the</p>
            <p>essence of your brand</p>
            <a href="#contact" className={styles.cta}>
              {'{ SCROLL DOWN }'}
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.award}>
              Winner of <strong>8</strong> international&nbsp;
              <a href="#awards">awards</a>
            </div>
            <div className={styles.location}>
              Based in Korea,
              <br />
              available worldwide
            </div>
          </div>
        </main>
      )}

      {/* Outlet: index(스크롤 섹션) 또는 상세 컴포넌트 */}
      <Outlet />
    </div>
  );
}
