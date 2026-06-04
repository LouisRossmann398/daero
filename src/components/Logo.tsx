import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="DAERO GmbH – Startseite"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-sm transition-transform group-hover:scale-105">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-bold tracking-tight ${
            light ? "text-white" : "text-ink-900"
          }`}
        >
          DAERO
        </span>
        <span
          className={`text-[10px] font-medium uppercase tracking-[0.18em] ${
            light ? "text-brand-200" : "text-brand-600"
          }`}
        >
          GmbH
        </span>
      </span>
    </Link>
  );
}
