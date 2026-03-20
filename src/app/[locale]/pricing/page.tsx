const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Browse remedies and submit your own family traditions to the database.",
    features: [
      "Browse all remedies",
      "Submit up to 3 remedies/month",
      "View basic Roots Scores",
      "Join Heritage Challenges"
    ],
    cta: "Get Started",
    buttonClass: "btn btn-outline",
    featured: false,
    priceSuffix: ""
  },
  {
    name: "Roots+",
    price: "$9.99",
    description: "Full access to detailed research reports and the complete scoring breakdown.",
    features: [
      "Everything in Free",
      "Unlimited submissions",
      "Full 5-pillar score breakdown",
      "Detailed research reports",
      "Scientific citations and sources"
    ],
    cta: "Subscribe",
    buttonClass: "btn btn-primary",
    featured: true,
    priceSuffix: "/month"
  },
  {
    name: "Founding Member",
    price: "$29",
    description: "Be part of the founding community. Lifetime access and a permanent founding badge.",
    features: [
      "Everything in Roots+",
      "Founding Member badge",
      "Early access to new features",
      "Direct input on roadmap",
      "Name in founders' wall"
    ],
    cta: "Become a Founder",
    buttonClass: "btn btn-accent",
    featured: false,
    priceSuffix: "one-time"
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For researchers, universities, and organizations working with traditional medicine data.",
    features: [
      "Everything in Roots+",
      "API access to database",
      "Bulk data exports",
      "Custom research reports",
      "Dedicated support"
    ],
    cta: "Contact Us",
    buttonClass: "btn btn-outline",
    featured: false,
    priceSuffix: "/month"
  }
];

export default async function PricingPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <div className="page active" id="page-pricing">
      <section className="section">
        <div className="section-wide">
          <div className="text-center" style={{ marginBottom: "var(--space-2)" }}>
            <p className="eyebrow">Subscriptions</p>
            <h1 className="section-title">Choose your Roots</h1>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Support the preservation of ancestral wisdom while gaining deeper access to validated remedies and
              research.
            </p>
          </div>

          <div className="pricing-grid">
            {tiers.map((tier) => (
              <div key={tier.name} className={`pricing-card${tier.featured ? " featured" : ""}`}>
                <div className="pricing-name">{tier.name}</div>
                <div className="pricing-price">
                  {tier.price} {tier.priceSuffix ? <span>{tier.priceSuffix}</span> : null}
                </div>
                <p className="pricing-desc">{tier.description}</p>
                <ul className="pricing-features" role="list">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a href="#" className={tier.buttonClass} style={{ width: "100%", justifyContent: "center" }}>
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
