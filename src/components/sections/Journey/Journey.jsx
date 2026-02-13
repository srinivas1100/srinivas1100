import { useEffect, useRef } from 'react';
import { journey, experienceSummary } from '../../../data/content';
import './Journey.css';

const Journey = () => {
    const timelineRef = useRef(null);
    const headerRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe header
        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        // Observe timeline items
        if (timelineRef.current) {
            const items = timelineRef.current.querySelectorAll('.journey-item');
            items.forEach((item) => observer.observe(item));
        }

        // Observe footer
        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="journey section" id="journey">
            <div className="container">
                <div className="journey-header" ref={headerRef}>
                    <span className="journey-subtitle">Work Experience</span>
                    <h2 className="journey-title">
                        My <span className="journey-highlight">Professional</span> Journey
                    </h2>
                </div>

                <div className="journey-timeline" ref={timelineRef}>
                    {journey.map((item, index) => (
                        <article
                            key={item.id}
                            className="journey-item"
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="journey-marker">
                                <div className="journey-dot"></div>
                                {index < journey.length - 1 && <div className="journey-line"></div>}
                            </div>
                            <div className="journey-content">
                                <span className="journey-year">{item.year}</span>
                                <h3 className="journey-role">{item.role}</h3>
                                <span className="journey-company">{item.company}</span>
                                <p className="journey-description">{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Experience Summary Footer */}
                <div className="journey-footer" ref={footerRef}>
                    <span className="journey-summary">{experienceSummary}</span>
                </div>
            </div>
        </section>
    );
};

export default Journey;
