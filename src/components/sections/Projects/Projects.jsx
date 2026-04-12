import { Link } from 'react-router-dom';
import { projects } from '../../../data/content';
import SectionTitle from '../../common/SectionTitle';
import { PlayStoreIcon, AppStoreIcon } from '../../common/StoreIcons/StoreIcons';
import arrowRightIcon from '../../../assets/arrow-right.png';
import './Projects.css';

// Home page: only these projects in this order (Richie, Guidel, AI Crix, Sparks)
const HOME_PROJECT_IDS = [1, 2, 8, 7];

const Projects = () => {
    const homeProjects = projects
        .filter((p) => HOME_PROJECT_IDS.includes(p.id))
        .sort((a, b) => HOME_PROJECT_IDS.indexOf(a.id) - HOME_PROJECT_IDS.indexOf(b.id));

    return (
        <section className="projects-section" id="works">
            <div className="container">
                {/* Header with Title and View All Button */}
                <div className="projects-header">
                    <div className="header-content">
                        <span className="section-subtitle">My Portfolio</span>
                        <h2 className="section-title">
                            Selected <span className="title-highlight">Projects</span>
                        </h2>
                    </div>
                    <Link to="/projects" className="btn-portfolio-wrapper">
                        <div className="btn-portfolio">
                            <span className="btn-text">View All Projects</span>
                        </div>
                        <div className="btn-play-icon">
                            <img src={arrowRightIcon} alt="Arrow Right" style={{ width: '24px', height: '24px', objectFit: 'contain', filter: 'brightness(0) saturate(100%) drop-shadow(0px 0px 0.5px rgba(0,0,0,1))' }} />
                        </div>
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {homeProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-container">
                                <img
                                    src={project.image || `https://picsum.photos/600/500?random=${project.id}`}
                                    alt={project.title}
                                    className={`project-img ${project.id === 4 ? 'project-img--contain' : ''}`}
                                />
                            </div>
                            <div className="project-content">
                                {/* Project Header with Title & Subtitle */}
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    {project.subtitle && (
                                        <p className="project-subtitle">{project.subtitle}</p>
                                    )}
                                </div>

                                {/* Project Description */}
                                {project.description && (
                                    <p className="project-description">{project.description}</p>
                                )}

                                {/* Tech Stack Tags */}
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="project-tag">{tag}</span>
                                    ))}
                                </div>

                                {/* Store Links */}
                                {(project.playStoreUrl || project.appStoreUrl) && (
                                    <div className="project-store-links">
                                        {project.playStoreUrl && (
                                            <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="project-store-link">
                                                <PlayStoreIcon className="project-store-icon" /> Play Store
                                            </a>
                                        )}
                                        {project.playStoreUrl && project.appStoreUrl && <span className="project-store-sep">·</span>}
                                        {project.appStoreUrl && (
                                            <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className="project-store-link">
                                                <AppStoreIcon className="project-store-icon" /> App Store
                                            </a>
                                        )}
                                    </div>
                                )}

                                {/* Role Tag & Action Button */}
                                <div className="project-footer">
                                    {project.role && (
                                        <span className="project-role">{project.role}</span>
                                    )}
                                    {!project.hideDetailLink && (
                                        <Link to={`/projects/${project.id}`} className="project-action-btn" aria-label="View Project">
                                            <img src={arrowRightIcon} alt="Go" className="project-arrow-icon" />
                                        </Link>
                                    )}
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
