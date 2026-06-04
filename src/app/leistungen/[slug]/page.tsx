import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";
import { ServiceIcon, ArrowRightIcon } from "@/components/Icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Leistung nicht gefunden" };
  return {
    title: service.title,
    description: service.short,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.short}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Leistungen", href: "/leistungen" },
          { label: service.title },
        ]}
      />

      <section className="section-py">
        <div className="container-page grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* Main content */}
          <article>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
              <ServiceIcon slug={service.slug} className="h-7 w-7" />
            </span>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-700">
              {service.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <h2 className="text-lg font-semibold text-ink-900">
                Interesse an {service.title}?
              </h2>
              <p className="mt-2 text-sm text-ink-600">
                Wir analysieren Ihre Anforderungen und entwickeln eine
                passgenaue Lösung für Ihr Unternehmen.
              </p>
              <Link
                href="/kontakt"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Jetzt anfragen
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* Sidebar: other services */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-ink-200 bg-white p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
                Weitere Leistungen
              </h2>
              <ul className="mt-4 space-y-1">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/leistungen/${s.slug}`}
                      className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-brand-50"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink-100 text-ink-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                        <ServiceIcon slug={s.slug} className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-medium text-ink-800 group-hover:text-brand-700">
                        {s.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
