// src/components/ContactSection/ContactSection.tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Contact.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    ScrollTrigger.create({
      trigger: headingRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(headingRef.current, {
          scaleX: 1,
          borderRadius: '12px',      // 원 → 사각 코너
          duration: 2,
          ease: 'power2.out',
        });
      },
      once: true,
    });
  }, []);

  return (
    <section id="contact" className={styles.contactSection}>
      {/* preHeading 필요하면 여기에 */}
      <div
        ref={headingRef}
        className={styles.mainHeading}
      >
        KEEP IN TOUCH
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.ctaBox}>
          <a
            href="mailto:bomikim046@gmail.com"
            className={styles.ctaButton}
          >
            {`{ TEXT ME HERE }`}
          </a>
        </div>

        <div className={styles.contactMethods}>
          <h3 className={styles.sectionTitle}>CONTACT</h3>
          <ul>
            <li><a href="mailto:bomikim046@gmail.com">Email</a></li>
            <li>
              <a
                href="https://www.instagram.com/matomabo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.otherLinks}>
          <h3 className={styles.sectionTitle}>OTHER</h3>
          <ul>
            <li>
              <a
                href="https://github.com/zoeznm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://defiant-saffron-661.notion.site/Frontend-Developer-Portfolio-2100b479a400805d81b4f21761d15a9e?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notion
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer}>
        <span>2025 ALL RIGHTS RESERVED</span>
        <span>DEVELOPED BY BomiKim</span>
      </div>
    </section>
  );
}
