/** DAERO wordmark, 1024×181 px */
export const LOGO = {
  src: "/daero-logo.png",
  alt: "DAERO GmbH – Business Software",
  width: 1024,
  height: 181,
} as const;

/** Same logo with white background – for header and light sections */
export const LOGO_ON_LIGHT = {
  ...LOGO,
  src: "/daero-logo-light.png",
} as const;
