import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Provider } from "../provider";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <Provider>{children}</Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
