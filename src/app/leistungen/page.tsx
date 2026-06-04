import type { Metadata } from "next";
import { services } from "@/content/site";
import ServiceCard from "@/components/ServiceCard";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Datenbankentwicklung, Softwareentwicklung, Geschäftsprozessautomatisierung, Cloud-Lösungen, Datenmanagement und Beratung – die Leistungen der DAERO GmbH.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        title="Unsere Leistungen"
        subtitle="Von der Datenbank über maßgeschneiderte Individualsoftware bis hin zu Cloud, Datenmanagement und Beratung – wir bringen Hardware, Software und Infrastruktur in Einklang."
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Leistungen" }]}
      />

      <section className="section-py">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
