// src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage     from './components/MainPage/MainPage';
import About        from './components/About/About';
import Portfolio    from './components/Portfolio/Portfolio';
import Contact      from './components/Contact/Contact';

// 개인·팀 상세를 처리할 컴포넌트
import PersonalDetail from './components/Portfolio/personal/PersonalDetail';
import TeamDetail     from './components/Portfolio/team/TeamDetail';

export default function App() {
  return (
      <Routes>
        {/* 메인 레이아웃: 헤더+히어로 + Outlet */}
        <Route path="/" element={<MainPage />}>
          
          {/* 1) 홈 인덱스에 스크롤 섹션들 (About, Portfolio, Contact) */}
          <Route
            index
            element={
              <>
                <About />
                <Portfolio />
                <Contact />
              </>
            }
          />

          {/* 2) 개인 작업 상세: slug 파라미터 하나로 처리 */}
          <Route
            path="portfolio/personal/:slug"
            element={<PersonalDetail />}
          />

          {/* 3) 팀 작업 상세: slug 파라미터 하나로 처리 */}
          <Route
            path="portfolio/team/:slug"
            element={<TeamDetail />}
          />

          {/* 4) 그 외(404)는 홈으로 */}
          <Route
            path="*"
            element={
              <>
                <About />
                <Portfolio />
                <Contact />
              </>
            }
          />
        </Route>
      </Routes>
  );
}
