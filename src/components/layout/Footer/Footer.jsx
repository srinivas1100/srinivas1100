import { personalInfo, socialLinks, footerLinks } from '../../../data/content';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="contact">
            <div className="footer-container container">
                {/* Main Footer Content */}
                <div className="footer-content">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <span className="logo-icon">✦</span>
                            <span className="logo-text">{personalInfo.name}</span>
                        </a>
                        <p className="footer-description">
                            {personalInfo.shortBio}
                        </p>
                        <div className="footer-social">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                >
                                    <SocialIcon name={link.icon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links-column">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="footer-link">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-links-column">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="footer-link">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div className="footer-contact">
                        <h4 className="footer-heading">Let's Connect</h4>
                        <div className="contact-info">
                            <a href={`mailto:${personalInfo.email}`} className="contact-link">
                                <span className="contact-icon">✉️</span>
                                {personalInfo.email}
                            </a>
                            <a href={`tel:${personalInfo.phone}`} className="contact-link">
                                <span className="contact-icon">📞</span>
                                {personalInfo.phone}
                            </a>
                        </div>
                        <div className="newsletter">
                            <p className="newsletter-text">Subscribe to my newsletter</p>
                            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="newsletter-input"
                                />
                                <button type="submit" className="newsletter-btn">
                                    →
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Social Icon Component
const SocialIcon = ({ name }) => {
    const icons = {
        dribbble: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
            </svg>
        ),
        behance: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M7.5 11c1.38 0 2.5-1.12 2.5-2.5S8.88 6 7.5 6H3v5h4.5zm0-3.5c.55 0 1 .45 1 1s-.45 1-1 1H4.5v-2h3zM3 18h4.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5H3v5zm1.5-3.5h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v-2zM14 7h5v1.5h-5V7zm6.5 5.5c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c1.38 0 2.64-.7 3.37-1.76l-1.27-.95c-.46.66-1.22 1.06-2.1 1.06-1.24 0-2.26-.91-2.45-2.1h6.42c.02-.08.03-.17.03-.25zm-6.42-.75c.21-1.08 1.15-1.9 2.42-1.9s2.21.82 2.42 1.9h-4.84z" />
            </svg>
        ),
        linkedin: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
        ),
        twitter: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55z" />
            </svg>
        ),
        instagram: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z" />
            </svg>
        ),
    };

    return icons[name] || null;
};

export default Footer;
