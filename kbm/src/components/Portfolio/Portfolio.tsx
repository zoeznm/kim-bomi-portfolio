// src/components/Portfolio/Portfolio.tsx

// import React from 'react';
import styles from "./Portfolio.module.scss";

interface Project {
  year: number;
  title: string;
  tags: string[];
}

// 팀 작업 목록
const teamProjects: Project[] = [
  { year: 2024, title: "igma.im", tags: ["UI/UX", "Development"] },
  { year: 2023, title: "Kryptex Pool", tags: ["UI/UX", "Development"] },
  { year: 2022, title: "Quarks", tags: ["UI/UX", "Motion"] },
];

// 개인 작업 목록
const personalProjects: Project[] = [
  { year: 2024, title: "My Portfolio", tags: ["Design", "Development"] },
  { year: 2024, title: "My Portfolio", tags: ["Design", "Development"] },
  { year: 2025, title: "Landing Page", tags: ["UI/UX", "Animation"] },
  { year: 2025, title: "Blog Theme", tags: ["CSS", "Responsive"] },
  { year: 2025, title: "Blog Theme", tags: ["CSS", "Responsive"] },
];

export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className={styles.portfolioSection}>
        <div className={styles.marquee}>
          <div className={styles.marqueeInner}>
            {/* 두 번 복제 */}
            <div className={styles.group}>
              {/* 여기 반복 텍스트로 길게 채우기 */}
              Portfolio <span className={styles.star}>✹</span>Portfolio{" "}
              <span className={styles.star}>✹</span>Portfolio{" "}
              <span className={styles.star}>✹</span>Portfolio{" "}
              <span className={styles.star}>✹</span>Portfolio{" "}
              <span className={styles.star}>✹</span> Portfolio
            </div>
            <div className={styles.group}>
              {/* 여기 반복 텍스트로 길게 채우기 */}
              <span className={styles.star}>✹</span>Portfolio{" "}
              <span className={styles.star}>✹</span>Portfolio{" "}
              <span className={styles.star}>✹</span>Portfolio{" "}
              <span className={styles.star}>✹</span>Portfolio{" "}
              <span className={styles.star}>✹</span>Portfolio{" "}
              <span className={styles.star}>✹</span>Portfolio
            </div>
          </div>
        </div>
        {/* Personal Works 섹션 */}
        <section id="personal-works" className={styles.section}>
          <h2 className={styles.sectionTitle}>= Personal Works</h2>
          <ul className={styles.list}>
            {personalProjects.map((proj, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.year}>{proj.year}</span>
                <h3 className={styles.title}>{proj.title}</h3>
                <div className={styles.tags}>
                  {proj.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
        {/* Team Works 섹션 */}
        <section id="team-works" className={styles.section}>
          <h2 className={styles.sectionTitle}>= Team Works</h2>
          <ul className={styles.list}>
            {teamProjects.map((proj, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.year}>{proj.year}</span>
                <h3 className={styles.title}>{proj.title}</h3>
                <div className={styles.tags}>
                  {proj.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
