// import React from 'react';
import { useState } from 'react';

import styles from './MainPage.module.scss';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';

export default function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.navLeft}>
          <span>PTFOLIO</span>
          <span className={styles.separator}>&mdash;</span>
          <span>WEB DEVELOPER</span>
        </nav>

        <div className={styles.navCenter}>
          <button
            className={styles.menuBtn}
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={styles.navRight}>
          <a href="#fun" className={styles.funVersion}>
            {'{ KOREAN }'}
          </a>
        </div>
      </header>
            {/* 풀스크린 메뉴 오버레이 */}
            {menuOpen && (
        <div className={styles.overlay}>
          <button
            className={styles.closeBtn}
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <ul className={styles.overlayNav}>
                      {['Who I Am', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
     <a
       href={ item === 'Who I Am' ? '#about' : `#${item.toLowerCase().replace(/\s+/g, '-')}` }
       onClick={() => setMenuOpen(false)}
     >
       {item}
     </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hero */}
      <main className={styles.hero}>
        <h1 className={styles.name}>
          Front-end <span className={styles.star}>✹</span> Engineer
        </h1>
        <div className={styles.tagline}>
          <p>I design clean modern</p>
          <p>websites that embody the</p>
          <p>essence of your brand</p>
          <a href="#contact" className={styles.cta}>
            {`{ SCROLL DOWN}`}
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.award}>
            Winner of <strong>8</strong> international&nbsp;
            <a href="#awards">awards</a>
          </div>
          <div className={styles.location}>
            Based in Korea,<br />available worldwide
          </div>
        </div>
      </main>
      <About />
      <Portfolio />
    </div>
  );
}
