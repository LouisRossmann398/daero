import type { Metadata } from "next";
import { intro, about, company } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";
import { DaeroLogoPanel } from "@/components/DaeroLogoImage";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Die DAERO GmbH – Ihr Rundum-Sorglos-Partner für maßgeschneiderte, datenbankbasierte Software, Hosting und Datensicherheit im Raum München.",
};

const stats = [
  { value: "Mittelstand", label: "Unser Fokus" },
  { value: "Maschinenbau", label: "Spezialisierung" },
  { value: "Petershausen", label: "Standort" },
  { value: "Microsoft", label: "Technologie-Basis" },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        title="Das sind wir"
        subtitle="Mit dem Rundum-Sorglos-Angebot der DAERO GmbH ist Ihr unternehmerischer Erfolg garantiert."
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Über uns" }]}
      />

      <section className="section-py">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-ink-700">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {intro.paragraphs.slice(3).map((p, i) => (
              <p key={`extra-${i}`} className="text-base text-ink-600">
                {p}
              </p>
            ))}
          </div>

          <aside className="space-y-4">
            <DaeroLogoPanel
              variant="feature"
              panelClassName="border border-ink-200 bg-white"
            />
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-ink-200 bg-ink-50 p-5"
                >
                  <p className="text-lg font-bold text-ink-900">{s.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-ink-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-ink-200 bg-white p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
                Das zeichnet uns aus
              </h2>
              <ul className="mt-4 space-y-3">
                {about.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-ink-700"
                  >
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
          </aside>
        </div>
      </section>

      {/* Standort strip */}
      <section className="border-y border-ink-200 bg-ink-50">
        <div className="container-page py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Unser Standort
          </p>
          <p className="mt-2 text-2xl font-bold text-ink-900">
            {company.address.street}, {company.address.zip}{" "}
            {company.address.city}
          </p>
          <p className="mt-2 text-ink-600">
            Hosting, Backup-Service und persönliche Datensicherung – alles an
            einem Ort.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
