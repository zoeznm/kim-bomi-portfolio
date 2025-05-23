// src/components/Portfolio/data.ts

export interface ProjectDetail {
  slug: string;
  title: string;
  year: number;
  tags: string[];
  images: string[];      // 보여줄 이미지 URL 배열
  reason: string;        // 만든 이유
  stack: string[];       // 사용한 스택 리스트
  features: string[];    // 핵심 기능 리스트
}

// 개인 프로젝트 목록
export const personalProjects: ProjectDetail[] = [
  {
    slug: 'my-wishlist',
    title: 'My Wishlist',
    year: 2024,
    tags: ['Design', 'Development'],
    images: [
      '/images/my-wishlist-1.png',
      '/images/my-wishlist-2.png',
      '/images/my-wishlist-3.png',
    ],
    reason: '',
    stack: ['React', 'TypeScript', 'SCSS'],
    features: ['아이템 추가/삭제', '카테고리 분류', '모바일 반응형'],
  },
  {
    slug: 'old-portfolio',
    title: 'OLD Portfolio',
    year: 2024,
    tags: ['Design', 'Development'],
    images: [
      '/images/old-portfolio-1.png',
      '/images/old-portfolio-2.png',
      '/images/old-portfolio-3.png',
    ],
    reason: '이전 버전 포트폴리오를 리펙토링하며 학습한 내용을 정리했습니다.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    features: ['반응형 레이아웃', '간단한 애니메이션', '접근성 고려'],
  },
  {
    slug: 'hs-pos',
    title: 'HS POS',
    year: 2025,
    tags: ['UI/UX', 'Animation'],
    images: [
      '/images/hs-pos-1.png',
      '/images/hs-pos-2.png',
      '/images/hs-pos-3.png',
    ],
    reason: '매장 판매를 보다 효율적으로 관리하기 위해 POS 시스템을 구현했습니다.',
    stack: ['Next.js', 'GSAP', 'Firebase'],
    features: ['실시간 재고 조회', '영수증 출력', '매출 통계'],
  },
  {
    slug: 'graduation-show',
    title: 'Graduation SHOW',
    year: 2025,
    tags: ['CSS', 'Responsive'],
    images: [
      '/images/graduation-show-1.png',
      '/images/graduation-show-2.png',
      '/images/graduation-show-3.png',
    ],
    reason: '졸업 전시회 사이트를 통해 작품을 효과적으로 소개하고자 제작했습니다.',
    stack: ['Vue.js', 'Sass', 'Swiper.js'],
    features: ['풀스크린 갤러리', '키보드 내비게이션', '모바일 터치 지원'],
  },
  {
    slug: 'new-portfolio',
    title: 'NEW Portfolio',
    year: 2025,
    tags: ['CSS', 'Responsive'],
    images: [
      '/images/new-portfolio-1.png',
      '/images/new-portfolio-2.png',
      '/images/new-portfolio-3.png',
    ],
    reason: '최신 트렌드를 반영한 새로운 포트폴리오 사이트를 구축했습니다.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: ['다크 모드 지원', '프리뷰 애니메이션', '접근성 향상'],
  },
];

// 팀 프로젝트 목록
export const teamProjects: ProjectDetail[] = [
  {
    slug: 'vending-machine',
    title: 'Vending Machine',
    year: 2024,
    tags: ['UI/UX', 'Development'],
    images: [
      '/images/vending-machine-1.png',
      '/images/vending-machine-2.png',
      '/images/vending-machine-3.png',
    ],
    reason: '자판기 UI/UX 개선을 위해 직관적인 인터페이스를 디자인했습니다.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    features: ['상품 선택 인터랙션', '결제 모듈 연동', '반응형 디자인'],
  },
  {
    slug: 'developer-erp',
    title: 'Developer ERP',
    year: 2024,
    tags: ['UI/UX', 'Development'],
    images: [
      '/images/developer-erp-1.png',
      '/images/developer-erp-2.png',
      '/images/developer-erp-3.png',
    ],
    reason: '개발팀의 업무 흐름을 관리하기 위한 ERP 시스템을 구축했습니다.',
    stack: ['Next.js', 'GraphQL', 'PostgreSQL'],
    features: ['프로젝트 관리', '권한별 대시보드', '리포트 생성'],
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    year: 2024,
    tags: ['UI/UX', 'Motion'],
    images: [
      '/images/machine-learning-1.png',
      '/images/machine-learning-2.png',
      '/images/machine-learning-3.png',
    ],
    reason: '머신러닝 모델 결과를 시각화하여 사용자 이해도를 높였습니다.',
    stack: ['D3.js', 'React', 'Python'],
    features: ['데이터 시각화', '실시간 업데이트', '필터링 기능'],
  },
];
