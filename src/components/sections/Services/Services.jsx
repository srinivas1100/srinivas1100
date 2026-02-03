import { servicesData } from '../../../data/content';
import './Services.css';

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
                            <span className="text-highlight">Services</span> I Provide
                        </h1>
                    </div>
                    <div className="services-action">
                        <a href="#services" className="btn-view-all">
                            <div className="btn-view-inner">
                                <span className="btn-text">View All Services</span>
                            </div>
                            <div className="btn-view-arrow">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon-wrapper">
                                <div className={`service-icon icon-${service.icon}`}>
                                    <ServiceIcon name={service.icon} />
                                </div>
                            </div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-description">{service.description}</p>
                            <a href={service.link} className="service-learn-more">
                                Learn more
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceIcon = ({ name }) => {
    switch (name) {
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
                <svg width="42" height="42" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 10L15 18V32L27 40L39 32V18L27 10Z" fill="#2D4033" />
                    <path d="M27 10L39 18L27 26L15 18L27 10Z" fill="#1A2E22" />
                    <circle cx="27" cy="26" r="4" fill="#F5A623" />
                    <path d="M27 26V40" stroke="#F5A623" strokeWidth="2" />
                    <path d="M15 18V32" stroke="#F5A623" strokeWidth="2" />
                    <path d="M39 18V32" stroke="#F5A623" strokeWidth="2" />
                    <path d="M22 17L27 22L32 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );
        case 'web':
            return (
                <svg width="42" height="42" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="14" width="38" height="26" rx="3" fill="#F2F2F2" stroke="#2D4033" strokeWidth="2" />
                    <path d="M8 20H46" stroke="#2D4033" strokeWidth="2" />
                    <rect x="8" y="14" width="38" height="6" rx="3" fill="#F5A623" />
                    <rect x="30" y="24" width="12" height="12" rx="1" fill="#2D4033" />
                    <rect x="12" y="24" width="14" height="2" rx="1" fill="#2D4033" />
                    <rect x="12" y="28" width="14" height="2" rx="1" fill="#2D4033" />
                    <rect x="12" y="32" width="14" height="2" rx="1" fill="#2D4033" />
                </svg>
            );
        default:
            return null;
    }
};


export default Services;
