// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import SelectedWorks from './components/sections/SelectedWorks';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Projects from './components/sections/Projects';

import Contact from './components/sections/Contact';
import Journey from './components/sections/Journey';
import CTA from './components/sections/CTA';

// Styles
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <Services />
        <About />
        <Skills />
        {/* <SelectedWorks /> removed */}
        <Projects />
        <Journey />
        <Contact />

        {/* <Journey /> moved up */}
        {/* <CTA /> replaced by Contact */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
