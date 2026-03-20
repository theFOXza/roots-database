import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Explore the public database and submit remedies.",
    features: ["Browse all public remedies", "Submit up to 3/day", "Community comments"]
  },
  {
    name: "Roots+",
    price: "$9.99",
    description: "Unlock full research reports and premium insights.",
    features: ["Full research reports", "Advanced filtering", "Saved collections"]
  },
  {
    name: "Founding Member",
    price: "$29",
    description: "Support the mission and unlock exclusive perks.",
    features: ["All Roots+ features", "Founding badge", "Priority score releases"]
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "Professional access for practitioners and teams.",
    features: ["Team access", "Bulk exports", "API access (Phase 3)"]
  }
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-root-500">Subscriptions</p>
        <h1 className="mt-3 font-heading text-4xl text-root-800">Choose your Roots</h1>
        <p className="mt-3 text-root-600">Support ancestral knowledge and unlock deeper research.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier) => (
          <Card key={tier.name} className="h-full">
            <CardContent className="flex h-full flex-col gap-4 pt-6">
              <div>
                <h2 className="font-heading text-2xl text-root-800">{tier.name}</h2>
                <p className="mt-2 text-3xl font-semibold text-forest-roots">{tier.price}</p>
                <p className="mt-2 text-sm text-root-600">{tier.description}</p>
              </div>
              <ul className="space-y-2 text-sm text-root-600">
                {tier.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <Button className="mt-auto" variant={tier.name === "Roots+" ? "primary" : "secondary"}>
                Choose {tier.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
