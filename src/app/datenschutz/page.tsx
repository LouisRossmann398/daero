import type { Metadata } from "next";
import { company } from "@/content/site";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der DAERO GmbH.",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        title="Datenschutz"
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Datenschutz" }]}
      />

      <section className="section-py">
        <div className="container-page max-w-3xl">
          <div className="space-y-8 text-ink-700">
            <div>
              <h2 className="text-lg font-semibold text-ink-900">
                1. Datenschutz auf einen Blick
              </h2>
              <p className="mt-3 leading-relaxed">
                Datenschutz und Datensicherheit stehen bei der DAERO GmbH an
                erster Stelle. Im Folgenden erhalten Sie einen Überblick darüber,
                was mit Ihren personenbezogenen Daten geschieht, wenn Sie diese
                Website besuchen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink-900">
                2. Verantwortliche Stelle
              </h2>
              <p className="mt-3 leading-relaxed">
                {company.name}
                <br />
                {company.address.street}
                <br />
                {company.address.zip} {company.address.city}
                <br />
                Telefon: {company.phone}
                <br />
                E-Mail:{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="text-brand-600 hover:text-brand-700"
                >
                  {company.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink-900">
                3. Erhebung von Daten auf dieser Website
              </h2>
              <p className="mt-3 leading-relaxed text-ink-500">
                [ Diese Website verwendet derzeit kein Kontaktformular und
                keine Tracking-Dienste. Die Details zur Server-Logfile-Erhebung,
                zu eingesetzten Diensten und zu Ihren Rechten als betroffene
                Person sind vor der Veröffentlichung zu ergänzen. ]
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink-900">
                4. Ihre Rechte
              </h2>
              <p className="mt-3 leading-relaxed">
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
                Löschung und Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten sowie ein Widerspruchs- und
                Beschwerderecht bei der zuständigen Aufsichtsbehörde.
              </p>
            </div>

            <p className="border-t border-ink-200 pt-6 text-sm text-ink-500">
              Hinweis: Dies ist ein vorläufiges Datenschutz-Gerüst. Bitte lassen
              Sie die Datenschutzerklärung vor der Veröffentlichung
              rechtssicher vervollständigen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
