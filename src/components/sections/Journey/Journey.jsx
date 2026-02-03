import { journey } from '../../../data/content';
import SectionTitle from '../../common/SectionTitle';
import './Journey.css';

const Journey = () => {
    return (
        <section className="journey section" id="journey">
            <div className="container">
                <div className="journey-header">
                    <span className="journey-subtitle">Work Experience</span>
                    <h2 className="journey-title">
                        My <span className="journey-highlight">Professional</span> Journey
                    </h2>
                </div>

                <div className="journey-timeline">
                    {journey.map((item, index) => (
                        <article key={item.id} className="journey-item">
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
            </div>
        </section>
    );
};

export default Journey;
