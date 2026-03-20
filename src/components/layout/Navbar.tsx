"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";

const navLinks = [
  { label: "Browse", href: "/remedies" },
  { label: "Heritage Challenge", href: "/challenge" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" }
];

export function Navbar() {
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-40 bg-[#0d2818]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="The Roots Database logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-xl text-[#F8F4ED]">THE ROOTS</span>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A84C]">DATABASE</span>
          </div>
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="text-sm text-[#d4ccb8] transition hover:text-[#C9A84C]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/auth/sign-in`}
            className="text-sm text-[#d4ccb8] transition hover:text-[#C9A84C]"
          >
            Sign In
          </Link>
          <Link
            href={`/${locale}/submit`}
            className="bg-[#C9A84C] px-5 py-2 text-sm font-semibold text-[#1B4332] transition hover:bg-[#e8b84b]"
          >
            Submit
          </Link>
        </nav>
      </div>
    </header>
  );
}
