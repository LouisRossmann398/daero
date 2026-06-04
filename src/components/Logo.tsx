import Link from "next/link";
import DaeroLogoImage from "./DaeroLogoImage";

export default function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex shrink-0 transition-opacity hover:opacity-90"
      aria-label="DAERO GmbH – Startseite"
    >
      <DaeroLogoImage variant="header" priority={priority} />
    </Link>
  );
}
