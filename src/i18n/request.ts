import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "@/i18n/routing";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locales.includes(locale as typeof locales[number])
    ? (locale as typeof locales[number])
    : defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default
  };
});
