export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <div className="page active" id="page-about">
      <section className="section">
        <div className="section-wide">
          <div className="about-hero">
            <div>
              <p className="eyebrow">Our Mission</p>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-2xl)",
                  fontWeight: 500,
                  marginBottom: "var(--space-4)"
                }}
              >
                Preserve ancestral wisdom. Verify with science.
              </h1>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "var(--space-4)" }}>
                The Roots Database is a living archive where traditional remedies are documented, preserved, and
                validated through scientific research. We believe that the healing knowledge passed down through
                generations deserves to be studied with the same rigor we apply to modern medicine.
              </p>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                Our goal is not to replace modern healthcare, but to bridge the gap between ancestral knowledge and
                contemporary science - honoring the wisdom of our elders while ensuring safety and efficacy through
                evidence-based evaluation.
              </p>
            </div>
            <img
              src="/images/roots-about.png"
              alt="Traditional wooden mortar and pestle surrounded by herbs and roots"
              loading="lazy"
              decoding="async"
              width={600}
              height={450}
            />
          </div>

          <div style={{ marginBottom: "var(--space-12)" }}>
            <p className="eyebrow">How Scoring Works</p>
            <h2 className="section-title">The Five Pillars</h2>
            <p className="section-desc mb-6">
              Every remedy is evaluated across five dimensions that together form the Roots Score - a comprehensive
                measure of traditional validity and scientific support.
            </p>
            <div className="about-pillars">
              <div className="pillar-card fade-in">
                <h4>Ancestral Depth</h4>
                <p>How deep and documented is the remedy&apos;s history within its culture of origin?</p>
              </div>
              <div className="pillar-card fade-in">
                <h4>Cross-Cultural</h4>
                <p>Is this remedy found independently across multiple cultures and traditions?</p>
              </div>
              <div className="pillar-card fade-in">
                <h4>Scientific Evidence</h4>
                <p>What does published research say about the remedy&apos;s active compounds and efficacy?</p>
              </div>
              <div className="pillar-card fade-in">
                <h4>Modern Use</h4>
                <p>Is the remedy still actively used today, and how accessible are its ingredients?</p>
              </div>
              <div className="pillar-card fade-in">
                <h4>Safety Profile</h4>
                <p>What are the known risks, interactions, and contraindications?</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="eyebrow">A Project By</p>
            <h2 className="section-title">Ancient African Secrets</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Built by a community of researchers, traditional healers, and technologists committed to preserving
              ancestral wisdom for future generations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
