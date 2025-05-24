import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import styles from './About.module.scss';
import profilePic from '../../assets/images/me.jpeg';

gsap.registerPlugin(ScrollTrigger, Draggable);

const features = [
  { title: 'Who I Am',   content: '…소개 텍스트…' },
  { title: 'Core Skills', content: '' },
  { title: 'Vision',     content: '…비전 텍스트…' },
];

const coreSkills = [
  'React','Next.js','TypeScript','SCSS','GSAP',
  'JavaScript','Tailwind','MySQL','Node.js','NX',
  'Nest.js','PostgreSQL'
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typed, setTyped]     = useState('');
  const [showTabs, setShow]   = useState(false);

  const heroRef  = useRef<HTMLDivElement>(null);
  const imgRef   = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bubbleContainer = useRef<HTMLDivElement>(null);
  const bubbles = useRef<HTMLDivElement[]>([]);

  const fullText = 'HI THERE\nTHIS IS ME!';

  useEffect(() => {
    if (!heroRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top 80%',
      }
    });

    // 1) 이미지 등장
    tl.fromTo(imgRef.current,
      { autoAlpha: 0, x: 100 },
      { autoAlpha: 1, x: 0, duration: 1 }
    );

    // 2) 타이틀 숨김 → 페이드인 → 타이핑
    tl.set(titleRef.current, { autoAlpha: 0 });
    tl.to(titleRef.current, { autoAlpha: 1, duration: 0.2 });
    tl.call(() => {
      let idx = 0;
      function type() {
        setTyped(fullText.slice(0, idx + 1));
        idx++;
        if (idx < fullText.length) {
          setTimeout(type, 100);
        } else {
          setShow(true);
        }
      }
      type();
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      tl.kill();
    };
  }, []);

  // 버블 생성 & 애니메이션
  useEffect(() => {
    if (activeIndex !== 1 || !bubbleContainer.current) return;
  
    const CONTAINER = bubbleContainer.current;
    const BUBBLE_SIZE = 80;
    const W = CONTAINER.offsetWidth;
    const N = coreSkills.length;
  
    // 1) 초기화
    CONTAINER.innerHTML = '';
    bubbles.current = [];
  
    // 2) “슬롯” 생성: N개 칸으로 분할
    const slotWidth = W / N;
    const positions = Array.from({ length: N }, (_, i) =>
      // 각 칸의 중앙에 배치
      i * slotWidth + (slotWidth - BUBBLE_SIZE) / 2
    );
  
    // (원한다면 칸 순서를 무작위로 섞어도 OK)
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }
  
    // 3) 버블 DOM 생성
    coreSkills.forEach((skill, i) => {
      const d = document.createElement('div');
      d.className = styles.bubble;
      d.innerText = skill;
      d.style.zIndex = String(i);
      CONTAINER.appendChild(d);
      bubbles.current.push(d);
    });
  
    // 4) 초기 위치 세팅 (X는 분할 칸, Y는 위)
    gsap.set(bubbles.current, {
      x: (i) => positions[i],
      y: -BUBBLE_SIZE,
    });
  
    // 5) 떨어뜨리기 + Draggable
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
               // 6) 농구공처럼 통통 튀기
       bubbles.current.forEach((el) => {
         // 각기 다른 타이밍을 위해 약간씩 delay
         gsap.to(el, {
           y: `-=${BUBBLE_SIZE * 0.5}`,    // 바닥에서 위로 30% 만큼
           duration: 0.3 + Math.random() * 0.4,
           ease: 'sine.inOut',
           yoyo: true,
           repeat: -1,
           delay: Math.random() * 0.5
         });
       });
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
          {typed.split('\n').map((l,i,a) =>
            <span key={i}>{l}{i < a.length-1 && <br/>}</span>
          )}
        </h1>

        {showTabs && (
          <div className={styles.featureTabs}>
            {features.map((f, i) => (
              <button
                key={f.title}
                className={i === activeIndex ? styles.tabActive : styles.tab}
                onClick={() => setActiveIndex(i)}
              >
                {f.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {showTabs && (
        <div className={styles.featureContent}>
          {activeIndex === 1
            ? <div ref={bubbleContainer} className={styles.bubbleContainer} />
            : <p className={styles.textContent}>
                {features[activeIndex].content}
              </p>
          }
        </div>
      )}
    </section>
  );
}
