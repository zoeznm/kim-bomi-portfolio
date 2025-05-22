// src/components/ContactSection/ContactSection.tsx
import React from 'react';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.mainHeading}>KEEP IN TOUCH</div>

      <div className={styles.contentGrid}>
        <div className={styles.ctaBox}>
          <a
            href="mailto:bomikim046@gmail.com"
            className={styles.ctaButton}
          >
            {`{ BOOK FREE CONSULTATION }`}
          </a>
        </div>

        <div className={styles.contactMethods}>
          <h3 className={styles.sectionTitle}>CONTACT</h3>
          <ul>
            <li><a href="mailto:bomikim046@gmail.com">Email</a></li>
            <li>
              <a
                href="https://t.me/yourtelegram"
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
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notion
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
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
