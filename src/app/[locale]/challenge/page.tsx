import Link from "next/link";

export default async function ChallengePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="page active" id="page-challenge">
      <section className="section">
        <div className="section-default">
          <div className="challenge-header">
            <p className="eyebrow">March Challenge</p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", fontWeight: 500, marginBottom: "var(--space-3)" }}>
              Women&apos;s Wisdom
            </h1>
            <p className="section-desc" style={{ margin: "0 auto var(--space-6)" }}>
              This month, we celebrate the remedies passed down by the women in our families - grandmothers, mothers,
              aunts, and healers who carried generations of knowledge.
            </p>
            <Link href={`/${locale}/submit`} className="btn btn-primary btn-lg">
              Join the Challenge
            </Link>
          </div>

          <div className="challenge-grid">
            <div className="card">
              <div className="card-body">
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", fontWeight: 500, marginBottom: "var(--space-4)" }}>
                  This Month&apos;s Submissions
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "var(--space-2) 0",
                      borderBottom: "1px solid oklch(from var(--color-text) l c h / 0.06)"
                    }}
                  >
                    <div>
                      <strong style={{ fontSize: "var(--text-sm)" }}>Shea Butter Healing Salve</strong>
                      <br />
                      <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>
                        by Amina K. - West Africa
                      </span>
                    </div>
                    <span className="score-badge score-strong">86</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "var(--space-2) 0",
                      borderBottom: "1px solid oklch(from var(--color-text) l c h / 0.06)"
                    }}
                  >
                    <div>
                      <strong style={{ fontSize: "var(--text-sm)" }}>Chamomile and Honey Tonic</strong>
                      <br />
                      <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>
                        by Sofia R. - Mexico
                      </span>
                    </div>
                    <span className="score-badge score-growing">74</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-2) 0" }}>
                    <div>
                      <strong style={{ fontSize: "var(--text-sm)" }}>Rooibos Colic Remedy</strong>
                      <br />
                      <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>
                        by Thandi M. - South Africa
                      </span>
                    </div>
                    <span className="score-badge score-seedling">58</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", fontWeight: 500, marginBottom: "var(--space-4)" }}>
                  Prizes
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "var(--radius-full)",
                        background: "var(--color-accent-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "var(--text-lg)"
                      }}
                    >
                      *
                    </div>
                    <div>
                      <strong style={{ fontSize: "var(--text-sm)" }}>Heritage Champion Badge</strong>
                      <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>
                        Permanent badge on your profile honoring your contribution
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "var(--radius-full)",
                        background: "var(--color-accent-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "var(--text-lg)"
                      }}
                    >
                      *
                    </div>
                    <div>
                      <strong style={{ fontSize: "var(--text-sm)" }}>1 Year Roots+ Subscription</strong>
                      <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>
                        Free access to advanced research reports and detailed scoring
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "var(--radius-full)",
                        background: "var(--color-accent-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "var(--text-lg)"
                      }}
                    >
                      *
                    </div>
                    <div>
                      <strong style={{ fontSize: "var(--text-sm)" }}>Featured on Landing Page</strong>
                      <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>
                        Your remedy showcased to the entire Roots community
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
