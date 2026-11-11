import { useEffect } from 'react';
// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import AllServices from './pages/AllServices';
import ServiceDetail from './pages/ServiceDetail';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';

// Routing
import { Routes, Route, useLocation } from 'react-router-dom';

// Styles
import './App.css';

function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-services" element={<AllServices />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

