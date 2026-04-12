import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectDetails, projects, serviceDetails } from '../data/content';
import Contact from '../components/sections/Contact/Contact';
import ProjectCTA from '../components/sections/CTA/ProjectCTA';
import Marquee from '../components/common/Marquee/Marquee';
import arrowRightIcon from '../assets/arrow-right.png';
import '../components/sections/Projects/Projects.css';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectDetails[id];

    // Scroll to top on mount or ID change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="project-not-found">
                <h2>Project Not Found</h2>
                <Link to="/projects" className="back-link">Back to Projects</Link>
            </div>
        );
    }

    // Get other projects for the bottom "View Other Projects" section
    const otherProjects = projects.filter(p => p.id.toString() !== id).slice(0, 2);

    return (
        <div className="project-detail-page">
            {/* Page Header */}
            <div className="page-header">
                <h1 className="v4-breadcrumb-title">Project Details</h1>
                <div className="breadcrumb">
                    <Link to="/" className="breadcrumb-link">Home</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">Project Details</span>
                </div>
            </div>

            {/* Decorative Stripe */}
            <Marquee className="v4-project-marquee" />

            {/* Detail gallery images (e.g. Richie PS1–PS3) — after yellow stripe */}
            {project.detailGalleryImages && project.detailGalleryImages.length > 0 && (
                <div className="v4-detail-gallery">
                    <div className="container">
                        <div className="v4-detail-gallery-grid">
                            {project.detailGalleryImages.map((src, index) => (
                                <div key={index} className="v4-detail-gallery-item">
                                    <img src={src} alt={`${project.title} ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Showcase Visual Set — hidden when project has detail gallery (e.g. Richie) */}
            {(!project.detailGalleryImages || project.detailGalleryImages.length === 0) && (
                <div className="v4-showcase-section">
                    <div className="container">
                        <div className="v4-showcase-list">
                            {[...project.showcaseImages, ...project.showcaseImages].slice(0, 5).map((img, index) => (
                                <div key={index} className={`v4-showcase-card-mobile ${index === 2 ? 'active' : ''}`}>
                                    <img src={img} alt={`${project.title} screen ${index + 1}`} />
                                    {index === 2 && (
                                        <div className="v4-play-button">
                                            <div className="v4-play-triangle"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <section className="v4-main-section">
                <div className="container">
                    {/* Intro Flex Row */}
                    <div className="v4-content-row">
                        <div className="v4-content-left">
                            <h1 className="v4-project-title">
                                {project.title} <span className="v4-highlight">Solution</span>
                            </h1>

                            {project.summary && (
                                <p className="v4-text-normal" style={{ marginBottom: '1rem' }}>
                                    {project.summary}
                                </p>
                            )}
                            {!project.summary && (
                                <>
                                    <div className="v4-intro-group">
                                        <div className="v4-avatar-circle">
                                            {project.testimonial?.avatar}
                                        </div>
                                        <div className="v4-intro-text">
                                            <p className="v4-text-normal">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                                            </p>
                                        </div>
                                    </div>
                                    <p className="v4-text-normal">
                                        {project.challenge?.split('. ')[0]}. {project.solution?.split('. ')[0]}. {project.challenge?.split('. ').slice(1, 4).join('. ')}
                                    </p>
                                    <p className="v4-text-normal">
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    </p>
                                </>
                            )}
                        </div>

                        <div className="v4-metadata-box">
                            <div className="v4-meta-item">
                                <span className="v4-meta-label">Project Category :</span>
                                <span className="v4-meta-value">{project.category}{(!project.category?.includes('Design') && !project.category?.includes('Application')) ? ' Design' : ''}</span>
                            </div>
                            <div className="v4-meta-item">
                                <span className="v4-meta-label">Client :</span>
                                <span className="v4-meta-value">{project.testimonial?.name || project.client}</span>
                            </div>
                            {project.duration && (
                                <div className="v4-meta-item">
                                    <span className="v4-meta-label">Duration :</span>
                                    <span className="v4-meta-value">{project.duration}</span>
                                </div>
                            )}
                            <div className="v4-meta-item">
                                <span className="v4-meta-label">Country :</span>
                                <span className="v4-meta-value">{project.country}</span>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Sections */}
                    <div className="v4-details-stack">
                        <div className="v4-detail-block">
                            <h2 className="v4-section-heading">The Challenge</h2>
                            <p className="v4-text-description">{project.challenge}</p>
                        </div>

                        <div className="v4-detail-block">
                            <h2 className="v4-section-heading">The Solution</h2>
                            <p className="v4-text-description">{project.solution}</p>
                            <div className="v4-solution-grid">
                                {project.solutionPoints.map((point, index) => (
                                    <div key={index} className="v4-solution-card">
                                        <div className="v4-check-row">
                                            <div className="v4-orange-check-circle">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <span className="v4-solution-point-text">{point}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Project Gallery - Two side-by-side images */}
                        <div className="v4-project-gallery">
                            {project.showcaseImages && project.showcaseImages.slice(0, 2).map((img, idx) => (
                                <div key={idx} className="v4-gallery-image">
                                    <img src={img} alt={`${project.title} showcase ${idx + 1}`} />
                                </div>
                            ))}
                        </div>

                        <div className="v4-detail-block">
                            <h2 className="v4-section-heading">The Impact</h2>
                            <p className="v4-text-description">{project.impact}</p>
                        </div>

                        {project.techStack && project.techStack.length > 0 && (
                            <div className="v4-detail-block">
                                <h2 className="v4-section-heading">Technology Stack</h2>
                                <div className="v4-solution-grid">
                                    {project.techStack.map((item, index) => (
                                        <div key={index} className="v4-solution-card">
                                            <div className="v4-check-row">
                                                <div className="v4-orange-check-circle">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </div>
                                                <span className="v4-solution-point-text">{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.projectBenefits && project.projectBenefits.length > 0 && (
                            <div className="v4-detail-block">
                                <h2 className="v4-section-heading">Project Benefits</h2>
                                <div className="v4-solution-grid">
                                    {project.projectBenefits.map((point, index) => (
                                        <div key={index} className="v4-solution-card">
                                            <div className="v4-check-row">
                                                <div className="v4-orange-check-circle">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </div>
                                                <span className="v4-solution-point-text">{point}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </section>

            {/* Benefits Section - Dynamic based on category */}
            {(() => {
                const getServiceKey = (cat) => {
                    const c = cat.toLowerCase();
                    if (c.includes('mobile')) return 'mobile-apps';
                    if (c.includes('full-stack')) return 'full-stack';
                    if (c.includes('web app')) return 'web-applications';
                    if (c.includes('ai')) return 'ai-features';
                    return 'mobile-apps';
                };
                const service = serviceDetails[getServiceKey(project.category)];
                if (!service) return null;

                return (
                    <section className="benefits-section">
                        <div className="container">
                            <div style={{ maxWidth: '800px' }}>
                                <h2 className="v4-section-heading">Project Benefits:</h2>
                                <p className="v4-text-description" style={{ marginBottom: '30px' }}>
                                    {service.benefits.description}
                                </p>

                                <div className="benefits-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                                    {service.benefits.points.map((point, i) => (
                                        <div key={i} className="benefit-point">
                                            <div className="benefit-icon"></div>
                                            <p>{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })()}

            {/* View Other Projects Section */}
            <section className="view-other-projects-section">
                <Marquee hideBackground={false} compact={true} />
                <div className="container">
                    <div className="v4-other-projects-header">
                        <span className="v4-other-subtitle">— View Projects</span>
                        <h2 className="v4-other-title">
                            View Other <span className="v4-highlight-yellow">Projects</span>
                        </h2>
                    </div>

                    <div className="v4-other-projects-grid">
                        {otherProjects.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="project-image-container">
                                    <img
                                        src={`https://picsum.photos/600/500?random=${project.id}`}
                                        alt={project.title}
                                        className="project-img"
                                    />
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    {project.subtitle && (
                                        <p className="project-subtitle">{project.subtitle}</p>
                                    )}
                                    <div className="project-tags">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="project-footer">
                                        <span className="project-role">{project.role}</span>
                                        <Link to={`/projects/${project.id}`} className="project-action-btn" aria-label="View Project">
                                            <img src={arrowRightIcon} alt="Go" className="project-arrow-icon" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Marquee hideBackground={false} compact={true} />
            </section>

            {/* CTA Section */}
            <ProjectCTA />

            {/* Contact Form Section */}
            <div className="contact-wrapper-dark" style={{ paddingBottom: '0px' }}>
                <Contact />
                <Marquee hideBackground={false} compact={true} />
            </div>
        </div>
    );
};

export default ProjectDetail;
