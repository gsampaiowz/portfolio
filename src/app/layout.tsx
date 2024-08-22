import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./../providers/theme-provider";
import Footer from "@/components/footer";
import CustomCursor from "@/components/customCursor";
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
      <body className={mainFont.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <CustomCursor />
          <Header />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
