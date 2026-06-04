import Link from "next/link";
import { company } from "@/content/site";
import { ArrowRightIcon, PhoneIcon } from "./Icons";

export default function ContactCTA() {
  return (
    <section className="section-py">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Wir helfen Ihnen gerne!
            </h2>
            <p className="mt-4 text-lg text-brand-100">
              Lassen Sie uns gemeinsam eine maßgeschneiderte IT-Lösung für Ihr
              Unternehmen entwickeln. Sprechen Sie uns an – wir beraten Sie
              ganzheitlich.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
              >
                Jetzt beraten lassen
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <PhoneIcon className="h-4 w-4" />
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
