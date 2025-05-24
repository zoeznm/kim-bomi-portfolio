// src/components/Why/Why.tsx
import { useState } from 'react';
import styles from './Why.module.scss';

interface Reason {
  keyword: string;
  detail: string;
}

const reasons: Reason[] = [
  { keyword: 'UX', detail: '사용자의 행동 패턴을 분석해 직관적이고 접근성 높은 UI를 구현함으로써, 누구나 쉽게 사용할 수 있는 웹 경험을 만들어가고 싶습니다.' },
  { keyword: 'Animation', detail: '애니메이션과 모션 디자인을 활용해 콘텐츠에 생동감을 불어넣고, 시각적 몰입감을 극대화하는 인터랙티브 페이지를 제작하고 싶습니다.' },
  { keyword: 'Dev Tools', detail: 'React, TypeScript, Vite 등 최신 프레임워크와 도구를 적극 활용해 효율적인 개발 워크플로우를 구축하고, 트렌드를 선도하는 코드를 작성하고 싶습니다.' },
  { keyword: 'Optimization', detail: '복잡한 UI 로직과 성능 병목을 분석·최적화하며, 알고리즘적 사고를 바탕으로 코드 품질과 응답 속도를 높이고 싶습니다.' },
  { keyword: 'Collaboration', detail: '디자이너, 백엔드 엔지니어와의 긴밀한 협업을 통해 아이디어를 구체화하고, 팀 단위로 완성도 높은 제품을 만들어가는 과정을 즐기고 싶습니다.' },
];

export default function Why() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // 원형 텍스트 세팅
  const circleText = 'Dreaming of being a Frontend Dev!';
  const chars = Array.from(circleText);
  const radius = 140;
  const delta = 360 / chars.length;
  const startAngle = -90;

  return (
    <section className={styles.wrapper} id="why-frontend">
      <h2 className={styles.title}>
        Why I Want to Become a Frontend Developer
      </h2>

      {/* — 원형 텍스트 */}
      <div className={styles.circleContainer} style={{ width: radius * 2, height: radius * 2 }}>
        {chars.map((ch, i) => {
          const ang = startAngle + i * delta;
          return (
            <span
              key={i}
              className={styles.circleChar}
              style={{
                transform: `
                  rotate(${ang}deg)
                  translate(${radius}px)
                  rotate(90deg)
                `
              }}
            >
              {ch}
            </span>
          );
        })}
      </div>

      {/* — 리스트 */}
      <ul className={styles.list}>
        {reasons.map((r, idx) => {
          const num = String(idx + 1).padStart(2, '0');
          const isOpen = openIndex === idx;
          return (
            <li key={r.keyword} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
              <button className={styles.trigger} onClick={() => toggle(idx)}>
                <span className={styles.text}>
                  {r.keyword} <sup>{num}</sup>
                </span>
                <span className={styles.arrow} />
              </button>
              <div className={styles.detail}>
                <p>{r.detail}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
