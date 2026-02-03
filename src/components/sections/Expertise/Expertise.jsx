import { expertise } from '../../../data/content';
import SectionTitle from '../../common/SectionTitle';
import './Expertise.css';

const Expertise = () => {
    return (
        <section className="expertise section">
            <div className="container">
                <SectionTitle
                    subtitle="What I Do"
                    title="My Expertise Areas"
                    highlight="Expertise"
                    align="center"
                />

                <div className="expertise-grid">
                    {expertise.map((item) => (
                        <article key={item.id} className={`expertise-card expertise-card-${item.color}`}>
                            <div className="expertise-icon">
                                <ExpertiseIcon name={item.icon} />
                            </div>
                            <h3 className="expertise-title">{item.title}</h3>
                            <p className="expertise-description">{item.description}</p>
                            <a href="#" className="expertise-link">
                                Learn More
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExpertiseIcon = ({ name }) => {
    const icons = {
        design: (
            <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
                <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M30 18H36M30 24H36M30 30H36M12 30L18 24L24 30L30 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        code: (
            <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
                <path d="M16 12L6 24L16 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 12L42 24L32 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28 8L20 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        research: (
            <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
                <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" />
                <path d="M30 30L42 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 14V20H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    };

    return icons[name] || null;
};

export default Expertise;
