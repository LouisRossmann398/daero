import Link from "next/link";
import Logo from "./Logo";
import { company, services } from "@/content/site";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-ink-800 bg-ink-950 text-ink-300">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo onLightBackground={false} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
            Ihr IT-Dienstleister im Raum München – maßgeschneiderte Datenbank-
            und Softwarelösungen für den Mittelstand.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Leistungen
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/leistungen/${s.slug}`}
                  className="text-ink-400 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Unternehmen
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/ueber-uns" className="text-ink-400 hover:text-white">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="text-ink-400 hover:text-white">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="text-ink-400 hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="text-ink-400 hover:text-white">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>
                {company.name}
                <br />
                {company.address.street}
                <br />
                {company.address.zip} {company.address.city}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-4 w-4 shrink-0 text-brand-400" />
              <a href={company.phoneHref} className="hover:text-white">
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="h-4 w-4 shrink-0 text-brand-400" />
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>
                {company.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-500 sm:flex-row">
          <p>
            © {year} {company.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-ink-300">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-ink-300">
              Datenschutz
            </Link>
            <Link href="/kontakt" className="hover:text-ink-300">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
