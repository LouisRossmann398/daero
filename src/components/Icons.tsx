import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function DatabaseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13 6-2 12" />
    </svg>
  );
}

export function GearsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="9" r="3" />
      <path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.2 4.2l1.4 1.4M12.4 12.4l1.4 1.4M4.2 13.8l1.4-1.4M12.4 5.6l1.4-1.4" />
      <circle cx="17" cy="17" r="2" />
      <path d="M17 13v1.5M17 19.5V21M13 17h1.5M19.5 17H21" />
    </svg>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97 6 6 0 0 0-11.6-1.2A4 4 0 0 0 6.5 19h11Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 15a3 3 0 0 1-3 3H8l-4 3V6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v9Z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

const map: Record<string, (p: IconProps) => React.JSX.Element> = {
  datenbankentwicklung: DatabaseIcon,
  softwareentwicklung: CodeIcon,
  geschaeftsprozessautomatisierung: GearsIcon,
  "cloud-loesungen": CloudIcon,
  datenmanagement: ShieldIcon,
  beratung: ChatIcon,
};

export function ServiceIcon({
  slug,
  ...props
}: IconProps & { slug: string }) {
  const Cmp = map[slug] ?? CodeIcon;
  return <Cmp {...props} />;
}
