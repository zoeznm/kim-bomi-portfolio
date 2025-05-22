import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;