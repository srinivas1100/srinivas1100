import { personalInfo, stats } from '../../../data/content';
import './About.css';
import arrowRightIcon from '../../../assets/arrow-right.png';

const About = () => {
    const techPills = [
        { label: 'Flutter', delay: 0.1 },
        { label: 'iOS', delay: 0.3 },
        { label: 'Backend', delay: 0.5 },
        { label: 'AI', delay: 0.7 },
    ];

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-visual animate-on-load">
                        <div className="jar-container-small">
                            <div className="jar-bubbles">
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="bubble"
                                        style={{
                                            left: `${15 + Math.random() * 70}%`,
                                            '--duration': `${3 + Math.random() * 4}s`,
                                            animationDelay: `${Math.random() * 5}s`,
                                            width: `${2 + Math.random() * 4}px`,
                                            height: `${2 + Math.random() * 4}px`
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Glass Jar SVG - Scaled down and subtle */}
                            <svg className="glass-jar-subtle" viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="jarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.12)" />
                                        <stop offset="50%" stopColor="rgba(255, 255, 255, 0.04)" />
                                        <stop offset="100%" stopColor="rgba(255, 255, 255, 0.12)" />
                                    </linearGradient>
                                </defs>
                                <rect x="90" y="5" width="120" height="18" rx="4" fill="#8B7355" opacity="0.6" />
                                <rect x="80" y="20" width="140" height="12" rx="3" fill="#A0522D" opacity="0.6" />
                                <path d="M60 32 L60 170 Q60 200 150 200 Q240 200 240 170 L240 32"
                                    fill="url(#jarGradient)" />

                                {/* Rim Highlight */}
                                <path className="glass-rim" d="M60 35 Q150 45 240 35"
                                    stroke="rgba(255, 255, 255, 0.2)"
                                    strokeWidth="1.5"
                                    fill="none" />

                                {/* Glass Shine/Reflection */}
                                <path className="glass-reflection" d="M80 45 L80 155 Q80 175 105 180"
                                    stroke="rgba(255, 255, 255, 0.15)"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    fill="none" />
                            </svg>

                            {/* Subtle Tech Pills Inside Jar */}
                            <div className="tech-pills-container">
                                {techPills.map((pill, index) => (
                                    <span
                                        key={index}
                                        className="tech-pill-subtle"
                                        style={{
                                            animationDelay: `${pill.delay}s, ${index * 0.5}s`, // Combined delays for fade + float
                                            '--x-pos': `${(index % 2 === 0 ? -1 : 1) * (15 + index * 5)}px`,
                                            '--y-pos': `${60 + index * 20}px`
                                        }}
                                    >
                                        {pill.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="about-content">
                        <div className="content-header">
                            <span className="about-subtitle">Introduction</span>
                            <h2 className="about-heading">
                                About Me
                            </h2>
                        </div>

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
                                    <span>View Resume</span>
                                </div>
                                <div className="btn-play-icon">
                                    <img src={arrowRightIcon} alt="Arrow Right" style={{ width: '24px', height: '24px', objectFit: 'contain', filter: 'brightness(0) saturate(100%) drop-shadow(0px 0px 0.5px rgba(0,0,0,1))' }} />
                                </div>
                            </a>
                            <div className="signature-area-subtle">
                                <span className="signature-font-faded">— {personalInfo.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

