# Copilot Prompt Library for Sri Ayurveda

This file is the master prompt library for the Sri Ayurveda website. Use it as a reference for Copilot Chat and for reusable project workflow instructions.

---

## 1. Full Project Review

Prompt:

```text
Review the current changes in this Sri Ayurveda React/Vite project.

Focus on:
- React logic correctness and broken UI behavior
- CSS layout and responsiveness issues
- navigation, routing, and page flow problems
- accessibility and color contrast issues
- SEO and metadata correctness
- content accuracy, especially Ayurveda, medical claims, and policy wording
- build, deployment, and runtime risks

Prioritize findings by severity:
1. Functional or broken behavior
2. Security, privacy, or compliance risk
3. Accessibility or readability problems
4. UI consistency and performance issues
5. Minor polish or maintainability concerns

Report findings with:
- affected file(s)
- why the issue matters
- risk level
- recommended fix

Do not change code unless I explicitly ask you to.
```

---

## 2. Frontend Bug Fix Review

Prompt:

```text
Act as a frontend engineer for the Sri Ayurveda site.

Review the app for UI, routing, layout, mobile responsiveness, and component issues.

Check for:
- broken pages or navigation
- mismatched styling between pages
- poor color contrast or unreadable text
- incorrect image usage or missing assets
- stale routes, links, or menu items
- inconsistent spacing and card layouts
- regressions caused by recent CSS or component edits

Provide a concise fix plan and cite the files most likely involved.
If a fix is needed, make the smallest safe change and validate it with the project build.
```

---

## 3. Accessibility Audit

Prompt:

```text
Review the Sri Ayurveda website for accessibility issues.

Check for:
- low contrast text and controls
- missing button or link labels
- poor heading hierarchy
- keyboard navigation problems
- non-semantic or confusing interactive elements
- readability problems on mobile and desktop

Recommend practical fixes that improve accessibility without changing the site brand or structure unnecessarily.
```

---

## 4. SEO and Metadata Audit

Prompt:

```text
Audit the Sri Ayurveda website for SEO and metadata quality.

Check:
- page titles and meta descriptions
- heading structure and keyword relevance
- internal linking quality
- image alt text and semantic structure
- route and content consistency
- mobile-friendly content structure

Flag weak or missing SEO elements and recommend the smallest correct improvements.
```

---

## 5. Content and UX Audit

Prompt:

```text
Audit the Sri Ayurveda website for content quality, UX clarity, and patient trust.

Review:
- branding consistency
- text readability and contrast
- page hierarchy and CTA clarity
- service and specialty naming
- legal/medical disclaimer accuracy
- patient trust signals such as credentials, reviews, and treatment descriptions

Flag anything confusing, inaccurate, or visually weak.
Suggest practical improvements with low-risk edits.
```

---

## 6. React Build and Validation Check

Prompt:

```text
Validate the current Sri Ayurveda frontend changes as if preparing for deployment.

Check:
- whether the app builds successfully with npm run build
- whether imports, routes, and component names remain valid
- whether CSS classes still match the component structure
- whether there are warnings that could affect runtime behavior
- whether recently changed pages or navigation still function as expected

Report the likely root cause of any issue and suggest the minimal fix.
```

---

## 7. Medical and Compliance Review

Prompt:

```text
Review this website from a trust, medical accuracy, and compliance perspective.

Check for:
- guarantees of medical outcomes
- unqualified treatment claims
- unclear disclaimers or policy references
- missing consent or privacy language
- advice that sounds more certain than appropriate for a wellness setting

Keep the review factual, patient-respectful, and realistic. Recommend safer phrasing when needed.
```

---

## 8. Design Improvement Prompt

Prompt:

