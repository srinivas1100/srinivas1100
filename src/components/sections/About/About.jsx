import { personalInfo, stats } from '../../../data/content';
import './About.css';
import arrowRightIcon from '../../../assets/arrow-right.png';
import aboutMeImage from '../../../assets/images/About_me.png';

const About = () => {
    const skillBadges = [
        { label: 'AI agents', color: 'yellow', position: 0 },
        { label: 'Flutter', color: 'green', position: 1 },
        { label: 'React js', color: 'yellow', position: 2 },
        { label: 'System Design', color: 'green', position: 3 },
        { label: 'Swift', color: 'yellow', position: 4 },
        { label: 'Nodejs', color: 'green', position: 5 },
        { label: 'Firebase', color: 'yellow', position: 6 },
    ];

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                        <div className="content-header about-heading-block">
                            <span className="about-subtitle">About Me</span>
                            <h2 className="about-heading-new">
                                Who is <span className="name-italic">{personalInfo.name}</span> ?
                            </h2>
                        </div>


                    {/* Keep the original portrait uncropped; skills sit below, not over the face. */}
                    <div className="about-visual">
                        <img
                            src={aboutMeImage}
                            alt="Srinivasu Vadlamudi"
                            className="about-portrait"
                            loading="lazy"
                            width="1080"
                            height="1080"
                        />
                        <ul className="about-skills" aria-label="Engineering skills">
                            {skillBadges.map(skill => <li key={skill.label}>{skill.label}</li>)}
                        </ul>
                    </div>

                    {/* Content Column */}
                    <div className="about-content">
                        <div className="about-text-container">
                            {personalInfo.aboutMe.map((paragraph, idx) => (
                                <p key={idx} className="about-text-short">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="stats-row-senior">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item-clean">
                                    <h3 className="stat-value-small">{stat.value}</h3>
                                    <p className="stat-label-subtle">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="about-actions-row">
                            <a href="/cv.pdf" className="btn-portfolio-wrapper">
                                <div className="btn-portfolio">
                                    <span>Download CV</span>
                                </div>
                                <div className="btn-play-icon">
                                    <img src={arrowRightIcon} alt="Arrow Right" style={{ width: '24px', height: '24px', objectFit: 'contain', filter: 'brightness(0) saturate(100%) drop-shadow(0px 0px 0.5px rgba(0,0,0,1))' }} />
                                </div>
                            </a>
                            <span className="signature-text">{personalInfo.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

