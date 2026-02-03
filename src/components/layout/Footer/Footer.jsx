import { personalInfo, socialLinks, footerLinks } from '../../../data/content';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="contact">
            <div className="footer-container container">

                {/* Footer Top Section (New) */}
                <div className="footer-top">
                    <h2 className="footer-title">
                        Let's <span className="highlight-text">Connect</span> there
                    </h2>
                    <a href="#blogs" className="btn-view-blogs">
                        View All Blogs
                        <span className="btn-icon-circle">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </a>
                </div>

                <div className="footer-divider"></div>

                {/* Main Footer Content */}
                <div className="footer-content">
                    {/* Column 1: Brand */}
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <span className="logo-icon">O</span>
                            <span className="logo-text">Olivia.</span>
                        </a>
                        <p className="footer-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

                    {/* Column 2: Navigation */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Navigation</h4>
                        <ul className="footer-links">
                            <li><a href="#home" className="footer-link">Home</a></li>
                            <li><a href="#services" className="footer-link">Services</a></li>
                            <li><a href="#about" className="footer-link">About</a></li>
                            <li><a href="#projects" className="footer-link">Projects</a></li>
                            <li><a href="#blogs" className="footer-link">Blogs</a></li>
                            <li><a href="#faqs" className="footer-link">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Contact</h4>
                        <div className="contact-info-list">
                            <a href={`tel:${personalInfo.phone}`} className="contact-item-link">
                                {personalInfo.phone}
                            </a>
                            <a href="#" className="contact-item-link">
                                www.example.com
                            </a>
                            <a href={`mailto:${personalInfo.email}`} className="contact-item-link">
                                {personalInfo.email}
                            </a>
                            <address className="contact-address">
                                2464 Royal Ln. Mesa,<br />
                                New Jersey 45463
                            </address>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="footer-column newsletter-column">
                        <h4 className="footer-heading">Get the latest information</h4>
                        <div className="newsletter-wrapper">
                            <form className="newsletter-form-inline" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="newsletter-input-inline"
                                />
                                <button type="submit" className="newsletter-btn-inline">
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
                        <p className="copyright">
                            Copyright © {currentYear} <span className="text-highlight">Olivia.</span> All Rights Reserved.
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

// Social Icon Component
const SocialIcon = ({ name }) => {
    // Mapping icons as per design (FaFacebookF, etc. usually, but using SVGs here)
    const icons = {
        dribbble: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg> // Using FB icon for demo as per screenshot usually 1st icon
        ),
        behance: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M22 7h-5v2h5V7zm0 10h-5v2h5v-2zm-12-5c0-2-1.5-3-3.5-3H2v10h4.5c2 0 3.5-1.5 3.5-3.5V12zm-3.5 5H4v-3h2.5c.8 0 1.5.7 1.5 1.5S7.3 17 6.5 17zm0-5H4V9h2.5c.8 0 1.5.7 1.5 1.5S7.3 12 6.5 12z" /></svg> // Behance
        ),
        linkedin: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg> // Youtube
        ),
        twitter: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg> // Twitter
        ),
        instagram: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
        ),
    };

    return icons[name] || null;
};

export default Footer;
