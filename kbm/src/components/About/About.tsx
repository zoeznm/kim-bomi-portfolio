// src/components/About/About.tsx
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import styles from './About.module.scss';
import profilePic from '../../assets/images/me.jpeg';

gsap.registerPlugin(ScrollTrigger, Draggable);

const features = [
  {
    title: 'Who I Am',
    content:
      '저는 디자인과 사용자 경험에 집중하는 열정적인 프론트엔드 개발자입니다. HTML, CSS, JavaScript와 React, TypeScript 같은 최신 프레임워크를 활용해 반응형이고 접근성 높은, 성능 최적화된 웹 인터페이스를 구현합니다.',
  },
  { title: 'Core Skills', content: '' },
  {
    title: 'Vision',
    content:
      '저의 비전은 사용자에게 즐거운 경험을 선사하고 비즈니스 성장에 기여할 수 있는 매끄러운 디지털 서비스를 지속적으로 혁신하고 제공하는 것입니다. 최신 웹 기술을 선도적으로 학습·적용하며, 모두가 쉽게 사용할 수 있는 직관적인 애플리케이션을 팀과 함께 만들어가고자 합니다.',
  },
];

const coreSkills = [
  'React',
  'Next.js',
  'TypeScript',
  'SCSS',
  'GSAP',
  'JavaScript',
  'Tailwind',
  'MySQL',
  'Node.js',
  'NX',
  'Nest.js',
  'PostgreSQL',
];

export default function About() {
  // 초기값을 null로 바꿔서, 탭을 클릭하기 전까지는 콘텐츠를 숨김
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [typed, setTyped] = useState('');
  const [showTabs, setShowTabs] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bubbleContainer = useRef<HTMLDivElement>(null);
  const bubbles = useRef<HTMLDivElement[]>([]);

  const fullText = 'HI THERE\nTHIS IS ME!';

  // 스크롤에 따라 이미지→타이틀→타이핑→탭 등장
  useEffect(() => {
    if (!heroRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top 80%',
      },
    });

    tl.fromTo(
      imgRef.current,
      { autoAlpha: 0, x: 100 },
      { autoAlpha: 1, x: 0, duration: 1 }
    )
      .set(titleRef.current, { autoAlpha: 0 })
      .to(titleRef.current, { autoAlpha: 1, duration: 0.2 })
      .call(() => {
        let idx = 0;
        function type() {
          setTyped(fullText.slice(0, idx + 1));
          idx++;
          if (idx < fullText.length) {
            setTimeout(type, 100);
          } else {
            setShowTabs(true);
          }
        }
        type();
      });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  // Core Skills 버블 애니메이션
  useEffect(() => {
    if (activeIndex !== 1 || !bubbleContainer.current) return;

    const CONTAINER = bubbleContainer.current;
    const BUBBLE_SIZE = 80;
    const W = CONTAINER.offsetWidth;
    const N = coreSkills.length;

    CONTAINER.innerHTML = '';
    bubbles.current = [];

    const slotWidth = W / N;
    const positions = Array.from({ length: N }, (_, i) =>
      i * slotWidth + (slotWidth - BUBBLE_SIZE) / 2
    );
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }

    coreSkills.forEach((skill, i) => {
      const d = document.createElement('div');
      d.className = styles.bubble;
      d.innerText = skill;
      d.style.zIndex = String(i);
      CONTAINER.appendChild(d);
      bubbles.current.push(d);
    });

    gsap.set(bubbles.current, {
      x: (i) => positions[i],
      y: -BUBBLE_SIZE,
    });

    gsap.to(bubbles.current, {
      y: () => CONTAINER.offsetHeight - BUBBLE_SIZE,
      duration: 1 + Math.random() * 0.5,
      ease: 'bounce.out',
      stagger: 0.1,
      onComplete() {
        Draggable.create(bubbles.current, {
          type: 'x,y',
          bounds: CONTAINER,
          inertia: true,
          edgeResistance: 0.8,
          cursor: 'grab',
          activeCursor: 'grabbing',
        });
        bubbles.current.forEach((el) =>
          gsap.to(el, {
            y: `-=${BUBBLE_SIZE * 0.3}`,
            duration: 0.4 + Math.random() * 0.3,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            delay: Math.random() * 0.5,
          })
        );
      },
    });
  }, [activeIndex]);

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.hero} ref={heroRef}>
        <img
          ref={imgRef}
          src={profilePic}
          alt="Profile"
          className={styles.heroImage}
        />
        <h1 ref={titleRef} className={styles.heroTitle}>
          {typed.split('\n').map((l, i, a) => (
            <span key={i}>
              {l}
              {i < a.length - 1 && <br />}
            </span>
          ))}
        </h1>

        {showTabs && (
          <div className={styles.featureTabs}>
            {features.map((f, i) => (
              <button
                key={f.title}
                className={
                  i === activeIndex ? styles.tabActive : styles.tab
                }
                onClick={() => setActiveIndex(i)}
              >
                {f.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 탭을 클릭하기 전(activeIndex===null)이면 어떤 콘텐츠도 렌더되지 않음 */}
      {showTabs && activeIndex !== null && (
        <div className={styles.featureContent}>
          {activeIndex === 1 ? (
            <div
              ref={bubbleContainer}
              className={styles.bubbleContainer}
            />
          ) : (
            <p className={styles.textContent}>
              {features[activeIndex].content}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
