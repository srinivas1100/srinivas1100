import './About.css';
import oliviaProfile from '../../../assets/olivia_profile.png';

const About = () => {
    const serviceTags = [
        { label: 'UX/UI Design', position: 'tag-1' },
        { label: 'Mobile App Design', position: 'tag-2' },
        { label: 'Website Design', position: 'tag-3' },
        { label: 'Design System', position: 'tag-4' },
        { label: 'Prototype', position: 'tag-5' },
        { label: 'Dashboard', position: 'tag-6' },
        { label: 'Wireframe Design', position: 'tag-7' },
    ];

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-visual">
                        <div className="profile-circle-wrapper">
                            <div className="profile-circle-bg"></div>
                            <img src={oliviaProfile} alt="Olivia Smith" className="profile-img" />
                            <div className="floating-tags">
                                {serviceTags.map((tag, index) => (
                                    <span key={index} className={`service-tag ${tag.position}`}>
                                        {tag.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="about-content">
                        <div className="content-header">
                            <span className="about-subtitle">— About Me</span>
                            <h2 className="about-heading">
                                Who is <span className="script-name">Olivia Smith?</span>
                            </h2>
                        </div>

                        <p className="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-item">
                                <h3 className="stat-value">600+</h3>
                                <p className="stat-label">Project Completed</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="stat-value">50+</h3>
                                <p className="stat-label">Industry Covered</p>
                            </div>
                            <div className="stat-item">
                                <h3 className="stat-value">18+</h3>
                                <p className="stat-label">Years of Experience</p>
                            </div>
                        </div>

                        <div className="about-actions">
                            <a href="/cv.pdf" className="btn-download-cv">
                                <div className="btn-cv-inner">
                                    <span className="btn-cv-text">Download CV</span>
                                </div>
                                <div className="btn-cv-arrow">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" />
                                    </svg>
                                </div>
                            </a>
                            <div className="signature-area">
                                <span className="signature-text-plain">Olivia Smith</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

