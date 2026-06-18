# Loom Landing Page — Design Specification (design.md)

A complete guide to emulating the visual and interaction design of the Loom
(loom.com) marketing landing page, including desktop and mobile.

---

## 1. Design Tokens

### 1.1 Color Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--color-text-primary` | `#101214` (rgb 16,18,20) | Headings, hero text, primary body |
| `--color-text-secondary` | `#292A2E` (rgb 41,42,46) | Default body text |
| `--color-blue-primary` | `#1868DB` (rgb 24,104,219) | Primary buttons, text links, accents |
| `--color-blue-deep` | `#2554C7` / royal blue | Blog section background, secondary CTA fills |
| `--color-blue-tint` | `#E9F2FE` (rgb 233,242,254) | Secondary button bg, footer bg, card bg |
| `--color-white` | `#FFFFFF` | Header bg, page bg, dark-section text |
| `--color-dark` | `#101214` | Dark "security" section bg, pill CTA bg |
| `--card-green` | `#EFFFD6` (rgb 239,255,214) | Sales use-case card |
| `--card-purple` | `#F8EEFE` (rgb 248,238,254) | Engineering use-case card |
| `--card-blue` | `#E9F2FE` (rgb 233,242,254) | Customer support use-case card |
| `--card-yellow` | `#FFF5D4` (rgb 255,245,212) | Design use-case card |

Background canvas is effectively white (`transparent` body over white).

### 1.2 Typography Tokens
Two custom Atlassian "Charlie" typefaces, both falling back to `sans-serif`:
- **Display font:** `"Charlie Display", sans-serif` — used for H1/H2 hero & section headings and large pull-quotes. Weight **700**.
- **Text font:** `"Charlie Text", sans-serif` — body copy, sub-headings, buttons, links, footer. Weights **400** (regular) and **700** (bold/links).

Suggested web-font fallback stack if Charlie is unavailable:
`"Charlie Display", "Inter", "Helvetica Neue", Arial, sans-serif`.

### 1.3 Radius Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-pill` | `9999px` | All buttons (fully rounded pills) |
| `--radius-card` | `~40px` (39.4px measured) | Use-case cards, media frames |
| `--radius-section` | `~64px` (65.9px measured) | Large rounded section containers (dark security section, blue blog section) |
| `--radius-media` | `~16–24px` | Hero video and feature media containers |

### 1.4 Spacing Scale
Approximate scale (px): `8, 16, 24, 32, 48, 64, 96, 120`.
- Section vertical padding: ~96–120px (desktop), ~48–64px (mobile).
- Content max-width container: ~1200–1280px, horizontally centered with auto margins.
- Gutter / side padding: ~32px desktop, ~24–32px mobile.

---

## 2. Global Layout & Structure

Overall page is a single-column vertical stack of full-width sections. Each
content block is constrained to a centered max-width (~1200px). Many large
sections sit inside oversized rounded "panels" (radius ~64px) that stand out
against the white page.

Section order (top → bottom):
1. Sticky header / navigation
2. Hero (headline + sub + dual CTA + video)
3. Social-proof strip ("Millions of people across 400,000 companies…")
4. AI bug reports promo ("Ship faster with AI bug reports")
5. "The easiest screen recorder you'll ever use" intro + feature row 1
6. Alternating feature rows (editor, sharing, engage/connect)
7. Dark "Keep your content safe" security section
8. "Video messaging for all use cases" — 4 colored cards
9. "Powerful features…" feature list
10. "From our blog" — blue panel with two dark article cards
11. "Loom for Enterprise" + testimonials carousel
12. Final CTA "Loom powers great campaigns"
13. Footer (multi-column links + social + Atlassian brand)

---

## 3. Header / Navigation

- **Position:** `sticky` top, `z-index` high. Background `#FFFFFF`, height **~90px**, no bottom border.
- **Left:** Logo lockup — small blue rounded-square Atlassian "starburst" icon, with stacked wordmark: tiny uppercase bold "ATLASSIAN" eyebrow above larger "Loom" wordmark in near-black.
- **Right (desktop):** text link **"Sign In"** (transparent, color `#292A2E`, 16px) → primary pill **"Get Loom for free"** → secondary tint pill **"Contact Sales"** → hamburger icon button (always present, in a light circular button).
- Spacing between nav items ~16–24px.

### Mobile header
- Logo left, single circular hamburger button right (light blue-tint circle `#E9F2FE`, ~64px).
- Opening it reveals a **full-screen white overlay menu** (see §11).

---

## 4. Buttons

All buttons are **fully rounded pills** (`border-radius: 9999px`), `"Charlie Text"` font, no visible border.

