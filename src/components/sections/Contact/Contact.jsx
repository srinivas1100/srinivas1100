import './Contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact" style={{ backgroundColor: '#F8F9FA'} }>
            <div className="container" >
                <div className="contact-grid">
                    {/* Left Column: Contact Info */}
                    <div className="contact-info">
                        <div className="contact-header">
                            <span className="contact-subtitle">Contact Us</span>
                            <h2 className="contact-title">
                                Let's Talk for <span className="contact-highlight">Your</span><br />
                                <span className="contact-highlight">Next Projects</span>
                            </h2>
                            <p className="contact-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon icon-phone">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </span>
                                <span className="contact-text">+1(406) 555-0120</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon icon-email">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </span>
                                <span className="contact-text">example@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon icon-skype">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 6c2.5 1.5 3 4.5 1 7-1 1-1.5 2-1 3s.5 2 1 3c2.5 1.5 4.5 1 7-1"></path>
                                        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path>
                                    </svg>
                                </span>
                                <span className="contact-text">example</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon icon-location">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </span>
                                <span className="contact-text">
                                    2464 Royal Ln. Mesa, New<br />Jersey 45463
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="contact-form-container">
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name *</label>
                                    <input type="text" id="name" placeholder="Ex. John Doe" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input type="email" id="email" placeholder="example@gmail.com" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone *</label>
                                    <input type="tel" id="phone" placeholder="Enter Phone Number" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="interest">I'm Interested in *</label>
                                    <select id="interest">
                                        <option value="">Select</option>
                                        <option value="web">Web Design</option>
                                        <option value="app">App Design</option>
                                        <option value="branding">Branding</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="budget">Budget Range (USD) *</label>
                                    <select id="budget">
                                        <option value="">Select Range</option>
                                        <option value="s">$1k - $5k</option>
                                        <option value="m">$5k - $10k</option>
                                        <option value="l">$10k+</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Country*</label>
                                    <select id="country">
                                        <option value="">Select Country</option>
                                        <option value="us">USA</option>
                                        <option value="uk">UK</option>
                                        <option value="in">India</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group message-group">
                                <label htmlFor="message">Your Message *</label>
                                <textarea id="message" placeholder="Enter here.." rows="4"></textarea>
                            </div>

                            <button type="submit" className="contact-submit-btn">
                                <span className="btn-text">Submit</span>
                                <span className="btn-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
