import Link from "next/link";
import { intro, services, about, company } from "@/content/site";
import ServiceCard from "@/components/ServiceCard";
import ContactCTA from "@/components/ContactCTA";
import { ArrowRightIcon } from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-600/30 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-20 h-[24rem] w-[24rem] rounded-full bg-accent/15 blur-[120px]"
        />

        <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-brand-200">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              IT-Dienstleister im Raum München
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Maßgeschneiderte{" "}
              <span className="bg-gradient-to-r from-brand-300 to-accent bg-clip-text text-transparent">
                Software & Datenbanken
              </span>{" "}
              für den Mittelstand
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              {intro.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-500"
              >
                Unsere Leistungen
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Beraten lassen
              </Link>
            </div>
          </div>

          {/* Hero visual placeholder (replace with real image later) */}
          <div className="animate-fade-up lg:justify-self-end">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-6 shadow-2xl">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="mt-5 space-y-2.5 font-mono text-xs">
                <p className="text-brand-300">
                  <span className="text-ink-500">$</span> daero build --solution
                </p>
                <p className="text-ink-400">→ Analyse der IT-Strukturen …</p>
                <p className="text-ink-400">→ Datenbank-Modell erstellt</p>
                <p className="text-ink-400">→ Individualsoftware generiert</p>
                <p className="text-accent">✓ Erfolgreich bereitgestellt</p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {["DB", "API", "Cloud"].map((t) => (
                  <div
                    key={t}
                    className="rounded-lg border border-white/10 bg-white/5 py-3 text-center text-xs font-semibold text-brand-200"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="section-py">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Über DAERO
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Ihre passgenaue IT-Lösung – ganzheitlich gedacht
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-ink-600">
            {intro.paragraphs.slice(0, 3).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Mehr über uns erfahren
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-py bg-ink-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Das bieten wir an
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Unsere Leistungen
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Von der Datenbank über Individualsoftware bis hin zu Cloud und
              Datensicherung – alles aus einer Hand.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Das sind wir */}
      <section className="section-py">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              {about.heading}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Ihr Rundum-Sorglos-Partner für IT
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-600">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Placeholder visual */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-ink-900">
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 30%, #fff 0, transparent 40%)",
                }}
              />
              <div className="absolute inset-0 grid place-items-center p-8 text-center">
                <div>
                  <p className="text-5xl font-bold text-white">DAERO</p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-brand-200">
                    {company.location}
                  </p>
                  <p className="mt-6 text-xs text-brand-100/70">
                    [ Platzhalter – hier kann später ein Team- oder
                    Standortbild eingefügt werden ]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
