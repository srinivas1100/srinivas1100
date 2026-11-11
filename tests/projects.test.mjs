import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { projects, projectDetails } from '../src/data/projects.js';

test('catalogue contains the 12 named projects and the documented internship', () => {
    assert.equal(projects.length, 13);
    assert.equal(new Set(projects.map(p => p.id)).size, 13);
    for (const id of [1, 2, 3, 4, 7, 8]) assert.ok(projectDetails[id]);
    for (const id of [5, 6]) assert.equal(projectDetails[id], undefined);
    assert.equal(projectDetails[15].status, 'Internship project');
    assert.equal(projectDetails[9].status, 'Pre-launch');
});

test('every card has one complete detail view and safe product links', () => {
    for (const project of projects) {
        assert.equal(projectDetails[project.id], project);
        for (const field of ['title', 'subtitle', 'description', 'role', 'organization']) assert.ok(project[field]);
        assert.ok(project.contributions.length > 0);
        assert.ok(project.tags.length > 0);
        assert.ok(project.reliability.note);
        assert.equal(project.hideDetailLink, undefined);
        for (const key of ['websiteUrl', 'appStoreUrl', 'playStoreUrl']) {
            if (project[key]) assert.equal(new URL(project[key]).protocol, 'https:');
        }
        for (const path of [project.image, ...project.gallery].filter(Boolean)) assert.ok(existsSync(`public${path}`), path);
    }
});

test('no unsupported crash-free percentages or placeholder marketing', () => {
    for (const project of projects) {
        assert.equal(project.reliability.value, project.id === 1 ? '100%' : 'Not published');
        assert.doesNotMatch(JSON.stringify(project), /lorem ipsum|picsum|50,000 downloads|85% satisfaction|60% reduction/i);
        for (const metric of project.metrics) assert.ok(metric.note);
    }
    assert.match(projectDetails[1].reliability.note, /Measurement dates.*denominator/);
});

test('native stacks and delivered-version scope are explicit', () => {
    assert.ok(projectDetails[3].tags.includes('Storyboards'));
    for (const id of [4, 12]) {
        assert.ok(projectDetails[id].tags.includes('SwiftUI'));
        assert.ok(!projectDetails[id].tags.includes('Flutter'));
    }
    assert.match(projectDetails[13].scopeNote, /different product positioning/);
    assert.equal(projectDetails[13].appStoreUrl, undefined);
});


test('experience chronology and summary match the approved résumé', async () => {
    const { journey, experienceYears, experienceSummary, personalInfo, stats } = await import('../src/data/content.js');
    assert.equal(experienceYears, '5');
    assert.deepEqual(journey.map(item => [item.company, item.year]), [
        ['Veloria Tech (OPC) Pvt. Ltd.', 'Mar 2026 – Present'],
        ['Chase Alpha (Richie App)', 'Jul 2023 – Mar 2026'],
        ['AppKnit', 'Dec 2021 – Jul 2023'],
        ['UnoLabs Private Limited', '15 Sep 2021 – 15 Dec 2021'],
    ]);
    assert.equal(journey[1].year, projectDetails[1].period);
    assert.match(personalInfo.aboutMe[0], /5\+ years.*internship/);
    assert.match(experienceSummary, /5\+ years.*internship/);
    assert.equal(stats.find(item => item.label === 'Years Experience').value, '5+');
    assert.equal(stats.find(item => item.label === 'Production Apps').value, '13+');
    assert.doesNotMatch(JSON.stringify(journey), /Parallel|15\+|six months/);
});


test('contact and footer controls expose honest working destinations', async () => {
    const { readFileSync } = await import('node:fs');
    const source = path => readFileSync(new URL(path, import.meta.url), 'utf8');
    const contact = source('../src/components/sections/Contact/Contact.jsx');
    assert.match(contact, /onSubmit={openEmailDraft}/);
    assert.match(contact, /mailto:srinu11112000@gmail.com\?subject=/);
    assert.match(contact, /this website does not send or store your message/);
    for (const field of ['name', 'email', 'message']) assert.match(contact, new RegExp('name="' + field + '"'));
    const footer = source('../src/components/layout/Footer/Footer.jsx');
    for (const hash of ['home','about','works','journey','contact']) assert.ok(footer.includes('to="/#' + hash + '"'));
    assert.doesNotMatch(footer, /<form|href="#(?:home|about|works|journey|contact)"/);
    assert.match(footer, /mailto:srinu11112000@gmail.com/);
    assert.match(source('../src/App.jsx'), /target.scrollIntoView/);
});

test('case studies distinguish ownership, engineering evidence and delivery claims', () => {
    for (const project of projects) {
        for (const field of ['ownership', 'headline', 'outcome', 'platform', 'automationNote', 'architectureNote']) assert.ok(project[field], `${project.title}: ${field}`);
        assert.ok(project.architecture.length && project.delivery.length);
        assert.doesNotMatch(project.architecture.join(' '), /\b(MVVM|MVC|Clean Architecture|BLoC|Riverpod)\b/);
    }
    assert.match(projectDetails[1].ownership, /four-engineer team/);
    assert.match(projectDetails[8].ownership, /Solo engineer/);
    assert.match(projectDetails[9].role, /End-to-End Owner/);
    assert.match(projectDetails[8].automationNote, /GitHub Actions/);
    assert.match(projectDetails[1].automationNote, /Shorebird/);
    for (const id of [3, 4, 12]) assert.equal(projectDetails[id].platform, 'Native iOS');
});

test('new illustrative assets are explicitly conceptual, not app screenshots', () => {
    for (const id of [9, 10, 11, 12]) {
        assert.equal(projectDetails[id].visualKind, 'concept');
        assert.match(projectDetails[id].image, /concept\.webp$/);
        assert.ok(existsSync(`public${projectDetails[id].image}`));
    }
});
