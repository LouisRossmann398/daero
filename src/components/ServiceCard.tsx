import Link from "next/link";
import type { Service } from "@/content/site";
import { ServiceIcon, ArrowRightIcon } from "./Icons";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/leistungen/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <ServiceIcon slug={service.slug} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-ink-900">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
        {service.short}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
        Mehr erfahren
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
