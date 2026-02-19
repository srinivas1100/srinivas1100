import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/content';
import Contact from '../components/sections/Contact/Contact';
import ProjectCTA from '../components/sections/CTA/ProjectCTA';
import Marquee from '../components/common/Marquee/Marquee';
import arrowRightIcon from '../assets/arrow-right.png';
import './AllProjects.css';

const AllProjects = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="all-projects-page">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="main-page-title">Projects</h1>
                <div className="breadcrumb">
                    <Link to="/" className="breadcrumb-link">Home</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">Projects</span>
                </div>
            </div>

            {/* Decorative Stripe */}
            <Marquee />

            <section className="all-projects-grid-section">
                <div className="container">
                    <div className="projects-header-center">
                        <span className="projects-subtitle-center">My Portfolio</span>
                        <h1 className="projects-title-center">
                            My Latest <span className="highlight">Projects</span>
                        </h1>
                    </div>

                    <div className="all-projects-grid">
                        {projects.map(project => (
                            <div key={project.id} className="project-card">
                                <div className="project-image-container">
                                    <img
                                        src={`https://picsum.photos/600/500?random=${project.id + 10}`}
                                        alt={project.title}
                                        className="project-img"
                                    />
                                </div>
                                <div className="project-content">
                                    <div className="project-header">
                                        <h3 className="project-title">{project.title}</h3>
                                        {project.subtitle && (
                                            <p className="project-subtitle">{project.subtitle}</p>
                                        )}
                                    </div>

                                    {project.description && (
                                        <p className="project-description">{project.description}</p>
                                    )}

                                    <div className="project-tags">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="project-tag">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="project-footer">
                                        {project.role && (
                                            <span className="project-role">{project.role}</span>
                                        )}
                                        <Link to={`/projects/${project.id}`} className="project-action-btn" aria-label="View Project">
                                            <img src={arrowRightIcon} alt="Go" className="project-arrow-icon" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="load-more-container">
                        <button className="load-more-btn">Load More Projects</button>
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
    );
};

export default AllProjects;
