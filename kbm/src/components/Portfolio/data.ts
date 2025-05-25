// src/components/Portfolio/data.ts

export interface BaseProject {
  slug: string;
  title: string;
  year: number;
  tags: string[];
  images: string[];
  stack: string[];
  features: string[];
    /** 배포된 사이트 주소 (없으면 빈 문자열) */
    deployUrl?: string;
}

export interface PersonalProject extends BaseProject {
  reason: string;
}
export interface TeamProject extends BaseProject {
  overview: string;
  workflow: string[];
  themeExample: string;
}

// 개인 프로젝트 목록
export const personalProjects: PersonalProject[] = [
  {
    slug: "my-wishlist",
    title: "My Wishlist",
    year: 2024,
    tags: ["Design", "Development"],
    images: [
      new URL(
        "../../assets/images/mywishlist/mywishlist_1.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/mywishlist/mywishlist_2.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/mywishlist/mywishlist_3.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/mywishlist/mywishlist_4.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/mywishlist/mywishlist_5.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/mywishlist/mywishlist_6.png",
        import.meta.url
      ).href,
    ],
    deployUrl: "http://whatiwantwish.s3-website.ap-northeast-2.amazonaws.com",
    reason:
      "“처음에 제작한 개인 작업물로, 원하는 디자인과 애니메이션을 자유롭게 구현할 수 있는 프로젝트를 만들고자 했습니다. 이에 따라 나만의 Wishlist 페이지를 기획하게 되었고, 이 페이지를 통해 다른 사용자에게 직관적이고 재미있게 내용을 전달할 수 있는 경험을 제공하고자 제작하게 되었습니다.”",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "1. 카드 뒤집기",
      "2. 옛날 윈도우 창 디자인 제작",
      "3. 슈팅게임",
      "4. 키보드 단어 입력받기",
      "5. hover시 사진 나오기",
      "6. 클릭 시 사진 나오기",
    ],
  },
  {
    slug: "old-portfolio",
    title: "OLD Portfolio",
    year: 2024,
    tags: ["Design", "Development"],
    images: [
      new URL("../../assets/images/oldversion/old_1.png", import.meta.url).href,
      new URL("../../assets/images/oldversion/old_2.png", import.meta.url).href,
      new URL("../../assets/images/oldversion/old_3.png", import.meta.url).href,
      new URL("../../assets/images/oldversion/old_4.png", import.meta.url).href,
    ],
    deployUrl: "http://kimbomiportfolio.s3-website.ap-northeast-2.amazonaws.com/",
    reason:
      "이 페이지는 제 프로젝트를 효과적으로 보여줄 수 있는 공간으로, 방문자들이 쉽게 접근하고 이해할 수 있도록 구성했습니다. 각 작업물은 명확한 설명과 함께 시각적으로 매력적인 형태로 배치하여, 사용자가 흥미를 느낄 수 있도록 하였습니다. 또한, 반응형 디자인을 적용하여 다양한 기기에서 최적의 경험을 제공할 수 있도록 하였으며, 방문자들이 편리하게 탐색할 수 있는 내비게이션을 구현했습니다. 이러한 노력들을 통해 제 작업물의 가치를 더 많은 사람들과 공유하고, 피드백을 받을 수 있는 기회를 마련하고자 했습니다.",
    stack: ["React", "Lottie"],
    features: [
      "작업물 갤러리",
      "소셜 미디어 링크",
      "연락처 폼",
      "기술 스택",
      "반응형 디자인",
      "간단한 애니메이션",
    ],
  },
  {
    slug: "hs-pos",
    title: "HS POS",
    year: 2025,
    tags: ["UI/UX", "Animation"],
    images: [
      new URL("../../assets/images/hspos/hspos_1.png", import.meta.url).href,
      new URL("../../assets/images/hspos/hspos_2.png", import.meta.url).href,
      new URL("../../assets/images/hspos/hspos_3.png", import.meta.url).href,
    ],
    reason:
      "가족이 운영하는 POS 사업에 회사 웹페이지가 없어서, 제작 제안을 받아 시작하게 되었습니다. 이 페이지는 새로운 거래처 유입보다는 기존 거래처 사용자를 위한 용도로 기획되었으며, 특히 고령층 사용자를 고려한 직관적인 디자인을 중심으로 제작하고 있습니다. 사용자 친화적인 접근을 통해 편리한 이용 경험을 제공하는 것이 목표입니다.",
    stack: ["EJS", "Node.js", "Express"],
    features: ["원격지원 프로그램 지원", "고령층 타겟 UI"],
  },
  {
    slug: "graduation-show",
    title: "Graduation SHOW",
    year: 2025,
    tags: ["CSS", "Responsive"],
    images: [
      new URL("../../assets/images/graduation/show_1.png", import.meta.url)
        .href,
      new URL("../../assets/images/graduation/show_2.png", import.meta.url)
        .href,
      new URL("../../assets/images/graduation/show_3.png", import.meta.url)
        .href,
      new URL("../../assets/images/graduation/show_4.png", import.meta.url)
        .href,
    ],
    deployUrl: "https://pakyeon.vercel.app/",
    reason:
      "친구의 졸업 패션쇼를 위해, 단순한 초대장이 아닌 쇼의 분위기와 작품 세계를 미리 체험할 수 있는 인터랙티브 플랫폼을 만들고자 했습니다. 스크롤 애니메이션 활용해 패션쇼의 감각적인 전개를 웹으로 재현했고, 포스터 갤러리와 상세 페이지를 통해 각 컬렉션의 스토리와 디테일을 생동감 있게 전달합니다. 이 사이트를 통해 지인들에게 특별한 초대 경험을 선사하고, 졸업 작품들이 가진 아름다움을 더욱 극대화하고자 했습니다.",
    stack: ["React", "TypeScript", "Vite"],
    features: [
      "로더 스크린",
      "갤러리 섹션",
      "모바일 터치 지원",
      "정적 호스팅 & 배포",
    ],
  },
  {
    slug: "new-portfolio",
    title: "NEW Portfolio",
    year: 2025,
    tags: ["CSS", "Responsive"],
    images: [
      new URL("../../assets/images/newversion/new_1.png", import.meta.url).href,
      new URL("../../assets/images/newversion/new_2.png", import.meta.url).href,
      new URL("../../assets/images/newversion/new_3.png", import.meta.url).href,
      new URL("../../assets/images/newversion/new_3.png", import.meta.url).href,
      new URL("../../assets/images/newversion/new_5.png", import.meta.url).href,
    ],
    deployUrl: "IT IS THIS SITE!",
    reason:
      "단일 스크롤 구조 위에 GSAP와 React를 활용한 다채로운 인터랙티브 애니메이션을 입혀 사용자가 페이지를 탐험하며 자연스럽게 프로젝트와 브랜딩 메시지를 경험하도록 설계했습니다. 이를 통해 기존 포트폴리오의 정적인 소개 방식을 넘어, 몰입감 있는 스토리텔링과 성능 최적화를 동시에 달성하며 저만의 차별화된 웹 경험을 구현하고자 했습니다.",
    stack: ["React", "Next.js", "TypeScript", "SCSS", "GSAP"],
    features: [
      "반응형·접근성 중심 UI",
      "인터랙티브 애니메이션",
      "테스트 & 배포",
    ],
  },
];

