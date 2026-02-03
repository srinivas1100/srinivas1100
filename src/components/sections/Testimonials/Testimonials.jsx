import { useState } from 'react';
import { testimonials } from '../../../data/content';
import SectionTitle from '../../common/SectionTitle';
import './Testimonials.css';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials section">
            <div className="container">
                <SectionTitle
                    subtitle="Testimonials"
                    title="What Clients Say"
                    highlight="Clients"
                    align="center"
                />

                <div className="testimonials-wrapper">
                    <div className="testimonials-slider">
                        {testimonials.map((testimonial, index) => (
                            <article
                                key={testimonial.id}
                                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                            >
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                                <blockquote className="testimonial-text">
                                    "{testimonial.text}"
                                </blockquote>
                                <div className="testimonial-author">
                                    <img
                                        src={`https://i.pravatar.cc/80?img=${testimonial.id + 10}`}
                                        alt={testimonial.name}
                                        className="author-avatar"
                                    />
                                    <div className="author-info">
                                        <span className="author-name">{testimonial.name}</span>
                                        <span className="author-role">{testimonial.role} at {testimonial.company}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="testimonials-controls">
                        <button className="control-btn" onClick={prevSlide} aria-label="Previous">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="testimonials-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button className="control-btn" onClick={nextSlide} aria-label="Next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
