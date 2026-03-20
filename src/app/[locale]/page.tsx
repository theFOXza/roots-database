import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { remedies } from "@/data/remedies";

const cultureFlags: Record<string, string> = {
  India: "IN",
  Nigeria: "NG",
  Ghana: "GH",
  Jamaica: "JM",
  China: "CN",
  "South Africa": "ZA",
  Brazil: "BR",
  Mexico: "MX",
  Egypt: "EG"
};

const getScoreClass = (tier: string) => {
  const normalized = tier.toLowerCase();
  if (normalized.includes("gold")) return "score-gold";
  if (normalized.includes("strong")) return "score-strong";
  if (normalized.includes("growing")) return "score-growing";
  return "score-seedling";
};

export default async function LandingPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("landing");
  const featured = remedies.slice(0, 3);

  return (
    <div className="page active" id="page-home">
      <section className="hero">
        <div className="hero-bg">
          <img
            src="/images/roots-hero.png"
            alt=""
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div>
            <p className="eyebrow">Ancient African Secrets</p>
            <h1 className="hero-headline">{t("heroTitle")}</h1>
            <p className="hero-sub">{t("heroSubtitle")}</p>
            <div className="hero-actions">
              <Link href={`/${locale}/submit`} className="btn btn-primary btn-lg">
                {t("ctaSubmit")}
              </Link>
              <Link href={`/${locale}/remedies`} className="btn btn-outline btn-lg">
                {t("ctaBrowse")}
              </Link>
            </div>
            <div className="waitlist-form">
              <input type="email" placeholder="you@family.com" aria-label="Email for waitlist" />
              <button className="btn btn-accent btn-sm" type="button">
                Join Waitlist
              </button>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">4,827</div>
                <div className="hero-stat-label">Remedies</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">67</div>
                <div className="hero-stat-label">Cultures</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">342</div>
                <div className="hero-stat-label">Gold Roots</div>
              </div>
            </div>
          </div>
          <div className="how-it-works-panel fade-in">
            <h2 className="how-panel-title">Ancient Wisdom. Verified.</h2>
            <div className="how-step">
              <div className="how-step-num">1</div>
              <div>
                <div className="how-step-title">Submit</div>
                <div className="how-step-desc">
                  Share your family&apos;s remedy in under 60 seconds. Name, ingredients, origin, and story.
                </div>
              </div>
            </div>
            <div className="how-step">
              <div className="how-step-num">2</div>
              <div>
                <div className="how-step-title">Research</div>
                <div className="how-step-desc">
                  Our team validates it across five scientific pillars: ancestral depth, cross-cultural presence,
                  scientific evidence, modern use, and safety.
                </div>
              </div>
            </div>
            <div className="how-step">
              <div className="how-step-num">3</div>
              <div>
                <div className="how-step-title">Discover</div>
                <div className="how-step-desc">
                  Get a Roots Score and share your heritage with the world. Gold Roots are the highest-validated
                  remedies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="section-wide">
          <p className="eyebrow">Why Roots?</p>
          <h2 className="section-title">Where tradition meets evidence</h2>
          <p className="section-desc">
            Every remedy is evaluated through a rigorous, community-informed process that honors cultural context
            while demanding scientific rigor.
          </p>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>{t("value1Title")}</h3>
              <p>{t("value1Body")}</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4" />
                  <path d="M3 9h18M3 15h18" />
                </svg>
              </div>
              <h3>{t("value2Title")}</h3>
              <p>{t("value2Body")}</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>{t("value3Title")}</h3>
              <p>{t("value3Body")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-wide">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
            <div>
              <p className="eyebrow">This Week&apos;s Gold Roots</p>
              <h2 className="section-title">Featured Remedies</h2>
            </div>
            <Link href={`/${locale}/remedies`} className="btn btn-ghost">
              View all &rarr;
            </Link>
          </div>
          <div className="remedies-grid">
            {featured.map((remedy) => (
              <Link
                key={remedy.slug}
                href={`/${locale}/remedies/${remedy.slug}`}
                className="card remedy-card fade-in"
              >
                <div className="card-body">
                  <div className="remedy-card-top">
                    <div>
                      <h3>{remedy.name}</h3>
                      <p className="remedy-condition">{remedy.condition}</p>
                    </div>
                    <span className={`score-badge ${getScoreClass(remedy.tier)}`}>{remedy.score}</span>
                  </div>
                  <p className="remedy-desc">{remedy.summary}</p>
                  <div className="remedy-meta">
                    <div className="flag-row">
                      {remedy.cultures.map((culture) => cultureFlags[culture] ?? culture).join(" ")}
                    </div>
                    <span className="remedy-link">Read full report &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-banner">
        <div className="section-wide">
          <div>
            <p className="cta-banner-tag">#MyGrandmaKnew</p>
            <h2>
              Honor your lineage.<br />Share your remedy.
            </h2>
            <p>
              Every family has a secret. A tea that cured a cold. A bark that eased pain. A leaf that brought sleep.
              Your grandmother&apos;s wisdom deserves to be preserved and proven.
            </p>
            <Link href={`/${locale}/submit`} className="btn btn-accent btn-lg">
              Was your grandmother right? Find out &rarr;
            </Link>
          </div>
          <div className="cta-banner-img">
            <img
              src="/images/roots-about.png"
              alt="Traditional mortar and pestle with herbs"
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
