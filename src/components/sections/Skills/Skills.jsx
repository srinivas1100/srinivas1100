import './Skills.css';

const Skills = () => {
    const favoriteTools = [
        { name: 'Figma', percentage: '98%', icon: 'figma' },
        { name: 'Sketch', percentage: '92%', icon: 'sketch' },
        { name: 'Photoshop', percentage: '90%', icon: 'photoshop' },
        { name: 'After Effects', percentage: '85%', icon: 'aftereffects' },
        { name: 'Storybook', percentage: '90%', icon: 'storybook' },
        { name: 'InVision', percentage: '95%', icon: 'invision' },
    ];

    return (
        <section className="skills-section" id="skills">
            <div className="container">
                <div className="skills-header">
                    <span className="skills-subtitle"><span className="skills-dash">—</span> My Favorite Tools</span>
                    <h2 className="skills-heading">
                        <span className="text-highlight">Exploring the Tools</span> <br />
                        <span className="text-secondary">Behind My Designs</span>
                    </h2>
                </div>

                <div className="skills-grid">
                    {favoriteTools.map((tool, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-pill">
                                <SkillIcon name={tool.icon} />
                                <span className="skill-percentage">{tool.percentage}</span>
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
        figma: (
            <svg viewBox="0 0 38 57" fill="none" width="40" height="40">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
            </svg>
        ),
        sketch: (
            <svg viewBox="0 0 32 32" fill="none" width="40" height="40">
                <path d="M16 2L2 11L16 30L30 11L16 2Z" fill="#FDB300" />
                <path d="M6 11L16 30L2 11H6Z" fill="#EA6C00" />
                <path d="M26 11L16 30L30 11H26Z" fill="#EA6C00" />
                <path d="M6 11H26L16 30L6 11Z" fill="#FDAD00" />
                <path d="M16 2L6 11H26L16 2Z" fill="#FDD231" />
                <path d="M2 11L6 11L16 2L2 11Z" fill="#FDAD00" />
                <path d="M30 11L26 11L16 2L30 11Z" fill="#FDAD00" />
            </svg>
        ),
        photoshop: (
            <svg viewBox="0 0 32 32" fill="none" width="40" height="40">
                <rect width="32" height="32" rx="6" fill="#001E36" />
                <path d="M9 22V10H13C15.2091 10 17 11.7909 17 14C17 16.2091 15.2091 18 13 18H11V22H9ZM11 16H13C14.1046 16 15 15.1046 15 14C15 12.8954 14.1046 12 13 12H11V16Z" fill="#31A8FF" />
                <path d="M18 19.5C18 17.567 19.567 16 21.5 16C22.3 16 23.1 16.3 23.7 16.8V16.2H25.5V22H23.7V21.4C23.1 21.9 22.3 22.2 21.5 22.2C19.567 22.2 18 20.633 18 18.7V19.5ZM21.5 20.2C22.4 20.2 23.2 19.5 23.2 18.5C23.2 17.5 22.4 16.8 21.5 16.8C20.6 16.8 19.8 17.5 19.8 18.5C19.8 19.5 20.6 20.2 21.5 20.2Z" fill="#31A8FF" />
            </svg>
        ),
        aftereffects: (
            <svg viewBox="0 0 32 32" fill="none" width="40" height="40">
                <rect width="32" height="32" rx="6" fill="#00005B" />
                <path d="M14 22H11.5L9.5 17.5H6L4 22H1.5L7 8H9L14 22ZM8 10.5L6.5 15.5H9.5L8 10.5Z" fill="#9999FF" />
                <path d="M21 16C22.5 16 23.5 17.1 23.5 18.7V22H21.5V19C21.5 18 21 17.5 20.2 17.5C19.4 17.5 18.8 18.1 18.8 19.1V22H16.8V12H18.8V16.3C19.3 16.1 19.9 16 20.5 16H21Z" fill="#9999FF" />
            </svg>
        ),
        storybook: (
            <svg viewBox="0 0 32 32" fill="none" width="40" height="40">
                <path d="M16.76 2.05L26.68 7.35C27.08 7.57 27.27 8.01 27.18 8.44L23.44 26.54C23.35 26.96 23.01 27.29 22.58 27.38L4.48 31.12C4.05 31.21 3.61 31.02 3.39 30.62L0.29 20.7C0.07 20.3 0.17 19.81 0.5 19.52L14.71 7.21C15.22 6.77 15.98 6.81 16.44 7.27L22 12.83" fill="#FF4785" />
                <rect x="5" y="5" width="22" height="22" rx="4" fill="#FF4785" />
                <path d="M11 11H21V14H11V11ZM11 16H21V19H11V16ZM11 21H17V24H11V21Z" fill="white" />
            </svg>
        ),
        invision: (
            <svg viewBox="0 0 32 32" fill="none" width="40" height="40">
                <rect width="32" height="32" rx="6" fill="#FF3366" />
                <path d="M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8ZM20.5 17.5H18.5V20.5H16.5V17.5H14.5V20.5H12.5V16.5C12.5 15.4 13.4 14.5 14.5 14.5H18.5V12.5H12.5V11.5H18.5C19.6 11.5 20.5 12.4 20.5 13.5V17.5Z" fill="white" />
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
