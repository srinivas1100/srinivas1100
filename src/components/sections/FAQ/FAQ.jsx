import { useState } from 'react';
import { faqItems } from '../../../data/content';
import SectionTitle from '../../common/SectionTitle';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="faq section">
            <div className="container">
                <SectionTitle
                    subtitle="FAQ"
                    title="Questions & Answers"
                    highlight="Answers"
                    align="center"
                />

                <div className="faq-list">
                    {faqItems.map((item, index) => (
                        <article
                            key={item.id}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleItem(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="question-text">{item.question}</span>
                                <span className="faq-icon">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
