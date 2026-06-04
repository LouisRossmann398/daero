import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { LegalSectionBlocks } from "@/components/LegalBlocks";
import { impressumSections } from "@/content/legal";

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
          <div className="space-y-10 text-ink-700">
            {impressumSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold text-ink-900">
                  {section.title}
                </h2>
                <div className="mt-4">
                  <LegalSectionBlocks blocks={section.blocks} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