| Button | BG | Text color | Weight | Notes |
|--------|----|-----------|--------|-------|
| Primary ("Get Loom for free") | `#1868DB` | `#FFFFFF` | 400 (header) / bold in hero | Pill, ~48px tall, padding ~8px 15px |
| Secondary ("Contact Sales", "Install Chrome Extension") | `#E9F2FE` | `#000` | 700 | Pill; large variant padding ~15px 23px, ~57px tall; may carry a faint focus ring (`box-shadow 0 0 0 ~4px`) |
| Tertiary / text link ("Sign In") | transparent | `#292A2E` | 400 | Pill hit-area, padding 8px 16px |
| Inline text link ("Record now →", "Connect over video →", "Read the article →") | none | `#1868DB` | 700 | 18px, accompanied by a right-arrow icon |
| Dark pill CTA ("Explore our blog") | `#101214` | `#FFFFFF` | bold | Used inside the blue blog panel |

"Install Chrome Extension" includes a leading download icon. Buttons that open
new windows include an "Open in new window" affordance.

Hover behavior: subtle darkening of fill (primary → darker blue); links keep
color but may underline. Keep transitions ~150–200ms ease.

---

## 5. Hero Section

- **Layout:** Centered column. Headline centered (desktop), left-aligned (mobile).
- **H1:** `"Charlie Display"`, **~56px** desktop (line-height ~58px), weight 700, color `#101214`. Copy: "One video is worth a thousand words". Letter-spacing normal.
- **Sub-headline:** `"Charlie Text"`, **~25px** desktop (line-height ~38px), weight 400, color `#101214`. Centered. Copy: "Easily record and share AI-powered video messages with your teammates and customers to supercharge productivity".
- **CTA row:** two pills side-by-side and centered — primary "Get Loom for free" + secondary "Install Chrome Extension" (with download icon). ~24px gap.
- **Hero media:** Large auto-playing/looping product video in a rounded container (radius ~16–24px), full content-width, with a centered circular **play button** (blue `#1868DB` translucent circle, white triangle). A small playback chip ("1×", duration "1 min") overlays the lower portion.

---

## 6. Social Proof Strip

Short centered line of text below hero: "Millions of people across 400,000
companies choose Loom" followed by a "Get Loom for free" link/button. Muted,
small, centered. Often accompanied by a logo row.

---

## 7. Feature Rows (Alternating Two-Column)

Pattern used for "Edit your videos like a pro", "Share or embed video anywhere
you work", "Engage and connect with video", "Lightning fast screen recording".

- **Layout:** 2-column grid. Text column and media column alternate left/right between rows.
- **Text column:**
  - Optional small colored dot/eyebrow marker.
  - **Sub-heading (H3):** `"Charlie Display"`, **~30px**, weight 700, color `#101214`, line-height ~38px.
  - **Body:** `"Charlie Text"`, ~16–18px, color `#292A2E`, comfortable line-height (~1.5).
  - **Inline text link** with arrow ("Record now →", "Connect over video →", "Start sharing", "Download now").
- **Media column:** Illustrative product UI mockups, often layered floating cards (e.g., "Add overlay", "Edit background" chips), screen recordings, code editors, soft pastel/gradient backgrounds, rounded corners (~40px). Media frequently bleeds with soft drop shadows and decorative blobs.
- Vertical rhythm between rows ~96–120px.

---

## 8. Dark Security Section

"Keep your content safe" — a full-width **dark rounded panel**:
- Background `#101214`, large corner radius (~64px), generous padding.
- Heading in `"Charlie Display"` 700, color `#FFFFFF`.
- Body text in light gray/white. Includes supporting product imagery. High-contrast inverse of the light sections.

---

## 9. Use-Case Cards ("Video messaging for all use cases")

- **Section heading (H2):** `"Charlie Display"`, **~40px**, weight 700, centered, color `#101214`, line-height ~46px.
- **Layout:** 4-column responsive grid of cards.
- **Card spec:** width ~254px, height ~404px, padding ~35px, **radius ~40px**, no shadow. Each card a distinct pastel fill:
  - Sales → `#EFFFD6` (green)
  - Engineering → `#F8EEFE` (purple)
  - Customer support → `#E9F2FE` (blue)
  - Design → `#FFF5D4` (yellow)
- **Card content:** product UI thumbnail at top (rounded), bold title (`"Charlie Display"` 700, ~24px) centered, short centered description (`"Charlie Text"`, ~16px, `#292A2E`).
- Below grid: centered tint pill "See all use cases".

---

## 10. Features List, Blog, Testimonials, Final CTA

### Features list ("Powerful features for easy, custom recordings")
Centered heading + a list/grid of feature names (Screen and camera recording,
Easy sharing and embedding, etc.) with a "See all features" link.

### Blog section ("From our blog")
- Sits inside a **deep-blue rounded panel** (royal blue, radius ~64px).
- Two **article cards** with darker blue translucent fill, rounded corners (~24–32px), padding ~40px.
- Card content: bold white title (`"Charlie Display"`), light body text, and a white "Read the article →" link with arrow.
- Below cards: centered **dark pill** "Explore our blog" (`#101214` bg, white text).

