import './SectionTitle.css';

const SectionTitle = ({
    title,
    subtitle,
    highlight,
    align = 'center',
    className = ''
}) => {
    // Function to render title with highlight
    const renderTitle = () => {
        if (!highlight) return title;

        const parts = title.split(highlight);
        return (
            <>
                {parts[0]}
                <span className="section-title-highlight">{highlight}</span>
                {parts[1] || ''}
            </>
        );
    };

    return (
        <div className={`section-title-wrapper section-title-${align} ${className}`}>
            {subtitle && <span className="section-subtitle">{subtitle}</span>}
            <h2 className="section-title">{renderTitle()}</h2>
        </div>
    );
};

export default SectionTitle;
