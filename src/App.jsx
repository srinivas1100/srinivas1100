// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import SelectedWorks from './components/sections/SelectedWorks';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Expertise from './components/sections/Expertise';
import Journey from './components/sections/Journey';
import Stats from './components/sections/Stats';
import CTA from './components/sections/CTA';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';

// Styles
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <Skills />
        <SelectedWorks />
        <About />
        <Projects />
        <Expertise />
        <Journey />
        <Stats />
        <CTA />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
