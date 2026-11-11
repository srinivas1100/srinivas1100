import arrowRightIcon from '../../../assets/arrow-right.png';
import './Contact.css';

const Contact = () => {
    const openEmailDraft = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.reportValidity()) return;
        const fields = new FormData(form);
        const name = String(fields.get('name') || '').trim();
        const email = String(fields.get('email') || '').trim();
        const message = String(fields.get('message') || '').trim();
        const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nReply email: ${email}\n\n${message}`);
        window.location.href = `mailto:srinu11112000@gmail.com?subject=${subject}&body=${body}`;
    };
    return (
        <section className="contact-section" id="contact">
            <div className="container" >
                <div className="contact-grid">
                    {/* Left Column: Contact Info */}
                    <div className="contact-info">
                        <div className="contact-header">
                            <span className="contact-subtitle">Contact</span>
                            <h2 className="contact-title">
                                Let's Talk
                            </h2>
                            <p className="contact-description">
                                Open to remote opportunities and product-focused engineering roles. If you’re building a product and need a senior mobile engineer or tech lead, feel free to reach out.
                            </p>
                        </div>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon icon-email">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </span>
                                <a href="mailto:srinu11112000@gmail.com" className="contact-text" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    srinu11112000@gmail.com
                                </a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon icon-linkedin">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </span>
                                <a href="https://www.linkedin.com/in/srinivasu-vadlamudi-39571a1a2/" target="_blank" rel="noopener noreferrer" className="contact-text" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    linkedin.com/in/srinivasu-vadlamudi
                                </a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon icon-github">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </span>
                                <a href="https://github.com/srinivas1100" target="_blank" rel="noopener noreferrer" className="contact-text" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    github.com/srinivas1100
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={openEmailDraft} aria-describedby="contact-delivery-note">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name *</label>
                                    <input type="text" id="name" name="name" autoComplete="name" required maxLength={120} placeholder="Ex. John Doe" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input type="email" id="email" name="email" autoComplete="email" required maxLength={254} placeholder="example@gmail.com" />
                                </div>
                            </div>

                            <div className="form-group message-group">
                                <label htmlFor="message">Message *</label>
                                <textarea id="message" name="message" required maxLength={2000} placeholder="Tell me about the role, product, or opportunity." rows="4"></textarea>
                            </div>

                            <p id="contact-delivery-note" className="contact-delivery-note">
                                This opens a draft in your email app. Review it and press Send there; this website does not send or store your message. If no app opens, email srinu11112000@gmail.com directly.
                            </p>
                            <button type="submit" className="contact-submit-btn">
                                <span className="btn-text">Open email app</span>
                                <span className="btn-icon">
                                    <img
                                        src={arrowRightIcon}
                                        alt="Arrow Right"
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            objectFit: 'contain',
                                            filter: 'brightness(0) saturate(100%) drop-shadow(0px 0px 0.5px rgba(0,0,0,1))'
                                        }}
                                    />
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

