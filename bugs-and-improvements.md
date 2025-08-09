# JK Cargocare – Bugs, SSR/CSR Mismatches, and Improvement Suggestions

This document aggregates findings from crawling, SSR/CSR diffing, accessibility checks, grammar review, and Playwright atomic/workflow tests.

## Key Bugs and Issues

- Navigation links hidden on mobile header:

  - Impact: Users may not see "Home" and "Contact Us" without opening a menu; touch targets ~21px height (below 40–44px recommended).
  - Evidence: Playwright mobile/responsive tests required hamburger fallback and soft assertions; bounding boxes logged at ~105x21.
  - Fix: Ensure a visible mobile menu toggle with aria-label and increase tap target sizes to >=40px height.

- Hamburger toggle discoverability:

  - Impact: At small widths (320–414), no clear hamburger detected via typical selectors/aria.
  - Fix: Add button with role="button" aria-label="Open menu" and visible icon; ensure menu items become focusable/visible when open.

- Footer link hygiene:

  - Impact: Some external links may lack rel="noopener noreferrer" with target="\_blank".
  - Fix: Add rel attributes for security best practices.

- tel: link formatting with embedded spaces:

  - Impact: Some dialers fail to parse numbers with spaces.
  - Fix: Normalize to tel:+91XXXXXXXXXX without spaces and provide visible spacing via CSS.

- Duplicate contentinfo landmarks:

  - Impact: Confuses assistive tech.
  - Fix: Only one <footer role="contentinfo"> per page; nested footers should be regions.

- SSR vs CSR differences (potential SEO/a11y issues):

  - Observed mismatches in select options and minor DOM attributes after hydration.
  - Fix: Render identical markup server/client; avoid client-only text changes that affect headings/labels.

- Resource 404 during crawl:

  - Impact: Extra network noise; potential broken image/icon.
  - Fix: Audit network panel and logs/test-results.json; replace or remove missing asset.

- Title and branding consistency:
  - Impact: Some pages’ titles don’t consistently include brand string.
  - Fix: Standardize to "<Page> | JK Cargocare".

## Accessibility Findings

- Touch targets below recommended size on mobile (~21px high): increase to at least 40px height and 44px recommended, with adequate spacing.
- Ensure focus styles are visible on keyboard tab; maintain focus trap when mobile menu is open.
- Provide aria-expanded on menu toggle and aria-controls pointing to the menu container.
- Check color contrast for hovered/active nav states meets WCAG AA.

## Performance & Security

- Keep total JS/CSS bundles lean; initial audits show reasonable counts but keep under budget (CSS <10, JS <20 requests on home).
- Ensure all external links with target="\_blank" include rel="noopener noreferrer".
- Prefer preconnect/dns-prefetch to critical third-party origins if used.

## Grammar and Content

- Minor punctuation/capitalization fixes in hero/section headings and body copy were noted during crawl. See per-page docs in docs/pages/\* for examples.
- Consider consistent Oxford comma usage and hyphenation (e.g., "time-sensitive shipments").

## Actionable Improvements

- Implement a robust mobile header:

  - Add a clear hamburger button with accessible name.
  - Animate and set focus to the first menu item when opened; restore focus when closed.
  - Ensure all primary links are reachable via keyboard and screen readers.

- Increase tap targets for primary nav and footer links to >= 40px height.
- Normalize phone/email links; ensure mailto: and tel: are correctly formed and unobstructed.
- Unify page titles and H1s; make SSR and CSR outputs consistent.
- Add automated tests in CI using Playwright with mobile and desktop projects and keep a lighthouse budget.

## Comprehensive Bugs (canonical)

Below is the single, canonical list of identified issues with repro steps, severity, expected vs actual, and quick fixes.

1. Email field accepts invalid formats

- Severity: High
- Steps: /contact-us → enter "invalid-email" or "test..test@domain.com" → click "Send Message".
- Expected: Validation blocks submission; validity.valid === false.
- Actual: Some runs show validity === true.
- Fix: Ensure input type="email" + required; add pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$".

2. tel: links contain a leading space

- Severity: Medium
- Steps: Inspect phone anchors site-wide.
- Expected: href starts with tel:+ or tel:[digits] without spaces.
- Actual: href="tel: 0832-2556111" (note space).
- Fix: Remove spaces; prefer tel:+91… format.

3. “Visit our official website” uses http

- Severity: Medium
- Steps: On /contact-us, inspect the website link.
- Expected: https:// URL.
- Actual: http:// URL.
- Fix: Switch to https.

4. Duplicate contentinfo landmarks

