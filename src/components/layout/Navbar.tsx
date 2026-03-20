"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "home", href: "/" },
  { key: "browse", href: "/remedies" },
  { key: "submit", href: "/submit" },
  { key: "challenge", href: "/challenge" },
  { key: "leaderboard", href: "/leaderboard" },
  { key: "pricing", href: "/pricing" },
  { key: "about", href: "/about" }
];

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-ancient-bark/60 bg-forest-roots/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="text-lg font-semibold text-parchment">
          <span className="font-heading">The Roots Database</span>
          <span className="ml-2 text-xs uppercase tracking-[0.2em] text-ancestral-gold">by AAS</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className={cn(
                "text-root-100 transition hover:text-ancestral-gold",
                item.key === "submit" && "font-semibold text-ancestral-gold"
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            className="border-parchment text-parchment hover:bg-parchment hover:text-forest-roots"
            asChild
          >
            <Link href={`/${locale}/auth/sign-in`}>{t("signIn")}</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={`/${locale}/submit`}>{t("submit")}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
