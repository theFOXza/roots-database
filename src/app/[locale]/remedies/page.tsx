import Link from "next/link";
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

export default async function RemediesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="page active" id="page-browse">
      <section className="section">
        <div className="section-wide">
          <p className="eyebrow">Remedy Database</p>
          <h1 className="section-title">Browse Remedies</h1>
          <p className="section-desc mb-6">
            Explore thousands of traditional remedies from cultures around the world, each scored and validated through
            scientific research.
          </p>

          <div className="browse-header">
            <div className="search-bar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input type="search" placeholder="Search remedies, ingredients, conditions..." aria-label="Search remedies" />
            </div>
          </div>

          <div className="filter-row">
            {[
              "All",
              "Gold Root",
              "Strong Root",
              "Growing Root",
              "Seedling",
              "Inflammation",
              "Digestion",
              "Immunity",
              "Score: High to Low"
            ].map((filter) => (
              <button key={filter} className={`filter-pill${filter === "All" ? " active" : ""}`} type="button">
                {filter}
              </button>
            ))}
          </div>

          <div className="remedies-grid">
            {remedies.map((remedy) => (
              <Link key={remedy.slug} href={`/${locale}/remedies/${remedy.slug}`} className="card remedy-card">
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
                    <span className="remedy-link">View remedy &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
