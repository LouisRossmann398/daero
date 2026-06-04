import Link from "next/link";
import { intro, services, about } from "@/content/site";
import ServiceCard from "@/components/ServiceCard";
import ContactCTA from "@/components/ContactCTA";
import DaeroLogoImage, { DaeroLogoPanel } from "@/components/DaeroLogoImage";
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

          <div className="animate-fade-up lg:justify-self-end">
            <DaeroLogoPanel
              variant="hero"
              panelClassName="mx-auto w-full max-w-lg border border-white/10 bg-white/95 shadow-2xl shadow-brand-900/20"
            />
          </div>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="section-py">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="mb-6 w-fit rounded-xl border border-ink-200 bg-white p-4">
              <DaeroLogoImage variant="inline" onLightBackground />
            </div>
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

          <div className="order-1 lg:order-2">
            <DaeroLogoPanel
              variant="feature"
              panelClassName="min-h-[280px] w-full border border-ink-200 bg-gradient-to-br from-brand-50 to-white"
            />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
