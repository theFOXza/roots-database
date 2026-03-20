"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const footerLinks = [
  { label: "Browse Remedies", href: "/remedies" },
  { label: "Submit Remedy", href: "/submit" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" }
];

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="footer-heritage bg-ancient-bark text-parchment">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="font-heading text-2xl">The Roots Database</h2>
          <p className="mt-3 max-w-lg text-sm text-root-200">
            Ancient wisdom, verified. Community-sourced, science-backed.
          </p>
        </div>
        <div className="grid gap-2 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="text-root-200 hover:text-ancestral-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-root-800 bg-ancient-bark/90 px-6 py-6 text-xs text-root-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>{t("disclaimer")}</span>
          <span>© 2026 Ancient African Secrets. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
