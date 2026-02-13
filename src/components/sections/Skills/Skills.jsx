import './Skills.css';

const Skills = () => {
    const coreTools = [
        { name: 'Flutter', subtitle: 'Mobile Framework', icon: 'flutter' },
        { name: 'iOS (Swift)', subtitle: 'Native Development', icon: 'swift' },
        { name: 'Node.js', subtitle: 'Backend & APIs', icon: 'nodejs' },
        { name: 'React.js', subtitle: 'Web Dashboards', icon: 'react' },
        { name: 'AI & LLMs', subtitle: 'Intelligent Features', icon: 'ai' },
        { name: 'Cloud & DevOps', subtitle: 'Infrastructure', icon: 'cloud' },
    ];

    return (
        <section className="skills-section" id="skills">
            <div className="container">
                <div className="skills-header">
                    <span className="skills-subtitle"><span className="skills-dash">—</span> Core Tools & Stack</span>
                    <h2 className="skills-heading">
                        <span className="text-highlight">Tools I Use to Build</span> <br />
                        <span className="text-secondary">Production Systems</span>
                    </h2>
                </div>

                <div className="skills-grid">
                    {coreTools.map((tool, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-pill">
                                <SkillIcon name={tool.icon} />
                                <span className="skill-subtitle-label">{tool.subtitle}</span>
                            </div>
                            <span className="skill-name">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SkillIcon = ({ name }) => {
    const icons = {
        flutter: (
            <svg viewBox="0 0 64 64" fill="none" width="40" height="40">
                <path d="M36.9 54.5L24.5 42 36.9 29.6H52.2L39.8 42 52.2 54.5H36.9Z" fill="#54C5F8" />
                <path d="M11.8 29.6L24.5 42 36.9 29.6 24.5 17.2 11.8 29.6Z" fill="#54C5F8" />
                <path d="M36.9 9.5H52.2L24.5 37 11.8 24.3 36.9 9.5Z" fill="#01579B" />
                <path d="M36.9 29.6L24.5 42L36.9 54.5H52.2L39.8 42L52.2 29.6H36.9Z" fill="#29B6F6" />
            </svg>
        ),
        swift: (
            <svg viewBox="0 0 64 64" fill="none" width="40" height="40">
                <rect width="64" height="64" rx="14" fill="url(#swift_bg)" />
                <path d="M42.8 46.4C42.8 46.4 31.6 38.4 25.2 28.8C25.2 28.8 36.4 38 40 40.4C40 40.4 48.4 31.2 48.4 20.4C48.4 20.4 41.6 30.8 35.2 33.6C35.2 33.6 24 22.8 20.4 14C20.4 14 29.2 27.6 33.6 31.6C30.8 30 19.2 22.4 12.8 14C12.8 14 22.4 26 35.2 35.6C35.2 35.6 23.2 42 12 40.8C12 40.8 24 49.6 38 43.2C38 43.2 44.4 40 48.4 32.8C48.4 32.8 51.6 43.6 42.8 46.4Z" fill="white" />
                <defs>
                    <linearGradient id="swift_bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FA7343" />
                        <stop offset="1" stopColor="#F05138" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        nodejs: (
            <svg viewBox="0 0 64 64" fill="none" width="40" height="40">
                <path d="M32 8L53.6 20V44L32 56L10.4 44V20L32 8Z" fill="#68A063" />
                <path d="M32 8L53.6 20V44L32 56V8Z" fill="#3C873A" />
                <path d="M32 28V56L10.4 44V20L32 28Z" fill="#8CC84B" />
                <text x="32" y="40" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">JS</text>
            </svg>
        ),
        react: (
            <svg viewBox="0 0 64 64" fill="none" width="40" height="40">
                <circle cx="32" cy="32" r="6" fill="#61DAFB" />
                <ellipse cx="32" cy="32" rx="24" ry="9" stroke="#61DAFB" strokeWidth="2" fill="none" />
                <ellipse cx="32" cy="32" rx="24" ry="9" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 32 32)" />
                <ellipse cx="32" cy="32" rx="24" ry="9" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 32 32)" />
            </svg>
        ),
        ai: (
            <svg viewBox="0 0 64 64" fill="none" width="40" height="40">
                <rect width="64" height="64" rx="14" fill="url(#ai_gradient)" />
                <circle cx="32" cy="26" r="8" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="32" cy="26" r="3" fill="white" />
                <path d="M24 44C24 38.4772 27.5817 34 32 34C36.4183 34 40 38.4772 40 44V50H24V44Z" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="20" cy="20" r="2" fill="white" opacity="0.6" />
                <circle cx="44" cy="20" r="2" fill="white" opacity="0.6" />
                <line x1="20" y1="20" x2="26" y2="22" stroke="white" strokeWidth="1" opacity="0.5" />
                <line x1="44" y1="20" x2="38" y2="22" stroke="white" strokeWidth="1" opacity="0.5" />
                <defs>
                    <linearGradient id="ai_gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#667EEA" />
                        <stop offset="1" stopColor="#764BA2" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        cloud: (
            <svg viewBox="0 0 64 64" fill="none" width="40" height="40">
                <rect width="64" height="64" rx="14" fill="url(#cloud_gradient)" />
                <path d="M46 36H43C43 30.4772 38.5228 26 33 26C28.2014 26 24.1571 29.5886 23.1561 34.3C19.7979 34.5519 17.2 37.4774 17.2 41C17.2 44.866 20.334 48 24.2 48H46C49.3137 48 52 45.3137 52 42C52 38.6863 49.3137 36 46 36Z" fill="white" />
                <rect x="29" y="14" width="6" height="3" rx="1" fill="white" opacity="0.6" />
                <rect x="26" y="19" width="12" height="3" rx="1" fill="white" opacity="0.8" />
                <defs>
                    <linearGradient id="cloud_gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4FACFE" />
                        <stop offset="1" stopColor="#00F2FE" />
                    </linearGradient>
                </defs>
            </svg>
        ),
    };

    return (
        <div className="skill-icon">
            {icons[name] || <div className="skill-icon-placeholder">{name?.charAt(0)?.toUpperCase()}</div>}
        </div>
    );
};

export default Skills;
