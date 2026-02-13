import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navigation, personalInfo } from '../../../data/content';
import Button from '../../common/Button';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update active section based on path
    useEffect(() => {
        if (location.pathname === '/all-services') {
            setActiveSection('services');
        } else if (location.pathname === '/projects') {
            setActiveSection('projects');
        } else if (location.pathname === '/') {
            // Logic to update active section based on scroll (could be re-enabled here)
            // For now, if hash is present, set it
            const hash = location.hash.replace('#', '');
            if (hash) setActiveSection(hash);
            else setActiveSection('home');
        }
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();

        // If it's a hash link
        if (href.startsWith('#')) {
            const targetId = href.substring(1);

            // If on home page
            if (location.pathname === '/') {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(targetId === 'home' ? 'home' : (href === '#services' ? 'services' : (href === '#about' ? 'about' : (href === '#works' ? 'projects' : targetId))));
                    // Note: 'Projects' label maps to #works usually, need to check consistency.
                    // content.js: { label: "Projects", href: "#works" } -> activeSection matches label lowercased usually?
                    // Previous code: activeSection === item.label.toLowerCase()
                }
            } else {
                // Not on home page, navigate to home with hash
                navigate(`/${href}`);
            }
        } else {
            // Standard link
            navigate(href);
        }

        setIsMobileMenuOpen(false);
    };

    // Helper to check if active
    const isActive = (item) => {
        if (location.pathname === '/all-services' && item.label === 'Services') return true;
        if (location.pathname === '/projects' && item.label === 'Projects') return true;
        if (location.pathname === '/' && activeSection === item.label.toLowerCase()) return true;
        // Correct mismatch for Projects/Works if needed
        if (item.label === 'Projects' && activeSection === 'projects') return true;

        return false;
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                <a href="/" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
                    <div className="logo-icon">
                        <span>S</span>
                    </div>
                    <span className="logo-text">{personalInfo.name.split(' ')[0]}.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="nav-desktop">
                    <ul className="nav-list">
                        {navigation.map((item, index) => (
                            <li
                                key={index}
                                className="nav-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <a
                                    href={item.href}
                                    className={`nav-link ${isActive(item) ? 'active' : ''}`}
                                    onClick={(e) => {
                                        // Special handling for labels to match scroll spy or manually set
                                        if (item.label === 'Projects') setActiveSection('projects');
                                        else setActiveSection(item.label.toLowerCase());

                                        handleNavClick(e, item.href);
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CTA Button */}
                <div className="header-cta">
                    <Button variant="light" size="small" href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                        Contact Me
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Mobile Navigation */}
                <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list-mobile">
                        {navigation.map((item, index) => (
                            <li key={index} className="nav-item-mobile" style={{ animationDelay: `${index * 0.1}s` }}>
                                <a
                                    href={item.href}
                                    className={`nav-link-mobile ${isActive(item) ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className="nav-item-mobile" style={{ animationDelay: `${navigation.length * 0.1}s` }}>
                            <Button variant="primary" size="medium" href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                                Contact Me
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
