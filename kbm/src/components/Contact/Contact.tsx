// src/components/ContactSection/ContactSection.tsx

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
            {`{ TEXT ME HERE }`}
          </a>
        </div>

        <div className={styles.contactMethods}>
          <h3 className={styles.sectionTitle}>CONTACT</h3>
          <ul>
            <li><a href="mailto:bomikim046@gmail.com">Email</a></li>
            <li>
              <a
                href="https://www.instagram.com/matomabo?igsh=MWxmMTMzOXZ1YXV5Ng%3D%3D&utm_source=qr"
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
                href="https://www.notion.so/Bomi-s-Portfolio-1270b479a40080b786e3f0606b8f5118?pvs=4"
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
