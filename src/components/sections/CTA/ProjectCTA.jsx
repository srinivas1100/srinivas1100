import { Link } from 'react-router-dom';
import arrowRightIcon from '../../../assets/arrow-right.png';
import './ProjectCTA.css';

const ProjectCTA = () => {
    return (
        <section className="cta-full-section">
            <div className="container cta-container-relative">
                <h2 className="cta-full-title">
                    Let’s Create an <span className="highlight-orange">Amazing</span><br />
                    <span className="highlight-orange">Project</span> Together!
                </h2>

                <div className="cta-action-area">
                    <a href="#contact" className="btn-contact-now" onClick={(e) => {
                        const element = document.getElementById('contact');
                        if (element) {
                            e.preventDefault();
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}>
                        <div className="btn-contact-inner">
                            <span className="btn-contact-text">Contact Us Now</span>
                        </div>
                        <div className="btn-arrow-right">
                            <img
                                src={arrowRightIcon}
                                alt="Arrow Right"
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    objectFit: 'contain',
                                    filter: 'brightness(0) saturate(100%) drop-shadow(0px 0px 0.5px rgba(0,0,0,1))'
                                }}
                            />
                        </div>
                    </a>
                </div>

                {/* Floating Pills - Decorative */}
                <span className="pill pill-yellow pill-1">Design System</span>
                <span className="pill pill-green pill-2">Prototype</span>
                <span className="pill pill-yellow pill-3">Wireframe Design</span>
                <span className="pill pill-green pill-4">Mobile App Design</span>
                <span className="pill pill-yellow pill-5">Website Design</span>
                <span className="pill pill-green pill-6">Illustration</span>
                <span className="pill pill-yellow pill-7">UX/UI Design</span>
                <span className="pill pill-green pill-8">Brand Identity</span>
                <span className="pill pill-yellow pill-9">Landing Page</span>
                <span className="pill pill-green pill-10">Dashboard</span>
                <span className="pill pill-yellow pill-11">UI Design</span>
                <span className="pill pill-green pill-12">Product Design</span>
                <span className="pill pill-yellow pill-13">Brand Identity</span>
            </div>
        </section>
    );
};

export default ProjectCTA;
