import Link from "next/link";
import { notFound } from "next/navigation";
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

const pillarLabels = [
  "Ancestral Depth",
  "Cross-Cultural",
  "Scientific",
  "Modern Use",
  "Safety"
];

export default async function RemedyDetailPage({
  params
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const remedy = remedies.find((item) => item.slug === slug);

  if (!remedy) {
    notFound();
  }

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - remedy.score / 100);

  return (
    <div className="page active" id="page-remedy">
      <section className="section">
        <div className="section-wide">
          <Link href={`/${locale}/remedies`} className="btn btn-ghost" style={{ marginBottom: "var(--space-4)" }}>
            &larr; Back to Browse
          </Link>
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", marginBottom: "var(--space-2)" }}>
            <span className={`score-badge ${getScoreClass(remedy.tier)}`}>
              {remedy.score} - {remedy.tier}
            </span>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-faint)" }}>RD-0247</span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-2xl)",
              fontWeight: 500,
              marginBottom: "var(--space-2)"
            }}
          >
            {remedy.name}
          </h1>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
            For {remedy.condition} - {remedy.cultures.map((culture) => cultureFlags[culture] ?? culture).join(" ")}
          </p>

          <div className="detail-layout">
            <div className="detail-main">
              <section>
                <h2>Summary</h2>
                <p>{remedy.summary}</p>
              </section>
              <section>
                <h2>Ancestral History</h2>
                <p>
                  Documented across {remedy.cultures.join(", ")}, this remedy is passed down through family traditions
                  and community healers.
                </p>
              </section>
              <section>
                <h2>Scientific Evidence</h2>
                <p>
                  Multiple peer-reviewed studies support the active compounds in this remedy. Research highlights
                  anti-inflammatory benefits, improved bioavailability, and strong safety profiles when used as
                  traditionally prepared.
                </p>
                <ul>
                  <li>Growing body of clinical evidence supporting key compounds</li>
                  <li>Documented traditional use across several cultures</li>
                  <li>Modern applications aligned with ancestral practices</li>
                  <li>Generally well-tolerated at recommended doses</li>
                </ul>
              </section>
              <section>
                <h2>Preparation</h2>
                <p>{remedy.preparation}</p>
              </section>
              <section>
                <h2>Safety Information</h2>
                <p>{remedy.safety}</p>
              </section>
              <section>
                <h2>Community Stories</h2>
                <p
                  style={{
                    fontStyle: "italic",
                    borderLeft: "3px solid var(--color-accent)",
                    paddingLeft: "var(--space-4)",
                    marginBottom: "var(--space-4)"
                  }}
                >
                  &quot;My grandmother used this every winter, and it still works. It is the first remedy we reach for at
                  home.&quot; - Heritage Keeper
                </p>
                <p
                  style={{
                    fontStyle: "italic",
                    borderLeft: "3px solid var(--color-accent)",
                    paddingLeft: "var(--space-4)"
                  }}
                >
                  &quot;We prepare it before big family gatherings. It is part of our story and our healing.&quot; - Community
                  Member
                </p>
              </section>
            </div>

            <aside className="detail-sidebar">
              <div className="score-card">
                <div className="score-circle">
                  <svg viewBox="0 0 120 120">
                    <circle className="score-circle-bg" cx="60" cy="60" r={radius} />
                    <circle
                      className="score-circle-fg"
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke={remedy.tierColor}
                      strokeDasharray={circumference}
                      strokeDashoffset={dashOffset}
                    />
                  </svg>
                  <div className="score-circle-value">
                    <strong>{remedy.score}</strong>
                    <span>Roots Score</span>
                  </div>
                </div>
                <div className="pillar-list">
                  {pillarLabels.map((label, index) => (
                    <div className="pillar-item" key={label}>
                      <span className="pillar-name">{label}</span>
                      <div className="pillar-bar-track">
                        <div
                          className="pillar-bar-fill"
                          style={{ width: `${remedy.values[index]}%`, background: remedy.tierColor }}
                        ></div>
                      </div>
                      <span className="pillar-value">{remedy.values[index]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="score-card mt-6">
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-base)",
                    fontWeight: 500,
                    marginBottom: "var(--space-3)",
                    textAlign: "left"
                  }}
                >
                  Share This Remedy
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                    textAlign: "left",
                    marginBottom: "var(--space-3)"
                  }}
                >
                  Help preserve ancestral wisdom by sharing this validated remedy.
                </p>
                <div style={{ display: "flex", gap: "var(--space-2)" }}>
                  <button className="btn btn-outline btn-sm" type="button">
                    Copy Link
                  </button>
                  <button className="btn btn-outline btn-sm" type="button">
                    Share
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
