# THE ROOTS DATABASE — Product Requirements Document

**Product:** The Roots Database by Ancient African Secrets
**Version:** 1.0 (MVP)
**Author:** Alfred 🦇 | Ancient African Secrets Team
**Date:** March 20, 2026
**Status:** DRAFT — Pending Design Review + Audit

---

## 📋 Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Vision & Mission](#2-vision--mission)
3. [Problem Statement](#3-problem-statement)
4. [Target Audience](#4-target-audience)
5. [Core Concept](#5-core-concept)
6. [The Roots Score™](#6-the-roots-score)
7. [Feature Requirements](#7-feature-requirements)
8. [Gamification System](#8-gamification-system) *(rebalanced — quality over quantity)*
9. [Monetization Strategy](#9-monetization-strategy)
10. [User Flows](#10-user-flows)
10A. [Internationalization & Multilingual Support](#10a-internationalization--multilingual-support) ⭐ NEW
11. [Technical Architecture](#11-technical-architecture)
12. [Content Strategy](#12-content-strategy)
13. [Launch Strategy](#13-launch-strategy)
14. [Competitive Analysis](#14-competitive-analysis)
15. [Legal & Compliance](#15-legal--compliance)
15A. [Security Plan, Bot Prevention & Abuse Safeguards](#15a-security-plan-bot-prevention--abuse-safeguards) ⭐ NEW
16. [Success Metrics](#16-success-metrics)
17. [Design Guidelines](#17-design-guidelines)
18. [Appendix](#18-appendix)

---

## 1. Executive Summary

The Roots Database is a community-sourced, science-validated botanical and traditional remedy platform built by Ancient African Secrets (AAS). It allows people worldwide to submit traditional treatments, remedies, and cures passed down through generations. AAS then performs deep research and scientific validation on each submission, assigning a branded **Roots Score™** (1-100) that rates effectiveness across five pillars.

**The tagline:** *"Ancient wisdom, verified. Community-sourced, science-backed."*

**The viral hook:** *#MyGrandmaKnew — "Was your grandmother right? Submit her remedy and science will tell you."*

This platform creates a new category: the world's first community-driven traditional medicine database with scientific validation, cultural heritage preservation, and gamified engagement.

---

## 2. Vision & Mission

### Vision
To become the world's largest and most trusted repository of traditional healing knowledge — preserving ancestral wisdom while validating it with modern science.

### Mission
To honor the healers, grandmothers, and traditional practitioners whose knowledge has sustained communities for millennia — by documenting, researching, and sharing their remedies with the world.

### Brand Promise
Every remedy submitted is treated with respect. Every culture represented is honored. Every claim is tested against the best available science. No judgment — just truth.

---

## 3. Problem Statement

### The Knowledge Gap
- **80% of the world's population** relies on traditional medicine (WHO estimate)
- This knowledge is **oral tradition** — passed through generations but rarely documented
- As elders pass, **remedies are being lost forever**
- Modern medicine dismisses most traditional remedies without investigation
- When science DOES validate a traditional remedy (turmeric, ginger, honey), it's treated as a "discovery" rather than a confirmation

### The Trust Gap
- People want to use natural remedies but don't know what's safe or effective
- Existing databases (Examine, WebMD, NIH) are clinical, cold, and culturally disconnected
- No platform bridges the gap between "grandma said" and "science says"
- The wellness space is full of unverified claims — people need a trusted authority

### The Preservation Gap
- Indigenous and traditional knowledge is being lost at an alarming rate
- No consumer-facing platform is actively collecting and preserving this knowledge
- Communities have no incentive to share (historically, their knowledge has been exploited)

---

## 4. Target Audience

### Primary: The Heritage Seeker (35-55, Female-skewed)
- Grew up with traditional remedies in their household
- Now raising their own children and wondering "should I use grandma's remedy?"
- Health-conscious, interested in natural alternatives
- Active on TikTok, Instagram, Facebook
- Likely African American, African, Caribbean, Latin American, South/Southeast Asian
- **Motivation:** Validation of cultural knowledge + preserving heritage

### Secondary: The Wellness Explorer (25-40, Mixed gender)
- Interested in holistic health, alternative medicine, biohacking
- Already uses supplements, herbs, essential oils
- Follows wellness influencers
- Active on TikTok, YouTube, Instagram
- **Motivation:** Discovering new, science-backed natural remedies

### Tertiary: The Practitioner (30-60, Professional)
- Naturopaths, herbalists, traditional healers, wellness coaches
- Needs a reliable reference database for client recommendations
- Willing to pay for premium access
- **Motivation:** Professional credibility + client resources

### Tertiary: The Researcher (25-50, Academic)
- Ethnobotanists, pharmacologists, anthropologists
- Interested in documenting and studying traditional medicine
- Could become content contributors or validators
- **Motivation:** Access to crowdsourced data + academic collaboration

---

## 5. Core Concept

### How It Works

```
┌─────────────┐    ┌──────────────┐    ┌──────────────┐    ┌─────────────┐
│  COMMUNITY   │───▶│  AAS RESEARCH │───▶│  ROOTS SCORE  │───▶│   CONTENT    │
│  Submits     │    │  Team Deep    │    │  Assigned     │    │   Created    │
│  Remedy      │    │  Dives        │    │  (1-100)      │    │   & Shared   │
└─────────────┘    └──────────────┘    └──────────────┘    └─────────────┘
       │                                                           │
       │           ┌──────────────┐                                │
       └──────────▶│  GAMIFICATION │◀───────────────────────────────┘
                   │  Points,      │
                   │  Badges,      │
                   │  Leaderboard  │
                   └──────────────┘
```

### The Submission → Research → Score Pipeline

1. **User submits** a remedy (simple form, 60 seconds)
2. **Submission enters queue** — visible to community as "Under Review"
3. **AAS Research Team** (AI-assisted + human oversight) investigates:
   - Scientific literature (PubMed, clinical trials, systematic reviews)
   - Cross-cultural usage (same plant/practice in other traditions?)
   - Modern industry applications (pharma, cosmetics, food science)
   - Safety profile (known interactions, contraindications)
   - Historical depth (how far back does usage go?)
4. **Roots Score™ assigned** (1-100 across 5 pillars)
5. **Remedy page published** with full research report
6. **Content created** — TikTok, blog post, social cards
7. **Submitter notified** — shareable score card for social media

### What Makes a "Remedy"
- **Botanical/herbal preparations** (teas, tinctures, poultices, pastes)
- **Food-as-medicine practices** (bone broth for immunity, bitter leaf for digestion)
- **Traditional practices** (oil pulling, dry brushing, cold exposure)
- **Combinations** (honey + ginger + lemon for cold/flu)
- **Cultural wellness rituals** (specific to a region or people group)

### What's NOT a Remedy (Excluded)
- Pharmaceutical drugs or supplements
- Practices requiring medical supervision
- Anything involving endangered species
- Spiritual/religious-only practices with no physical health component
- Dangerous or toxic preparations

---

## 6. The Roots Score™

### Scoring Framework

Each remedy receives a composite score (1-100) based on five pillars:

| Pillar | Weight | Icon | Description |
|--------|--------|------|-------------|
| 📜 **Ancestral Depth** | 20% | Scroll | How long has this been used? Documented history, generational knowledge |
| 🌍 **Cross-Cultural Reach** | 20% | Globe | Independent usage across multiple cultures (convergent wisdom) |
| 🔬 **Scientific Validation** | 25% | Microscope | Peer-reviewed studies, clinical trials, known biochemical mechanisms |
| 🏭 **Modern Applications** | 15% | Factory | Current use in pharmaceutical, cosmetic, or food industries |
| ⚠️ **Safety Profile** | 20% | Shield | Known interactions, side effects, contraindications, dosage clarity |

### Score Tiers & Badges

| Score Range | Tier | Badge | Meaning |
|-------------|------|-------|---------|
| 90-100 | 🥇 **Gold Root** | Gold tree icon | "Grandma was RIGHT. Science confirms it." |
| 75-89 | 🥈 **Strong Root** | Silver tree icon | "Solid traditional AND scientific backing." |
| 50-74 | 🥉 **Growing Root** | Bronze tree icon | "Promising — more research needed." |
| 25-49 | 🌱 **Seedling** | Green sprout | "Interesting but limited evidence." |
| 1-24 | ❓ **Unverified** | Question mark | "Not enough data to evaluate." |

### Example Scored Remedy

**Turmeric + Black Pepper for Inflammation**
- 📜 Ancestral Depth: 95/100 (3,000+ years in Ayurveda)
- 🌍 Cross-Cultural: 90/100 (India, Indonesia, West Africa, Caribbean)
- 🔬 Scientific: 88/100 (1,000+ studies, curcumin + piperine mechanism proven)
- 🏭 Modern Use: 85/100 (supplement industry, pharma research, food coloring)
- ⚠️ Safety: 80/100 (generally safe, blood thinner interaction noted)
- **Overall Roots Score: 88 — 🥈 Strong Root**

---

## 7. Feature Requirements

### 7.1 MVP (Phase 1) — Launch Features

#### 7.1.1 Submission System
- **Simple form** (completable in 60 seconds)
  - Remedy name (free text)
  - What is it for? (condition/symptom — dropdown + free text)
  - Key ingredient(s) (searchable plant/ingredient database)
  - How is it prepared? (method — dropdown: tea, paste, eaten raw, tincture, topical, other)
  - Preparation details (free text)
  - Cultural origin (country/region selector + free text)
  - Source of knowledge (family, community elder, practitioner, book, other)
  - Optional: photo upload (of ingredient, preparation, or related)
  - Optional: video upload (preparation demonstration, 60 seconds max)
  - Optional: personal story/testimony (500 chars max)
- **Account required** (email, Google, or Apple sign-in)
- **Duplicate detection** — flag similar submissions, merge when appropriate
- **Submission confirmation** page with:
  - Submission number ("You're remedy #4,827!")
  - Estimated research timeline
  - Social share buttons
  - First badge earned

#### 7.1.2 Database & Browse
- **Searchable database** of all scored remedies
  - Search by: remedy name, condition, ingredient, culture, Roots Score
  - Filter by: score tier, cultural origin, condition category, ingredient type
  - Sort by: score (high/low), newest, most viewed, most discussed
- **Remedy detail page** includes:
  - Roots Score™ with pillar breakdown (visual radar chart)
  - Summary (plain language, 200 words)
  - Ancestral history (cultural context, how long used, by whom)
  - Scientific evidence summary (key studies cited)
  - Cross-cultural map (world map showing where this remedy is used)
  - Preparation guide (how to make/use it)
  - Safety information (interactions, warnings, dosage)
  - "Stories" section (user testimonials, optional)
  - Related remedies
  - Original submitter credit (if they opted in)
- **Condition pages** — browse by health condition
  - e.g., "Remedies for Inflammation" — shows all scored remedies
- **Culture pages** — browse by cultural origin
  - e.g., "West African Remedies" — shows all from that region
- **Ingredient pages** — deep dive on specific plants/ingredients
  - e.g., "Moringa" — all remedies using moringa, plus ingredient profile

#### 7.1.3 User Profiles
- Display name + avatar
- Cultural background (optional)
- Submissions count + quality stats
- Badges earned + current rank
- Public submission history
- "Remedy Collection" (saved/bookmarked remedies)
- Shareable profile link

#### 7.1.4 Community Features (MVP)
- **Comments** on remedy pages (moderated)
- **"I use this too!"** button (community validation metric)
- **Share buttons** (TikTok, Instagram, X, Facebook, WhatsApp, copy link)
- **Report/flag** system for harmful or inaccurate content

#### 7.1.5 Content & SEO
- Each scored remedy auto-generates a blog-style article
- SEO-optimized pages for every condition, ingredient, and culture
- Structured data (Schema.org) for rich search results
- Sitemap auto-generation

### 7.2 Phase 2 — Growth Features

#### 7.2.1 Enhanced Gamification
- Full leaderboard system (global, regional, monthly)
- Heritage Challenges (monthly themed submission campaigns)
- Team/Family submissions ("The Okonkwo Family — 12 remedies from Igbo tradition")
- Achievement system (see Section 8)
- Points → rewards store (AAS products, premium access, merch)

#### 7.2.2 Social Features
- Follow other contributors
- Activity feed
- Direct messaging
- Discussion forums by topic/culture
- "Remedy of the Week" featured spotlight

#### 7.2.3 Premium Features
- Full research reports (detailed science breakdowns)
- Personal Remedy Finder (symptom → matched remedies)
- Saved collections + notes
- Ad-free experience
- Early access to new scores

#### 7.2.4 Practitioner Tools
- Professional profiles with credentials
- Client-shareable remedy reports
- Bulk export
- API access (see Phase 3)

### 7.3 Phase 3 — Scale Features

#### 7.3.1 Mobile App (iOS + Android)
- Native submission experience with camera integration
- Push notifications for score releases
- Offline browsing of saved remedies
- AR plant identification (stretch goal)

#### 7.3.2 API & Enterprise
- RESTful API for database access
- White-label embedding for wellness brands
- Bulk data licensing for researchers
- Integration with practitioner management tools

#### 7.3.3 Marketplace
- AAS products linked to Gold Root remedies
- "Community-Discovered" product line
- Revenue share with original submitters (1-3%)
- Partner product recommendations

---

## 8. Gamification System

### 8.1 Points Economy — Quality Over Quantity

**Design Principle:** The system rewards *meaningful contributions* over volume. Submitting 100 junk remedies earns far less than submitting 5 that score well. Every incentive steers toward quality, cultural depth, and community value.

**Submission Points (Quality-Weighted)**

| Action | Points | Notes |
|--------|--------|-------|
| Create account | 50 | Welcome bonus |
| Submit a remedy (base) | 50 | Reduced from 100 — quality earns the rest |
| Submission includes photo evidence | 25 | Rich media bonus |
| Submission includes video | 50 | Preparation demo — highest value media |
| Submission includes personal story | 25 | Heritage narrative bonus |
| Submission includes source citation | 30 | Book, elder name, or documented lineage |
| **Quality tier bonuses (stacked on base 50):** | | |
| Remedy scores 50-74 (Growing Root) | +100 | Promising contribution |
| Remedy scores 75-89 (Strong Root) | +300 | Substantial contribution |
| Remedy scores 90+ (Gold Root) | **+1,000** | Excellence — "Grandma was RIGHT" |
| Remedy confirmed as *new to database* (no prior entry) | +200 | Novel discovery bonus |
| Remedy shows convergent wisdom (3+ cultures independently) | +150 | Cross-cultural validation bonus |

**Community & Engagement Points**

| Action | Points | Notes |
|--------|--------|-------|
| "I use this too!" on another remedy | 5 | Community validation (reduced — low effort) |
| Leave a helpful comment (upvoted 5+ times) | 25 | Quality discussion rewarded |
| Comment marked "Most Helpful" by remedy author | 50 | Peer-recognized expertise |
| Refer a friend who submits AND gets scored | 150 | Viral mechanic — both must complete |
| Complete Heritage Challenge | 300 | Monthly campaign |
| Translation correction (verified) | 50 | Multilingual contribution |
| Daily login streak (7 days) | 50 | Retention (reduced — login ≠ value) |

**Anti-Abuse Safeguards**

| Rule | Implementation |
|------|---------------|
| **Submission rate limit** | Max 3 submissions per day per user (prevents spam) |
| **Quality floor** | After 5 submissions, if avg score < 25 (Unverified), submissions require manual approval |
| **Junk penalty** | Submissions rejected as spam/duplicate: -25 pts + flag on account |
| **Repeat offender** | 3 rejected submissions in 30 days → temporary submission cooldown (7 days) |
| **Point decay on inactivity** | No decay — earned points stay. But leaderboard rankings use 90-day rolling activity |
| **Sybil prevention** | Referral points only awarded after referee's first remedy is *scored* (not just submitted) |

**Quality Score Multiplier**

Users build a personal **Contributor Quality Score (CQS)** based on their submission history:
- CQS = average Roots Score of all their scored submissions
- Users with CQS > 70 earn a **1.5x multiplier** on all point actions
- Users with CQS > 85 earn a **2x multiplier**
- Displayed on profile as "Trusted Contributor" badge at CQS > 70

This means: a consistently excellent contributor earns 2x the points of someone submitting low-quality remedies. Quality compounds.

### 8.2 Contributor Ranks (Rebalanced)

| Rank | Points Required | Title | Perks | Quality Gate |
|------|----------------|-------|-------|-------------|
| 🌱 Level 1 | 0 | **Seedling** | Basic profile | None |
| 🌿 Level 2 | 500 | **Herbalist** | Custom avatar frame, submit up to 5/day | None |
| 🪴 Level 3 | 2,000 | **Root Keeper** | Priority research queue, avatar border | CQS ≥ 40 |
| 🌳 Level 4 | 7,000 | **Elder** | Moderator privileges, free Premium, profile highlight | CQS ≥ 55 |
| 🏛️ Level 5 | 20,000 | **Griot** | Advisory Council, annual retreat invite, revenue share, verified badge | CQS ≥ 70 + at least 2 Gold Roots |

**Key change:** Higher ranks now require BOTH points AND a minimum quality score. You can't grind to Griot with volume — you need proven, validated contributions. This protects the integrity of the rank system and ensures Elders/Griots are genuinely knowledgeable contributors.

### 8.3 Badges (Collection System — Quality-Focused)

**Submission Badges:**
- 🌱 First Seed — First submission
- 🌿 Five Roots — 5 submissions *that have been scored*
- 🌳 Deep Roots — 25 scored submissions
- 🏛️ Knowledge Keeper — 100 scored submissions

**Quality Badges (Primary — most prominent on profile):**
- 🥇 Gold Standard — First Gold Root submission (90+)
- 🥇🥇 Double Gold — 3 Gold Root submissions
- 🥇🥇🥇 Triple Crown — 5 Gold Root submissions (legendary)
- 🔬 Science Champion — 5 submissions scoring 80+ on Scientific Validation pillar
- 🌍 World Healer — Submissions from 5+ cultural origins, all scoring 50+
- 📜 Heritage Keeper — 3 submissions scoring 90+ on Ancestral Depth pillar
- 🔗 Convergent Discoverer — Submit a remedy independently verified across 3+ cultures
- ⭐ Trusted Contributor — Maintain CQS > 70 for 90+ days

**Social Badges:**
- 👥 Community Builder — 10 referrals who submit AND get scored
- 💬 Discussion Leader — 20 comments marked "Most Helpful"
- 🔥 Viral Root — Submission shared 1,000+ times
- 🌐 Bridge Builder — 50 verified translation corrections

**Challenge Badges:**
- Monthly Heritage Challenge completion badges
- 🏆 Challenge Champion — Win a Heritage Challenge (top submitter)
- Annual "Root of the Year" vote participant
- Special event badges (e.g., World Traditional Medicine Day)

### 8.4 Heritage Challenges (Monthly Themes)

| Month | Theme | Example |
|-------|-------|---------|
| January | New Year, New Remedies | "Share a remedy for fresh starts & detox" |
| February | Heart & Love | "Remedies for heart health and emotional wellness" |
| March | Women's Wisdom | "Remedies passed down by the women in your family" |
| April | Spring Renewal | "Skin, hair, and beauty remedies" |
| May | Gut Health | "Digestive and fermented remedies" |
| June | Summer Wellness | "Sun, heat, and outdoor remedies" |
| July | Pain & Inflammation | "Natural pain management" |
| August | Children's Health | "Remedies your parents used on you" |
| September | Mental Wellness | "Remedies for stress, sleep, and calm" |
| October | Immunity | "Cold & flu season preparations" |
| November | Gratitude & Elders | "Interview an elder, submit their remedy" |
| December | Celebration | "Best submissions of the year awards" |

---

## 9. Monetization Strategy

### 9.1 Pricing Tiers

#### Free Tier (Growth Engine)
- Browse database (10 full remedy pages/month)
- Submit unlimited remedies
- See Roots Scores (summary only)
- Basic profile + badges
- Community comments
- Ad-supported

#### Roots+ ($9.99/month or $79/year)
- **Unlimited** database access
- Full research reports with citations
- Personal Remedy Finder (symptom matching)
- Save & organize remedy collections
- Priority submission research queue
- Ad-free experience
- Monthly "Deep Root" report (exclusive research)

#### Founding Member ($29/month or $249/year)
- Everything in Roots+
- Early access to new research (48hr head start)
- Monthly live "Lab Notes" session with AAS team
- Vote on which remedies get researched next
- 10% discount on all AAS products
- Name on the "Founders Wall"
- Exclusive Founding Member badge
- Direct chat access to AAS researchers (limited)

#### Enterprise / Practitioner ($99/month)
- Everything in Founding Member
- API access
- Client-shareable remedy reports (white-labeled)
- Bulk export capabilities
- Custom branding on shared materials
- Priority support
- CPE/CE credit opportunities (future)

### 9.2 Additional Revenue Streams

| Stream | Description | Timeline |
|--------|-------------|----------|
| **Subscriptions** | Core recurring revenue | Phase 1 |
| **AAS Products** | Gold Root remedies → AAS product line | Phase 2 |
| **Affiliate** | Recommended ingredient sources (iHerb, etc.) | Phase 1 |
| **Sponsorships** | Wellness brands sponsor Heritage Challenges | Phase 2 |
| **Data Licensing** | Anonymized data for researchers/brands | Phase 3 |
| **App Premium** | In-app purchases, AR features | Phase 3 |
| **Events** | Annual "Roots Summit" conference | Phase 3 |
| **Book/Guide** | "Top 100 Gold Root Remedies" annual book | Phase 2 |

### 9.3 Revenue Projections (Conservative)

| Milestone | Timeline | Monthly Revenue |
|-----------|----------|----------------|
| 500 paid members | Month 6 | $5,000 |
| 2,000 paid members | Month 12 | $20,000 |
| 5,000 paid + products | Month 18 | $75,000 |
| 15,000 paid + products + enterprise | Month 24 | $200,000+ |

---

## 10. User Flows

### 10.1 New User → First Submission

```
Landing Page → "What did your grandmother swear by?"
    ↓
Sign Up (email/Google/Apple) — 15 seconds
    ↓
Welcome Screen — "You're now a Seedling 🌱 — Submit your first remedy!"
    ↓
Submission Form (60 seconds)
    ↓
Confirmation — "You're Remedy #4,827! 🎉"
    ├── Share to social (pre-made card)
    ├── Earn 100 points + "First Seed" badge
    └── "We'll notify you when your Roots Score is ready"
    ↓
Email/Push: "Your remedy scored 78 — Strong Root! 🥈"
    ├── View full research report
    ├── Share score card to social
    └── "Submit another remedy?"
```

### 10.2 Returning User → Browse & Discover

```
Homepage → Trending Remedies / New Scores / Heritage Challenge
    ↓
Browse by: Condition | Culture | Ingredient | Score
    ↓
Remedy Detail Page
    ├── Read research report
    ├── "I use this too!" (click)
    ├── Comment / discuss
    ├── Save to collection
    └── Share to social
    ↓
Related Remedies → Continue browsing
    ↓
Paywall (after 10 free pages/month) → Upgrade to Roots+
```

### 10.3 Viral Loop — #MyGrandmaKnew

```
User sees TikTok: "My grandma's turmeric paste scored 88! #MyGrandmaKnew"
    ↓
Clicks link in bio → Landing page
    ↓
"Was YOUR grandmother right? Find out."
    ↓
Submits their family remedy
    ↓
Gets score → Shares THEIR score card
    ↓
THEIR followers see it → Repeat cycle
```

### 10.4 Heritage Challenge Flow

```
Monthly Challenge Announced (email + push + social)
    ↓
"March Challenge: Women's Wisdom — Share remedies from the women in your family"
    ↓
Submit remedy tagged with #WomensWisdom
    ↓
Challenge Leaderboard updated in real-time
    ↓
End of month: Top 10 highlighted, prizes awarded
    ├── 1st place: $100 AAS store credit + Gold Badge
    ├── 2nd-5th: $50 credit + Silver Badge
    └── All participants: Challenge completion badge
```

---

## 10A. Internationalization & Multilingual Support

### 10A.1 Why Multilingual Is Non-Negotiable

A platform claiming to honor global traditional knowledge cannot launch as English-only. Traditional remedies are described in native languages — ingredient names, preparation methods, and cultural context lose meaning in translation. Multilingual support is a credibility requirement, not a nice-to-have.

### 10A.2 Supported Languages

**Tier 1 — MVP Launch (Full UI + Content Translation)**

| Language | Code | Rationale |
|----------|------|-----------|
| 🇬🇧 English | `en` | Primary launch language |
| 🇪🇸 Spanish | `es` | 580M speakers, massive Latin American traditional medicine |
| 🇫🇷 French | `fr` | 321M speakers, West/Central Africa, Caribbean, Maghreb |
| 🇵🇹 Portuguese | `pt` | 264M speakers, Brazil + Lusophone Africa (Mozambique, Angola, Guinea-Bissau) |
| 🇰🇪 Swahili | `sw` | 200M+ speakers, East Africa — critical for credibility with African communities |
| 🇿🇦 Afrikaans | `af` | PJ's heritage language, Southern African market |

**Tier 2 — Phase 2 Launch (3-6 months post-MVP)**

| Language | Code | Rationale |
|----------|------|-----------|
| 🇨🇳 Mandarin Chinese | `zh` | 1.1B speakers, 3,000+ year Traditional Chinese Medicine (TCM) heritage |
| 🇯🇵 Japanese | `ja` | 125M speakers, Kampo medicine tradition |
| 🇰🇷 Korean | `ko` | 80M speakers, rapidly growing K-wellness global market |
| 🇪🇬 Masri (Egyptian Arabic) | `ar-EG` | Gateway to Arabic-speaking world, Prophetic/Unani medicine traditions |
| 🇮🇳 Hindi | `hi` | 602M speakers, Ayurveda is one of the world's oldest medical systems |
| 🇮🇹 Italian | `it` | 67M speakers, Mediterranean herbal tradition |
| 🇩🇪 German | `de` | 100M speakers, German Commission E is the gold standard for herbal monographs |
| 🇳🇱 Dutch | `nl` | 25M speakers, historical botanical research (Dutch East Indies, South Africa) |

**Tier 3 — Phase 3 (12+ months, based on community demand)**

| Language | Code | Rationale |
|----------|------|-----------|
| 🇹🇭 Thai | `th` | Rich traditional Thai medicine (TTM), major wellness tourism market |
| 🇮🇩 Bahasa Indonesia | `id` | 275M speakers, Jamu herbal medicine tradition (1,000+ years) |
| 🇻🇳 Vietnamese | `vi` | 85M speakers, Thuốc Nam (Southern medicine) tradition |
| 🇹🇷 Turkish | `tr` | 85M speakers, Ottoman/Unani herbal heritage |
| 🇷🇺 Russian | `ru` | 255M speakers, extensive Soviet-era ethnobotany research |
| 🇵🇭 Filipino/Tagalog | `tl` | 110M speakers, hilot and herbal tradition |
| 🇪🇹 Amharic | `am` | 57M speakers, Ethiopian traditional medicine (one of Africa's oldest) |
| 🇳🇬 Yoruba | `yo` | 47M speakers, rich Yoruba herbal pharmacopeia |
| 🇳🇬 Hausa | `ha` | 77M speakers, major West African traditional medicine system |
| 🇲🇱 Bambara | `bm` | 14M speakers, Mande healing traditions |

### 10A.3 Translation Architecture

**Approach: AI-First + Community-Validated**

```
Content Created (English)
    ↓
[AI Translation] — GPT-4 / DeepL for initial translation
    ↓
[Community Review] — Native speakers flag/correct translations
    ├── Earn 50 pts per verified translation correction
    ├── "Translation Champion" badge for 100+ corrections
    └── Cultural notes added (local ingredient names, regional context)
    ↓
[Published] — Content goes live in target language
```

**Key technical decisions:**
- **i18n framework:** `next-intl` (Next.js native, supports SSR, SEO-friendly per-locale URLs)
- **URL structure:** `rootsdatabase.com/es/remedios/curcuma` (subdirectory, not subdomain — better for SEO)
- **Database:** All remedy names, descriptions, and ingredient names stored with locale variants
- **Ingredient aliases:** Multi-language alias table (e.g., "Turmeric" = "Cúrcuma" [ES] = "Curcuma" [FR/PT] = "Manjano" [SW] = "Borrie" [AF] = "姜黄" [ZH])
- **User-generated content:** Submissions accepted in any language; displayed in original + translated
- **Right-to-left (RTL):** Full RTL layout support for Arabic (Masri) — CSS logical properties, bidirectional text handling

### 10A.4 Multilingual Submission Flow

1. User selects preferred language at signup (auto-detected from browser locale)
2. Submission form presented in user's language
3. Ingredient search supports multi-language queries (search "Borrie" → finds "Turmeric")
4. Free-text fields accepted in ANY language with auto-detection
5. Remedy pages show content in user's language with toggle to view original submission language
6. Cultural notes preserved in original language with translation tooltip

### 10A.5 Multilingual Gamification

- **"Polyglot" Badge** — Submit remedies with origins from 3+ language regions
- **"Bridge Builder" Badge** — Help translate/correct 50+ remedy descriptions
- **Heritage Challenge bonus** — 50 extra points for submissions in non-English languages
- **Leaderboards** — Global + per-language/region filters

---

## 11. Technical Architecture

### 11.1 Stack Recommendation

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend** | Next.js 14+ (App Router) | SSR for SEO, React ecosystem, fast iteration |
| **Styling** | Tailwind CSS + shadcn/ui | Rapid development, consistent design |
| **Backend** | Next.js API Routes + tRPC | Type-safe, co-located, simple deployment |
| **Database** | PostgreSQL (Supabase or Neon) | Relational data, full-text search, scalable |
| **Auth** | NextAuth.js / Clerk | Social logins, magic links, easy setup |
| **File Storage** | Cloudflare R2 or AWS S3 | User uploads (photos, videos) |
| **Search** | Algolia or Meilisearch | Fast, typo-tolerant remedy search |
| **AI Research** | OpenAI GPT-4 + Gemini Flash | Automated research assistance + scoring |
| **Email** | Resend or SendGrid | Transactional + marketing emails |
| **Payments** | Stripe | Subscriptions, one-time purchases |
| **Hosting** | Vercel | Seamless Next.js deployment |
| **CDN** | Cloudflare | Global edge caching |
| **Analytics** | PostHog or Plausible | Privacy-first analytics |
| **Monitoring** | Sentry | Error tracking |

### 11.2 Data Model (Simplified)

```
Users
├── id, email, name, avatar
├── cultural_background
├── rank, points, badges[]
├── subscription_tier
└── created_at

Remedies
├── id, title, slug
├── submitted_by (User)
├── status (pending/researching/scored/rejected)
├── condition_tags[]
├── ingredients[]
├── cultural_origin (country, region, people_group)
├── knowledge_source
├── preparation_method
├── preparation_details
├── personal_story
├── media[] (photos, videos)
├── roots_score (composite)
├── pillar_scores {ancestral, crosscultural, scientific, modern, safety}
├── research_report (rich text)
├── cross_cultural_map (GeoJSON)
├── related_remedies[]
├── community_validation_count ("I use this too!")
├── created_at, scored_at
└── is_published

Ingredients
├── id, name, scientific_name, slug
├── aliases[] (common names across cultures)
├── description
├── image
├── native_regions[]
└── remedies[] (many-to-many)

Conditions
├── id, name, slug
├── category (digestive, respiratory, skin, etc.)
├── description
└── remedies[] (many-to-many)

Cultures
├── id, name, region, country
├── description
├── remedies[]
└── contributor_count

Comments
├── id, remedy_id, user_id
├── content
├── helpful_count
└── created_at

Badges
├── id, name, icon, description
├── criteria (JSON)
└── tier (bronze/silver/gold/platinum)

Challenges
├── id, title, theme, description
├── start_date, end_date
├── prizes[]
├── submissions[]
└── leaderboard
```

### 11.3 AI-Assisted Research Pipeline

```
Submission Received
    ↓
[AI Pre-Screen] — Check for duplicates, flag harmful content
    ↓
[AI Research Agent] — Automated literature review
    ├── PubMed/Google Scholar search
    ├── Cross-reference ethnobotany databases
    ├── Identify cross-cultural usage patterns
    ├── Check safety databases (interactions, contraindications)
    └── Generate draft research report
    ↓
[Human Review] — AAS team validates AI findings
    ├── Verify key claims
    ├── Adjust scoring if needed
    ├── Add cultural context
    └── Approve for publication
    ↓
[Score Calculation] — Weighted average across 5 pillars
    ↓
[Publication] — Remedy page goes live
    ├── Auto-generate social media cards
    ├── Notify submitter
    └── Queue for content calendar
```

---

## 12. Content Strategy

### 12.1 Content Flywheel

Every scored remedy generates:

1. **Database Page** — SEO-optimized, evergreen
2. **TikTok/Reel** — 60-second "Was grandma right?" format
3. **Blog Post** — Long-form deep dive (1,500-2,000 words)
4. **Social Cards** — Shareable score card (Instagram, X, Pinterest)
5. **Email** — Notify submitter + weekly digest to subscribers
6. **Lab Notes** — Weekly X/LinkedIn thread with research process

### 12.2 TikTok/Short-Form Video Formats

| Format | Description | Frequency |
|--------|-------------|-----------|
| **Score Reveal** | "Your grandma's remedy scored [X]!" with dramatic reveal | 3x/week |
| **Cross-Cultural** | "3 continents, 1 plant, same purpose" | 1x/week |
| **Gold Root Spotlight** | Deep dive on highest-scoring remedies | 1x/week |
| **Myth or Medicine?** | Quick true/false on popular remedies | 2x/week |
| **Heritage Challenge** | Monthly challenge announcement + highlights | 4x/month |
| **Submission React** | React to interesting community submissions | 2x/week |
| **Lab Notes** | Behind-the-scenes research process | 1x/week |

### 12.3 SEO Strategy

**Target keywords per page type:**
- Remedy pages: "[ingredient] for [condition]", "[ingredient] benefits", "[ingredient] traditional uses"
- Condition pages: "natural remedies for [condition]", "traditional treatment for [condition]"
- Culture pages: "[culture] traditional medicine", "[country] herbal remedies"
- Ingredient pages: "[plant] medicinal uses", "[plant] health benefits"

**Estimated organic traffic potential:** 50,000-200,000 monthly visits within 12 months (based on supplement/herbal keyword volumes)

---

## 13. Launch Strategy

### Phase 0 — Pre-Launch (Weeks 1-4)
**Goal: Build foundation + waitlist**

- [ ] Build MVP (submission form + basic database + user profiles)
- [ ] Seed database with 50 pre-researched remedies (AAS existing content)
- [ ] Launch landing page with waitlist
- [ ] Begin "Lab Notes" threads on X — build anticipation
- [ ] PJ submits his own family remedies on video (TikTok content)
- [ ] Email existing AAS audience (4,000+ subscribers)
- **Target:** 1,000 waitlist signups

### Phase 1 — Soft Launch (Weeks 5-8)
**Goal: Community seeding + viral mechanic testing**

- [ ] Open submissions to waitlist members
- [ ] Launch #MyGrandmaKnew on TikTok
- [ ] First Heritage Challenge ("Founding Remedies — submit your family's #1")
- [ ] Onboard 5-10 wellness influencers to submit their remedies on camera
- [ ] Weekly score reveals on TikTok
- **Target:** 500 submissions, 5,000 registered users

### Phase 2 — Public Launch (Weeks 9-16)
**Goal: Growth + initial monetization**

- [ ] Open to public
- [ ] Launch gamification system (badges, leaderboard, challenges)
- [ ] Launch Roots+ subscription ($9.99/month)
- [ ] Launch Founding Member tier ($29/month)
- [ ] PR push — "The world's first community-sourced traditional medicine database"
- [ ] Podcast tour (wellness, health, cultural podcasts)
- **Target:** 5,000 submissions, 20,000 registered users, 500 paid members

### Phase 3 — Growth (Months 5-12)
**Goal: Scale + diversify revenue**

- [ ] Launch mobile app
- [ ] First "Community-Discovered" AAS product
- [ ] Enterprise/Practitioner tier
- [ ] University partnerships
- [ ] Annual "Roots Summit" planning
- **Target:** 50,000 submissions, 100,000 registered users, 2,000 paid members

---

## 14. Competitive Analysis

### Direct Competitors: NONE
No existing platform combines community-sourced submissions + scientific validation + gamification + cultural heritage preservation.

### Adjacent Competitors

| Platform | Strength | Weakness | AAS Advantage |
|----------|----------|----------|---------------|
| **Examine.com** | Deep science, 14yr reputation | No community, no culture, clinical | Heritage + community + storytelling |
| **WebMD Supplements** | SEO dominance, brand trust | Generic, ad-heavy, no depth | Depth + specificity + engagement |
| **NCCIH (NIH)** | Government authority | Tiny scope, no interactivity | Scale + community + gamification |
| **MSK About Herbs** | Medical credibility, has app | Cancer-focused, no community | Broader scope + community + culture |
| **Drugs.com Natural Products** | 24K+ products | Pharmaceutical focus, no UGC | Cultural lens + user-generated |
| **PFAF Database** | 7,000+ plants | Dated, UK-centric, no mobile | Modern UX + global + gamified |

### Key Differentiators
1. ✅ **Community-sourced** — bottom-up, not top-down
2. ✅ **Culturally rooted** — heritage preservation is core mission
3. ✅ **Gamified** — engagement mechanics drive viral growth
4. ✅ **Cross-cultural mapping** — convergent wisdom discovery
5. ✅ **Branded scoring** — Roots Score™ becomes the industry standard
6. ✅ **Content flywheel** — every remedy = content for 7+ platforms
7. ✅ **Product pipeline** — remedies become AAS physical products

---

## 15. Legal & Compliance

### 15.1 Critical Requirements

- **FDA Disclaimer** — "This information is not intended to diagnose, treat, cure, or prevent any disease" on EVERY remedy page
- **Terms of Service** — Clear IP assignment for submitted content (AAS retains right to research, publish, and create products)
- **Privacy Policy** — GDPR + CCPA compliant, especially for cultural/ethnic data
- **Content Moderation** — Policy for harmful remedies, misinformation, dangerous practices
- **Submission Agreement** — Users acknowledge:
  - AAS may research, publish, and monetize their submissions
  - AAS will credit submitters (if opted in) but owns the compiled database
  - Submissions are not medical advice
  - Users have the right to share this knowledge (not proprietary/sacred)

### 15.2 Traditional Knowledge Ethics

- **Nagoya Protocol awareness** — Respect for indigenous knowledge rights
- **Benefit sharing** — Revenue share model for submitters whose remedies become products
- **Cultural sensitivity review** — Flag submissions that may involve sacred/proprietary knowledge
- **Community consent** — Option to indicate "shared with permission of my community"
- **No biopiracy** — Transparent about how knowledge will be used
- **Credit systems** — Always attribute cultural origins, never claim "discovery"

### 15.3 Content Guidelines

- No medical claims (always "traditionally used for")
- Source all scientific citations
- Clearly separate "traditional use" from "proven efficacy"
- Age-gate where appropriate (certain preparations)
- Allergen warnings for known allergens
- Drug interaction warnings

---

## 15A. Security Plan, Bot Prevention & Abuse Safeguards

### 15A.1 Threat Model

| Threat | Severity | Attack Vector | Impact |
|--------|----------|---------------|--------|
| **Spam submissions** | HIGH | Bots flood database with junk remedies | Degrades data quality, overwhelms research pipeline |
| **Fake accounts** | HIGH | Sybil attack to game leaderboard/referrals | Inflates metrics, steals rewards, erodes trust |
| **Scraping** | MEDIUM | Competitors or AI training sets scrape entire database | IP theft, competitive loss, data exploitation |
| **Content manipulation** | MEDIUM | Coordinated upvotes/"I use this too" inflation | Distorts community signals, misleads users |
| **Account takeover** | HIGH | Credential stuffing, phishing | Data breach, impersonation, privilege abuse |
| **Malicious submissions** | CRITICAL | Dangerous remedies submitted (toxic plants, harmful dosages) | Physical harm to users, legal liability |
| **Cultural IP theft** | HIGH | Bad actors harvest indigenous knowledge for commercial exploitation | Community trust destroyed, legal/ethical exposure |
| **API abuse** | MEDIUM | Enterprise tier API keys used beyond scope | Revenue loss, data exploitation |
| **SEO spam** | LOW | Submissions designed to inject backlinks/keywords | Degrades search quality and brand |
| **Doxxing/harassment** | MEDIUM | Users targeted for cultural identity or remedy claims | Community safety, legal liability |

### 15A.2 Bot Prevention (Multi-Layer Defense)

**Layer 1 — Invisible (No User Friction)**
- **Fingerprinting:** Browser/device fingerprint via FingerprintJS (detect headless browsers, emulators)
- **Behavioral analysis:** Mouse movement, typing speed, scroll patterns on submission form (bots have inhuman precision)
- **Honeypot fields:** Hidden form fields that only bots fill out — instant rejection
- **IP reputation:** Check against known bot/proxy IP databases (IPQualityScore or similar)
- **Rate limiting:** Per-IP and per-account submission limits (3/day for new accounts, 5/day for Herbalist+)

**Layer 2 — Low Friction (Rare, Only When Suspicious)**
- **Invisible reCAPTCHA v3:** Runs silently, only challenges low-score sessions
- **Email verification:** Required before first submission (standard)
- **Phone verification:** Required only if flagged by Layer 1 signals (suspicious IP, fingerprint mismatch)

**Layer 3 — High Friction (Only for Confirmed Abuse)**
- **Visible CAPTCHA:** Only shown after 2+ failed invisible checks
- **Manual review queue:** Account flagged, submissions held for human review
- **Temporary ban:** 24hr cooldown after confirmed abuse, escalating to 7-day/permanent

**Layer 4 — Infrastructure**
- **Cloudflare WAF:** Bot management, DDoS protection, rate limiting at edge
- **API keys:** Enterprise tier uses rotating API keys with usage quotas and IP allowlists
- **Webhook signatures:** All outbound data signed (HMAC-SHA256) to prevent tampering

### 15A.3 Abuse Prevention & Content Safety

**Dangerous Remedy Detection**

```
Submission Received
    ↓
[AI Safety Screen] — RUNS BEFORE ANYTHING ELSE
    ├── Check ingredients against toxicity databases
    │   ├── Known toxic plants (ricin, belladonna, hemlock, etc.)
    │   ├── Dangerous dosage indicators
    │   ├── Known lethal combinations
    │   └── Endangered species ingredients (CITES list)
    ├── Check preparation for dangerous methods
    │   ├── High-risk extraction (e.g., distillation of toxic compounds)
    │   └── Ingestion of topical-only substances
    ├── Check claims for red flags
    │   ├── "Cure for cancer/HIV/diabetes" (medical claim)
    │   └── "Replace your medication with this" (medical advice)
    └── Result:
        ├── ✅ PASS → enters normal research queue
        ├── ⚠️ FLAG → enters manual review queue (human must approve)
        └── 🚫 REJECT → auto-rejected with explanation to user
```

**Flagged remedy categories (always require human review):**
- Any remedy involving children under 2
- Any remedy for pregnancy/breastfeeding
- Any remedy claiming to treat serious diseases (cancer, HIV, heart disease, diabetes)
- Any remedy involving internal use of essential oils
- Any remedy with known drug interactions
- Any remedy using ingredients on safety watchlists

**Content Moderation**

| Content Type | Approach |
|--------------|----------|
| Submissions | AI pre-screen + human review for flagged content |
| Comments | AI moderation (toxicity filter) + community flagging + mod review |
| Photos/videos | AI content safety scan (NSFW, harmful content) + manual spot checks |
| Profile content | Standard community guidelines, report mechanism |
| User stories | Checked for medical claims, dangerous advice |

**Community Moderation Tools (for Elder/Griot ranks):**
- Flag submissions for review
- Hide/report comments
- Escalate to AAS team
- Cannot delete content — only flag for admin review (prevents abuse of mod power)

### 15A.4 Account Security

| Control | Implementation |
|---------|---------------|
| **Authentication** | NextAuth.js / Clerk — social login (Google, Apple) + email magic links |
| **Password policy** | If password auth offered: min 12 chars, breach database check (HaveIBeenPwned API) |
| **MFA** | Optional for all users, **required** for Elder+ ranks and Enterprise accounts |
| **Session management** | JWT with 24hr expiry, refresh token rotation, single-session option for premium |
| **Credential stuffing** | Rate limit login attempts (5 per 15 min per IP), progressive delays |
| **OAuth security** | PKCE flow, state parameter validation, strict redirect URI matching |
| **Admin access** | Separate admin authentication, IP allowlist, MFA mandatory, audit log |
| **API keys** | Scoped permissions, automatic rotation every 90 days, usage alerts at 80% quota |

### 15A.5 Data Protection

| Concern | Safeguard |
|---------|-----------|
| **PII storage** | Email, name, cultural background encrypted at rest (AES-256) |
| **Cultural/ethnic data** | Treated as sensitive data per GDPR Art. 9 — explicit consent, purpose limitation |
| **Submission data** | User owns their submission text; AAS licensed to use per ToS |
| **Deletion rights** | Full GDPR Article 17 compliance — account + data deletion within 30 days |
| **Data exports** | GDPR Article 20 — users can export all their data in JSON format |
| **Backups** | Daily encrypted backups, 90-day retention, separate geographic region |
| **Breach response** | Incident response plan: detect within 24hr, notify within 72hr (GDPR), remediate within 7 days |
| **Third-party data sharing** | Enterprise/API data is anonymized — no PII in API responses |
| **Research data** | Aggregate/anonymized only — no individual identification in published research |

### 15A.6 Anti-Scraping & IP Protection

- **Rate limiting:** Non-authenticated users: 30 pages/hour. Authenticated free: 100 pages/hour
- **Anti-scraping headers:** `X-Robots-Tag: noai, noimageai` on all pages (opt out of AI training)
- **robots.txt:** Allow search engines, block known scrapers and AI crawlers
- **Cloudflare Bot Management:** ML-based bot detection at edge
- **Partial paywall:** Full research reports behind Roots+ subscription (bots get summary only)
- **Watermarking:** Social share cards include invisible watermarks linking back to AAS
- **Legal:** ToS explicitly prohibits automated scraping; DMCA takedown process ready

### 15A.7 Abuse Reporting & Appeals

**User-facing report flow:**
1. "Report" button on every submission, comment, and profile
2. Report categories: Dangerous content, Spam, Harassment, Cultural misappropriation, Misinformation, Other
3. Reports triaged by AI → High-priority flagged for immediate human review
4. Reporter notified of outcome within 48 hours

**Content appeals process:**
1. User notified when their content is removed/flagged with clear reason
2. "Appeal" button → free text explanation
3. Appeal reviewed by a *different* moderator than the original reviewer
4. Decision within 5 business days
5. If upheld, content restored with note
6. If denied, user informed of policy violated
7. Repeated violations → escalating consequences (warning → cooldown → suspension → ban)

**Ban tiers:**
- ⚠️ Warning — First offense (content removed, account noted)
- ⏸️ 7-day cooldown — Second offense (no submissions, can browse)
- 🚫 30-day suspension — Third offense (account locked)
- ❌ Permanent ban — Pattern of abuse, dangerous content, or fraud

### 15A.8 Monitoring & Incident Response

| System | Tool | Alert Threshold |
|--------|------|----------------|
| Submission velocity | PostHog + custom | >50 submissions/hour globally → alert |
| Failed logins | Sentry + Cloudflare | >20 failures/IP/hour → auto-block |
| Error rate | Sentry | >5% error rate → PagerDuty |
| API usage | Custom dashboard | >80% quota → email; >100% → throttle |
| Content reports | Admin dashboard | >10 reports on single content → auto-hide pending review |
| Uptime | UptimeRobot / Kuma | <99.5% weekly → incident review |

**Incident Response Team:**
- **Tier 1:** Automated (Cloudflare, rate limiters, AI moderation)
- **Tier 2:** AAS content moderators (Elder/Griot community + paid reviewers)
- **Tier 3:** AAS core team (security incidents, legal issues, data breaches)

---

## 16. Success Metrics

### 16.1 North Star Metric
**Monthly Active Submitters (MAS)** — People who submit at least one remedy per month

### 16.2 Key Performance Indicators

| Metric | Phase 1 Target | Phase 2 Target | Phase 3 Target |
|--------|---------------|---------------|---------------|
| Total submissions | 500 | 5,000 | 50,000 |
| Registered users | 5,000 | 20,000 | 100,000 |
| Monthly active users | 1,000 | 8,000 | 40,000 |
| Scored remedies | 100 | 1,000 | 10,000 |
| Paid subscribers | 0 | 500 | 2,000 |
| Monthly revenue | $0 | $5,000 | $20,000 |
| Email subscribers | 2,000 | 10,000 | 50,000 |
| TikTok followers | 5,000 | 25,000 | 100,000 |
| Avg session duration | 3 min | 5 min | 7 min |
| Submission completion rate | 60% | 70% | 75% |
| Score share rate | 30% | 40% | 50% |
| Referral rate | 10% | 15% | 20% |

### 16.3 Engagement Metrics

- **Submission-to-score ratio** — How many submissions get fully researched?
- **Score share rate** — What % of score notifications lead to social shares?
- **Viral coefficient** — How many new users does each user bring?
- **Challenge participation rate** — What % of active users join monthly challenges?
- **"I use this too!" rate** — Community validation metric
- **Upgrade rate** — Free → Roots+ conversion

---

## 17. Design Guidelines

*[PENDING — Harley design input]*

### 17.1 Brand Identity Principles

- **Earthy + Modern** — Natural tones (deep greens, warm browns, gold accents) with clean modern UI
- **Cultural richness** — Patterns, textures, and motifs inspired by African, Asian, and Latin American art
- **Trust through clarity** — Scientific data presented simply and beautifully
- **Celebration** — Every score reveal should feel like an achievement
- **Warmth** — This is about families and heritage, not clinical data

### 17.2 Design Language

- **Typography:** Serif for headings (warmth, heritage), sans-serif for body (clarity, modern)
- **Color palette:** Deep forest green (primary), warm gold (accent), earth brown (secondary), cream (background)
- **Iconography:** Custom botanical/root-themed icon set
- **Imagery:** Warm photography of plants, ingredients, hands preparing remedies, diverse people
- **Data visualization:** Beautiful radar charts for Roots Score, world maps for cross-cultural reach

### 17.3 Key Design Deliverables

- [ ] Logo — The Roots Database by AAS
- [ ] Color palette + typography system
- [ ] Icon set (score tiers, pillar icons, badge icons, UI icons)
- [ ] Roots Score visual (radar chart + overall score display)
- [ ] Social media card templates (score reveal, submission confirmation)
- [ ] Landing page design
- [ ] Remedy detail page layout
- [ ] Submission form design
- [ ] Mobile app wireframes (Phase 3)
- [ ] Badge/achievement visual system

---

## 18. Appendix

### 18.1 Glossary

| Term | Definition |
|------|-----------|
| **Roots Score™** | AAS's branded 1-100 rating for traditional remedy effectiveness |
| **Gold Root** | Highest tier (90-100) — scientifically validated traditional remedy |
| **Heritage Challenge** | Monthly themed submission campaign |
| **Griot** | Highest contributor rank — "Keeper of ancestral knowledge" |
| **Convergent Wisdom** | When multiple cultures independently discover the same remedy |
| **Lab Notes** | Weekly public research threads (X/LinkedIn) |

### 18.2 Research Sources for Scoring

- PubMed / Google Scholar (clinical studies)
- Cochrane Library (systematic reviews)
- WHO Monographs on Selected Medicinal Plants
- German Commission E Monographs
- ESCOP Monographs
- Natural Medicines Database
- Ethnobotany journals (Journal of Ethnopharmacology, etc.)
- Regional pharmacopoeias (African, Indian, Chinese, etc.)

### 18.3 Seed Remedies (First 50)

*To be populated — start with AAS existing content library, then expand to universally known remedies:*

1. Turmeric + Black Pepper (inflammation)
2. Ginger Tea (nausea, digestion)
3. Honey + Lemon (sore throat, immunity)
4. Aloe Vera (skin healing, burns)
5. Moringa (nutrition, energy)
6. Rooibos (antioxidant, caffeine-free)
7. Bitter Kola (respiratory, antimicrobial)
8. Baobab (vitamin C, gut health)
9. Neem (skin, antimicrobial)
10. Hibiscus (blood pressure, hydration)
*... 40 more to be added*

---

*"The earth brought forth vegetation, plants yielding seed according to their own kinds, and trees bearing fruit in which is their seed, each according to its kind. And God saw that it was good."* — Genesis 1:12

---

**Document Status:** DRAFT v1.1 — Selina audit recommendations implemented
**Revision History:**
- v1.0 (Mar 20, 2026) — Initial PRD
- v1.1 (Mar 20, 2026) — Added: Multilingual support (§10A), rebalanced gamification for quality (§8), security/bot/abuse plan (§15A)

**Next Steps:**
1. ✅ Design review (Harley)
2. ✅ Visual assets (Pixel)
3. ✅ Security/quality audit (Selina)
4. ✅ Implement Selina's recommendations (multilingual, gamification rebalance, security plan)
5. ⏳ Final review (PeterJohn)
6. ⏳ Move to development channel
