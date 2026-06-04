import Image from "next/image";
import { LOGO, LOGO_ON_LIGHT } from "@/lib/brand";

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
  /** Use white-background asset (header, panels on white) */
  onLightBackground?: boolean;
  className?: string;
};

export default function DaeroLogoImage({
  variant = "header",
  priority = false,
  onLightBackground = false,
  className = "",
}: Props) {
  const asset = onLightBackground ? LOGO_ON_LIGHT : LOGO;

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
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
  onLightBackground = true,
}: {
  variant?: Exclude<LogoVariant, "header" | "footer" | "inline">;
  className?: string;
  panelClassName?: string;
  onLightBackground?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl p-8 sm:p-10 ${panelClassName}`.trim()}
    >
      <DaeroLogoImage
        variant={variant}
        onLightBackground={onLightBackground}
        className={`mx-auto object-center ${className}`}
      />
    </div>
  );
}
