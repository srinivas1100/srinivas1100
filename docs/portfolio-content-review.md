# Portfolio content review

This draft changes project content and detail navigation only. It does not deploy the site.

## Scope and counting

The reviewed mobile/iOS résumé names 12 products: AiCrix, Richie, Arentzo, OpenKitchen, ShiftBOOKD, Guidel, Sparks, SwissSense, Groupia, Dopoxy, Evexia and BEATBoXX. Its UnoLabs section also documents an **IoT Home Automation Application** during a three-month internship. This draft includes that separately labeled internship project as entry 13. Confirm that this is the intended thirteenth project before merging; it is not presented as a named commercial product or a solo delivery.

Existing IDs 1, 2, 3, 4, 7 and 8 are retained. IDs 5 and 6 (Sit Back & Relax and Easy Chef Admin) are retired rather than reassigned. Their URLs now show the existing not-found/recovery flow. No source assets are deleted. New projects use IDs 9–15.

## Evidence and open questions

- Primary content source: the reviewed Mobile/iOS résumé, updated 22 October 2026. The summary count does not itself establish 13 named products; the internship entry is the explicit basis for the thirteenth case study.
- Groupia and Evexia use SwiftUI, following the owner's more recent 5 November 2026 account of the applications they built. ShiftBOOKD uses Swift and Storyboards. These supersede the older résumé's Flutter grouping for those two apps.
- Only Richie has a résumé-reported 100% crash-free claim. Its measurement dates, app versions, denominator (users or sessions), sample size and monitoring export remain unavailable. The UI attributes the historical claim and does not present it as a live measurement. Confirm these before treating it as a measured current result.
- Other projects show `Not published` for crash-free performance. No 100% figure is copied between applications. Replace these only with project-specific evidence, platform/version scope and dates.
- Richie user count/team/cadence and AiCrix user/MAU/download/prediction counts are résumé-reported, not independently queried analytics. Missing reporting dates are explicit. Arentzo's categories/research scope and the internship duration are scope facts, not adoption metrics.
- Arentzo is labeled pre-launch. Do not imply a production release merely from submission work.
- Dopoxy describes the delivered learning-platform version. Its current public store positioning differs, so no store link is added pending reconciliation.
- Product links reuse the reviewed public destinations. Missing external links and images are not invented. Existing screenshots are retained; other cards use an explicitly labeled typographic project overview, never a stock photo presented as an application screenshot.
- Client testimonials, unverified countries/durations, generic service benefits, duplicated fake galleries, the decorative nonfunctional video control, and unsupported growth percentages are removed from project detail views.

Unrelated homepage/service copy remains outside this change and should be reviewed separately (including existing generic testimonials in unused data, summary app counts and contact placeholders).

## Verification

- `npm run test:projects`: catalogue count, unique and stable IDs, complete details, asset/link shape, stack choices, scope and crash-free restrictions.
- `npx eslint src/data/projects.js src/data/content.js src/pages/ProjectDetail.jsx src/pages/AllProjects.jsx src/components/common/ProjectVisual/ProjectVisual.jsx src/components/sections/Projects/Projects.jsx`: changed application source only.
- `npm run build`: production bundle.
- `npm run lint`: full-repo baseline currently has two unrelated errors: synchronous state updates in Header's effect and unused `allServicesData` in ServiceDetail. These files were not changed.

Do not merge or deploy until the content questions and review are resolved.

Browser interaction and visual QA were attempted but blocked: Chromium cannot create its process-singleton socket in this execution environment. Server-side rendering checks cover the catalogue, all 13 detail routes, retired IDs and invalid routes; they do not replace browser layout or Back/Forward testing.


## Experience chronology correction (10 Nov 2026)

The approved résumé (Mobile iOS Resume, version 11) records Veloria Mar 2026–Present; Chase Alpha Jul 2023–Mar 2026; AppKnit Dec 2021–Jul 2023; and UnoLabs 15 Sep–15 Dec 2021. The home timeline now uses these months, employer names and roles, replacing the incorrect Chase Alpha Present date and generic parallel role. The summary uses 5+ completed years including the internship, rather than 4.8 decimal years; overlapping transition months are not added together. AppKnit delivery/promotion wording and the 13+ application summary now match that résumé. Project-specific metrics and later approved native-stack corrections remain unchanged.