### Enterprise + Testimonials
- "Loom for Enterprise" feature block with video.
- **Testimonials carousel:** large pull-quotes in `"Charlie Display"` **~24px**, weight 700, color `#101214`, followed by attribution (name + role/company, smaller `"Charlie Text"`). Multiple quotes rotate/scroll horizontally (Andrew Reynolds/MetaLab, Alexis Ohanian, Katie Burke/HubSpot, etc.).

### Final CTA
"Loom powers great campaigns" heading + "Get Loom for free" pill + caption
"For Mac, Windows, iOS, and Android". Background video accent.

---

## 11. Footer

- **Background:** `#E9F2FE` (light blue tint). Text color `#101214` / `#292A2E`.
- **Layout:** Multi-column link grid. Column groups: App, Solutions, For Business, Resources, Company (plus screen-recorder SEO links).
- **Column headings:** `"Charlie Text"`, **~12px**, weight 700, **UPPERCASE**, color `#101214`.
- **Footer links:** `"Charlie Text"`, ~15px, weight 400, color `#101214`, generous vertical spacing (~24–32px between links).
- **Bottom bar:** Row of social icons (Twitter/X, LinkedIn, YouTube, Instagram, TikTok) as simple monochrome circular icons, legal links ("Loom Terms & Policies", "Notice at Collection"), the **Atlassian wordmark + logo** at far right, and copyright "© 2026, Loom, Inc. All Rights Reserved."

---

## 12. Mobile Design (≤ ~768px / tested at 390px CSS)

### Hero
- Hero headline left-aligned (`text-align: start`), **~35px** (line-height ~36px).
- Sub-headline **~21px**, left-aligned, color near-black.
- Side padding ~32px from viewport edge (`h1` left offset = 32px).
- CTAs: primary + "Install Chrome Extension" remain on one row when they fit, otherwise stack; full-width-ish pills.
- Hero video full-width, rounded corners, with centered blue play button.

### Section headings
- H2 reduces to **~28px** (line-height ~32px), still `"Charlie Display"` 700.

### Layout reflow
- All two-column feature rows **stack vertically** (text above media).
- Use-case cards stack into a single column (or 1–2 per row), preserving pastel fills and ~40px radius.
- Footer columns collapse into stacked groups.

### Mobile navigation (hamburger menu)
- Tapping the circular hamburger opens a **full-screen white overlay**.
- Close control = **solid blue circle** (`#1868DB`) with white **×** in top-right.
- Menu items as **full-width stacked rows** separated by thin light dividers:
  - Expandable accordions with **chevron-down** icons: *Apps, Solutions, Resources*.
  - Direct links with **right-arrow** icons: *Enterprise, Pricing, Contact Sales*.
  - Item labels `"Charlie Display/Text"`, ~24px, near-black.
- **Bottom action row:** two pills side-by-side — tint "Sign In" (`#E9F2FE`, dark text) and primary "Try Loom for free" (`#1868DB`, white text).

---

## 13. Media & Imagery Guidelines

- Product visuals are **layered UI mockups** (recorder controls, comments, emoji
  reactions 👍, code editors, calendar timelines) on soft pastel/gradient
  backgrounds, with floating chip-cards and subtle shadows.
- Circular webcam-bubble overlays appear on top of recordings.
- Decorative soft blobs/gradients sit behind media for depth.
- Corner radius on media: ~16–40px depending on context; large feature media
  echoes the ~40px card radius.

---

## 14. Animation & Interactivity

- **Sticky header** stays pinned on scroll.
- **Auto-playing looping videos** in hero, enterprise, and CTA areas (muted), each
  with a manual play affordance.
- **Hover states:** buttons darken fill; text links underline/shift arrow slightly.
- **Focus rings:** secondary pills show a soft outer ring (`box-shadow 0 0 0 ~4px`).
- **Testimonials** scroll/rotate horizontally (carousel).
- **Mobile menu** opens as a full-screen overlay with expandable accordion
  sections.
- Recommended transitions: 150–250ms `ease`/`ease-out` for color, transform,
  and opacity.

---

## 15. Content Length Reference

- H1: ~6 words. Hero sub: ~17 words (1–2 lines desktop, 3 lines mobile).
- Feature sub-headings: 2–5 words. Feature body: 1–2 sentences (~20–35 words).
- Use-case card descriptions: ~8–10 words each.
- Testimonials: 1–2 sentences each.
- Footer: dense link directory grouped into ~6 categories.

---

## 16. Quick CSS Variable Starter

\`\`\`css
:root {
  --color-text-primary:#101214;
  --color-text-secondary:#292A2E;
  --color-blue-primary:#1868DB;
  --color-blue-tint:#E9F2FE;
  --color-dark:#101214;
  --card-green:#EFFFD6;
  --card-purple:#F8EEFE;
  --card-blue:#E9F2FE;
  --card-yellow:#FFF5D4;
  --font-display:"Charlie Display",sans-serif;
  --font-text:"Charlie Text",sans-serif;
  --radius-pill:9999px;
  --radius-card:40px;
  --radius-section:64px;
  --container-max:1200px;
}
\`\`\`