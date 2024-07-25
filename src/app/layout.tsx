import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./../providers/theme-provider";

const poppinsSemiBold = Poppins({ weight: "600", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G. Sampaio",
  description: "Gabriel Sampaio - Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ colorScheme: "light" }} className={poppinsSemiBold.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
