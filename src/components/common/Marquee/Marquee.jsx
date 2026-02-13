import React from 'react';
import './Marquee.css';

const Marquee = ({ hideBackground = false, compact = false, className = '' }) => {
    const services = [
        'Flutter',
        'iOS (Swift)',
        'Node.js',
        'React.js',
        'REST APIs',
        'AI / LLM Integrations',
        'Cloud & CI/CD',
        'Scalable Mobile Systems'
    ];

    return (
        <div className={`common-marquee-wrapper ${compact ? 'compact' : ''} ${className}`}>
            {!hideBackground && <div className="common-marquee-bg"></div>}
            <div className="common-marquee">
                <div className="common-marquee-track">
                    {[...services, ...services, ...services].map((service, index) => (
                        <div className="common-marquee-item" key={index}>
                            <span className="common-marquee-text">{service}</span>
                            <span className="common-marquee-star">✳︎</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
