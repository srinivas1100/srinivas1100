import { skills } from '../../../data/content';
import './Skills.css';

const Skills = () => {
    return (
        <section className="skills section-sm">
            <div className="container">
                <div className="skills-wrapper">
                    <div className="skills-label">
                        <span>My Tech Stack</span>
                    </div>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <SkillIcon name={skill.icon} />
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillIcon = ({ name }) => {
    const icons = {
        figma: (
            <svg viewBox="0 0 38 57" fill="none" width="32" height="32">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
            </svg>
        ),
        sketch: (
            <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                <path d="M16 2L2 11L16 30L30 11L16 2Z" fill="#FDB300" />
                <path d="M6 11L16 30L2 11H6Z" fill="#EA6C00" />
                <path d="M26 11L16 30L30 11H26Z" fill="#EA6C00" />
                <path d="M6 11H26L16 30L6 11Z" fill="#FDAD00" />
                <path d="M16 2L6 11H26L16 2Z" fill="#FDD231" />
                <path d="M2 11L6 11L16 2L2 11Z" fill="#FDAD00" />
                <path d="M30 11L26 11L16 2L30 11Z" fill="#FDAD00" />
            </svg>
        ),
        xd: (
            <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                <rect width="32" height="32" rx="6" fill="#FF61F6" />
                <path d="M9.5 21L13.5 14L10 8H13L15.5 12.5L18 8H21L17.5 14L21.5 21H18.5L15.5 15.5L12.5 21H9.5Z" fill="white" />
            </svg>
        ),
        photoshop: (
            <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                <rect width="32" height="32" rx="6" fill="#001E36" />
                <path d="M9 22V10H13C15.2091 10 17 11.7909 17 14C17 16.2091 15.2091 18 13 18H11V22H9ZM11 16H13C14.1046 16 15 15.1046 15 14C15 12.8954 14.1046 12 13 12H11V16Z" fill="#31A8FF" />
                <path d="M18 19.5C18 17.567 19.567 16 21.5 16C22.3 16 23.1 16.3 23.7 16.8V16.2H25.5V22H23.7V21.4C23.1 21.9 22.3 22.2 21.5 22.2C19.567 22.2 18 20.633 18 18.7V19.5ZM21.5 20.2C22.4 20.2 23.2 19.5 23.2 18.5C23.2 17.5 22.4 16.8 21.5 16.8C20.6 16.8 19.8 17.5 19.8 18.5C19.8 19.5 20.6 20.2 21.5 20.2Z" fill="#31A8FF" />
            </svg>
        ),
        illustrator: (
            <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                <rect width="32" height="32" rx="6" fill="#330000" />
                <path d="M14.5 22H12L10 17H6L4 22H1.5L7 8H9L14.5 22ZM8 10.5L6.5 15H9.5L8 10.5Z" fill="#FF9A00" />
                <path d="M18 22V14H16V12H20V22H18ZM19 10.5C18.1716 10.5 17.5 9.82843 17.5 9C17.5 8.17157 18.1716 7.5 19 7.5C19.8284 7.5 20.5 8.17157 20.5 9C20.5 9.82843 19.8284 10.5 19 10.5Z" fill="#FF9A00" />
            </svg>
        ),
        aftereffects: (
            <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                <rect width="32" height="32" rx="6" fill="#00005B" />
                <path d="M14 22H11.5L9.5 17.5H6L4 22H1.5L7 8H9L14 22ZM8 10.5L6.5 15.5H9.5L8 10.5Z" fill="#9999FF" />
                <path d="M21 16C22.5 16 23.5 17.1 23.5 18.7V22H21.5V19C21.5 18 21 17.5 20.2 17.5C19.4 17.5 18.8 18.1 18.8 19.1V22H16.8V12H18.8V16.3C19.3 16.1 19.9 16 20.5 16H21Z" fill="#9999FF" />
            </svg>
        ),
        framer: (
            <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                <path d="M6 6H26V14H16L26 24H16V32L6 22V6Z" fill="#0055FF" />
                <path d="M6 6H26V14H6V6Z" fill="#00AAFF" />
                <path d="M6 14H16L26 24H16V14H6Z" fill="#88DDFF" />
            </svg>
        ),
        webflow: (
            <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                <rect width="32" height="32" rx="6" fill="#4353FF" />
                <path d="M22 12C22 12 20.5 17.5 20.3 18.3C20.2 17.5 18 10 18 10C18 10 15.5 10 14.5 10C14.5 10 17.5 19 17.8 20C16.5 20 14 20 14 20C14 20 11.5 14 11.3 13.3C11.2 14 9 22 9 22H6L10 10H14L15.7 15.5C15.8 14.7 17 10 17 10H22L26 22H23L22 12Z" fill="white" />
            </svg>
        ),
        html: (
            <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                <path d="M4 2L6 28L16 31L26 28L28 2H4Z" fill="#E44D26" />
                <path d="M16 4V29L24 27L26 4H16Z" fill="#F16529" />
                <path d="M16 10H10L10.5 15H16V20L12 21L11.5 17H8.5L9 24L16 26V20V15V10Z" fill="white" />
                <path d="M16 10V15H22L21 24L16 26V20L20 19L20.5 15H16V10H23L22.5 10H16Z" fill="#EBEBEB" />
            </svg>
        ),
        javascript: (
            <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                <rect width="32" height="32" fill="#F7DF1E" />
                <path d="M8.5 26L10.5 24.5C11 25.5 11.5 26.2 12.8 26.2C14 26.2 14.7 25.7 14.7 24.3V15H17.2V24.3C17.2 27.3 15.4 28.5 13 28.5C10.8 28.5 9.5 27.4 8.5 26Z" fill="black" />
                <path d="M19 25.7L21 24.3C21.7 25.5 22.6 26.3 24.3 26.3C25.7 26.3 26.6 25.6 26.6 24.6C26.6 23.4 25.7 23 24.1 22.3L23.3 22C20.9 21 19.4 19.6 19.4 17C19.4 14.6 21.3 12.8 24.2 12.8C26.3 12.8 27.8 13.5 28.9 15.4L27 16.9C26.4 15.9 25.7 15.5 24.2 15.5C22.7 15.5 21.8 16.4 21.8 17.4C21.8 18.4 22.4 18.9 24 19.6L24.8 19.9C27.6 21.1 29.1 22.4 29.1 25.1C29.1 28 26.8 29.5 24.3 29.5C21.9 29.5 20.2 28.4 19 25.7Z" fill="black" />
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