// 팀 프로젝트 목록
export const teamProjects: TeamProject[] = [
  {
    slug: "vending-machine",
    title: "Vending Machine",
    year: 2024,
    tags: ["UI/UX", "Development"],
    images: [
      new URL(
        "../../assets/images/vendingmachine/vending_1.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/vendingmachine/vending_2.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/vendingmachine/vending_3.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/vendingmachine/vending_4.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/vendingmachine/vending_5.png",
        import.meta.url
      ).href,
    ],
    stack: ["HTML", "CSS", "JavaScript", "Sqlite3"],
    features: [
      "Javascript 이벤트 모듈 제작",
      "컴포넌트 드래그 이벤트",
      "컴포넌트 클릭 이벤트",
"프로젝트 전체 디자인 담당",
"동적 배경 애니메이션 구현 담당"
    ],
    overview: "수상한 자판기는 5개의 독특한 테마를 가진 자판기로, 각 테마마다 다양한 제품이 포함되어 있습니다. 사용자는 재미있고 창의적인 방식으로 제품을 구매할 수 있습니다.",
    workflow: [
      "코인 획득: 사용자는 수상한 자판기 주변의 가로등을 클릭하여 코인을 얻습니다.",
      "제품 구매: 획득한 코인을 사용하여 자판기에서 제품을 구매할 수 있습니다.",
      "제품 설명: 구매한 제품에 대한 설명이 제공되며, 각 제품은 해당 테마와 연관된 특징이 있습니다."
    ],
    themeExample: "이 테마에는 다양한 동물과 관련된 제품이 포함되어 있습니다. 예를 들어, '낙타용 마스카라'는 긴 눈썹을 가진 낙타를 위한 제품으로, 눈썹이 짧은 낙타에게도 마법적으로 길어 보이게 해주는 특별한 효과가 있습니다.",
  },

  {
    slug: "developer-erp",
    title: "Developer ERP",
    year: 2024,
    tags: ["UI/UX", "Development"],
    images: [
      new URL(
        "../../assets/images/erp/erp1.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/erp/erp2.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/erp/erp3.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/erp/erp4.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/erp/erp5.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/erp/erp6.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/erp/erp7.png",
        import.meta.url
      ).href,
    ],
    stack: ["Next.js", "Nest.js" ,"TypeScript", "PostgreSQL","MongoDB","lerna"],
    features: [
      "디자인 시안 제작 (피그마)",
      "사용자 개인 정보 조회 및 수정",
      "사용자 권한·월급·분야 지정",
      "관리자의 회원가입 요청 승인 및 데이터 입력 기능 제작",
      "Client_칸반, 팔로우, 로그인 리팩토링",
      "Server_회원가입 리팩토링"
    ],
    overview: "IT 기업을 위한 ERP 시스템은 개발자들의 업무 효율성을 높이고 프로젝트 관리를 체계적으로 지원하기 위해 설계된 통합 관리 시스템입니다. 이 시스템은 기업의 다양한 자원—인력, 시간, 예산, 프로젝트 진행 상황을 효율적으로 관리하여 최적의 성과를 도출할 수 있도록 돕습니다.",
    workflow: [
      "프로젝트 관리: 프로젝트의 기획, 실행, 모니터링을 지원하며, 각 개발자의 업무를 효과적으로 배분합니다.",
      "업무 할당 및 추적: 각 개발자의 업무를 명확히 할당하고, 진행 상태를 지속적으로 모니터링합니다.",
      "자원 관리: 인력, 장비, 예산 등의 자원을 효율적으로 관리하여 불필요한 낭비를 최소화합니다.",
      "데이터 분석 및 보고서: 프로젝트 진행 상황과 개발자들의 업무 성과를 기반으로 한 분석 자료를 제공합니다.",
      "협업 도구: 팀원 간의 원활한 커뮤니케이션과 협업을 위한 플랫폼을 제공합니다."
    ],
    themeExample: "IT 기업의 ERP 시스템은 개발자들의 업무와 프로젝트를 통합적으로 관리함으로써, 기업의 전반적인 생산성과 효율성을 향상시키는 중요한 도구입니다. 체계적인 관리와 데이터 기반 의사결정은 기업의 경쟁력을 강화하고, 성공적인 프로젝트 수행에 기여할 것입니다.",
  },

  {
    slug: "machine-learning",
    title: "Machine Learning",
    year: 2024,
    tags: ["UI/UX", "Motion"],
    images: [
      new URL(
        "../../assets/images/machinelearning/ml1.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/machinelearning/ml2.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/machinelearning/ml3.png",
        import.meta.url
      ).href,
      new URL(
        "../../assets/images/machinelearning/ml4.png",
        import.meta.url
      ).href,
    ],
    stack: ["Vue", "TypeScript" ,"Python", "Pytorch", "Flask"],
    features: [
      "위험 야생동물 제보를 위한 사진 업로드 페이지 제작",
"UI 설계 및 피그마 제작",
"프론트-머신러닝 연결"
    ],
    overview: "이 프로젝트의 목표는 야생동물의 출몰을 실시간으로 감지하고, 이를 통해 생태계 보호 및 인간-야생동물 간의 갈등을 최소화하는 것입니다.",
    workflow: [
      "실시간 모니터링: 설치된 카메라를 통해 야생동물의 움직임을 지속적으로 감지하고, 머신러닝 모델을 활용하여 특정 종을 식별합니다.",
      "출몰 알림: 야생동물이 감지되면 사용자는 즉시 알림을 받아, 해당 지역의 안전성을 확보할 수 있도록 돕습니다.",
      "데이터 분석: 수집된 데이터를 기반으로 동물의 이동 경로와 출몰 패턴을 분석하여, 보호구역 관리 및 연구에 기여합니다."
    ],
    themeExample: "이 프로젝트는 기술적인 혁신과 환경 보호의 융합을 통해, 사용자에게 유용한 정보를 제공하고, 야생동물과의 안전한 공존을 촉진하는 것을 목표로 하고 있습니다.",
  },
];
