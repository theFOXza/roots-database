"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function Navbar() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  const navLinks = [
    { label: t("browse"), href: "/remedies", page: "browse" },
    { label: t("challenge"), href: "/challenge", page: "challenge" },
    { label: t("leaderboard"), href: "/leaderboard", page: "leaderboard" },
    { label: t("pricing"), href: "/pricing", page: "pricing" },
    { label: t("about"), href: "/about", page: "about" }
  ];

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  const isActive = (href: string) => {
    if (href === "/" && pathname === `/${locale}`) return true;
    return pathname === `/${locale}${href}`;
  };

  return (
    <>
      <header className={`site-header${isScrolled ? " scrolled" : ""}`} id="siteHeader">
        <div className="header-inner">
          <Link href={`/${locale}`} className="logo" aria-label="The Roots Database - Home">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M18 3C18 3 12 10 12 18c0 4 1.5 7 3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M18 3C18 3 24 10 24 18c0 4-1.5 7-3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M18 3v30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M10 14c2.5 1 5.5 1 8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <path d="M18 14c2.5 1 5.5 1 8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <path d="M9 20c3 1.2 6 1.2 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <path d="M18 20c3 1.2 6 1.2 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <circle cx="18" cy="33" r="1.5" fill="currentColor" opacity="0.4" />
            </svg>
            <div className="logo-text">
              The Roots<span>Database</span>
            </div>
          </Link>

          <nav className="nav-desktop" aria-label="Main navigation">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className={`nav-link${isActive(item.href) ? " active" : ""}`}
                data-page={item.page}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
            <Link
              href={`/${locale}/auth/sign-in`}
              className={`nav-link${isActive("/auth/sign-in") ? " active" : ""}`}
              data-page="signin"
            >
              {t("signIn")}
            </Link>
            <Link
              href={`/${locale}/submit`}
              className="btn btn-primary btn-sm"
              data-page="submit"
            >
              {t("submit")}
            </Link>
            <button
              className="nav-mobile-toggle"
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setIsMobileOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav${isMobileOpen ? " open" : ""}`} id="mobileNav">
        <button
          className="mobile-nav-close"
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsMobileOpen(false)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <Link href={`/${locale}`} onClick={() => setIsMobileOpen(false)}>
          {t("home")}
        </Link>
        <Link href={`/${locale}/remedies`} onClick={() => setIsMobileOpen(false)}>
          {t("browse")}
        </Link>
        <Link href={`/${locale}/challenge`} onClick={() => setIsMobileOpen(false)}>
          {t("challenge")}
        </Link>
        <Link href={`/${locale}/leaderboard`} onClick={() => setIsMobileOpen(false)}>
          {t("leaderboard")}
        </Link>
        <Link href={`/${locale}/pricing`} onClick={() => setIsMobileOpen(false)}>
          {t("pricing")}
        </Link>
        <Link href={`/${locale}/about`} onClick={() => setIsMobileOpen(false)}>
          {t("about")}
        </Link>
        <Link href={`/${locale}/submit`} onClick={() => setIsMobileOpen(false)}>
          {t("submit")}
        </Link>
        <Link href={`/${locale}/auth/sign-in`} onClick={() => setIsMobileOpen(false)}>
          {t("signIn")}
        </Link>
      </div>
    </>
  );
}
