import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./../providers/theme-provider";
import dynamic from "next/dynamic";

const mainFont = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G. Sampaio",
  description: "Gabriel Sampaio - Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Header = dynamic(() => import("@/components/header"), {
    ssr: false,
  });

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        suppressContentEditableWarning={true}
        className={mainFont.className}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
