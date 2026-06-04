import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { LegalSectionBlocks, LegalSubsection } from "@/components/LegalBlocks";
import { datenschutzSections } from "@/content/legal";

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
          <div className="space-y-10 text-ink-700">
            {datenschutzSections.map((section) => (
              <article key={section.title}>
                <h2 className="text-lg font-semibold text-ink-900">
                  {section.title}
                </h2>

                {section.blocks && section.blocks.length > 0 && (
                  <div className="mt-4">
                    <LegalSectionBlocks blocks={section.blocks} />
                  </div>
                )}

                {section.subsections && (
                  <div className="mt-6 space-y-6">
                    {section.subsections.map((sub) => (
                      <LegalSubsection
                        key={sub.title}
                        title={sub.title}
                        blocks={sub.blocks}
                      />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
