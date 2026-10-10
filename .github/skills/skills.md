# Copilot Skills Library for Sri Ayurveda

This file consolidates the project skill definitions into one place so the workflow is easier to follow and maintain.

---

## 1. Code Review

Use this skill when reviewing the current project changes or preparing a quality pass before release.

Checklist:
- Verify React components still render correctly.
- Check routes, links, and navigation behavior.
- Inspect CSS for readability, contrast, and mobile layout issues.
- Review content for errors, over-claims, or brand inconsistency.
- Watch for accessibility and SEO regressions.
- Validate that changes do not break the build.

Output format:
- Summary of findings
- Severity order
- File references
- Why the issue matters
- Recommended fix

Keep the review concise and actionable.

---

## 2. Frontend Bug Fix

Use this skill when the Sri Ayurveda site has a UI, route, styling, or responsiveness issue.

Goal:
Find the root cause of frontend regressions and fix them with the smallest safe change.

Checklist:
- Check layout, spacing, and component hierarchy.
- Review route and navigation behavior.
- Ensure text remains readable and high contrast.
- Check for missing assets, invalid imports, or stale component references.
- Validate responsiveness on mobile and desktop.
- Run the project build after the fix.

Output:
- Root cause summary
- Files involved
- Minimal fix
- Verification result

---

## 3. Accessibility Audit

Use this skill to review the site for accessibility and usability issues.

Scope:
- color contrast and readability
- keyboard navigation
- heading hierarchy
- labels, controls, and focus states
- mobile usability
- semantic HTML and link clarity

Output:
- Issue list with severity
- file references
- fix recommendations
- priority order for implementation

---

## 4. SEO Audit

Use this skill to audit metadata, page structure, and search quality for the Sri Ayurveda website.

Checklist:
- Review page titles and descriptions.
- Check heading structure and semantic hierarchy.
- Audit internal linking quality.
- Inspect image alt text and metadata.
- Look for missing or weak search-intent copy.
- Recommend small, safe SEO improvements.

Output:
- Issues found
- Affected pages
- Recommended improvements
- Implementation priority

---

## 5. Content Audit

Use this skill to evaluate site content for clarity, trust, and patient experience.

Checklist:
- Review text readability and tone.
- Check service naming consistency.
- Confirm legal and medical wording is careful and accurate.
- Identify repetitive or confusing sections.
- Look for trust-building copy and patient clarity.

Output:
- content issues found
- recommended copy improvements
- high-priority fixes
- safe wording adjustments

---

## 6. Build Validation

Use this skill before launch or after frontend changes.

Goal:
Validate the app is technically safe to ship.

Checklist:
- Run npm run build.
- Check missing imports and route issues.
- Review CSS consistency.
- Check for runtime-risk warnings.
- Confirm the recent work did not create regressions.

Output:
- build status
- blocked issues
- recommended fixes
- release confidence summary

---

## 7. Medical Compliance

Use this skill when reviewing claims, disclaimers, or patient-facing wording.

Scope:
- medical claim safety and wording accuracy
- trust-building and patient-friendly tone
- legal or privacy terminology
- review of wellness and Ayurveda communication

Output:
- compliance concerns
- safer wording recommendations
- severity-ranked issues
- recommended copy updates

---

## 8. Design Improvement

Use this skill to improve the visual quality, readability, and premium feel of the website.

Focus:
- readable typography and contrast
- spacing and section rhythm
- card and container refinement
- consistency across pages
- preserving the Ayurvedic brand personality

Output:
- design issues found
- specific recommended improvements
- minimal, safe edits
- before/after style direction when relevant

---

## 9. Navigation and Specialties

Use this skill when reviewing site navigation, treatment structure, and specialty organization.

Checklist:
- Review menu clarity and hierarchy.
- Check route organization and consistency.
- Evaluate whether dedicated specialty pages improve navigation.
- Review treatment vs specialty page separation.
- Recommend minimal structural improvements.

Output:
- navigation issues
- recommended structure changes
- priority order for fixes

---

## 10. Deployment Readiness

Use this skill before pushing the site live.

Checklist:
- Review routes, imports, and setup.
- Check styling and page integrity.
- Confirm legal, SEO, and trust content is ready.
- Look for runtime or build risks.
- Flag launch blockers clearly.

Output:
- deployment blockers
- risk summary
- fixes required before launch

---

## 11. Maintenance

Use this skill for small upkeep and quality improvements on the Sri Ayurveda site.

Scope:
- stale links and menu issues
- readability improvements
- visual cleanup and spacing fixes
- route consistency
- low-risk front-end maintenance tasks

Output:
- maintenance issues found
- recommended fixes
- implementation priority

---

## 12. Homepage Polish

Use this skill to improve the homepage’s visual quality, hierarchy, and patient trust.

Focus:
- hero clarity and CTA impact
- typography and spacing
- readability and contrast
- card layout and section rhythm
- trust-building content and section order

Output:
- polish issues found
- recommended UI improvements
- priority-ranked changes

---

## 13. Treatment Page Cleanup

Use this skill for treatment-page review and consistency improvements.

Checklist:
- Review content clarity and hierarchy.
- Check for duplicated or repetitive sections.
- Verify naming consistency across therapies and specialties.
- Improve CTA clarity and spacing.
- Reduce confusion between treatment and specialty content.

Output:
- issues found
- recommended copy and structure updates
- priority of fixes

---

## 14. Gallery Optimization

Use this skill to review the gallery for quality, relevance, and visual consistency.

Checklist:
- Review visual quality and brand fit.
- Remove low-value or distracting media.
- Check category clarity and visual rhythm.
- Ensure the gallery supports trust and treatment storytelling.
- Recommend a focused cleanup where necessary.

Output:
- weak or off-brand images
- recommended gallery edits
- final cleanup plan

---

## 15. Booking and Contact Flow Audit

Use this skill to review the Sri Ayurveda booking and contact flow for quality and conversion.

Checklist:
- Review CTA clarity.
- Check form guidance and label quality.
- Assess trust signals around appointment requests.
- Review mobile experience and flow clarity.
- Check whether users understand the next step after submitting.

Output:
- flow issues found
- recommended UX improvements
- priority fixes

---

## 16. SEO Content Rewrite Checklist

Use this skill to improve on-page content for SEO, readability, and conversion.

Checklist:
- Review headings and keyword alignment.
- Check page intent and clarity.
- Identify weak or duplicate sections.
- Improve internal linking relevance.
- Ensure treatment descriptions are clear and trustworthy.

Output:
- rewrite opportunities
- high-priority content recommendations
- practical SEO checklist for implementation
