import Link from "next/link";
import DaeroLogoImage from "./DaeroLogoImage";

type LogoProps = {
  priority?: boolean;
  /** Header / light surfaces use white-background logo */
  onLightBackground?: boolean;
};

export default function Logo({
  priority = false,
  onLightBackground = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      className="group inline-flex shrink-0 rounded-lg bg-white px-2 py-1 transition-opacity hover:opacity-90"
      aria-label="DAERO GmbH – Startseite"
    >
      <DaeroLogoImage
        variant="header"
        priority={priority}
        onLightBackground={onLightBackground}
      />
    </Link>
  );
}
