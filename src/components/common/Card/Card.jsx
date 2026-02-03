import './Card.css';

const Card = ({
    children,
    variant = 'default',
    hover = true,
    padding = 'medium',
    className = '',
    onClick,
    ...props
}) => {
    const classes = `card card-${variant} card-padding-${padding} ${hover ? 'card-hover' : ''} ${onClick ? 'card-clickable' : ''} ${className}`.trim();

    return (
        <div className={classes} onClick={onClick} {...props}>
            {children}
        </div>
    );
};

// Card subcomponents
Card.Image = ({ src, alt, className = '' }) => (
    <div className={`card-image ${className}`}>
        <img src={src} alt={alt} />
    </div>
);

Card.Body = ({ children, className = '' }) => (
    <div className={`card-body ${className}`}>
        {children}
    </div>
);

Card.Title = ({ children, className = '' }) => (
    <h3 className={`card-title ${className}`}>
        {children}
    </h3>
);

Card.Description = ({ children, className = '' }) => (
    <p className={`card-description ${className}`}>
        {children}
    </p>
);

Card.Tags = ({ tags, className = '' }) => (
    <div className={`card-tags ${className}`}>
        {tags.map((tag, index) => (
            <span key={index} className="card-tag">{tag}</span>
        ))}
    </div>
);

Card.Footer = ({ children, className = '' }) => (
    <div className={`card-footer ${className}`}>
        {children}
    </div>
);

export default Card;
