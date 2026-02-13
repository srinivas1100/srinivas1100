import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allServicesData } from '../data/content';
import { ServiceIcon } from '../components/sections/Services/Services';
import Contact from '../components/sections/Contact/Contact'; // Reusing Contact
import ProjectCTA from '../components/sections/CTA/ProjectCTA';
import Marquee from '../components/common/Marquee/Marquee';
import arrowRight from '../assets/arrow-right.png';
import './AllServices.css';

const AllServices = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div className="all-services-page">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="main-page-title">Services</h1>
                <div className="breadcrumb">
                    <Link to="/" className="breadcrumb-link">Home</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">Services</span>
                </div>
            </div>

            {/* Decorative Stripe */}
            <Marquee className="all-services-marquee" />

            <section className="all-services-hero">
                <div className="container">
                    <div className="services-header-center">
                        <span className="services-subtitle-center">Services</span>
                        <h1 className="services-title-center">
                            <span className="highlight">Services</span> I Provide
                        </h1>
                        <p style={{ marginTop: '20px', fontSize: '18px', color: '#555', maxWidth: '600px', margin: '20px auto 0' }}>
                            Focused on building reliable, scalable products used by real users.
                        </p>
                    </div>

                    <div className="all-services-grid">
                        {allServicesData.map(service => (
                            <div key={service.id} className="service-card-full">
                                <div className="service-icon-wrapper-full">
                                    <div className={`service-icon icon-${service.icon}`}>
                                        <ServiceIcon name={service.icon} />
                                    </div>
                                </div>
                                <h3 className="service-title-full">{service.title}</h3>
                                <p className="service-desc-full">{service.description}</p>

                                {service.includes && (
                                    <div className="service-includes-full">
                                        <ul className="includes-list-full">
                                            {service.includes.map((item, index) => (
                                                <li key={index} className="includes-item-full">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', minWidth: '14px' }}>
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <Link to={`/services/${service.id}`} className="learn-more-full">
                                    Learn more
                                    <div
                                        className="learn-more-arrow-icon"
                                        style={{
                                            maskImage: `url(${arrowRight})`,
                                            WebkitMaskImage: `url(${arrowRight})`
                                        }}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <ProjectCTA />

            <div className="contact-wrapper-dark">
                <Contact />
                <div style={{ paddingBottom: '0px' }}>
                    <Marquee hideBackground={true} compact={true} />
                </div>
            </div>
        </div>
    )
}

export default AllServices;
