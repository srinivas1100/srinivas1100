import { personalInfo } from '../../../data/content';
import heroProfile from '../../../assets/images/without_bg_imge.png';
import './Hero.css';
import Marquee from '../../common/Marquee/Marquee';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container container">
                <div className="hero-content">
                    {/* Left Content (60%) */}
                    <div className="hero-text animate-in">
                        <div className="hero-greeting">
                            <span className="greeting-badge">
                                <span className="badge-corner badge-corner-tl"></span>
                                <span className="badge-corner badge-corner-tr"></span>
                                <span className="badge-corner badge-corner-bl"></span>
                                <span className="badge-corner badge-corner-br"></span>
                                Hello There!
                            </span>
                        </div>

                        <h1 className="hero-title">
                            I'm <span className="hero-name">{personalInfo.name}</span>
                            <br />
                            <span className="hero-role">Flutter & iOS Engineer with Full-Stack & AI Experience</span>
                        </h1>



                        <p className="hero-description">
                            I build production-grade mobile and web applications used by real users,
                            with end-to-end ownership from architecture to deployment.
                        </p>

                        <div className="hero-cta">
                            <a href="#works" className="btn-portfolio-wrapper">
                                <div className="btn-portfolio">
                                    <span>View My Portfolio</span>
                                </div>
                                <div className="btn-play-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </a>
                            <a href="#contact" className="btn-hire">
                                Hire Me
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="hero-image">
                        <div className="hero-image-wrapper">
                            {/* Background Shape */}
                            <div className="hero-blob-bg"></div>

                            {/* Profile Image */}
                            <div className="hero-image-container">
                                <img
                                    src={heroProfile}
                                    alt={personalInfo.name}
                                    className="hero-photo"
                                />
                            </div>

                            {/* Circular Hire Me Badge */}
                            <div className="hire-me-badge">
                                <div className="hire-me-inner">
                                    <div className="hire-me-arrow">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <div className="hire-me-text">
                                    <svg viewBox="0 0 100 100">
                                        <defs>
                                            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                        </defs>
                                        <text>
                                            <textPath xlinkHref="#circlePath">
                                                HIRE ME • HIRE ME • HIRE ME • HIRE ME •
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </div>

                            {/* Badges */}
                            <div className="floating-badge badge-uiux-designer">
                                <span className="badge-cursor yellow-cursor">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 12L4.5 21L4.5 3L19.5 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <span>Full Stack Developer</span>
                            </div>

                            <div className="floating-badge badge-product-designer">
                                <span className="badge-cursor green-cursor">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 12L4.5 21L4.5 3L19.5 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <span>Mobile Engineer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Marquee />
        </section>
    );
};

export default Hero;
