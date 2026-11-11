import './RichieCaseStudy.css';

export default function RichieCaseStudy({ project }) {
    const story = project.caseStudy;
    return <div className="richie-case-study">
        <section className="richie-brief" id="brief">
            <span className="case-eyebrow">The product & engineering brief</span>
            <h2>One fintech product. Several connected customer journeys.</h2>
            <p>{story.brief}</p>
            <div className="richie-brief-grid">
                <div><h3>The delivery challenge</h3><p>{story.challenge}</p></div>
                <div><h3>My accountability</h3><p>{project.ownership}</p><p>{story.accountability}</p></div>
            </div>
        </section>
        <section id="contribution">
            <span className="case-eyebrow">01 · What I owned</span>
            <h2 className="v4-section-heading">Tech Lead & Lead Mobile Application Developer</h2>
            <div className="richie-role-grid"><article><h3>As Tech Lead</h3><ul>{story.leadership.map(point => <li key={point}>{point}</li>)}</ul></article><article><h3>As Lead Mobile Application Developer</h3><ul>{story.mobileEngineering.map(point => <li key={point}>{point}</li>)}</ul></article></div>
            <h3 className="richie-workstreams-heading">Key delivery areas</h3>
            <div className="richie-workstreams">{story.workstreams.map((item, index) => <article key={item.title}>
                <span className="richie-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.work}</p>
                <p className="richie-result"><strong>Delivered:</strong> {item.result}</p>
            </article>)}</div>
        </section>
        <section id="engineering">
            <span className="case-eyebrow">02 · System scope</span>
            <h2 className="v4-section-heading">The product and services I connected</h2>
            <p>Clean, modular mobile architecture, with Riverpod managing application state and shared components supporting navigation, integrations and interface consistency.</p>
            <div className="richie-system-map">{story.system.map(layer => <article key={layer.title}><h3>{layer.title}</h3><ul>{layer.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </section>
        <section id="quality">
            <span className="case-eyebrow">03 · Engineering quality</span>
            <h2 className="v4-section-heading">Code quality, testing & delivery discipline</h2>
            <div className="richie-quality-grid">{story.quality.practices.map(item => <article key={item.title}>
                <h3>{item.title}</h3><p>{item.detail}</p>
            </article>)}</div>
            <div className="richie-validation-grid">
                <article><h3>Testing & validation</h3><p>{story.quality.testing}</p></article>
                <article><h3>CI/CD & release automation</h3><p>{story.quality.cicd}</p></article>
            </div>
        </section>
        <section id="delivery">
            <span className="case-eyebrow">04 · Engineering choices in practice</span>
            <h2 className="v4-section-heading">Shipping features while operating a live product</h2>
            <div className="richie-decisions">{story.decisions.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.approach}</p><p className="richie-result">{item.result}</p></article>)}</div>
            
        </section>
        <section className="richie-support">
            <span className="case-eyebrow">A second engineering surface</span><h2 className="v4-section-heading">Rasabot: automating support and sales</h2>
            <p>{story.support.description}</p>
            <dl className="portfolio-metrics">{story.support.metrics.map(item => <div className="portfolio-metric" key={item.label}><dt>{item.label}</dt><dd><strong>{item.value}</strong></dd></div>)}</dl>
            <p className="project-evidence-note">{story.support.note}</p>
        </section>
    </div>;
}
