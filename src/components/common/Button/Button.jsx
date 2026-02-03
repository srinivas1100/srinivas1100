import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    icon,
    iconPosition = 'right',
    href,
    onClick,
    disabled = false,
    className = '',
    ...props
}) => {
    const classes = `btn btn-${variant} btn-${size} ${icon ? 'btn-with-icon' : ''} ${className}`.trim();

    const content = (
        <>
            {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
            <span className="btn-text">{children}</span>
            {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
        </>
    );

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {content}
            </a>
        );
    }

    return (
        <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {content}
        </button>
    );
};

export default Button;
