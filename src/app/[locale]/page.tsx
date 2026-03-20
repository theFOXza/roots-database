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
      {/* ===== HERO — Dark Forest Green ===== */}
      <section className="relative overflow-hidden bg-[#0d2818]">
        {/* Subtle botanical texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] via-[#0d2818] to-[#1B4332] opacity-90" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 lg:flex-row lg:items-center lg:gap-16 lg:py-28">
          {/* Left — Hero illustration */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Image
              src="/images/hero-concept.png"
              alt="Botanical illustration of medicinal plants with roots"
              width={600}
              height={500}
              className="max-w-[500px] w-full drop-shadow-2xl"
              priority
            />
          </div>
          {/* Right — Copy */}
          <div className="flex-1">
            <h1 className="font-heading text-5xl leading-tight text-[#F8F4ED] md:text-6xl lg:text-7xl">
              What did your grandmother swear by?
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[#d4ccb8]">
              Submit her remedy. We will tell you if science agrees.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#F8F4ED] text-[#1B4332] hover:bg-[#e8e0cc] font-heading text-base px-8 py-6 rounded-none border-2 border-[#F8F4ED]" asChild>
                <Link href={`/${locale}/submit`}>Submit a Remedy</Link>
              </Button>
              <Button size="lg" variant="secondary" className="bg-transparent text-[#F8F4ED] border-2 border-[#F8F4ED]/40 hover:border-[#F8F4ED] hover:bg-[#F8F4ED]/10 font-heading text-base px-8 py-6 rounded-none" asChild>
                <Link href={`/${locale}/remedies`}>Explore the Database</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Featured Remedies — Gold/Tan band ===== */}
      <section className="bg-gradient-to-b from-[#d4c5a0] to-[#e8ddc4]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((remedy) => (
              <Card key={remedy.slug} className="bg-[#F8F4ED] border-[#d4c5a0] rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="flex items-center gap-4 py-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#e8ddc4]">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-[#1B4332]">{remedy.name}</h3>
                    <p className="text-sm text-[#7c6b57]">Roots Score</p>
                    <div className="mt-1 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.round(remedy.score / 20) ? "text-[#C9A84C]" : "text-[#d4c5a0]"}>★</span>
                      ))}
                      <span className="ml-1 text-sm font-semibold text-[#1B4332]">{(remedy.score / 20).toFixed(1)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className="bg-[#F8F4ED]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">How It Works</p>
            <h2 className="mt-3 font-heading text-4xl text-[#1B4332]">Ancient Wisdom. Verified.</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "Submit", desc: "Share your family remedy in under 60 seconds. Tell us what it treats, how it's prepared, and where it comes from.", icon: "📜" },
              { step: "02", title: "Research", desc: "Our team validates it across five scientific pillars — ancestral depth, cross-cultural reach, scientific evidence, modern use, and safety.", icon: "🔬" },
              { step: "03", title: "Discover", desc: "Get a Roots Score™ (1-100) and share your heritage with the world. Was grandma right? Find out.", icon: "🌟" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1B4332] text-3xl">
                  {item.icon}
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">Step {item.step}</p>
                <h3 className="mt-2 font-heading text-2xl text-[#1B4332]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5c4f3a]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== The Roots Score ===== */}
      <section className="bg-[#1B4332]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 lg:flex-row">
          <div className="flex-1">
            <Image
              src="/images/score-concept.png"
              alt="Roots Score radar chart visualization"
              width={500}
              height={500}
              className="max-w-[450px] w-full rounded-2xl shadow-2xl"
            />
          </div>
          <div className="flex-1 text-[#F8F4ED]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">The Roots Score™</p>
            <h2 className="mt-3 font-heading text-4xl">Five Pillars of Validation</h2>
            <div className="mt-8 space-y-4">
              {[
                { icon: "📜", label: "Ancestral Depth", desc: "How many generations have used it?" },
                { icon: "🌍", label: "Cross-Cultural Reach", desc: "Used independently across cultures?" },
                { icon: "🔬", label: "Scientific Validation", desc: "What does peer-reviewed research say?" },
                { icon: "🏭", label: "Modern Applications", desc: "Used in pharma, cosmetics, food industry?" },
                { icon: "⚠️", label: "Safety Profile", desc: "Known interactions or contraindications?" }
              ].map((pillar) => (
                <div key={pillar.label} className="flex items-start gap-4 rounded-lg bg-[#2D6A4F]/30 px-4 py-3">
                  <span className="text-xl">{pillar.icon}</span>
                  <div>
                    <p className="font-heading text-lg text-[#C9A84C]">{pillar.label}</p>
                    <p className="text-sm text-[#d4ccb8]">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Value Props ===== */}
      <section className="bg-[#f0ebe0]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: t("value1Title"), body: t("value1Body"), icon: "🧬" },
              { title: t("value2Title"), body: t("value2Body"), icon: "🌿" },
              { title: t("value3Title"), body: t("value3Body"), icon: "🏛️" }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#d4c5a0] bg-[#F8F4ED] p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1B4332] text-2xl">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-heading text-xl text-[#1B4332]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5c4f3a]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Badge System ===== */}
      <section className="bg-[#F8F4ED]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">Contributor Ranks</p>
              <h2 className="mt-3 font-heading text-4xl text-[#1B4332]">Grow Your Legacy</h2>
              <p className="mt-4 text-[#5c4f3a] leading-relaxed">
                Every submission earns you points. Quality contributions earn more. 
                Rise through the ranks from Seedling to Griot — the keeper of ancestral knowledge.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  { rank: "🌱 Seedling", pts: "0 pts", desc: "Welcome! Your journey begins." },
                  { rank: "🌿 Herbalist", pts: "500 pts", desc: "You're building knowledge." },
                  { rank: "🪴 Root Keeper", pts: "2,000 pts", desc: "Priority research queue." },
                  { rank: "🌳 Elder", pts: "7,000 pts", desc: "Free Premium + moderator." },
                  { rank: "🏛️ Griot", pts: "20,000 pts", desc: "Advisory Council + revenue share." }
                ].map((r) => (
                  <div key={r.rank} className="flex items-center gap-4 rounded-lg border border-[#d4c5a0] bg-[#fdfaf5] px-4 py-3">
                    <span className="font-heading text-lg">{r.rank}</span>
                    <span className="text-xs font-bold text-[#C9A84C]">{r.pts}</span>
                    <span className="text-sm text-[#7c6b57]">— {r.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/badges.png"
                alt="Hexagonal badge progression system"
                width={500}
                height={500}
                className="max-w-[450px] w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Waitlist ===== */}
      <section className="bg-gradient-to-b from-[#e8ddc4] to-[#d4c5a0]">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1B4332]">Join the Movement</p>
          <h2 className="mt-3 font-heading text-4xl text-[#1B4332]">Be a Founding Member</h2>
          <p className="mt-4 text-[#5c4f3a]">
            Get early access, exclusive badges, and help shape the world&apos;s first community-sourced traditional medicine database.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Input
              type="email"
              placeholder="you@family.com"
              className="bg-[#F8F4ED] border-[#C9A84C]/50 text-[#1B4332] placeholder:text-[#a8947e] sm:w-80 rounded-none"
            />
            <Button className="bg-[#1B4332] text-[#F8F4ED] hover:bg-[#2D6A4F] font-heading rounded-none px-8">
              Join the Waitlist
            </Button>
          </div>
          <p className="mt-4 text-xs text-[#7c6b57]">4,827 people have already joined. No spam, ever.</p>
        </div>
      </section>

      {/* ===== #MyGrandmaKnew CTA ===== */}
      <section className="bg-[#1B4332]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">#MyGrandmaKnew</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl leading-tight text-[#F8F4ED]">
            Honor your lineage.<br />Share your remedy.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#d4ccb8]">
            Join thousands of families preserving ancestral knowledge and helping the world rediscover what works.
          </p>
          <Button size="lg" className="mt-8 bg-[#C9A84C] text-[#1B4332] hover:bg-[#e8b84b] font-heading text-base px-10 py-6 rounded-none" asChild>
            <Link href={`/${locale}/submit`}>Was your grandmother right? Find out →</Link>
          </Button>
        </div>
      </section>

      {/* ===== Stats Bar ===== */}
      <section className="bg-[#0d2818]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 text-center md:grid-cols-4">
          {[
            { num: "4,827", label: "Remedies Submitted" },
            { num: "67", label: "Cultures Represented" },
            { num: "342", label: "Gold Roots Validated" },
            { num: "12,000+", label: "Community Members" }
          ].map((s) => (
            <div key={s.label}>
              <p className="font-heading text-3xl text-[#C9A84C]">{s.num}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#d4ccb8]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
