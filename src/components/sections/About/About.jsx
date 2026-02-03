import Button from '../../common/Button';
import './About.css';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image">
                        <div className="about-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                                alt="Working on design"
                            />
                            <div className="about-image-accent"></div>
                        </div>
                    </div>

                    <div className="about-text">
                        <span className="about-subtitle">About Me</span>
                        <h2 className="about-title">
                            I Help Startups <span className="highlight">Launch</span> &
                            <span className="highlight"> Grow</span> Their Products
                        </h2>
                        <p className="about-description">
                            With over 8 years of experience in product design, I've helped numerous startups
                            and established companies transform their ideas into successful digital products.
                            My approach combines user-centered design principles with business strategy to
                            create solutions that not only look great but also drive results.
                        </p>
                        <p className="about-description">
                            I believe in the power of design to solve complex problems and create meaningful
                            experiences. Whether it's crafting a new product from scratch or improving an
                            existing one, I bring passion, creativity, and strategic thinking to every project.
                        </p>

                        <div className="about-stats">
                            <div className="about-stat">
                                <span className="stat-number">8+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="about-stat">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects Delivered</span>
                            </div>
                            <div className="about-stat">
                                <span className="stat-number">30+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>

                        <Button variant="secondary" size="large" href="#contact">
                            Let's Work Together
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
