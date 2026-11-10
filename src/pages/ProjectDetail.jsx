import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectDetails, projects } from '../data/content';
import ProjectVisual from '../components/common/ProjectVisual/ProjectVisual';
import Contact from '../components/sections/Contact/Contact';
import ProjectCTA from '../components/sections/CTA/ProjectCTA';
import Marquee from '../components/common/Marquee/Marquee';
import '../components/sections/Projects/Projects.css';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    // Own-property lookup prevents inherited object names from resolving as projects.
    const project = Object.hasOwn(projectDetails, id) ? projectDetails[id] : null;
    useEffect(() => { window.scrollTo(0, 0); }, [id]);

    if (!project) {
        return <div className="project-not-found"><h1>Project not found</h1><p>This project is not in the current portfolio.</p><Link to="/projects" className="back-link">Back to projects</Link></div>;
    }
    const otherProjects = projects.filter(p => p.id !== project.id).slice(0, 2);
    const links = [
        ['Official website', project.websiteUrl],
        ['App Store', project.appStoreUrl],
        ['Google Play', project.playStoreUrl],
    ].filter(([, url]) => url);

    return (
        <div className="project-detail-page">
            <header className="page-header">
                <h1 className="v4-breadcrumb-title">{project.title}</h1>
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link to="/" className="breadcrumb-link">Home</Link><span aria-hidden="true">/</span>
                    <Link to="/projects" className="breadcrumb-link">Projects</Link><span aria-hidden="true">/</span>
                    <span aria-current="page">{project.title}</span>
                </nav>
            </header>
            <Marquee className="v4-project-marquee" />
            <section className="v4-main-section">
                <div className="container">
                    <div className="v4-content-row">
                        <div className="v4-content-left">
                            <span className="project-status">{project.status}</span>
                            <h2 className="v4-project-title">{project.subtitle}</h2>
                            <p className="v4-text-description">{project.description}</p>
                            {project.scopeNote && <p className="project-evidence-note">{project.scopeNote}</p>}
                            {links.length > 0 && <div className="project-resource-links" aria-label="Product links">
                                {links.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noopener noreferrer">{label} ↗</a>)}
                            </div>}
                        </div>
                        <dl className="v4-metadata-box">
                            <div className="v4-meta-item"><dt className="v4-meta-label">My role</dt><dd className="v4-meta-value">{project.role}</dd></div>
                            <div className="v4-meta-item"><dt className="v4-meta-label">Organization</dt><dd className="v4-meta-value">{project.organization}</dd></div>
                            {project.period && <div className="v4-meta-item"><dt className="v4-meta-label">Engagement</dt><dd className="v4-meta-value">{project.period}</dd></div>}
                        </dl>
                    </div>
                    <div className="portfolio-detail-visual"><ProjectVisual key={project.id} project={project} /></div>
                    <div className="v4-details-stack">
                        <section className="v4-detail-block">
                            <h2 className="v4-section-heading">My contribution</h2>
                            <ul className="portfolio-contributions">{project.contributions.map(point => <li key={point}>{point}</li>)}</ul>
                        </section>
                        <section className="v4-detail-block">
                            <h2 className="v4-section-heading">Project statistics & reliability</h2>
                            <p className="project-evidence-note">Figures below describe the documented project scope or résumé-reported results. They are not live analytics.</p>
                            <dl className="portfolio-metrics">
                                {project.metrics.map(metric => <div className="portfolio-metric" key={metric.label}>
                                    <dt>{metric.label}</dt><dd><strong>{metric.value}</strong><p>{metric.note}</p></dd>
                                </div>)}
                                <div className="portfolio-metric"><dt>Crash-free performance</dt><dd><strong>{project.reliability.value}</strong><p>{project.reliability.note}</p></dd></div>
                            </dl>
                        </section>
                        <section className="v4-detail-block">
                            <h2 className="v4-section-heading">Technologies & integrations</h2>
                            <ul className="portfolio-tech">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                        </section>
                        {project.gallery.length > 0 && <section className="v4-detail-block">
                            <h2 className="v4-section-heading">Application gallery</h2>
                            <div className="v4-detail-gallery-grid">{project.gallery.map((src, index) => <img className="portfolio-gallery-image" key={src} src={src} alt={`${project.title} application screenshot ${index + 1}`} loading="lazy" />)}</div>
                        </section>}
                    </div>
                </div>
            </section>
            <section className="view-other-projects-section">
                <div className="container">
                    <h2 className="v4-section-heading">Explore other projects</h2>
                    <div className="v4-other-projects-grid">{otherProjects.map(item => <article key={item.id} className="project-card">
                        <div className="project-image-container"><ProjectVisual project={item} /></div>
                        <div className="project-content"><h3 className="project-title">{item.title}</h3><p>{item.subtitle}</p><Link to={`/projects/${item.id}`} className="portfolio-detail-link">View {item.title} →</Link></div>
                    </article>)}</div>
                    <Link to="/projects" className="portfolio-detail-link">View all {projects.length} projects →</Link>
                </div>
            </section>
            <ProjectCTA />
            <div className="contact-wrapper-dark"><Contact /><Marquee hideBackground={false} compact={true} /></div>
        </div>
    );
};
export default ProjectDetail;
