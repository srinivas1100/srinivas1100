import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { serviceDetails } from '../data/content';
import Contact from '../components/sections/Contact/Contact';
import Marquee from '../components/common/Marquee/Marquee';
import ProjectCTA from '../components/sections/CTA/ProjectCTA';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = serviceDetails[id] || serviceDetails[1]; // Fallback to ID 1 if not found

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return <div className="text-center py-20">Service not found</div>;
    }

    return (
        <div className="service-detail-page">
            {/* Page Header - Aligned with AllServices */}
            <div className="page-header">
                <h1 className="main-page-title">{service.title}</h1>
                <div className="breadcrumb">
                    <Link to="/" className="breadcrumb-link">Home</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{service.title}</span>
                </div>
            </div>

            {/* Decorative Stripe */}
            <Marquee />

            {/* Service Hero Image Section */}
            <section className="service-hero-image-section">
                <div className="service-container">
                    <div className="service-hero-wrapper">
                        <div className="hero-image-placeholder">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" alt={service.title} />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Service Section */}
            <section className="section-padding about-service-section">
                <div className="service-container">
                    <div className="section-title-with-icon">
                        <div className="info-badge">i</div>
                        <h2 className="section-title">About {service.title}</h2>
                    </div>
                    <p className="text-content">
                        {service.about.description}
                    </p>

                    <h3 className="section-title" style={{ marginTop: '40px', fontSize: '1.2rem' }}>Services Include:</h3>
                    <div className="services-include-grid">
                        {service.servicesInclude.map((item, index) => (
                            <div key={index} className="include-item">
                                <span className="check-icon">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                                {item}
                            </div>
                        ))}
                    </div>

                    {/* Gallery Images */}
                    <div className="service-gallery">
                        {service.gallery && service.gallery.map((img, idx) => (
                            <div key={idx} className="gallery-image">
                                <img src={img || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} alt={`Service ${idx}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Industries Section */}
            <section className="section-padding industries-section">
                <div className="service-container">
                    <h2 className="section-title">Top 8 Industries I Cover in Website Design</h2>
                    <p className="text-content" style={{ maxWidth: '800px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <section className="section-padding benefits-section">
                <div className="service-container">
                    <h2 className="section-title">Services Benefits:</h2>
                    <p className="text-content" style={{ maxWidth: '900px' }}>
                        {service.benefits.description}
                    </p>

                    <div className="benefits-list" style={{ marginTop: '30px' }}>
                        {service.benefits.points.map((point, i) => (
                            <div key={i} className="benefit-point">
                                <div className="benefit-icon">➔</div>
                                <p>{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section (Reused) */}
            <ProjectCTA />


            {/* Contact Form Section (Reused) */}
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
