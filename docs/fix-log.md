# JK Cargocare – Bug Fix Log (Local changes)

This document records where and what fixes were made for each bug from `bugs-and-improvements.md`. All changes are applied locally on branch `shriraj_dev` and are not committed yet. Each code edit includes a comment like `// BUG-<id>:` next to the relevant change.

## Index

- [1. Email field accepts invalid formats](#1-email-field-accepts-invalid-formats)
- [2. tel: links contain a leading space](#2-tel-links-contain-a-leading-space)
- [3. “Visit our official website” uses http](#3-visit-our-official-website-uses-http)
- [4. Duplicate contentinfo landmarks](#4-duplicate-contentinfo-landmarks)
- [5. Active nav state not conveyed](#5-active-nav-state-not-conveyed)
- [6. Mobile menu toggle not reliably discoverable/labelled](#6-mobile-menu-toggle-not-reliably-discoverablelabelled)
- [7. Touch targets below recommended minima](#7-touch-targets-below-recommended-minima)
- [8. Horizontal overflow on narrow viewports](#8-horizontal-overflow-on-narrow-viewports)
- [9. Keyboard focus order skips message field](#9-keyboard-focus-order-skips-message-field)
- [10. Map iframe lacks a title](#10-map-iframe-lacks-a-title)
- [11. Duplicate phone/email as both text and links](#11-duplicate-phoneemail-as-both-text-and-links)
- [12. Primary nav hidden on mobile without clear toggle](#12-primary-nav-hidden-on-mobile-without-clear-toggle)
- [13. SSR vs CSR mismatch risk in Service Interest dropdown](#13-ssr-vs-csr-mismatch-risk-in-service-interest-dropdown)
- [14. CTA label vs destination mismatch](#14-cta-label-vs-destination-mismatch)
- [15. Branding/title inconsistencies](#15-brandingtitle-inconsistencies)
- [16. Resource 404 during crawl](#16-resource-404-during-crawl)
- [17. External link hardening (noopener)](#17-external-link-hardening-noopener)
- [18. Address spelling/formatting inconsistent](#18-address-spellingformatting-inconsistent)

---

## 1. Email field accepts invalid formats

- Severity: High
- Files: `components/base_components/ContactForm.tsx`, `app/api/contact/route.ts`
- Before (client):
  - Email `<Input>` lacked `required`/`pattern`; button had no explicit `type`.
- After (client):
  - `<Input type="email" required inputMode="email" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" aria-required="true" />` [BUG-1]
  - Submit `<Button type="submit" />` [BUG-1]
- Before (server):
  - `email: z.string().email("Invalid email address")`
- After (server):
  - `email: z.string().email(...).refine(/* blocks .. and edge dots */)` [BUG-1]
- Status: Resolved.

## 2. tel: links contain a leading space

- Severity: Medium
- File: `components/base_components/Footer.tsx`
- Before: `href="tel: 0832-2556111"`
- After: `href="tel:+918322556111"` (visible text unchanged). [BUG-2]
- Status: Resolved.

## 3. “Visit our official website” uses http

- Severity: Medium
- File: `components/base_components/Footer.tsx`
- Before: `href="http://www.jkcargocare.com"`
- After: `href="https://www.jkcargocare.com" rel="noopener noreferrer"` with improved aria-label. [BUG-3]
- Status: Resolved.

## 4. Duplicate contentinfo landmarks

- Severity: Medium (a11y)
- File: `components/base_components/Footer.tsx`
- Before: Both outer footer and copyright div had `role="contentinfo"`.
- After: Outer remains `contentinfo`; inner is `role="region" aria-label="Copyright information"`. [BUG-4]
- Status: Resolved.

## 5. Active nav state not conveyed

- Severity: Low
- File: `components/base_components/Navbar.tsx`
- Before: Visual active class only.
- After: `aria-current="page"` on active link; min tap height via `min-h-[44px]`. [BUG-5]
- Status: Resolved.

## 6. Mobile menu toggle not reliably discoverable/labelled

- Severity: Medium (a11y)
- File: `components/base_components/MobileNav.tsx`
- Before: Unlabelled small trigger; inconsistent menu item roles.
- After: Button has `aria-label="Open menu"`, `aria-controls`, min 44×44; menu links have `role="menuitem"` and `aria-current` when active. [BUG-6]
- Status: Resolved.

## 7. Touch targets below recommended minima

- Severity: High
- Files: Navbar/MobileNav
- Before: Links ~21px high.
- After: Added `min-h-[44px]` and flex-centering for all primary nav/mobile links. [BUG-7]
- Status: Resolved (navigation).

## 8. Horizontal overflow on narrow viewports

- Severity: Medium
- File: `app/globals.css`
- Before: Potential horizontal scroll on small widths.
- After: `html, body { overflow-x: hidden; }` global mitigation. [BUG-8]
- Status: Partially Resolved (audit pages if any remaining overflow).

## 9. Keyboard focus order skips message field

- Severity: Medium
- File: `components/base_components/ContactForm.tsx`
- Before: Custom Select had mixed `value`/`defaultValue` risking focus anomalies.
- After: Select is fully controlled with `value={field.value ?? ""}`; proper labels/ids maintained. [BUG-9]
- Status: Likely Resolved (verify in runtime).

## 10. Map iframe lacks a title

- Severity: Low
- File: `components/Location.tsx`
- Before: `<iframe ...>` without `title`.
- After: `<iframe title="JK Cargocare location map" ... />` [BUG-10]
- Status: Resolved.

## 11. Duplicate phone/email as both text and links

- Severity: Low
- Recommendation
- Before: Both text and link can be read twice by AT.
- After (proposed): Keep single linked instance or add `aria-hidden="true"` to the duplicate.
- Status: Pending decision. [BUG-11]

## 12. Primary nav hidden on mobile without clear toggle

- Severity: Medium
- File: `components/base_components/MobileNav.tsx`
- Before: Toggle not reliably discoverable.
- After: Clear labelled button, larger target, and visible/focusable items when open. [BUG-12]
- Status: Resolved.

## 13. SSR vs CSR mismatch risk in Service Interest dropdown

- Severity: Medium
- File: `components/base_components/ContactForm.tsx`
- Before: Both `value` and `defaultValue` used.
- After: Controlled `value` only; no `defaultValue`. [BUG-13]
- Status: Resolved.

## 14. CTA label vs destination mismatch

- Severity: Low
- Files: `app/page.tsx`, `app/contact-us/page.tsx`
- Before: Aria-label/label like “Request a quote” pointing to `/contact-us`.
- After: Label/aria now “Contact Us” for `/contact-us`. [BUG-14]
- Status: Resolved.

## 15. Branding/title inconsistencies

- Severity: Low
- Files: `app/about/page.tsx`, `app/services/page.tsx`, `app/industries/page.tsx`, `app/contact-us/page.tsx`
- Before: Mixed formats (extra slogans, inconsistent siteName casing).
- After: Titles standardized to “<Page> | JK Cargocare”; OpenGraph `siteName` corrected. [BUG-15]
- Status: Resolved.

## 16. Resource 404 during crawl

- Severity: Low/Medium
- Before: 404 observed previously (asset unspecified).
- After: Pending runtime network check to identify and fix/remove. [BUG-16]
- Status: Pending.

## 17. External link hardening (noopener)

- Severity: Medium
- File: Footer
- Before: Some links may miss rel on `_blank`.
- After: Verified `rel="noopener noreferrer"` on all external `_blank` links. [BUG-17]
- Status: Verified.

## 18. Address spelling/formatting inconsistent

- Severity: Low
- File: `components/base_components/Footer.tsx`
- Before: “Zuari Nagar, Goa – 403726.”
- After: “Zuarinagar, Goa 403726, India.” [BUG-18]
- Status: Resolved.

---

## Verification tips (quick)

- Email: Try `test..a@b.com` (should fail) and `test@domain.com` (should pass).
- Tel: Inspect `href` (no spaces, E.164), click opens dialer.
- Nav: Keyboard navigate; check focus rings and `aria-current` on active.
- Mobile menu: At 375×667, toggle is visible, labelled, and items ≥44px.
- Map: Inspect iframe `title`.
- Titles: View-source/Head for title strings consistency.
- Overflow: Resize to 320px and check horizontal scroll.
