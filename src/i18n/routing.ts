export const locales = ["en", "es", "fr", "pt", "sw", "af"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
