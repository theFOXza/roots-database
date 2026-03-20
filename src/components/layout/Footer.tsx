"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";

export function Footer() {
  const locale = useLocale();

  return (
    <footer className="bg-[#0d2818]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="The Roots Database"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-heading text-xl text-[#F8F4ED]">The Roots Database</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#8fa898]">
              Ancient wisdom, verified. Community-sourced, science-backed. Preserving the healing knowledge of our ancestors for generations to come.
            </p>
            <p className="mt-6 text-xs text-[#5c7a5e]">A project by Ancient African Secrets</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">Explore</p>
            <div className="mt-4 grid gap-3 text-sm">
              {[
                { label: "Browse Remedies", href: "/remedies" },
                { label: "Submit a Remedy", href: "/submit" },
                { label: "Heritage Challenge", href: "/challenge" },
                { label: "Leaderboard", href: "/leaderboard" }
              ].map((link) => (
                <Link key={link.href} href={`/${locale}${link.href}`} className="text-[#8fa898] hover:text-[#C9A84C] transition">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">Company</p>
            <div className="mt-4 grid gap-3 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Pricing", href: "/pricing" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" }
              ].map((link) => (
                <Link key={link.href} href={`/${locale}${link.href}`} className="text-[#8fa898] hover:text-[#C9A84C] transition">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#1B4332] px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-[#5c7a5e] md:flex-row md:items-center md:justify-between">
          <p>This information is not intended to diagnose, treat, cure, or prevent any disease.</p>
          <p>© 2026 Ancient African Secrets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
