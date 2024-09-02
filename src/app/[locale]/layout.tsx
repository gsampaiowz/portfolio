import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import ThemeProvider from "@/providers/theme-provider";
import CustomCursor from "@/components/customCursor";
import dynamic from "next/dynamic";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const mainFont = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G. Sampaio",
  description: "Gabriel Sampaio - Software Developer",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const Header = dynamic(() => import("@/components/header"), {
    ssr: false,
  });

  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        suppressHydrationWarning={true}
        suppressContentEditableWarning={true}
        className={mainFont.className}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <CustomCursor />

            <Header />

            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