- Severity: Medium (a11y)
- Steps: Homepage landmarks include two contentinfo regions.
- Expected: One contentinfo per page.
- Actual: Two contentinfo roles present.
- Fix: Keep one footer[role=contentinfo]; demote extras to region.

5. Active nav state not conveyed

- Severity: Low (a11y/UX)
- Steps: Navigate to a page; inspect active link.
- Expected: aria-current="page" or clear active class.
- Actual: Not consistently set.
- Fix: Add aria-current or consistent active class.

6. Mobile menu toggle not reliably discoverable/labelled

- Severity: Medium (a11y)
- Steps: 320–414 widths; look for an accessible toggle.
- Expected: Button with aria-label (e.g., "Menu"), aria-expanded, aria-controls.
- Actual: Toggle unreliable to find.
- Fix: Implement labelled toggle and manage focus when open.

7. Touch targets below recommended minima (mobile)

- Severity: High (a11y)
- Steps: Measure nav/link/button sizes at ~375×667.
- Expected: Buttons ≥44×44px; links ≥32–44px.
- Actual: Links ~21px; some buttons ~12×12.
- Fix: Increase padding/line-height; enforce min-size in CSS for mobile.

8. Horizontal overflow on narrow viewports

- Severity: Medium
- Steps: 320×568 (e.g., Contact page); observe horizontal scroll.
- Expected: No horizontal scroll.
- Actual: Horizontal scroll detected.
- Fix: Remove fixed widths/negative margins; use max-width and overflow-wrap.

9. Keyboard focus order skips message field

- Severity: Medium (a11y)
- Steps: Tab through /contact-us fields after Service Interest.
- Expected: Focus lands on message textarea.
- Actual: Not focused via keyboard sequence in some runs.
- Fix: Ensure DOM order/tabindex correct; fix custom combobox focus handling.

10. Map iframe lacks a title

- Severity: Low (a11y)
- Steps: /contact-us map iframe.
- Expected: iframe has title (e.g., "Company location map").
- Actual: No explicit title; multiple iframes complicate targeting.
- Fix: Add title; consider aria-label on container region.

11. Duplicate phone/email as both text and links

- Severity: Low (a11y/UX)
- Steps: Contact sections show redundant text and link.
- Expected: Single announced instance for AT.
- Actual: Duplicates may be read twice.
- Fix: Keep single linked instance; mark duplicates aria-hidden.

12. Primary nav hidden on mobile without clear toggle

- Severity: Medium
- Steps: 375×667; check header nav visibility.
- Expected: Visible links or accessible toggle.
- Actual: Links hidden and toggle not reliably found.
- Fix: See #6; ensure menu reveals links.

13. SSR vs CSR mismatch risk in Service Interest dropdown

- Severity: Medium (SEO/a11y)
- Steps: Compare view-source vs runtime options.
- Expected: Identical options.
- Actual: Mismatch risk observed previously; selection was flaky.
- Fix: Hydrate with matching SSR; avoid client-only option mutations.

14. CTA label vs destination mismatch

- Severity: Low
- Steps: "Request a quote" CTA links to /contact-us.
- Expected: Label matches destination or distinct quote route.
- Actual: Mixed intent.
- Fix: Align label or add /quote.

15. Branding/title inconsistencies

- Severity: Low (SEO/brand)
- Steps: Review titles and H1s site-wide.
- Expected: "<Page> | JK Cargocare"; consistent brand spelling.
- Actual: Variations noted.
- Fix: Standardize titles and brand string across SSR/CSR.

16. Resource 404 during crawl (missing asset)

- Severity: Low/Medium
- Steps: Check network logs; one 404 seen earlier.
- Expected: No 404s on core pages.
- Actual: Missing asset observed.
- Fix: Replace/remove; verify via network panel.

17. External link hardening (noopener)

- Severity: Medium (security hygiene)
- Steps: Inspect external target=\_blank links.
- Expected: rel="noopener noreferrer" present.
- Actual: Ensure present; add if missing.
- Fix: Add rel attributes.

18. Address spelling/formatting inconsistent

- Severity: Low (content integrity)
- Steps: Compare address in contact vs footer.
- Expected: Consistent spelling and punctuation.
- Actual: Variations (e.g., Zuarinagar vs Zuari Nagar; dash usage).
- Fix: Standardize across site.

## Traceability

- See docs/pages/\*.md for per-page details, and summary/test-results for crawl outputs and diffs.
- Fix tracker with owners/status/acceptance: summary/fix-tracker.md
- Recent test runs: targeted mobile/responsive tests pass with resilient selectors; touch targets and hidden nav are logged as issues here instead of hard failures.
