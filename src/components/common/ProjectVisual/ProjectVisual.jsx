import { useState } from 'react';
import './ProjectVisual.css';

// Generated product concepts are visibly distinguished from actual application assets.
export default function ProjectVisual({ project, className = '' }) {
    const [failedSource, setFailedSource] = useState(null);
    if (project.image && failedSource !== project.image) {
        const visual = <img src={project.image} alt={project.visualKind === 'concept' ? `${project.title}: AI-generated concept illustration, not an app screenshot` : project.title} className={`project-img ${className}`} loading="lazy" onError={() => setFailedSource(project.image)} />;
        return project.visualKind === 'concept' ? <figure className="project-concept-visual">{visual}<figcaption>Concept illustration · Not an app screenshot</figcaption></figure> : visual;
    }
    return (
        <div className="project-visual-placeholder" role="img" aria-label={`${project.title}: project illustration, not an app screenshot`}>
            <span className="project-visual-monogram" aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}</span>
            <span>{project.title}</span>
            <small>Project overview</small>
        </div>
    );
}
