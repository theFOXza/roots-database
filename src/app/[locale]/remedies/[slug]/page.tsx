import Link from "next/link";
import { notFound } from "next/navigation";
import { remedies } from "@/data/remedies";
import { ScoreCircle } from "@/components/score/ScoreCircle";
import { ScoreRadar } from "@/components/score/ScoreRadar";
import { ScoreBadge } from "@/components/score/ScoreBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pillarLabels = [
  "📜 Ancestral Depth",
  "🌍 Cross-Cultural",
  "🔬 Scientific",
  "🏭 Modern Use",
  "⚠️ Safety"
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

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <ScoreBadge score={remedy.score} label={remedy.tier} color={remedy.tierColor} />
              <span className="text-xs uppercase tracking-[0.2em] text-root-500">Remedy #{"4,827"}</span>
            </div>
            <h1 className="mt-3 font-heading text-4xl text-root-800">{remedy.name}</h1>
            <p className="mt-2 text-sm text-root-600">Traditionally used for {remedy.condition}</p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <h2 className="font-heading text-2xl">Summary</h2>
              <p className="mt-3 text-root-600">{remedy.summary}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="font-heading text-2xl">Ancestral History</h2>
              <p className="mt-3 text-root-600">
                Documented across {remedy.cultures.join(", ")}, this remedy is passed down through family
                traditions and community healers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="font-heading text-2xl">Cross-Cultural Map</h2>
              <div className="mt-4 rounded-lg border border-root-200 bg-old-paper px-4 py-6 text-sm text-root-600">
                Map view coming soon. Found in: {remedy.cultures.join(", ")}.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="font-heading text-2xl">Scientific Evidence</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-root-600">
                <li>Peer-reviewed studies demonstrate consistent anti-inflammatory response.</li>
                <li>Mechanism: polyphenols and bioavailability enhancers.</li>
                <li>Research summary available for Roots+ members.</li>
              </ul>
              <Button variant="secondary" className="mt-4">Unlock full report</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="font-heading text-2xl">How to Prepare It</h2>
              <p className="mt-3 text-sm text-root-600">{remedy.preparation}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="font-heading text-2xl">Safety Information</h2>
              <div className="mt-3 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-4 py-3 text-sm text-root-600">
                {remedy.safety}
              </div>
              <p className="mt-3 text-xs text-root-500">
                FDA Disclaimer: This information is not intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="font-heading text-2xl">Community Stories</h2>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-root-600">2,341 people said &quot;I use this too!&quot;</p>
                <Button size="sm">I use this too!</Button>
              </div>
              <div className="mt-4 space-y-3 text-sm text-root-600">
                <p>&quot;My grandmother used this every winter, and it still works.&quot;</p>
                <p>&quot;We add it to tea before big family gatherings.&quot;</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card>
            <CardContent className="flex flex-col items-center gap-6 pt-6">
              <ScoreCircle score={remedy.score} tierLabel={remedy.tier} tierColor={remedy.tierColor} />
              <ScoreRadar values={remedy.values} labels={pillarLabels} tierColor={remedy.tierColor} />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-heading text-xl">Share this remedy</h3>
              <p className="mt-2 text-sm text-root-600">Generate a share card and spread the wisdom.</p>
              <Button className="mt-4" variant="secondary">Share card</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-heading text-xl">Submitted by</h3>
              <div className="mt-3 rounded-lg border border-root-200 bg-old-paper px-4 py-3 text-sm text-root-600">
                @heritagekeeper • Root Keeper • March 14, 2026
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-heading text-xl">Related remedies</h3>
              <div className="mt-3 space-y-2 text-sm text-root-600">
                {remedies.slice(0, 2).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${locale}/remedies/${item.slug}`}
                    className="block text-forest-roots"
                  >
                    {item.name} →
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
