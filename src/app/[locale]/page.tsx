import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { remedies } from "@/data/remedies";
import { ScoreBadge } from "@/components/score/ScoreBadge";

export default async function LandingPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("landing");
  const featured = remedies.slice(0, 3);

  return (
    <div>
      {/* ===== HERO — Same structure, dark green treatment ===== */}
      <section className="bg-gradient-to-br from-[#1B4332] via-[#0d2818] to-[#1B4332]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A84C]">Ancient African Secrets</p>
            <h1 className="mt-4 max-w-xl font-heading text-4xl text-[#F8F4ED] md:text-5xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[#d4ccb8]">{t("heroSubtitle")}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#C9A84C] text-[#1B4332] hover:bg-[#e8b84b] font-heading rounded-none px-8" asChild>
                <Link href={`/${locale}/submit`}>{t("ctaSubmit")}</Link>
              </Button>
              <Button size="lg" className="bg-transparent text-[#F8F4ED] border-2 border-[#F8F4ED]/40 hover:border-[#F8F4ED] hover:bg-[#F8F4ED]/10 rounded-none px-8" asChild>
                <Link href={`/${locale}/remedies`}>{t("ctaBrowse")}</Link>
              </Button>
            </div>
            <div className="mt-6 rounded-lg border border-[#C9A84C]/30 bg-[#1B4332]/60 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C]">Join the waitlist</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <Input type="email" placeholder="you@family.com" className="bg-[#0d2818] border-[#2D6A4F] text-[#F8F4ED] placeholder:text-[#8fa898]" />
                <Button className="bg-[#C9A84C] text-[#1B4332] hover:bg-[#e8b84b] rounded-none">Join</Button>
              </div>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-[#C9A84C]">4,827</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8fa898]">Remedies Submitted</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#C9A84C]">67</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8fa898]">Cultures Represented</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#C9A84C]">342</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8fa898]">Gold Roots Validated</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Card className="border-[#C9A84C]/30 bg-[#1B4332]/80 shadow-2xl backdrop-blur">
              <CardContent className="grid gap-5 py-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C]">How it works</p>
                  <h2 className="mt-2 font-heading text-2xl text-[#F8F4ED]">Ancient Wisdom. Verified.</h2>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-lg border border-[#2D6A4F] bg-[#0d2818]/60 px-4 py-3">
                    <p className="font-heading text-lg text-[#C9A84C]">① Submit</p>
                    <p className="text-sm text-[#d4ccb8]">Share your family remedy in under 60 seconds.</p>
                  </div>
                  <div className="rounded-lg border border-[#2D6A4F] bg-[#0d2818]/60 px-4 py-3">
                    <p className="font-heading text-lg text-[#C9A84C]">② Research</p>
                    <p className="text-sm text-[#d4ccb8]">Our team validates it across five scientific pillars.</p>
                  </div>
                  <div className="rounded-lg border border-[#2D6A4F] bg-[#0d2818]/60 px-4 py-3">
                    <p className="font-heading text-lg text-[#C9A84C]">③ Discover</p>
                    <p className="text-sm text-[#d4ccb8]">Get a Roots Score and share your heritage with the world.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Value Props — Same structure, parchment bg, green/gold accents ===== */}
      <section className="bg-[#F8F4ED]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: t("value1Title"), body: t("value1Body"), icon: "🧬" },
              { title: t("value2Title"), body: t("value2Body"), icon: "🌿" },
              { title: t("value3Title"), body: t("value3Body"), icon: "🏛️" }
            ].map((item) => (
              <Card key={item.title} className="border-[#d4c5a0] bg-[#fdfaf5] hover:shadow-lg hover:border-[#C9A84C]/50 transition-all">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B4332] text-xl">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 font-heading text-xl text-[#1B4332]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5c4f3a]">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured Remedies — Same structure, warm gold band ===== */}
      <section className="bg-gradient-to-b from-[#e8ddc4] to-[#f0ebe0]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C9A84C]">This Week&apos;s Gold Roots</p>
              <h2 className="mt-2 font-heading text-3xl text-[#1B4332]">Featured Remedies</h2>
            </div>
            <Button className="bg-transparent text-[#1B4332] border border-[#1B4332] hover:bg-[#1B4332] hover:text-[#F8F4ED] rounded-none" asChild>
              <Link href={`/${locale}/remedies`}>View all</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featured.map((remedy) => (
              <Card key={remedy.slug} className="overflow-hidden border-[#d4c5a0] bg-[#F8F4ED] hover:shadow-xl hover:border-[#C9A84C] transition-all">
                <CardContent className="pt-6">
                  <ScoreBadge score={remedy.score} label={remedy.tier} color={remedy.tierColor} />
                  <h3 className="mt-4 font-heading text-xl text-[#1B4332]">{remedy.name}</h3>
                  <p className="text-sm text-[#7c6b57]">for {remedy.condition}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#8fa898]">
                    <span>🌍 {remedy.cultures.length} cultures</span>
                    <span>📜 Deep heritage</span>
                  </div>
                  <Button className="mt-4 px-0 bg-transparent text-[#1B4332] hover:text-[#C9A84C] hover:bg-transparent" asChild>
                    <Link href={`/${locale}/remedies/${remedy.slug}`}>Read full report →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== #MyGrandmaKnew — Same structure, proper dark green + gold ===== */}
      <section className="bg-[#1B4332]">
        <div className="mx-auto max-w-6xl px-6 py-16 text-[#F8F4ED]">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C9A84C]">#MyGrandmaKnew</p>
          <h2 className="mt-4 font-display text-4xl">Honor your lineage. Share your remedy.</h2>
          <p className="mt-4 max-w-xl text-[#d4ccb8]">
            Join thousands of families preserving ancestral knowledge and helping the world rediscover what works.
          </p>
          <Button className="mt-6 bg-[#C9A84C] text-[#1B4332] hover:bg-[#e8b84b] font-heading rounded-none px-8" asChild>
            <Link href={`/${locale}/submit`}>Was your grandmother right? Find out →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
