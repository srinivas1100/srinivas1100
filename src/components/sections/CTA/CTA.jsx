import Button from '../../common/Button';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta section">
            <div className="container">
                <div className="cta-content">
                    <div className="cta-text">
                        <span className="cta-subtitle">Let's Work Together</span>
                        <h2 className="cta-title">
                            Have a Project in Mind?
                            <br />
                            <span className="highlight">Let's Talk Now</span>
                        </h2>
                        <p className="cta-description">
                            I'm always excited to work on new and challenging projects.
                            Let's discuss how we can turn your ideas into reality.
                        </p>
                        <div className="cta-buttons">
                            <Button variant="primary" size="large" href="mailto:hello@jessicaparker.com">
                                Get in Touch
                            </Button>
                            <Button variant="outline" size="large" href="#works">
                                View Portfolio
                            </Button>
                        </div>
                    </div>
                    <div className="cta-image">
                        <img
                            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&h=400&fit=crop"
                            alt="Let's work together"
                        />
                        <div className="cta-image-decoration"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
