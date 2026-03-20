export default async function SubmitPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <div className="page active" id="page-submit">
      <section className="section">
        <div className="section-wide submit-layout">
          <div className="submit-form-container">
            <div className="submit-header">
              <p className="eyebrow">60-Second Submission</p>
              <h1>Submit a Remedy</h1>
              <p style={{ color: "var(--color-text-muted)" }}>
                Share your family&apos;s traditional remedy. Every submission helps preserve ancestral knowledge for future
                generations.
              </p>
            </div>

            <form onSubmit={(event) => event.preventDefault()}>
              <div className="form-group">
                <label className="form-label" htmlFor="remedy-name">
                  Remedy Name
                </label>
                <input type="text" id="remedy-name" className="input-field" placeholder="e.g., Grandmother&apos;s Ginger Tea" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="remedy-for">
                  What is it for?
                </label>
                <input
                  type="text"
                  id="remedy-for"
                  className="input-field"
                  placeholder="e.g., Stomach aches, colds, joint pain"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="remedy-ingredients">
                  Key Ingredients
                </label>
                <input type="text" id="remedy-ingredients" className="input-field" placeholder="e.g., Fresh ginger, honey, lemon" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="remedy-prep">
                  Preparation Method
                </label>
                <select id="remedy-prep" className="input-field" defaultValue="">
                  <option value="">Select a method...</option>
                  <option>Tea / Infusion</option>
                  <option>Paste / Poultice</option>
                  <option>Oil / Tincture</option>
                  <option>Powder</option>
                  <option>Raw / Fresh</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="remedy-details">
                  Preparation Details
                </label>
                <textarea
                  id="remedy-details"
                  className="input-field"
                  placeholder="Describe how the remedy is prepared and used..."
                ></textarea>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="remedy-origin">
                  Cultural Origin
                </label>
                <input type="text" id="remedy-origin" className="input-field" placeholder="e.g., Yoruba, Nigerian" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="remedy-source">
                  Source of Knowledge
                </label>
                <select id="remedy-source" className="input-field" defaultValue="">
                  <option value="">How did you learn this?</option>
                  <option>Grandmother</option>
                  <option>Mother</option>
                  <option>Father</option>
                  <option>Elder / Healer</option>
                  <option>Community tradition</option>
                  <option>Other family member</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="remedy-story">
                  Personal Story <span style={{ color: "var(--color-text-faint)" }}>(Optional)</span>
                </label>
                <textarea
                  id="remedy-story"
                  className="input-field"
                  placeholder="Share a memory or story about this remedy..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center" }}>
                Submit Remedy
              </button>
              <p className="submit-disclaimer">
                By submitting, you agree that this information will be reviewed, validated, and shared as part of the
                Roots Database. This is not medical advice.
              </p>
            </form>
          </div>
          <div style={{ position: "sticky", top: "calc(60px + var(--space-8))" }}>
            <img
              src="/images/roots-pattern.png"
              alt=""
              style={{ borderRadius: "var(--radius-2xl)", opacity: 0.6, maxHeight: "500px", objectFit: "cover", width: "100%" }}
              loading="lazy"
              decoding="async"
            />
            <div className="card mt-6">
              <div className="card-body">
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-lg)",
                    fontWeight: 500,
                    marginBottom: "var(--space-3)"
                  }}
                >
                  What happens next?
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                    <div className="how-step-num" style={{ width: "28px", height: "28px", fontSize: "var(--text-xs)" }}>
                      1
                    </div>
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
                      Your remedy enters our review queue
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                    <div className="how-step-num" style={{ width: "28px", height: "28px", fontSize: "var(--text-xs)" }}>
                      2
                    </div>
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
                      Researchers evaluate it across 5 pillars
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                    <div className="how-step-num" style={{ width: "28px", height: "28px", fontSize: "var(--text-xs)" }}>
                      3
                    </div>
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
                      You receive your Roots Score and full report
                    </p>
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
