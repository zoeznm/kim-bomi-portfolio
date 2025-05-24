// src/components/Portfolio/Portfolio.tsx
import { Link } from 'react-router-dom';
import styles from './Portfolio.module.scss';

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      {/* 마퀴 영역 */}
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

      {/* Personal Works 섹션 */}
      <section id="personal-works" className={styles.section}>
        <h2 className={styles.sectionTitle}>= Personal Works</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/portfolio/personal/my-wishlist" className={styles.cardLink}>
              <span className={styles.year}>2024</span>
              <h3 className={styles.title}>My Wishlist</h3>
              <div className={styles.tags}>
              <span className={styles.tag}>UI/UX</span>
                <span className={styles.tag}>Design</span>
                <span className={styles.tag}>Development</span>
              </div>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/portfolio/personal/old-portfolio" className={styles.cardLink}>
              <span className={styles.year}>2024</span>
              <h3 className={styles.title}>OLD_Portfolio</h3>
              <div className={styles.tags}>
              <span className={styles.tag}>UI/UX</span>
                <span className={styles.tag}>Design</span>
                <span className={styles.tag}>Development</span>
              </div>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/portfolio/personal/hs-pos" className={styles.cardLink}>
              <span className={styles.year}>2025</span>
              <h3 className={styles.title}>HS POS</h3>
              <div className={styles.tags}>
              <span className={styles.tag}>UI/UX</span>
                <span className={styles.tag}>Design</span>
                <span className={styles.tag}>Development</span>
              </div>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/portfolio/personal/graduation-show" className={styles.cardLink}>
              <span className={styles.year}>2025</span>
              <h3 className={styles.title}>Graduation SHOW</h3>
              <div className={styles.tags}>
              <span className={styles.tag}>UI/UX</span>
                <span className={styles.tag}>Design</span>
                <span className={styles.tag}>Development</span>
              </div>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/portfolio/personal/new-portfolio" className={styles.cardLink}>
              <span className={styles.year}>2025</span>
              <h3 className={styles.title}>NEW_Portfolio</h3>
              <div className={styles.tags}>
              <span className={styles.tag}>UI/UX</span>
                <span className={styles.tag}>Design</span>
                <span className={styles.tag}>Development</span>
              </div>
            </Link>
          </li>
        </ul>
      </section>

      {/* Team Works 섹션 */}
      <section id="team-works" className={styles.section}>
        <h2 className={styles.sectionTitle}>= Team Works</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/portfolio/team/vending-machine" className={styles.cardLink}>
              <span className={styles.year}>2024</span>
              <h3 className={styles.title}>Vending-Machine</h3>
              <div className={styles.tags}>
                <span className={styles.tag}>UI/UX</span>
                <span className={styles.tag}>Design</span>
                <span className={styles.tag}>Development</span>
              </div>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/portfolio/team/developer-erp" className={styles.cardLink}>
              <span className={styles.year}>2024</span>
              <h3 className={styles.title}>Developer ERP</h3>
              <div className={styles.tags}>
                <span className={styles.tag}>UI/UX</span>
                <span className={styles.tag}>Design</span>
                <span className={styles.tag}>Development</span>
              </div>
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/portfolio/team/machine-learning" className={styles.cardLink}>
              <span className={styles.year}>2024</span>
              <h3 className={styles.title}>Machine Learning</h3>
              <div className={styles.tags}>
                <span className={styles.tag}>UI/UX</span>
                <span className={styles.tag}>Design</span>
                <span className={styles.tag}>Development</span>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
}
