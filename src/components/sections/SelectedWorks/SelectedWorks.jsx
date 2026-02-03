import { selectedWorks } from '../../../data/content';
import SectionTitle from '../../common/SectionTitle';
import './SelectedWorks.css';

const SelectedWorks = () => {
    return (
        <section className="selected-works section" id="works">
            <div className="container">
                <SectionTitle
                    subtitle="Portfolio"
                    title="Selected Works"
                    highlight="Works"
                    align="center"
                />

                <div className="works-grid">
                    {selectedWorks.map((work, index) => (
                        <article key={work.id} className={`work-card ${index % 2 === 0 ? 'work-card-left' : 'work-card-right'}`}>
                            <div className="work-image">
                                <img
                                    src={`https://picsum.photos/600/400?random=${work.id}`}
                                    alt={work.title}
                                />
                                <div className="work-overlay">
                                    <a href={work.link} className="work-link">
                                        View Project →
                                    </a>
                                </div>
                            </div>
                            <div className="work-content">
                                <span className="work-category">{work.category}</span>
                                <h3 className="work-title">{work.title}</h3>
                                <p className="work-description">{work.description}</p>
                                <div className="work-tags">
                                    {work.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="work-tag">{tag}</span>
                                    ))}
                                </div>
                                <a href={work.link} className="work-arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelectedWorks;
