// src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage      from './components/MainPage/MainPage';
import About         from './components/About/About';
import Portfolio     from './components/Portfolio/Portfolio';
import Contact       from './components/Contact/Contact';

import MyWishlist     from './components/Portfolio/personal/MyWishlist';
import OLDPortfolio   from './components/Portfolio/personal/OLDPortfolio';
import HSPos          from './components/Portfolio/personal/HSPos';
import GraduationSHOW from './components/Portfolio/personal/GraduationSHOW';
import NEWPortfolio   from './components/Portfolio/personal/NEWPortfolio';

import VendingMachine  from './components/Portfolio/team/VendingMachine';
import DeveloperERP    from './components/Portfolio/team/DeveloperERP';
import MachineLearning from './components/Portfolio/team/MachineLearning';

export default function App() {
  return (
      <Routes>
        {/* MainPage 레이아웃 */}
        <Route path="/" element={<MainPage />}>
          {/* 홈 인덱스: 스크롤 섹션들 */}
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

          {/* Personal 상세 (slug) */}
          <Route path="portfolio/personal/my-wishlist"     element={<MyWishlist />} />
          <Route path="portfolio/personal/old-portfolio"   element={<OLDPortfolio />} />
          <Route path="portfolio/personal/hs-pos"          element={<HSPos />} />
          <Route path="portfolio/personal/graduation-show" element={<GraduationSHOW />} />
          <Route path="portfolio/personal/new-portfolio"   element={<NEWPortfolio />} />

          {/* Team 상세 (slug) */}
          <Route path="portfolio/team/vending-machine"  element={<VendingMachine />} />
          <Route path="portfolio/team/developer-erp"    element={<DeveloperERP />} />
          <Route path="portfolio/team/machine-learning" element={<MachineLearning />} />

          {/* 404나 기타 경로: 홈으로 리다이렉트 */}
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
