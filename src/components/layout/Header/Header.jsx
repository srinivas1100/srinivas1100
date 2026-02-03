import { useState, useEffect } from 'react';
import { navigation, personalInfo } from '../../../data/content';
import Button from '../../common/Button';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                <a href="#" className="logo">
                    <div className="logo-icon">
                        <span>✦</span>
                    </div>
                    <span className="logo-text">{personalInfo.name.split(' ')[0]}.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="nav-desktop">
                    <ul className="nav-list">
                        {navigation.map((item, index) => (
                            <li key={index} className="nav-item">
                                <a
                                    href={item.href}
                                    className={`nav-link ${activeSection === item.label.toLowerCase() ? 'active' : ''}`}
                                    onClick={() => setActiveSection(item.label.toLowerCase())}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CTA Button */}
                <div className="header-cta">
                    <Button variant="light" size="small" href="#contact">
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
                                    className={`nav-link-mobile ${activeSection === item.label.toLowerCase() ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveSection(item.label.toLowerCase());
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className="nav-item-mobile" style={{ animationDelay: `${navigation.length * 0.1}s` }}>
                            <Button variant="primary" size="medium" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
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
