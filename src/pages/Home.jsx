// Sections
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Skills from '../components/sections/Skills';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Journey from '../components/sections/Journey';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Contact />
        </>
    );
};

export default Home;
