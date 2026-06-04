import Image from "next/image";
import { LOGO } from "@/lib/brand";

const variantClass = {
  header: "h-9 w-auto max-w-[11rem] sm:h-10 sm:max-w-[13rem]",
  footer: "h-10 w-auto max-w-[12rem] sm:h-11 sm:max-w-[14rem]",
  hero: "h-auto w-full max-w-md sm:max-w-lg",
  feature: "h-auto w-full max-w-sm sm:max-w-md",
  inline: "h-8 w-auto max-w-[10rem]",
} as const;

export type LogoVariant = keyof typeof variantClass;

type Props = {
  variant?: LogoVariant;
  priority?: boolean;
  className?: string;
};

export default function DaeroLogoImage({
  variant = "header",
  priority = false,
  className = "",
}: Props) {
  return (
    <Image
      src={LOGO.src}
      alt={LOGO.alt}
      width={LOGO.width}
      height={LOGO.height}
      priority={priority}
      className={`object-contain object-left ${variantClass[variant]} ${className}`.trim()}
    />
  );
}

/** Centered logo in a padded panel (hero, about sections) */
export function DaeroLogoPanel({
  variant = "feature",
  className = "",
  panelClassName = "",
}: {
  variant?: Exclude<LogoVariant, "header" | "footer" | "inline">;
  className?: string;
  panelClassName?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl p-8 sm:p-10 ${panelClassName}`.trim()}
    >
      <DaeroLogoImage variant={variant} className={`mx-auto object-center ${className}`} />
    </div>
  );
}
