import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ChallengePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="rounded-2xl bg-forest-roots px-8 py-10 text-parchment">
        <p className="text-xs uppercase tracking-[0.2em] text-ancestral-gold">March Challenge</p>
        <h1 className="mt-3 font-heading text-4xl">Women’s Wisdom</h1>
        <p className="mt-3 max-w-xl text-root-100">
          Submit a remedy taught by the women who raised you. Top contributors earn the Heritage Champion badge.
        </p>
        <Button className="mt-6" variant="primary">Join the Challenge</Button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <h2 className="font-heading text-2xl">This Month’s Submissions</h2>
            <ul className="mt-4 space-y-3 text-sm text-root-600">
              <li>Shea + Honey Healing Balm — Ghana</li>
              <li>Bitter Leaf Tonics — Nigeria</li>
              <li>Hibiscus Cooling Tea — Sudan</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h2 className="font-heading text-2xl">Prizes</h2>
            <ul className="mt-4 space-y-3 text-sm text-root-600">
              <li>🏆 Heritage Champion badge</li>
              <li>1-year Roots+ subscription</li>
              <li>Featured on the landing page</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
