import { Link } from 'react-router-dom';
import { servicesData } from '../../../data/content';
import './Services.css';
import arrowRightIcon from '../../../assets/arrow-right.png';

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="services-header">
                    <div className="services-title-area">
                        <span className="services-subtitle">
                            <span className="subtitle-dash">—</span> Services
                        </span>
                        <h1 className="services-title">
                            What I <span className="text-highlight">Do</span>
                        </h1>

                    </div>
                    <div className="services-action">
                        <Link to="/all-services" className="btn-portfolio-wrapper">
                            <div className="btn-portfolio">
                                <span>View All Services</span>
                            </div>
                            <div className="btn-play-icon">
                                <img src={arrowRightIcon} alt="Arrow Right" style={{ width: '24px', height: '24px', objectFit: 'contain', filter: 'brightness(0) saturate(100%) drop-shadow(0px 0px 0.5px rgba(0,0,0,1))' }} />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="services-grid">
                    {servicesData.slice(0, 3).map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-header-row">
                                <div className="service-icon-wrapper-small">
                                    <div className={`service-icon icon-${service.icon}`}>
                                        <ServiceIcon name={service.icon} />
                                    </div>
                                </div>
                                <h3 className="service-card-title">{service.title}</h3>
                            </div>

                            <p className="service-card-description">{service.description}</p>

                            {service.includes && (
                                <div className="service-includes">
                                    <ul className="includes-list">
                                        {service.includes.map((item, index) => (
                                            <li key={index} className="includes-item">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="service-footer-spacer"></div>

                            <Link to={`/services/${service.id}`} className="service-learn-more">
                                Learn more
                                <img src={arrowRightIcon} alt="Arrow Right" style={{ width: '20px', height: '20px', objectFit: 'contain', filter: 'brightness(0) saturate(100%) invert(69%) sepia(35%) saturate(3000%) hue-rotate(1deg) brightness(101%) contrast(105%) drop-shadow(0 0 0.5px #F5A623)' }} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const ServiceIcon = ({ name }) => {
    switch (name) {
        case 'ai':
            return (
                /* Gear Network AI Icon - Refined Version */
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Radiating Network Lines and Nodes */}

                    {/* Top Center */}
                    <path d="M12 2V5" stroke="#2D4033" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="2" r="1.5" fill="#F5A623" />

                    {/* Top Right */}
                    <path d="M19 5L17 7" stroke="#2D4033" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="20" cy="4" r="1.5" fill="#F5A623" />

                    {/* Right Center */}
                    <path d="M22 12H19" stroke="#2D4033" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="22" cy="12" r="1.5" fill="#F5A623" />

                    {/* Bottom Right */}
                    <path d="M19 19L17 17" stroke="#2D4033" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="20" cy="20" r="1.5" fill="#F5A623" />

                    {/* Bottom Center */}
                    <path d="M12 22V19" stroke="#2D4033" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="22" r="1.5" fill="#F5A623" />

                    {/* Bottom Left */}
                    <path d="M5 19L7 17" stroke="#2D4033" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="4" cy="20" r="1.5" fill="#F5A623" />

                    {/* Left Center */}
                    <path d="M2 12H5" stroke="#2D4033" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="2" cy="12" r="1.5" fill="#F5A623" />

                    {/* Top Left */}
                    <path d="M5 5L7 7" stroke="#2D4033" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="4" cy="4" r="1.5" fill="#F5A623" />

                    {/* Central Gear */}
                    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="#2D4033" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white" />

                    {/* 'AI' Text */}
                    <text x="12" y="13.5" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#2D4033" style={{ fontFamily: 'Arial, sans-serif' }}>AI</text>
                </svg>
            );
        case 'leadership':
            return (
                /* Architecture & Leadership Icon - Matching Row 1 Style */
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L4 7L12 11L20 7L12 3Z" stroke="#2D4033" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 11V15L12 19L20 15V11" stroke="#2D4033" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 15V19L12 23L20 19V15" stroke="#2D4033" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="11" r="2.5" fill="#F5A623" stroke="#2D4033" strokeWidth="1.5" />
                </svg>
            );
        case 'uiux':
            return (
                <svg width="42" height="42" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="12" width="38" height="26" rx="3" fill="#2D4033" />
                    <rect x="14" y="38" width="26" height="4" rx="2" fill="#F5A623" />
                    <path d="M22 21L25 24L22 27" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 21L29 24L32 27" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="20" y="31" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">UX</text>
                </svg>
            );
        case 'app':
            return (
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="2" width="12" height="20" rx="2.5" stroke="#2D4033" strokeWidth="2.5" fill="none" />
                    <path d="M10 5H14" stroke="#2D4033" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="12" cy="18" r="1.5" fill="#F5A623" />
                </svg>
            );
        case 'code':
            return (
                /* Bold Code Tags < /> - Universal Symbol for Dev/Full-Stack */
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6L3 12L8 18" stroke="#2D4033" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 6L21 12L16 18" stroke="#2D4033" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 4L11 20" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" />
                </svg>
            );
        case 'web':
            return (
                /* Website Development Icon - Matching Row 1 Style */
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="14" rx="2.5" stroke="#2D4033" strokeWidth="2.5" />
                    <path d="M2 9H22" stroke="#2D4033" strokeWidth="2.5" />
                    <path d="M7 14H12" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="17" cy="14" r="1.5" fill="#2D4033" />
                </svg>
            );
        case 'ui_design':
            return (
                <svg width="42" height="42" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="27" cy="27" r="13" stroke="#2D4033" strokeWidth="2" fill="#F2F2F2" />
                    <path d="M36 16L38 18L26 30L24 28L36 16Z" fill="#F5A623" />
                </svg>
            );
        case 'design_system':
            return (
                <svg width="42" height="42" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="14" height="14" fill="#2D4033" rx="2" />
                    <circle cx="27" cy="18" r="3" fill="#F5A623" />
                </svg>
            );
        case 'wireframe':
            return (
                <svg width="42" height="42" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15" y="15" width="24" height="24" stroke="#2D4033" strokeWidth="2" fill="none" />
                    <line x1="15" y1="27" x2="39" y2="27" stroke="#2D4033" strokeWidth="2" />
                    <line x1="27" y1="15" x2="27" y2="39" stroke="#2D4033" strokeWidth="2" />
                </svg>
            );
        case 'brand':
            return (
                <svg width="42" height="42" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="27" cy="27" r="10" fill="#2D4033" />
                    <circle cx="34" cy="20" r="4" fill="#F5A623" />
                </svg>
            );
        case 'illustration':
            return (
                <svg width="42" height="42" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30Q27 15 39 30" stroke="#2D4033" strokeWidth="2" fill="none" />
                    <circle cx="27" cy="25" r="3" fill="#F5A623" />
                </svg>
            );
        case 'web_app':
            return (
                /* Web Application Icon - Matching Row 1 Style */
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#2D4033" strokeWidth="2.5" />
                    <path d="M3 8H21" stroke="#2D4033" strokeWidth="2.5" />
                    <rect x="7" y="12" width="4" height="4" fill="#F5A623" />
                    <rect x="13" y="12" width="4" height="4" fill="#2D4033" />
                </svg>
            );
        default:
            return null;
    }
};

export default Services;
