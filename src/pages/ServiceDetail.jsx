import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { serviceDetails, allServicesData } from '../data/content';
import Contact from '../components/sections/Contact/Contact';
import Marquee from '../components/common/Marquee/Marquee';
import ProjectCTA from '../components/sections/CTA/ProjectCTA';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = serviceDetails[id] || serviceDetails['mobile-apps']; // Fallback to mobile-apps

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return <div className="text-center py-20">Service not found</div>;
    }

    return (
        <div className="service-detail-page">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="main-page-title">{service.title}</h1>
                {service.subtitle && <p className="service-main-subtitle">{service.subtitle}</p>}
                <div className="breadcrumb">
                    <Link to="/" className="breadcrumb-link">Home</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{service.title}</span>
                </div>
            </div>

            {/* Decorative Stripe - matched with All Services page */}
            <Marquee className="all-services-marquee" />

            {/* Service Hero Image Section */}
            <section className="service-hero-image-section">
                <div className="service-container">
                    <div className="service-hero-wrapper">
                        <div className="hero-image-placeholder">
                            <img src={service.heroImage} alt={service.title} />
                        </div>
                        <div className="play-button-overlay">
                            <div className="play-icon"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Service Section */}
            <section className="about-service-section">
                <div className="service-container">
                    <h2 className="section-title">About {service.title}</h2>

                    <div className="about-intro-wrapper">
                        <div className="service-initial-avatar">
                            {service.title.charAt(0)}
                        </div>
                        <div className="text-content">
                            <p>{service.about.description}</p>
                        </div>
                    </div>

                    <div className="services-include-section">
                        <h3 className="services-include-title">
                            Services Include:
                        </h3>
                        <p className="services-include-desc">
                            Comprehensive solutions built with industry-standard patterns and modern technologies to ensure reliability, performance, and future-ready scalability.
                        </p>
                        <div className="services-include-grid">
                            {service.servicesInclude.map((item, index) => (
                                <div key={index} className="include-item">
                                    <span className="check-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery Images - Two side-by-side as per screenshot */}
                    <div className="service-gallery">
                        {service.gallery && service.gallery.slice(0, 2).map((img, idx) => (
                            <div key={idx} className="gallery-image">
                                <img src={img} alt={`${service.title} showcase ${idx}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Industries Section */}
            <section className="industries-section">
                <div className="service-container">
                    <h2 className="industries-main-title">Top 8 Industries I Cover in {service.title}</h2>
                    <p className="industries-main-desc">
                        Specialized solutions designed to handle the unique challenges and scale requirements of market-leading industries.
                    </p>

                    <div className="industries-grid">
                        {service.industries.map((ind) => (
                            <div key={ind.id} className="industry-card">
                                <span className="industry-number">{ind.number}</span>
                                <h4 className="industry-name">{ind.name}</h4>
                                <p className="industry-desc">{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section">
                <div className="service-container">
                    <div style={{ maxWidth: '800px' }}>
                        <h2 className="section-title">Services Benefits:</h2>
                        <p className="text-content" style={{ marginTop: '20px', marginBottom: '40px' }}>
                            {service.benefits.description}
                        </p>

                        <div className="benefits-list">
                            {service.benefits.points.map((point, i) => (
                                <div key={i} className="benefit-point">
                                    <div className="benefit-icon"></div>
                                    <p>{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <ProjectCTA />

            {/* Contact Form Section */}
            <div className="contact-wrapper-dark" style={{ paddingTop: '0' }}>
                <Contact />
                <div style={{ paddingBottom: '0px' }}>
                    <Marquee hideBackground={true} compact={true} />
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;
