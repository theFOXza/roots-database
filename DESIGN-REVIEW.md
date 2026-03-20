# THE ROOTS DATABASE — Design Review
**By Harley 🃏 | Creative Lead**
**Date:** March 20, 2026
**Status:** Complete — Ready for Implementation

---

> *"Ancient wisdom, verified. Community-sourced, science-backed."*
> This tagline is the design brief. Every visual decision must honor it.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Roots Score™ Visual System](#4-roots-score-visual-system)
5. [Badge & Rank System](#5-badge--rank-system)
6. [Social Share Cards — #MyGrandmaKnew](#6-social-share-cards)
7. [Landing Page Design](#7-landing-page-design)
8. [Remedy Detail Page](#8-remedy-detail-page)
9. [Mobile Considerations](#9-mobile-considerations)
10. [Cultural Sensitivity](#10-cultural-sensitivity)
11. [Implementation Notes](#11-implementation-notes)

---

## 1. Brand Identity

### Logo Direction

**Primary Mark:** A stylized root system that doubles as a tree.
- The above-ground portion: a simple, clean tree canopy (modern science — visible, ordered, verifiable)
- The below-ground portion: an intricate, organic root network that spreads wider than the canopy (ancestral wisdom — the hidden foundation that holds everything up)
- The visual metaphor is intentional: science is the visible expression, but ancestral knowledge is the root

**Logo Construction:**
- The roots form the letters "R" and "D" subtly (negative space — don't force it, suggest it)
- The tree trunk serves as the dividing line between above (modernity) and below (heritage)
- A thin horizontal baseline/soil line connects the two worlds
- Optional: A single golden leaf at the top of the canopy, representing a "Gold Root" validated remedy

**Wordmark:**
- "The Roots Database" — primary wordmark
- "by Ancient African Secrets" — secondary, smaller, set in sans-serif, color: `#C4986A` (warm gold)
- The two-line hierarchy reinforces both brand equity

**Logo Variants:**
1. Full lockup — tree mark + "The Roots Database" + "by AAS" (default)
2. Icon only — root/tree mark (app icon, favicon, social avatar)
3. Wordmark only — for horizontal placements
4. Reversed (light on dark) — for dark backgrounds and hero sections

**What to AVOID:**
- No mortar and pestle (overused in herbal/wellness branding)
- No caduceus or medical symbols (clinical, wrong tone)
- No "tribal" patterns as a logo element (see Section 10 on cultural sensitivity)
- No leaf alone — too generic

**Logo feeling:** If the Smithsonian, National Geographic, and a West African family elder had a child. Institutional trust + organic warmth + cultural depth.

---

### Visual Balance: Heritage + Modern Science

The design system should feel like you're standing in a well-funded research library that also happens to have your grandmother's handwritten recipe book on the shelf. Neither dominates. Both belong.

**Heritage signals:**
- Warm, earthy tones
- Serif typography (timeless, educated, weight of history)
- Organic textures (subtle paper grain, botanical illustration elements)
- Photography: hands, ingredients, families, earth

**Modern Science signals:**
- Clean white space
- Precise data visualizations
- Sans-serif utility type (clear, clinical when needed — for citations, dosage, warnings)
- Grid-based layout structure
- Crisp, purposeful icons

**Tension (good tension):** The background might be warm cream, but the score visualization is precise and geometric. The heading is a warm serif, but the data table beneath it is cool and clean. This tension IS the brand.

---

## 2. Color Palette

### Primary Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Primary** | Forest Roots | `#1B4332` | Primary buttons, headers, navbar |
| **Primary Dark** | Ancient Bark | `#0D2818` | Deep backgrounds, footer |
| **Primary Light** | Canopy | `#2D6A4F` | Secondary elements, hover states |
| **Accent** | Ancestral Gold | `#C9A84C` | Score highlights, CTAs, badges |
| **Accent Warm** | Harvest Gold | `#E8B84B` | Active states, Gold Root tier color |
| **Secondary** | Earth Brown | `#7C5C3A` | Tertiary text, borders, subcategory labels |
| **Background** | Parchment | `#F8F4ED` | Main page background |
| **Surface** | Linen | `#FDFAF5` | Card backgrounds, form fields |
| **Surface Dark** | Old Paper | `#F0EBE0` | Subtle section dividers |

### Score Tier Colors

| Tier | Name | Hex | Usage |
|------|------|-----|-------|
| Gold Root (90-100) | True Gold | `#D4A017` | Radar fill, badge ring, tier banner |
| Strong Root (75-89) | Silver Sage | `#8FA898` | Radar fill, badge ring |
| Growing Root (50-74) | Warm Bronze | `#C4723A` | Radar fill, badge ring |
| Seedling (25-49) | Spring Green | `#5A8F5C` | Radar fill, badge ring |
| Unverified (1-24) | Dusty Slate | `#8A9BAE` | Radar fill, badge ring |

### Semantic Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Success | Root Green | `#2D6A4F` | Confirmations, positive actions |
| Warning | Amber | `#D97706` | Caution states, safety warnings |
| Error | Terracotta | `#B45309` | Errors, dangerous interactions |
| Info | Deep Teal | `#0E7490` | Research citations, info blocks |
| Safety | Sage | `#4A7C59` | Safety profile, dosage info |

### Neutral Scale

| Name | Hex | Usage |
|------|-----|-------|
| Root-50 | `#F8F4ED` | Page backgrounds |
| Root-100 | `#EFE9DC` | Card backgrounds |
| Root-200 | `#E0D5C5` | Borders, dividers |
| Root-300 | `#C9BAA5` | Subtle text, placeholder |
| Root-400 | `#A8947E` | Disabled states |
| Root-500 | `#7C6B57` | Secondary text |
| Root-600 | `#5C4F3A` | Primary body text |
| Root-700 | `#3D3226` | Headings |
| Root-800 | `#2A2219` | Dark headings |
| Root-900 | `#1A150F` | Near black |

### Color Principles

- **Never use pure black (#000000)** — use `#1A150F` or `#0D2818` for depth without harshness
- **Never use pure white (#FFFFFF)** — use `#FDFAF5` or `#F8F4ED` for warmth
- **Gold is sacred** — reserve `#C9A84C` / `#E8B84B` for high-value moments only (Gold Root tier, CTAs, achievement unlocks). Overuse kills the premium feel.
- **Green is trust** — the primary green (`#1B4332`) should anchor the page without being aggressive

### Dark Mode Palette (Phase 2)

| Role | Hex |
|------|-----|
| Background | `#0F1F17` |
| Surface | `#162B1E` |
| Surface Elevated | `#1D3828` |
| Border | `#2D4D3A` |
| Text Primary | `#E8E4DC` |
| Text Secondary | `#A8B5A0` |
| Accent Gold | `#E8B84B` |

---

## 3. Typography

### Primary Heading Font: **Lora** (Serif)
- **Google Fonts** — Free, web-safe, excellent screen rendering
- **Why:** Lora is a well-balanced contemporary serif. It has the weight of academia without the stiffness of Times New Roman. It renders beautifully at large sizes. It feels educated, warm, and trustworthy — like a well-worn reference book.
- **Fallback:** Georgia, 'Times New Roman', serif
- **Use for:** H1, H2, H3, blockquotes, score tier labels, hero text, remedy names

### Secondary / Body Font: **Inter** (Sans-Serif)
- **Google Fonts** — Variable font, extremely readable at all sizes
- **Why:** Inter was designed specifically for screen readability. It's neutral without being cold, modern without being trendy. It disappears into the content — which is exactly what body type should do.
- **Fallback:** -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Use for:** Body text, UI labels, navigation, form fields, data tables, captions

### Accent / Display Font: **Playfair Display** (Serif — Use Sparingly)
- **Google Fonts** — High contrast, expressive, classic editorial feel
- **Why:** When we need to make something feel *special* — a Gold Root reveal, a Griot profile, a heritage challenge headline — Playfair brings old-world authority. Use it like a highlight reel, not everyday.
- **Use for:** Score reveal displays, milestone achievements, special event headings, pull quotes from elders
- **Do NOT use for:** Body text, UI labels, navigation, small sizes (below 24px)

### Type Scale

```
Display (Playfair Display, Bold): 64px / line-height 1.1
  → Score reveals, hero numbers, Gold Root announcements

H1 (Lora, SemiBold): 48px / line-height 1.2
  → Page titles, remedy names

H2 (Lora, SemiBold): 36px / line-height 1.25
  → Section headings

H3 (Lora, Regular or SemiBold): 28px / line-height 1.3
  → Sub-section headings, pillar labels

H4 (Inter, SemiBold): 22px / line-height 1.4
  → Card titles, sidebar headings

H5 (Inter, SemiBold): 18px / line-height 1.4
  → Label headings, metadata titles

Body Large (Inter, Regular): 18px / line-height 1.7
  → Long-form research reports, remedy summaries

Body (Inter, Regular): 16px / line-height 1.6
  → Standard body text, comments

Body Small (Inter, Regular): 14px / line-height 1.5
  → Captions, citations, metadata

Micro (Inter, Regular): 12px / line-height 1.4
  → Legal disclaimers, footnotes

UI Label (Inter, Medium): 13px / line-height 1.0
  → Button labels, nav items, form labels

Score Number (Playfair Display, Bold): 72-96px / line-height 1.0
  → The Roots Score™ display number
```

### Typographic Principles

- **Heritage text** (ancestral history, cultural context, personal stories) → Lora. Always. This content deserves the weight of serif.
- **Science text** (clinical studies, mechanisms, dosage, safety) → Inter. Precision, clarity, no ambiguity.
- **Score display** → Playfair Display. This is a moment. Treat it as such.
- Line length maximum: 70 characters for body text. Don't let lines sprawl.
- Minimum body size: 16px (screen), 14px (captions only)

---

## 4. Roots Score™ Visual System

This is the signature data visualization of the platform. It needs to feel like an **achievement**, not a spreadsheet.

### The Score Display — Two Parts

**Part A: The Radar Chart (Pentagon Visualization)**

The five pillars map to five points of a pentagon/radar chart:

```
           📜 Ancestral Depth
                  ▲
                 / \
🌍 Cross-Cultural ◄───► ⚠️ Safety Profile
                 \ /
                  ▼
        🔬 Scientific Validation
                  |
           🏭 Modern Applications
```

*(Pentagon arrangement — rotate so Ancestral Depth is at top, Science at bottom-left, Safety at bottom-right, Cultural at left, Modern at right)*

**Radar Chart Design Spec:**
- **Shape:** Filled polygon overlay on a 5-pointed reference grid
- **Grid:** 5 concentric pentagons at 20/40/60/80/100 values, drawn with `#E0D5C5` (subtle, not distracting)
- **Polygon fill:** Semi-transparent tier color (40% opacity) — e.g., Gold Root = `#D4A017` at 40% opacity
- **Polygon stroke:** Full tier color at 100% opacity, 2px weight
- **Pillar points:** Small circular dots at each pillar vertex (8px diameter, filled with tier color)
- **Pillar labels:** Set in Inter, Medium, 13px, positioned outside the pentagon
- **Pillar icons:** Each pillar icon (16px) shown alongside its label
- **Pillar scores:** Individual pillar scores shown in parentheses: "📜 Ancestral Depth (95)"
- **Size:** Minimum 280px × 280px desktop, 220px × 220px mobile
- **Animation:** On page load, the polygon "fills in" over 800ms with an ease-out curve. This is the reveal moment.

**Scoring Philosophy in Visual:**
- A perfect score (100/100 all pillars) = a symmetrical, full pentagon → visually satisfying
- An imbalanced score (high science, low cultural reach) = an asymmetric, interesting shape → tells a story
- The asymmetry IS informative. Don't hide it. Celebrate it.

---

**Part B: The Score Circle (Primary Score Display)**

Above or beside the radar chart, a large circular score display:

```
     ╭─────────────────╮
     │                 │
     │       88        │  ← Playfair Display Bold, 72px, tier color
     │   ─────────     │
     │  STRONG ROOT    │  ← Inter SemiBold, 12px, uppercase, letter-spacing: 0.15em
     │      🥈         │  ← Tier badge icon, 24px
     │                 │
     ╰─────────────────╯
```

**Score Circle Spec:**
- **Outer ring:** Circular progress indicator (SVG) — arc from 0° to the score percentage of 360°
  - Ring width: 6px
  - Color: Tier color (e.g., `#D4A017` for Gold Root)
  - Track (background ring): `#E0D5C5`
  - Animation: Fills clockwise on page load over 1000ms (ease-out)
- **Inner content:**
  - Score number: Playfair Display Bold, 72px, tier color
  - "ROOTS SCORE" label: Inter Medium, 10px, `#7C6B57`, uppercase, letter-spacing 0.2em
  - Tier name: Inter SemiBold, 14px, `#3D3226`
  - Tier icon/badge: 24px
- **Total diameter:** 200px desktop, 160px mobile
- **Background fill:** Linen (`#FDFAF5`)

---

**Combined Score Display Layout (Desktop):**

```
┌──────────────────────────────────────────────────────┐
│                                                        │
│    ○  88            [RADAR CHART pentagon]             │
│  STRONG ROOT                                           │
│    🥈                                                   │
│                     📜 Ancestral Depth (95)            │
│                     🌍 Cross-Cultural (90)             │
│                     🔬 Scientific (88)                 │
│                     🏭 Modern Use (85)                 │
│                     ⚠️ Safety (80)                     │
│                                                        │
└──────────────────────────────────────────────────────┘
```

Left: Score circle. Right: Radar chart with pillar scores listed beneath.

---

**Score Badge (Compact Version — for cards, lists):**

```
[🥈 88]  Strong Root
```
- Small tier icon + score number in tier color + tier name
- Used in remedy listing cards, search results, user submission history

---

**Visual States:**

- **Pending/Under Research:** Greyed out pentagon with dashed strokes, pulsing animation, label "Research in Progress"
- **Seedling/Low Score:** Don't hide it. Show the chart. Low scores are honest — this is what builds trust.
- **Perfect/Near-Perfect (95+):** Add a subtle gold shimmer/glow effect on the score circle ring. Rare enough to be meaningful.

---

## 5. Badge & Rank System

### Design Philosophy

Think: **National Geographic Society Explorer Badge meets Duolingo's streak system meets a West African chiefs' robe insignia.**

These badges need to feel like they were worth earning. Not clip-art. Not generic game UI. They should feel like something you'd wear with pride.

---

### Contributor Rank System (5 Levels)

Each rank has a profile frame, an icon, and a background "element" that evolves:

| Rank | Title | Icon | Profile Frame | Color | Design Element |
|------|-------|------|--------------|-------|----------------|
| 🌱 L1 | Seedling | Sprouting seed | Simple green circle | `#5A8F5C` | Clean sprout illustration |
| 🌿 L2 | Herbalist | Bundle of herbs | Interlocking leaves | `#2D6A4F` | Botanical wreath |
| 🪴 L3 | Root Keeper | Potted deep-root plant | Root-pattern frame | `#1B4332` | Intricate root network |
| 🌳 L4 | Elder | Ancient tree, full canopy | Gold-bordered frame | `#C9A84C` | Baobab silhouette |
| 🏛️ L5 | Griot | Seated elder with kora | Ornate, animated | `#D4A017` | Full ceremonial frame with animated subtle glow |

**Rank Badge Shape:** Hexagon. Why hexagon?
- References honeycomb → community, collective intelligence
- More visually interesting than circle, less corporate than shield
- Tiles beautifully in grid/wall displays
- Has six sides → can evolve the design per rank without breaking the shape language

**Size Standards:**
- Profile avatar frame: 80px × 80px (the hexagon is the frame)
- Badge standalone display: 60px × 60px (profile page, achievement wall)
- Mini badge (listing context): 24px × 24px
- Feature/hero display (achievement unlock): 200px × 200px with animation

---

### Badge Collection System

**Visual Design Approach:**

Each badge is a hexagonal icon in one of three metallic tiers:

- **Bronze:** `#C4723A` background, white icon, matte finish feel
- **Silver:** `#8FA898` background, white icon, subtle sheen
- **Gold:** `#D4A017` background, white icon, bright rim glow
- **Platinum (special):** `#E8E8E8` background with `#1B4332` icon, iridescent border — ultra rare

**Badge Design Specs:**
- Hexagon outer border: 3px, slightly lighter than fill
- Inner icon: White, clean line illustration, centered, 50% of hex height
- Text below hex: Badge name in Inter SemiBold, 12px
- Locked state: Same shape + position, grayscale with 40% opacity, lock icon overlay

**Specific Badge Illustrations:**

| Badge | Visual Icon | Tier |
|-------|-------------|------|
| 🌱 First Seed | A single sprouting seedling | Bronze |
| 🌿 Five Roots | 5 intertwined root strands | Bronze |
| 🌳 Deep Roots | Ancient tree with deep root system | Silver |
| 🏛️ Knowledge Keeper | A scroll tied with string | Gold |
| 🥇 Gold Standard | Star inside a root wreath | Gold |
| 🔬 Science Champion | Microscope with leaf insert | Silver |
| 🌍 World Healer | Globe with roots growing from it | Gold |
| 👥 Community Builder | Two hands clasped, root pattern | Silver |
| 💬 Discussion Leader | Speech bubble with roots inside | Bronze |
| 🔥 Viral Root | Flame shaped like a root | Gold |
| 📅 Heritage Challenger | Calendar with a leaf on it | Bronze/Silver/Gold per event |

**Badge Wall / Collection Page:**
- Grid of hexagons, 4 per row on desktop
- Earned: Full color
- Locked: Greyscale, lock icon, tooltip with criteria on hover
- Recent unlocks: Subtle animated golden border for 24 hours

---

### Gamification UX: Achievement Unlock Screen

When a user earns a badge or rank upgrade, show a full-screen (or large modal) reveal:

**Unlock Animation Sequence:**
1. Dark overlay fades in (Background: `#0D2818` at 95% opacity)
2. Badge hex drops from top, scales from 0→120%→100% (spring physics, 600ms)
3. Gold particles/sparkles radiate out from badge center (CSS/canvas animation, 1200ms)
4. Badge name appears below in Playfair Display, white, 32px
5. Points awarded slides in from bottom in Inter, gold, "🌱 +150 points"
6. Two buttons: "Share this!" (primary, gold) and "Continue" (ghost, white)

This should feel like opening a rare card pack. Not like a toast notification.

---

## 6. Social Share Cards

### #MyGrandmaKnew Card — The Core Viral Template

This is the most important design deliverable. This card gets shared. This card drives traffic. This card IS the viral loop.

---

**Card Format:** 1080 × 1080 (Instagram square) primary; also generate 1080 × 1920 (Story vertical)

**Card Design Anatomy:**

```
┌────────────────────────────────────────────┐
│                                            │
│  THE ROOTS DATABASE      🌳 [Logo]         │  ← Header bar, Forest Green bg
│                                            │
├────────────────────────────────────────────┤
│                                            │
│  #MyGrandmaKnew                           │  ← Playfair Display, 28px, Gold
│                                            │
│  ┌──────────────────────────────────────┐  │
│  │                                      │  │
│  │    🥈  88                            │  │  ← Large score circle
│  │  STRONG ROOT                         │  │
│  │                                      │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  Turmeric + Black Pepper                  │  ← Lora SemiBold, 24px, dark
│  for Inflammation                         │
│                                            │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░          │  ← Mini radar chart (simplified)
│                                            │
│  "My grandmother used this for every      │  ← Personal quote (Inter Italic)
│   joint pain. Science says she was        │
│   right."  — @[username]                  │
│                                            │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  🌿 Ancestral Depth: 95%                  │
│  🔬 Science: 88%    🌍 Global: 90%        │  ← 3-stat mini summary
│                                            │
│  rootsdatabase.com                        │  ← Subtle URL, Inter 12px
│                                            │
└────────────────────────────────────────────┘
```

**Card Color Options (5 variants auto-generated per score):**

1. **Gold Root variant:** Deep forest green bg (`#1B4332`), gold text, gold score ring
2. **Heritage variant:** Warm parchment bg (`#F0EBE0`), dark green text, colored score ring
3. **Night variant:** Near-black bg (`#0D2818`), cream text, full-glow gold accent
4. **Botanical variant:** Parchment bg + subtle leaf pattern watermark, forest green text
5. **Minimal variant:** White bg, single color accent — cleanest, most shareable

**User gets to choose their variant** before sharing. This increases share rate.

---

**Submission Confirmation Card (You're Remedy #4,827!):**

```
┌────────────────────────────────────────────┐
│  THE ROOTS DATABASE                🌳      │
├────────────────────────────────────────────┤
│                                            │
│  I just submitted my family's remedy!      │  ← Playfair Display, 26px
│                                            │
│       Remedy #4,827                       │  ← Large, Playfair, Gold
│                                            │
│  "[Remedy Name]"                          │  ← Lora Italic, 20px
│  from [Cultural Origin]                   │
│                                            │
│  Research in progress...                  │  ← Inter, animated ellipsis
│  ⏳ Roots Score™ coming soon              │
│                                            │
│  #MyGrandmaKnew  #RootsDatabase           │
│  rootsdatabase.com                        │
│                                            │
└────────────────────────────────────────────┘
```

**Design notes:**
- "Remedy #4,827" should be the most visually prominent element — it makes the user feel like part of something large
- Warm, celebratory — NOT scientific. This card is about belonging.

---

**Heritage Challenge Card:**

```
┌────────────────────────────────────────────┐
│  March Heritage Challenge                  │  ← Forest green banner
│  WOMEN'S WISDOM                           │  ← Playfair Display, Bold
├────────────────────────────────────────────┤
│                                            │
│  I submitted a remedy in honor of         │
│  the women who taught me.                 │
│                                            │
│  [Remedy Name]                            │
│  🥉 74 — Growing Root                    │
│                                            │
│  Challenge Rank: #23 of 847              │  ← Leaderboard position
│                                            │
│  Join me → rootsdatabase.com/challenge    │
│                                            │
└────────────────────────────────────────────┘
```

---

**Score Tier Visual Distinction on Cards:**

Each tier gets a distinct "energy" on the card:
- **Gold Root (90-100):** Shimmer effect on score number; gold particle animation (if video card); "✨ Grandmother Was Right" headline option
- **Strong Root (75-89):** Clean, confident. Silver-green palette.
- **Growing Root (50-74):** Warm bronze. Hopeful framing. "More research coming."
- **Seedling (25-49):** Green, honest. "Interesting findings."
- **Unverified (1-24):** Slate grey. "The research begins."

The language adapts to the tier. Not every card needs to be triumphant. Honesty builds trust.

---

## 7. Landing Page Design

### Hero Section

**Headline (Playfair Display, Bold, 56px):**
> "Was Your Grandmother Right?"

**Sub-headline (Lora, Regular, 24px):**
> "Submit her remedy. We'll tell you what the science says."

**Visual:** Full-width, warm-toned background. NOT a stock photo. Instead:
- Illustrated botanical elements (leaves, roots, stalks) in the brand green palette
- Overlaid: A mosaic of small remedy card thumbnails in the background — showing real scored remedies. The database IS the hero.
- OR: A short looping video (no audio) of hands preparing a traditional remedy — close-up, warm lighting, real hands (not manicured model hands), diverse skin tones

**Primary CTA Button:**
- Label: "Submit Your Family Remedy"
- Style: Full gold (`#C9A84C`) background, `#0D2818` text, Lora SemiBold 18px, border-radius 4px (not pill — pill feels too soft/consumer; slightly rounded rectangle feels earned)
- Size: Large — 56px height min, full text visible
- Hover state: `#E8B84B`, slight lift (box-shadow increase)

**Secondary CTA (Ghost):**
- Label: "Explore the Database →"
- Style: White border, white text, same size

**Below Hero — Credibility Strip:**
```
[ 🌿 4,827 Remedies Submitted ]  [ 🌍 67 Cultures Represented ]  [ 🥇 342 Gold Root Validated ]
```
Animated counters (count up on scroll). Inter Medium, 20px numbers. Lora, 14px labels.

---

### How It Works Section

**Section Heading:** "Ancient Wisdom. Verified."

**3-column layout (desktop), stacked (mobile):**

```
[ ① SUBMIT ]        [ ② RESEARCH ]       [ ③ DISCOVER ]
  📝 icon             🔬 icon               🥇 icon

  "Share your        "AAS researchers      "Get your Roots
  family remedy      validate it           Score™ — and
  in 60 seconds"     against modern        share it with
                     science"              the world"
```

Each column: Icon (botanical-themed, 40px), H3 Lora heading, body copy Inter 16px.
Background: Subtle gradient from parchment (`#F8F4ED`) to linen (`#FDFAF5`).

---

### Featured Remedies Section

**Section Heading:** "This Week's Gold Roots"

**Remedy Cards (horizontal scroll on mobile, 3-col grid on desktop):**

Each card:
```
┌──────────────────────┐
│ [Ingredient image]   │  ← Warm-toned photo, aspect 4:3
│                      │
│ [🥇 92]  Gold Root   │  ← Score badge, tier color
│                      │
│ Turmeric + Pepper    │  ← Lora SemiBold 18px
│ for Inflammation     │  ← Inter 14px, muted
│                      │
│ 🌍 3 Cultures        │  ← Meta info
│ 📜 3,000+ years      │
│                      │
│ [Read Full Report →] │  ← Link-style CTA
└──────────────────────┘
```

Card background: Linen (`#FDFAF5`)
Card border: 1px `#E0D5C5`
Border-radius: 8px
Hover: Slight elevation (box-shadow `0 4px 20px rgba(27,67,50,0.12)`), border becomes `#C9A84C`

---

### #MyGrandmaKnew Viral Section

**Layout:** Dark background (`#1B4332`), breaking the warm cream flow — this section should feel like a heartbeat.

**Heading (Playfair Display, white, 48px):**
> "#MyGrandmaKnew"

**Sub:** "Join 12,000+ people honoring their family's wisdom"

**Visual:** A masonry grid or rolling ticker of actual social share cards from real users. Real community = social proof.

**CTA:** "Was Your Grandmother Right? Find Out →" (Gold button)

---

### The Roots Score™ Explainer Section

**Heading:** "The World's First Traditional Remedy Rating System"

**Visual:** Large, prominent radar chart (animated on scroll) showing a scored remedy — ideally turmeric (relatable, well-known).

**Right side:** The 5 pillars listed with icons and 2-sentence descriptions each.

**Bottom:** "Every remedy is treated with respect. Every culture is honored. Every claim is tested." (Lora Italic, centered, large)

---

### Heritage Challenge CTA Section

**Full-width banner** (alternating monthly):
- Background: Deep botanical green (`#1B4332`)
- Pattern: Subtle repeating leaf/root motif (10% opacity, white)
- Heading: "March Challenge: Women's Wisdom"
- Sub: "Submit a remedy from the women who raised you"
- Timer: Live countdown to challenge end
- CTA: "Join the Challenge" (Gold)

---

### Social Proof / Trust Section

- Press mentions (if any — use "As Seen In" format)
- "What the community says" — 3-4 testimonial cards
- Testimonial cards: Parchment background, Lora italic quote, contributor name + rank badge
- If no press yet: Lead with contributor testimonials. Trust comes from the community, not from media logos.

---

### Footer

- Dark background (`#0D2818`)
- Logo in cream
- Links: Browse Remedies / Submit Remedy / About / Research / Pricing
- Social icons (TikTok, Instagram, X, YouTube)
- Legal: FDA disclaimer (must be visible) / Terms / Privacy
- "© 2026 Ancient African Secrets. The Roots Database by AAS. All rights reserved."
- Subtle root pattern background at very low opacity (5%)

---

## 8. Remedy Detail Page

This is the core content page. It must do many jobs: inform, trust-build, engage, convert, and prompt sharing.

### Page Structure (Desktop — 2 Column)

**Left Column (70%):**
```
[Remedy Name — H1, Lora, 40px]
[Cultural Origin tag]  [Condition tags]  [Score badge compact]

[Featured Image — Full width of column, 16:9, warm-toned]

[Summary paragraph — Body Large, 18px, Inter]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ANCESTRAL HISTORY
[Section heading, H2, Lora]
[Body copy — Mix of Lora for the "heritage" paragraphs, Inter for citations]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CROSS-CULTURAL MAP
[World map, highlighted countries, Forest Green dots + routes]
[Countries listed below: "Found in: Nigeria, India, Jamaica, Brazil"]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCIENTIFIC EVIDENCE
[Section heading, H2, Lora]
[Key findings bulleted, Inter]
[Citations: footnote style, small, Info teal color]
[Upgrade prompt: "See the full research report — 14 studies analyzed →" Roots+ gate]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HOW TO PREPARE IT
[Step-by-step, numbered, Inter]
[Method tags: Tea / Topical / Paste / etc.]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SAFETY INFORMATION
[Yellow-amber left border block for warnings]
[Dosage / Interactions / Contraindications]
[FDA disclaimer — always visible, not hidden]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMMUNITY STORIES
["I use this too!" button + count]
[3 selected user stories — Lora italic quote style]
[Comment section below]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RELATED REMEDIES
[3-4 cards, horizontal row]
```

**Right Column (30%) — Sticky Sidebar:**
```
[ROOTS SCORE DISPLAY]
  ← Large score circle + radar chart
  ← Pillar breakdown list

[SHARE THIS REMEDY]
  ← Pre-generated share card preview
  ← Social share buttons
  ← "Copy Link" button

[SUBMITTED BY]
  ← [Avatar] [Username] [Rank badge]
  ← "Remedy #4,827 — March 14, 2026"

[SUBSCRIBE TO ROOTS+]
  ← If free user / non-member
  ← "Get full research reports"

[INGREDIENT CARD]
  ← Quick-view of the main ingredient
  ← "See all [ingredient] remedies →"
```

---

### Score Section Visual Design (Remedy Detail)

The score section is above the fold in the right sidebar and MUST be immediately impactful:

- Full radar chart (280px × 280px)
- Below: Each pillar as a progress bar with icon, label, and score
```
📜 Ancestral Depth ██████████░░░ 95
🌍 Cross-Cultural  █████████░░░░ 90
🔬 Scientific      ████████░░░░░ 88
🏭 Modern Use      ████████░░░░░ 85
⚠️ Safety          ████████░░░░░ 80
```
- Progress bars: Thin (4px height), filled with pillar-specific or tier color
- Animated on scroll into view

---

### Upgrade Gate (Paywalled Content)

For free users hitting the 10 page/month limit or Roots+ features:

**DO NOT:** Use aggressive modal blocking with dark overlays
**DO:** Use a soft inline gate — content fades to 30% opacity below a visible line, with a card:

```
┌──────────────────────────────────┐
│  🔬 Full Research Report         │
│  14 peer-reviewed studies        │
│  analyzed for this remedy.       │
│                                  │
│  [Unlock with Roots+ — $9.99/mo] │
│  or  [Start Free Trial →]        │
└──────────────────────────────────┘
```

Card: White bg, forest green border, Lora heading, Inter body. NOT a popup. Inline, respectful.

---

## 9. Mobile Considerations

### Core Principle: Mobile-First, Desktop-Enhanced

The majority of users will arrive from TikTok, Instagram, or WhatsApp on mobile. The share card → remedy page flow must be flawless on phone.

---

### Navigation (Mobile)

- **Bottom navigation bar** (not hamburger menu):
  - 🏠 Home | 🔍 Browse | ➕ Submit | 🏆 Badges | 👤 Profile
  - Active state: Gold icon + dot indicator
  - Background: Linen (`#FDFAF5`) with top border `#E0D5C5`
  - Height: 56px (comfortable thumb target)

**Why bottom nav over hamburger?**
- Thumb reach on modern phones — bottom is natural
- Reduces friction for core actions (Submit is the #1 CTA)
- Feels app-like — aspiration for Phase 3 native app

---

### Remedy Detail Page (Mobile)

- Score display: Full-width score circle + score number, centered
- Radar chart: Full-width, scrollable into view
- Pillar breakdown: Accordion (tap to expand each pillar)
- Side-by-side columns collapse to single column, sidebar moves below content
- "Share" button: Fixed floating button at bottom-right (`#C9A84C` gold, 56px circle, share icon)

---

### Submission Form (Mobile)

- **One question per screen** — wizard/stepper pattern
  - Screen 1: "What's the remedy called?"
  - Screen 2: "What is it used for?"
  - Screen 3: "What's in it?"
  - Screen 4: "Where does it come from?"
  - Screen 5: "Tell us more" (optional)
  - Screen 6: "Add a photo or video" (optional)
- Progress bar at top (steps 1-6, fills as user progresses)
- Large, comfortable inputs (min 44px touch targets everywhere)
- Keyboard-aware layout (fields don't hide behind keyboard)
- "60 seconds" promise visible throughout — progress bar reinforces this

---

### Score Reveal (Mobile — Notification Tap)

When user taps push notification "Your remedy scored 88 — Strong Root!":

1. Full-screen animated score reveal (like the achievement unlock — see Section 5)
2. Large score circle animates in from center
3. Radar chart fills in
4. Share button prominently placed: "Share Your Score 🎉"
5. Secondary: "Read Full Report"

This moment = the highest-value conversion moment. Maximize the emotion.

---

### Typography (Mobile)

| Element | Desktop | Mobile |
|---------|---------|--------|
| H1 (Lora) | 48px | 32px |
| H2 (Lora) | 36px | 26px |
| Score Display (Playfair) | 72px | 56px |
| Body | 16px | 16px (do not reduce) |
| Caption | 14px | 14px |
| UI Label | 13px | 14px (increase for thumb comfort) |

---

### Performance (Mobile)

- Target: <3s load on 4G
- Radar chart: SVG-based (not Canvas) for small file size + sharp rendering on all DPIs
- Score circle: Pure CSS animation where possible, SVG stroke-dasharray for the arc
- Images: WebP format, lazy-loaded below fold, blur-up placeholder while loading
- Share cards: Generated server-side (OG images via @vercel/og or similar) — fast, no client-side rendering needed

---

## 10. Cultural Sensitivity

### The Core Design Principle

**Represent cultures through their CONTRIBUTIONS, not their aesthetics.**

The temptation in a platform like this is to decorate with "African" patterns, "Asian" calligraphy, or "Latin" colors to signal cultural inclusivity. This is design colonialism. It reduces living cultures to visual decoration.

Instead: **Let the content carry the culture. Let the design carry the science.**

---

### What NOT to Do

❌ **Don't use Adinkra symbols as UI icons** — they are Akan cultural symbols with specific meanings, not decoration
❌ **Don't use kente cloth patterns as backgrounds** — this reduces a royal textile tradition to wallpaper
❌ **Don't use "tribal" as a design descriptor** — internally or externally
❌ **Don't use caricature or stylized illustrations of people from specific cultures** — use real photography
❌ **Don't map a single "African" aesthetic to the whole continent** — 54 countries, 1,000+ languages, infinite diversity
❌ **Don't use "exotic" as a quality descriptor** — for remedies, ingredients, or cultures
❌ **Don't assume a monochrome skin-tone for avatars** — default avatar must be explicitly non-racial (use initials, abstract shapes, or silhouettes)

---

### What TO Do

✅ **Culture pages:** Each culture/region page designed by the data it contains. West African remedies page looks different from Caribbean remedies page not because of decoration but because the CONTENT is different.

✅ **Photography:** Invest in photography that shows real people, real kitchens, real hands. Stock photography of "exotic" remedies on pristine white backgrounds = wrong direction. The messiness of a real kitchen, a grandmother's worn cutting board, dried herbs in a paper bag — that's the authentic visual.

✅ **Maps:** Use a clean, modern world map style that highlights countries equally — no region is visually "lesser" due to map projection choices. Consider using an Equal Earth projection (all landmasses proportional).

✅ **Language:** Support multilingual submissions. Show original-language remedy names alongside English translations. Honor the source language — don't just anglicize everything.

✅ **Botanical illustrations:** Commission illustrated plants in a consistent scientific-illustration style (pen and ink or watercolor-realist). These are culturally neutral and add warmth and depth.

✅ **Iconography:** Custom icon set that is abstract and botanical, not culturally coded. Roots, leaves, seeds, molecules, charts — universal without cultural appropriation.

✅ **Contributor avatars:** Let users upload their own photos. Default: Initials on a solid color background (randomized from a warm palette). No generated faces. No emoji skin tones as defaults.

✅ **Respectful terminology:** "Traditional remedy from the Yoruba people" — not "African tribal remedy." Specificity is respect.

---

### Cultural Consultation Recommendation

Before launch, brief consultation with:
1. A cultural competency reviewer with expertise in at least 3 of the primary represented cultures
2. A traditional knowledge/intellectual property attorney (Nagoya Protocol)
3. A diverse group of beta testers representing the core audience (Section 4 target audience)

**This is not optional.** This platform's entire premise is cultural respect. The design must hold up to scrutiny from the communities it represents.

---

### The Default State — Who Is The Platform For?

The visual design should communicate: **This platform was built for Black and Brown women who grew up with their grandmother's remedies** — without making any other user feel unwelcome.

This means:
- Photography skews toward the core audience (African American, African, Caribbean, Latin American, South Asian) without being exclusive
- Copy uses language that assumes lived experience ("You grew up watching her make this...")
- The design celebrates rather than "educates from above"
- The heritage warmth of the color palette (`#F8F4ED` parchment, earthy greens) is culturally resonant without being culturally coded

If the design could plausibly be from a European herbal wellness brand, it's wrong. If it's clearly built for and by people who believe ancestral wisdom deserves scientific verification — it's right.

---

## 11. Implementation Notes

### Design System Stack

**Recommended tools for development:**
- Tailwind CSS: Implement the color palette as custom CSS variables + Tailwind config
- shadcn/ui: Base component library (customize to match brand)
- Framer Motion: Score reveal animations, card transitions, radar chart fill
- Recharts or D3.js: Radar chart (custom SVG for score circles)
- next/font: Self-host Lora + Inter + Playfair Display via Google Fonts API

**CSS Variables (implementation-ready):**
```css
:root {
  --color-forest-roots:    #1B4332;
  --color-ancient-bark:    #0D2818;
  --color-canopy:          #2D6A4F;
  --color-ancestral-gold:  #C9A84C;
  --color-harvest-gold:    #E8B84B;
  --color-earth-brown:     #7C5C3A;
  --color-parchment:       #F8F4ED;
  --color-linen:           #FDFAF5;
  --color-old-paper:       #F0EBE0;

  --color-tier-gold:       #D4A017;
  --color-tier-silver:     #8FA898;
  --color-tier-bronze:     #C4723A;
  --color-tier-seedling:   #5A8F5C;
  --color-tier-unverified: #8A9BAE;

  --font-heading: 'Lora', Georgia, serif;
  --font-body:    'Inter', -apple-system, sans-serif;
  --font-display: 'Playfair Display', Georgia, serif;
}
```

### Priority Build Order

For MVP design implementation, build these first (in order):
1. Design tokens / CSS variables (30 min)
2. Typography scale (1 hour)
3. Remedy card component (2 hours — used everywhere)
4. Score badge compact (1 hour)
5. Radar chart component (3 hours)
6. Score circle animation (2 hours)
7. Landing page hero (3 hours)
8. Remedy detail page layout (4 hours)
9. Social share card template (2 hours)
10. Achievement unlock modal (2 hours)

Total estimated design-to-code time (1 dev): ~3-4 days for full MVP visual system

### Accessibility Requirements

- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text (WCAG AA)
- The parchment background (`#F8F4ED`) + forest green text (`#1B4332`): ✅ 8.9:1 ratio (AAA)
- The gold accent (`#C9A84C`) on white: ⚠️ 2.8:1 — do NOT use gold text on white for body text; use it for decorative elements and large headings only
- The gold on forest green (`#C9A84C` on `#1B4332`): ✅ 4.7:1 (AA)
- All interactive elements: Focus states visible (gold ring outline)
- Radar chart: Always provide pillar score text alternatives (the list below the chart)
- Score circle: Always show the numeric score (not just the ring)
- Animation: Respect `prefers-reduced-motion` — disable score reveal animations for users who have this set

---

## Final Thoughts from Harley 🃏

This platform has the bones to be beautiful. Not "wellness brand pretty" — genuinely, meaningfully beautiful. The kind of beautiful that comes from purpose.

The Roots Score™ is the product. Everything else serves it. Make the score display the most lovingly designed thing on the entire platform, and the rest will follow.

The biggest design risk: **Drifting toward "generic wellness green."** Every competitor in this space uses sage green and clean sans-serif and stock photos of white women in yoga poses. The moment this platform looks like that, it's lost its soul.

The design should feel like PeterJohn's heritage — South African in its warmth, global in its ambition, and grounded in the conviction that what grandma knew matters.

*"The stone the builders rejected has become the cornerstone."* — Psalm 118:22

That's what this platform is. Traditional medicine was rejected by the scientific establishment. The Roots Database makes it the cornerstone.

Build it worthy of that.

---

*Design Review Complete — Harley 🃏*
*Ready for Pixel 🎨 (visual asset generation) and Lucius 🔧 (implementation)*
