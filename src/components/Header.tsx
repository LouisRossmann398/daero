"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { services } from "@/content/site";

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-ink-200 bg-white/90 backdrop-blur"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo priority />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/leistungen"
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/leistungen")
                  ? "text-brand-700"
                  : "text-ink-700 hover:text-brand-700"
              }`}
            >
              Leistungen
              <svg
                className={`h-3.5 w-3.5 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-72 pt-2">
                <ul className="overflow-hidden rounded-xl border border-ink-200 bg-white p-2 shadow-lg shadow-ink-900/5">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/leistungen/${s.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(l.href)
                  ? "text-brand-700"
                  : "text-ink-700 hover:text-brand-700"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/kontakt"
            className="ml-2 inline-flex items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Beraten lassen
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink-700 md:hidden"
          aria-label="Menü öffnen"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-ink-200 bg-white md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            <Link
              href="/leistungen"
              className="rounded-md px-3 py-2 text-sm font-semibold text-ink-900"
            >
              Leistungen
            </Link>
            <ul className="mb-2 ml-3 flex flex-col gap-0.5 border-l border-ink-200 pl-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/leistungen/${s.slug}`}
                    className="block rounded-md px-3 py-2 text-sm text-ink-600 hover:text-brand-700"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            {navLinks.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-700"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              Beraten lassen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
