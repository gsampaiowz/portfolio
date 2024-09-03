import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import ThemeProvider from "@/providers/theme-provider";
import CustomCursor from "@/components/customCursor";
import dynamic from "next/dynamic";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import Footer from "@/components/footer";
import { routing } from "@/i18n/routing";

const mainFont = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G. Sampaio",
  description: "Gabriel Sampaio - Software Developer",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  //STATIC RENDERING
  unstable_setRequestLocale(locale);

  //DYNAMIC HEADER FOR NOT SSR
  const Header = dynamic(() => import("@/components/header"), {
    ssr: false,
  });

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={mainFont.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <CustomCursor />

            <Header />

            {children}

            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
