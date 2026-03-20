import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { remedies } from "@/data/remedies";
import { ScoreBadge } from "@/components/score/ScoreBadge";

export default async function LandingPage({
  params
}: {
  params: { locale: string };
}) {
  const t = await getTranslations("landing");
  const featured = remedies.slice(0, 3);

  return (
    <div className="bg-parchment">
      <section className="bg-parchment-gradient">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] text-root-500">Ancient African Secrets</p>
            <h1 className="mt-4 max-w-xl font-heading text-4xl text-root-800 md:text-5xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-root-600">{t("heroSubtitle")}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={`/${params.locale}/submit`}>{t("ctaSubmit")}</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href={`/${params.locale}/remedies`}>{t("ctaBrowse")}</Link>
              </Button>
            </div>
            <div className="mt-6 rounded-lg border border-root-200 bg-linen p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-root-500">Join the waitlist</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <Input type="email" placeholder="you@family.com" />
                <Button>Join</Button>
              </div>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-forest-roots">4,827</p>
                <p className="text-xs uppercase tracking-[0.2em] text-root-500">Remedies Submitted</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-forest-roots">67</p>
                <p className="text-xs uppercase tracking-[0.2em] text-root-500">Cultures Represented</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-forest-roots">342</p>
                <p className="text-xs uppercase tracking-[0.2em] text-root-500">Gold Roots Validated</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Card className="border-ancestral-gold bg-linen shadow-soft-card">
              <CardContent className="grid gap-5 py-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-root-500">How it works</p>
                  <h2 className="mt-2 font-heading text-2xl">Ancient Wisdom. Verified.</h2>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-lg border border-root-200 bg-old-paper/70 px-4 py-3">
                    <p className="font-heading text-lg">① Submit</p>
                    <p className="text-sm text-root-600">Share your family remedy in under 60 seconds.</p>
                  </div>
                  <div className="rounded-lg border border-root-200 bg-old-paper/70 px-4 py-3">
                    <p className="font-heading text-lg">② Research</p>
                    <p className="text-sm text-root-600">Our team validates it across five scientific pillars.</p>
                  </div>
                  <div className="rounded-lg border border-root-200 bg-old-paper/70 px-4 py-3">
                    <p className="font-heading text-lg">③ Discover</p>
                    <p className="text-sm text-root-600">Get a Roots Score and share your heritage with the world.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: t("value1Title"), body: t("value1Body") },
            { title: t("value2Title"), body: t("value2Body") },
            { title: t("value3Title"), body: t("value3Body") }
          ].map((item) => (
            <Card key={item.title} className="bg-linen">
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl text-root-800">{item.title}</h3>
                <p className="mt-3 text-sm text-root-600">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-old-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-root-500">This Week's Gold Roots</p>
              <h2 className="mt-2 font-heading text-3xl">Featured Remedies</h2>
            </div>
            <Button variant="ghost" asChild>
              <Link href={`/${params.locale}/remedies`}>View all</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featured.map((remedy) => (
              <Card key={remedy.slug} className="overflow-hidden">
                <CardContent className="pt-6">
                  <ScoreBadge score={remedy.score} label={remedy.tier} color={remedy.tierColor} />
                  <h3 className="mt-4 font-heading text-xl text-root-800">{remedy.name}</h3>
                  <p className="text-sm text-root-600">for {remedy.condition}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-root-500">
                    <span>🌍 {remedy.cultures.length} cultures</span>
                    <span>📜 Deep heritage</span>
                  </div>
                  <Button variant="ghost" className="mt-4 px-0" asChild>
                    <Link href={`/${params.locale}/remedies/${remedy.slug}`}>Read full report →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-roots">
        <div className="mx-auto max-w-6xl px-6 py-16 text-parchment">
          <p className="text-sm uppercase tracking-[0.3em] text-ancestral-gold">#MyGrandmaKnew</p>
          <h2 className="mt-4 font-display text-4xl">Honor your lineage. Share your remedy.</h2>
          <p className="mt-4 max-w-xl text-root-100">
            Join thousands of families preserving ancestral knowledge and helping the world rediscover what works.
          </p>
          <Button className="mt-6" asChild>
            <Link href={`/${params.locale}/submit`}>Was your grandmother right? Find out →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
