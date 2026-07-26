import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kgtolbsconverter.org"),
  title: {
    default: "Kg to Lbs Converter — Fast, Accurate Weight Conversion",
    template: "%s | Kg to Lbs Converter",
  },
  description:
    "Convert kilograms (kg) to pounds (lbs) instantly with high precision. Includes conversion charts, mathematical formulas, and detailed guides.",
  keywords: [
    "kg to lbs",
    "kilograms to pounds",
    "kg to lbs converter",
    "weight converter",
    "mass conversion",
    "70 kg to lbs",
    "1 kg to lbs",
    "conversion chart",
  ],
  authors: [{ name: "Kg to Lbs Editorial Team" }],
  creator: "Kg to Lbs Utility",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kgtolbsconverter.org",
    title: "Kg to Lbs Converter — Fast, Accurate Weight Conversion",
    description:
      "Instant two-way conversion between kilograms and pounds with full accuracy, reference tables, and step-by-step formulas.",
    siteName: "Kg to Lbs Converter",
  },
  twitter: {
    card: "summary",
    title: "Kg to Lbs Converter",
    description: "Instant two-way conversion between kilograms and pounds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
