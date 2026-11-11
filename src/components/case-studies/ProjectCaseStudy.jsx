import './RichieCaseStudy.css';

export default function ProjectCaseStudy({ project }) {
    const story = project.projectCaseStudy;
    return <div className="richie-case-study">
        <section className="richie-brief" id="brief">
            <span className="case-eyebrow">The product & engineering brief</span>
            <h2>{story.title}</h2><p>{story.brief}</p>
            <div className="richie-brief-grid"><div><h3>The delivery challenge</h3><p>{story.challenge}</p></div><div><h3>My accountability</h3><p>{project.ownership}</p></div></div>
        </section>
        <section id="contribution">
            <span className="case-eyebrow">01 · What I owned</span><h2 className="v4-section-heading">{project.role}</h2>
            <div className="richie-role-grid">{story.responsibilities.map(group => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
            <h3 className="richie-workstreams-heading">Key delivery areas</h3>
            <div className="richie-workstreams">{story.workstreams.map((item,index) => <article key={item.title}><span className="richie-number">0{index+1}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
        </section>
        <section id="engineering">
            <span className="case-eyebrow">02 · Technical implementation</span><h2 className="v4-section-heading">Architecture & integrations</h2>
            <div className="richie-system-map">{story.system.map(layer => <article key={layer.title}><h3>{layer.title}</h3><ul>{layer.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </section>
        <section id="quality">
            <span className="case-eyebrow">03 · Engineering practice</span><h2 className="v4-section-heading">{story.qualityTitle}</h2>
            <div className="richie-quality-grid">{story.quality.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
        </section>
        <section id="delivery">
            <span className="case-eyebrow">04 · Delivery in practice</span><h2 className="v4-section-heading">{story.deliveryTitle}</h2>
            <div className="richie-decisions">{story.release.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
        </section>
    </div>;
}
