import type { Metadata } from "next";
import { company } from "@/content/site";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der DAERO GmbH.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader
        title="Impressum"
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Impressum" }]}
      />

      <section className="section-py">
        <div className="container-page max-w-3xl">
          <div className="space-y-8 text-ink-700">
            <div>
              <h2 className="text-lg font-semibold text-ink-900">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-3 leading-relaxed">
                {company.name}
                <br />
                {company.address.street}
                <br />
                {company.address.zip} {company.address.city}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink-900">Vertreten durch</h2>
              <p className="mt-3 leading-relaxed text-ink-500">
                [ Geschäftsführer: bitte ergänzen ]
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink-900">Kontakt</h2>
              <p className="mt-3 leading-relaxed">
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
                Registereintrag
              </h2>
              <p className="mt-3 leading-relaxed text-ink-500">
                [ Registergericht, Handelsregisternummer (HRB) und
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG bitte
                ergänzen ]
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink-900">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-3 leading-relaxed text-ink-500">
                [ Name und Anschrift der verantwortlichen Person bitte ergänzen ]
              </p>
            </div>

            <p className="border-t border-ink-200 pt-6 text-sm text-ink-500">
              Hinweis: Dies ist ein vorläufiges Impressum-Gerüst. Bitte
              ergänzen Sie die rechtlich erforderlichen Angaben vor der
              Veröffentlichung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
