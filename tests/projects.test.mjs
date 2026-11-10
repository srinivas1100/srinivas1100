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
