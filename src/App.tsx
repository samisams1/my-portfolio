import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';
import AboutMePage from './pages/AboutMePage';
import ProfilePage from './pages/ProfilePage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;