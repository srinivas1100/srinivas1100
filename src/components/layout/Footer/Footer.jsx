import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <div className="footer-container container">

                {/* Footer Top Section */}
                <div className="footer-top">
                    <h2 className="footer-title">
                        Let's <span className="script-name">Connect</span>
                    </h2>
                </div>

                <div className="footer-divider"></div>

                {/* Main Footer Content */}
                <div className="footer-content">
                    {/* Column 1: Brand / Bio */}
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <span className="logo-icon">S</span>
                            <span className="logo-text" style={{ color: 'var(--color-secondary)' }}>Srinivasu.</span>
                        </a>
                        <p className="footer-description">
                            Senior Mobile Engineer & Tech Lead focused on building production-grade mobile and web applications with strong performance, scalability, and reliability.
                        </p>
                        <div className="footer-social">
                            <a
                                href="https://github.com/srinivas1100"
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/srinivasu-vadlamudi-39571a1a2/"
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Navigation</h4>
                        <ul className="footer-links">
                            <li><a href="#home" className="footer-link">Home</a></li>
                            <li><a href="#about" className="footer-link">About</a></li>
                            <li><a href="#works" className="footer-link">Projects</a></li>
                            <li><a href="#journey" className="footer-link">Experience</a></li>
                            <li><a href="#contact" className="footer-link">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Contact</h4>
                        <div className="contact-info-list">
                            <div className="contact-info-group">
                                <span className="contact-info-label">Email</span>
                                <a href="mailto:srinu11112000@gmail.com" className="contact-item-link">
                                    srinu11112000@gmail.com
                                </a>
                            </div>
                            <div className="contact-info-group">
                                <span className="contact-info-label">LinkedIn</span>
                                <a href="https://www.linkedin.com/in/srinivasu-vadlamudi-39571a1a2/" target="_blank" rel="noopener noreferrer" className="contact-item-link">
                                    linkedin.com/in/srinivasu-vadlamudi
                                </a>
                            </div>
                            <div className="contact-info-group">
                                <span className="contact-info-label">GitHub</span>
                                <a href="https://github.com/srinivas1100" target="_blank" rel="noopener noreferrer" className="contact-item-link">
                                    github.com/srinivas1100
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Newsletter / Connect */}
                    <div className="footer-column newsletter-column">
                        <h4 className="footer-heading">Stay Connected</h4>
                        <div className="newsletter-wrapper">
                            <form className="newsletter-form-inline" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="newsletter-input-inline"
                                />
                                <button type="submit" className="newsletter-btn-inline" title="Connect">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom-bar">
                    <div className="footer-bottom-content">
                        <p className="copyright" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            Copyright © {currentYear} <span className="script-name" style={{ fontSize: '42px', opacity: 1, color: 'var(--color-primary-accent)', transform: 'none', marginLeft: '4px' }}>Srinivas.</span> All Rights Reserved.
                        </p>
                        <div className="footer-legal">
                            <a href="#">User Terms & Conditions</a>
                            <span className="separator">|</span>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
