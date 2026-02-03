import { projects } from '../../../data/content';
import SectionTitle from '../../common/SectionTitle';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects section">
            <div className="container">
                <SectionTitle
                    subtitle="Portfolio"
                    title="My Latest Projects"
                    highlight="Projects"
                    align="center"
                />

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="project-image">
                                <img
                                    src={`https://picsum.photos/400/300?random=${project.id + 10}`}
                                    alt={project.title}
                                />
                                <div className="project-overlay">
                                    <span className="project-category">{project.category}</span>
                                    <h3 className="project-title">{project.title}</h3>
                                    <a href="#" className="project-link">
                                        View Project
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="projects-cta">
                    <a href="#" className="view-all-link">
                        View All Projects
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
