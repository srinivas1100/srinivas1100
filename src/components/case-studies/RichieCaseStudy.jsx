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
            <h2 className="v4-section-heading">Hands-on engineering, with team and product ownership</h2>
            <div className="richie-workstreams">{story.workstreams.map((item, index) => <article key={item.title}>
                <span className="richie-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.work}</p>
                <p className="richie-result"><strong>Delivered:</strong> {item.result}</p>
            </article>)}</div>
        </section>
        <section id="engineering">
            <span className="case-eyebrow">02 · System scope</span>
            <h2 className="v4-section-heading">The product and services I connected</h2>
            <p className="project-evidence-note">A capability map of the documented implementation, not a production network diagram.</p>
            <div className="richie-system-map">{story.system.map(layer => <article key={layer.title}><h3>{layer.title}</h3><ul>{layer.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
            <details className="case-evidence"><summary>Architecture detail and evidence limits</summary><p>{project.architectureNote}</p><p>The available material does not establish database topology, service boundaries, backend service internals or security/compliance certification. Those are not inferred from my broader skill set.</p></details>
        </section>
        <section id="quality">
            <span className="case-eyebrow">03 · Engineering quality</span>
            <h2 className="v4-section-heading">Code quality, testing & delivery discipline</h2>
            <p className="project-evidence-note">The practices below separate implementation evidence, team responsibilities and release operations.</p>
            <div className="richie-quality-grid">{story.quality.practices.map(item => <article key={item.title}>
                <span className="richie-evidence-type">{item.evidence}</span><h3>{item.title}</h3><p>{item.detail}</p>
            </article>)}</div>
            <div className="richie-validation-grid">
                <article><h3>Testing & validation</h3><p>{story.quality.testing}</p></article>
                <article><h3>CI/CD & release automation</h3><p>{story.quality.cicd}</p></article>
            </div>
            <details className="case-evidence richie-quality-evidence"><summary>Scope of the available quality evidence</summary><p>{story.quality.limits}</p></details>
        </section>
        <section id="delivery">
            <span className="case-eyebrow">04 · Engineering choices in practice</span>
            <h2 className="v4-section-heading">Shipping features while operating a live product</h2>
            <div className="richie-decisions">{story.decisions.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.approach}</p><details className="case-evidence"><summary>Documented result & evidence</summary><p>{item.result}</p></details></article>)}</div>
            <p className="case-automation-note">{project.automationNote} Shorebird hotfix delivery is distinct from CI validation or automatic store submission.</p>
        </section>
        <section className="richie-support">
            <span className="case-eyebrow">A second engineering surface</span><h2 className="v4-section-heading">Rasabot: automating support and sales</h2>
            <p>{story.support.description}</p>
            <dl className="portfolio-metrics">{story.support.metrics.map(item => <div className="portfolio-metric" key={item.label}><dt>{item.label}</dt><dd><strong>{item.value}</strong></dd></div>)}</dl>
            <p className="project-evidence-note">{story.support.note}</p>
        </section>
    </div>;
}
