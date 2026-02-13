import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/content';
import Contact from '../components/sections/Contact/Contact';
import ProjectCTA from '../components/sections/CTA/ProjectCTA';
import Marquee from '../components/common/Marquee/Marquee';
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
                                    <div className="project-tags">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="project-tag">{tag}</span>
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
