import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import styles from './Portfolio.module.scss';

gsap.registerPlugin(ScrollTrigger);

const BOX_COUNT = 5;
const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function ScrollingBoxes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

   const boxes = Array.from({ length: BOX_COUNT }).map((_, i) => ({
       left: rand(5, 85),
       width: rand(200, 350),
       // base를 80~120vh로 당기고, 간격을 120vh 단위로 줄임
       top: rand(80, 120) + i * 120 
     }));

     useEffect(() => {
      const container = containerRef.current!;
      const titleEl   = titleRef.current!;
    
      // 1) 초기엔 숨김
      gsap.set(titleEl, { autoAlpha: 0 });
    
      ScrollTrigger.create({
        trigger: container,
        // 섹션 top이 뷰포트 75% 지점에 닿을 때 발동
        start: 'top 60%',
        // 아래로 스크롤해 진입하면 play → 등장
        onEnter:      () => gsap.to(titleEl, {
          autoAlpha: 1,
          duration: 0.6,
          ease: 'power3.out'
        }),
        // 위로 스크롤해 시작점 이전으로 돌아갈 때 reverse → 사라짐
        onLeaveBack:  () => gsap.to(titleEl, {
          autoAlpha: 0,
          duration: 0,
          ease: 'power3.in'
        }),
        // markers: true, // (디버그용)
      });
    }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <h2 ref={titleRef} className={styles.title}>
        Portfolio
      </h2>
      {boxes.map((box, idx) => (
        <div
          key={idx}
          className={styles.box}
          style={{
            left: `${box.left}%`,
            width: `${box.width}px`,
            top: `${box.top}vh`
          }}
        >
          <div className={styles.card}>
            <h3>Project {idx + 1}</h3>
            <p>UX/UI &amp; Development</p>
            <a className={styles.link}>{'{ VIEW CASE }'}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
