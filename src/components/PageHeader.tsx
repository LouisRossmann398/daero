import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-200 bg-ink-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/25 blur-[100px]"
      />
      <div className="container-page relative py-16 sm:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-ink-400">
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink-300">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span className="text-ink-600">/</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-300">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
