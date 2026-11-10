import { useState } from 'react';
import './ProjectVisual.css';

// No stock photography or invented app screenshots for projects without assets.
export default function ProjectVisual({ project, className = '' }) {
    const [failedSource, setFailedSource] = useState(null);
    if (project.image && failedSource !== project.image) {
        return <img src={project.image} alt={project.title} className={`project-img ${className}`} loading="lazy" onError={() => setFailedSource(project.image)} />;
    }
    return (
        <div className="project-visual-placeholder" role="img" aria-label={`${project.title}: project illustration, not an app screenshot`}>
            <span className="project-visual-monogram" aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}</span>
            <span>{project.title}</span>
            <small>Project overview</small>
        </div>
    );
}
