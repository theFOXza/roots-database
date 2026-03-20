"use client";

import Link from "next/link";
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
            <Link href={`/${locale}`} className="logo" style={{ marginBottom: "var(--space-2)" }}>
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="28" height="28">
                <path d="M18 3C18 3 12 10 12 18c0 4 1.5 7 3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 3C18 3 24 10 24 18c0 4-1.5 7-3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 3v30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
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
          <a href="https://www.perplexity.ai/computer" target="_blank" rel="noopener noreferrer">
            Created with Perplexity Computer
          </a>
        </div>
        <p className="footer-disclaimer">
          {tFooter("disclaimer")} This platform does not endorse or guarantee the efficacy or safety of any remedy listed.
        </p>
      </div>
    </footer>
  );
}
