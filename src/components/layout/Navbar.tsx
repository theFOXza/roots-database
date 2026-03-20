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
    <header className="sticky top-0 z-40 border-b border-root-200 bg-parchment/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="text-lg font-semibold text-forest-roots">
          <span className="font-heading">The Roots Database</span>
          <span className="ml-2 text-xs uppercase tracking-[0.2em] text-root-500">by AAS</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className={cn(
                "text-root-600 transition hover:text-forest-roots",
                item.key === "submit" && "font-semibold text-forest-roots"
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" asChild>
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
