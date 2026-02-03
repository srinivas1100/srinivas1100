import { personalInfo } from '../../../data/content';
import heroProfile from '../../../assets/images/hero_profile.png';
import './Hero.css';

const Hero = () => {

    const services = [
        'App Design',
        'Website Design',
        'Dashboard',
        'Wireframe',
        'User Research',
        'Prototyping'
    ];

    return (
        <section className="hero" id="home">
            <div className="hero-container container">
                <div className="hero-content">
                    {/* Left Content */}
                    <div className="hero-text animate-in">
                        {/* Hello Badge */}
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
                            I'm <span className="hero-name">{personalInfo.name},</span>
                            <br />
                            <span className="hero-role">Product Designer</span>
                            <br />
                            <span className="hero-location">Based in USA.</span>
                        </h1>

                        <p className="hero-description">
                            I'm an experienced Product Designer with 8+ years in the
                            field, collaborating with various companies and startups.
                        </p>

                        <div className="hero-cta">
                            <div className="btn-portfolio-wrapper">
                                <a href="#works" className="btn-portfolio">
                                    <span>View My Portfolio</span>
                                </a>
                                <button className="btn-play-icon" aria-label="Play">
                                    <svg width="16" height="16" viewBox="0 0 12 12" fill="currentColor">
                                        <path d="M2.5 1.5v9l7-4.5-7-4.5z" />
                                    </svg>
                                </button>
                            </div>
                            <a href="#contact" className="btn-hire">
                                Hire Me
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="hero-image">
                        <div className="hero-image-wrapper">
                            {/* Organic Blob Background */}
                            <div className="hero-blob-bg"></div>

                            {/* Profile Image */}
                            <div className="hero-image-container">
                                <img
                                    src="https://p7.hiclipart.com/preview/817/251/617/management-black-service-businessperson-publicidade.jpg"
                                    alt={personalInfo.name}
                                    className="hero-photo"
                                />
                            </div>

                            {/* Circular Hire Me Badge */}
                            <div className="hire-me-badge">
                                <div className="hire-me-inner">
                                    <span className="hire-me-dot"></span>
                                </div>
                                <svg className="hire-me-text" viewBox="0 0 100 100">
                                    <defs>
                                        <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                    </defs>
                                    <text>
                                        <textPath href="#circlePath">
                                            • HIRE ME • HIRE ME • HIRE ME
                                        </textPath>
                                    </text>
                                </svg>
                            </div>

                            {/* Decorative curved line (thin black curve) */}
                            <div className="hero-scroll-line">
                                <svg viewBox="0 0 40 100" width="40" height="100">
                                    <path d="M30,10 C10,40 10,60 30,90" stroke="#000" fill="none" strokeWidth="1" />
                                </svg>
                            </div>


                            {/* UI/UX Designer Badge (Yellow) - with bottom-left tail */}
                            <div className="floating-badge badge-uiux">
                                <span className="badge-tail badge-tail-bl"></span>
                                <span>UI/UX Designer</span>
                            </div>

                            {/* Product Designer Badge (Green) - with left tail */}
                            <div className="floating-badge badge-product">
                                <span className="badge-tail badge-tail-left"></span>
                                <span>Product Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Marquee */}
            <div className="hero-marquee">
                <div className="marquee-track">
                    {[...services, ...services, ...services].map((service, index) => (
                        <div className="marquee-item" key={index}>
                            <span className="marquee-text">{service}</span>
                            <span className="marquee-star">✦</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
