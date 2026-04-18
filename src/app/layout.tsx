import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const financeFont = EB_Garamond({
  variable: "--font-finance",
  subsets: ["latin"],
});

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-name",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aakash K | Strategic Financial Insights",
  description: "Portfolio of Aakash K, MBA Finance Student focusing on corporate finance, investment banking, and capital markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${financeFont.variable} ${montserrat.variable} font-sans antialiased bg-[#121212] text-white`}>
        {children}
      </body>
    </html>
  );
}
