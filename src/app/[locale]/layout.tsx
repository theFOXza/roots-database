import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Lora, Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <div className={cn(lora.variable, inter.variable, playfair.variable)}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Navbar />
        <main className="min-h-screen bg-parchment">{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
