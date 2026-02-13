// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import AllServices from './pages/AllServices';
import ServiceDetail from './pages/ServiceDetail';
import AllProjects from './pages/AllProjects';

// Routing
import { Routes, Route } from 'react-router-dom';

// Styles
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-services" element={<AllServices />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
