import type { Metadata } from "next";
import { company } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import DaeroLogoImage from "@/components/DaeroLogoImage";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie die DAERO GmbH in Petershausen – per Telefon, E-Mail oder vor Ort. Wir beraten Sie gerne ganzheitlich.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        title="Wir helfen Ihnen gerne!"
        subtitle="Sie haben Fragen oder möchten ein Projekt besprechen? Kontaktieren Sie uns – wir freuen uns auf Ihre Nachricht."
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
      />

      <section className="section-py">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-bold text-ink-900">
              So erreichen Sie uns
            </h2>
            <p className="mt-3 text-ink-600">
              Rufen Sie uns an oder schreiben Sie uns eine E-Mail – wir melden
              uns schnellstmöglich bei Ihnen zurück.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Büro</p>
                  <p className="text-ink-600">
                    {company.name}
                    <br />
                    {company.address.street}
                    <br />
                    {company.address.zip} {company.address.city}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Telefon</p>
                  <a
                    href={company.phoneHref}
                    className="text-ink-600 hover:text-brand-700"
                  >
                    {company.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">E-Mail</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-ink-600 hover:text-brand-700"
                  >
                    {company.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">
                    Öffnungszeiten
                  </p>
                  <div className="text-ink-600">
                    {company.hours.map((h) => (
                      <p key={h.days}>
                        {h.days}: {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Placeholder for future contact form */}
          <div className="rounded-2xl border border-ink-200 bg-ink-50 p-8">
            <div className="mb-6 flex justify-center rounded-xl border border-ink-200 bg-white p-5">
              <DaeroLogoImage variant="feature" className="max-w-xs" />
            </div>
            <h2 className="text-2xl font-bold text-ink-900">
              Schreiben Sie uns
            </h2>
            <p className="mt-3 text-ink-600">
              Ein Online-Kontaktformular steht in Kürze zur Verfügung. Bis dahin
              erreichen Sie uns am schnellsten telefonisch oder per E-Mail.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${company.email}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                <MailIcon className="h-4 w-4" />
                E-Mail schreiben
              </a>
              <a
                href={company.phoneHref}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-ink-300 bg-white px-6 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                <PhoneIcon className="h-4 w-4" />
                {company.phone}
              </a>
            </div>

            <p className="mt-6 text-xs text-ink-500">
              Hinweis: Datenschutz und Datensicherheit stehen bei der DAERO GmbH
              an erster Stelle. Ihre Angaben werden ausschließlich zur
              Bearbeitung Ihrer Anfrage verwendet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