```text
Improve the interface for this Sri Ayurveda website with a clearer, more premium, trustworthy visual style.

Requirements:
- stay aligned with an Ayurvedic aesthetic
- improve readability with higher-contrast text colors
- keep layout consistent across all pages
- make content containers more refined and modern
- preserve the existing brand identity and routing structure
- keep edits focused and minimal where possible

Prioritize accessible contrast, spacing, and visual hierarchy.
```

---

## 9. Navigation and Specialties Prompt

Prompt:

```text
Review the navigation structure of the Sri Ayurveda website.

Check:
- menu clarity and hierarchy
- placement of specialty pages versus treatment pages
- route organization and naming consistency
- whether dedicated pages improve the user journey
- whether navigation feels intuitive and premium across the site

Propose clear, consistent menu improvements and update the relevant route or component structure if needed.
```

---

## 10. Specialties and Treatment Page Review

Prompt:

```text
Review the Sri Ayurveda specialty and treatment pages.

Check for:
- confusing separation between treatment offerings and specialties
- duplicate or fragmented page structure
- wording clarity and patient understanding
- consistent layout, section order, and call-to-action design
- whether dedicated specialty pages improve navigation and trust

Recommend the smallest clean fix to improve clarity and consistency.
```

---

## 11. Content Cleanup Prompt

Prompt:

```text
Perform a content cleanup review for the Sri Ayurveda website.

Look for:
- outdated copy
- repeated sections or duplicate information
- inconsistent product or service naming
- awkward wording or formatting issues
- content that should be shortened or moved into a clearer structure

Keep the tone warm, patient-friendly, and professional.
```

---

## 12. Deployment Readiness Prompt

Prompt:

```text
Review the project as if preparing for deployment.

Check:
- broken imports or route issues
- unsupported or missing assets
- SEO and legal content readiness
- styling problems that would look poor in production
- config or environment concerns

Summarize any launch blockers and recommend the minimum fixes required before going live.
```

---

## 13. Quick Launch Prompt

Prompt:

```text
Use the project rules in .github/copilot-instructions.md and the Sri Ayurveda website conventions to complete the requested task.

Keep changes focused, visually consistent, and easy to maintain.
Prefer small, correct edits over broad refactors.
Validate with npm run build when frontend code changes.
```

---

## 14. Project Maintenance Prompt

Prompt:

```text
Perform a lightweight maintenance pass on the Sri Ayurveda website.

Focus on:
- broken or stale links
- inconsistent page headers and card styling
- readability and spacing issues
- routing and menu updates
- repeated content cleanup
- anything that looks unfinished in production

Apply minimal, safe fixes that maintain the site’s visual intent and quality.
```

---

## Recommended usage

Use these prompts directly in Copilot Chat, for example:

- "Use the full project review prompt on my current changes"
- "Run the frontend bug fix review"
- "Audit the accessibility issues on the site"
- "Review the navigation and specialties layout"
- "Check the project for deployment readiness"
- "Use the maintenance prompt for a cleanup pass"
- "Use the quick launch prompt for this task"

---

## Prompt files in this folder

- .github/prompts/code-review.prompt.md
- .github/prompts/review.prompt.md
- .github/prompts/prompts.md
- .github/prompts/frontend-bugfix.prompt.md
- .github/prompts/accessibility-audit.prompt.md
- .github/prompts/seo-audit.prompt.md
- .github/prompts/content-audit.prompt.md
- .github/prompts/build-validation.prompt.md
- .github/prompts/medical-compliance.prompt.md
- .github/prompts/design-improvement.prompt.md
- .github/prompts/navigation-specialties.prompt.md
- .github/prompts/deployment-readiness.prompt.md
- .github/prompts/quick-launch.prompt.md
- .github/prompts/maintenance.prompt.md
- .github/prompts/homepage-polish.prompt.md
- .github/prompts/treatment-page-cleanup.prompt.md
- .github/prompts/gallery-optimization.prompt.md
- .github/prompts/booking-contact-flow-audit.prompt.md
- .github/prompts/seo-content-rewrite-checklist.prompt.md
