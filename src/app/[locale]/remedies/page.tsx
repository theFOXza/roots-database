import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { remedies } from "@/data/remedies";
import { ScoreBadge } from "@/components/score/ScoreBadge";

export default async function RemediesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-root-500">Remedy Database</p>
          <h1 className="mt-2 font-heading text-4xl text-root-800">Browse Remedies</h1>
        </div>
        <div className="w-full max-w-md">
          <Input placeholder="Search by remedy, condition, ingredient..." />
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {[
          "Gold Root",
          "Strong Root",
          "Growing Root",
          "Seedling",
          "Condition",
          "Culture",
          "Ingredient",
          "Score High → Low"
        ].map((filter) => (
          <Badge key={filter} className="bg-linen text-root-600">
            {filter}
          </Badge>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {remedies.map((remedy) => (
          <Card key={remedy.slug} className="hover:shadow-warm">
            <CardContent className="pt-6">
              <ScoreBadge score={remedy.score} label={remedy.tier} color={remedy.tierColor} />
              <h2 className="mt-4 font-heading text-2xl text-root-800">{remedy.name}</h2>
              <p className="text-sm text-root-600">for {remedy.condition}</p>
              <p className="mt-3 text-sm text-root-600">{remedy.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-root-500">
                {remedy.cultures.map((culture) => (
                  <span key={culture}>🌍 {culture}</span>
                ))}
              </div>
              <Link
                href={`/${locale}/remedies/${remedy.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-forest-roots"
              >
                View remedy →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
