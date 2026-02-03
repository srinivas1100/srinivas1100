import { projects } from '../../../data/content';
import SectionTitle from '../../common/SectionTitle';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects-section" id="works">
            <div className="container">
                {/* Header with Title and View All Button */}
                <div className="projects-header">
                    <div className="header-content">
                        <span className="section-subtitle">My Portfolio</span>
                        <h2 className="section-title">
                            My Latest <span className="title-highlight">Projects</span>
                        </h2>
                    </div>
                    <a href="#" className="view-all-btn">
                        <span className="btn-text">View All Projects</span>
                        <span className="btn-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </span>
                    </a>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-container">
                                <img
                                    src={`https://picsum.photos/600/500?random=${project.id}`}
                                    alt={project.title}
                                    className="project-img"
                                />
                            </div>
                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-footer">
                                    <h3 className="project-title">{project.title}</h3>
                                    <a href="#" className="project-action-btn" aria-label="View Project">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
