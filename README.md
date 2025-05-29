# KBM Portfolio

> 몰입감 있는 인터랙티브 애니메이션과 반응형 디자인이 돋보이는 개인 포트폴리오 사이트

---

## 🚀 프로젝트 개요

본 저장소는 React, Vite, TypeScript, SCSS, GSAP 등을 활용해 구현한 **개인 포트폴리오 웹사이트**입니다.  
나의 주요 프로젝트(개인/팀)를 한눈에 보고, 상세 화면에서 기술 스택·제작 이유·핵심 기능을 살펴볼 수 있습니다.

---

## 📺 데모

- **배포 URL**:[ [https://your-domain.com](https://your-domain.com)  ](https://kim-bomi-portfolio.vercel.app/)
- **스크린샷**  
  ![홈 화면](screenshots/home.png)  
  ![프로젝트 상세](screenshots/detail.png)  

---

## ✨ 주요 기능

- **프로젝트 갤러리**  
  - 개인 프로젝트 & 팀 프로젝트 구분
  - 카드 클릭 시 상세 페이지로 이동

- **프로젝트 상세 페이지**  
  - 좌측 스크린샷 캐러셀
  - 상단 내비게이션(← 홈, → 다음 프로젝트)
  - “왜 만들었나요?”, “사용 기술 스택”, “핵심 기능” 섹션
  - 팀 프로젝트 전용 “프로젝트 개요 / 작동 방식 / 테마 예시” 섹션

- **Contact 섹션**  
  - 반응형 그리드 레이아웃
  - 애니메이션 헤딩 및 CTA 버튼

- **스타일링 & 애니메이션**  
  - SCSS 모듈로 컴포넌트별 스타일 캡슐화
  - GSAP으로 텍스트·인터랙션 애니메이션 적용
  - 반응형 디자인(모바일/데스크톱 최적화)

- **커스터마이징**  
  - 프로젝트별 배포 URL 버튼
  - 진행 상태 표시 영역
  - 마우스 커서 커스터마이징 등

---

## 🛠️ 기술 스택

- **프레임워크**: React 19, React Router Dom  
- **빌드 툴**: Vite, TypeScript  
- **스타일링**: SCSS Modules  
- **애니메이션**: GSAP  
- **기타**: kokomi.js (애니메이션 트리거)

---

## 📦 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/USERNAME/REPO.git
cd REPO

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
