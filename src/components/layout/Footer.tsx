"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export function Footer() {
  const locale = useLocale();
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href={`/${locale}`} className="logo" style={{ marginBottom: "var(--space-2)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
              <Image src="/images/logo.png" alt="The Roots Database" width={28} height={28} style={{ objectFit: "contain" }} />
              <div className="logo-text" style={{ fontSize: "var(--text-base)" }}>
                The Roots<span>Database</span>
              </div>
            </Link>
            <p>Preserving ancestral wisdom through science and community. A project by Ancient African Secrets.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <Link href={`/${locale}/remedies`}>{tNav("browse")}</Link>
            <Link href={`/${locale}/submit`}>{tNav("submit")}</Link>
            <Link href={`/${locale}/challenge`}>{tNav("challenge")}</Link>
            <Link href={`/${locale}/leaderboard`}>{tNav("leaderboard")}</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href={`/${locale}/about`}>{tNav("about")}</Link>
            <Link href={`/${locale}/pricing`}>{tNav("pricing")}</Link>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>(c) 2026 Ancient African Secrets. All rights reserved.</p>
          <span>A project by Ancient African Secrets</span>
        </div>
        <p className="footer-disclaimer">
          {tFooter("disclaimer")} This platform does not endorse or guarantee the efficacy or safety of any remedy listed.
        </p>
      </div>
    </footer>
  );
}
