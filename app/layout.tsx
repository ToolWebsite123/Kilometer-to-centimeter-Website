import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kgtolbsconverter.org"),
  title: {
    default: "Free Unit Converter - Length, Weight, Temperature, Volume & Time",
    template: "%s | Free Unit Converter",
  },
  description:
    "Fast, accurate online multi-unit converter for length, weight, temperature, volume, and time. Features real-time calculations and interactive conversion charts.",
  keywords: [
    "unit converter",
    "kg to lbs",
    "weight converter",
    "length converter",
    "temperature converter",
    "volume converter",
    "time converter",
    "conversion chart",
  ],
  authors: [{ name: "Unit Converter Editorial Team" }],
  creator: "Unit Converter Utility",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kgtolbsconverter.org",
    title: "Free Unit Converter - Length, Weight, Temperature, Volume & Time",
    description:
      "Instant multi-category conversion between length, weight, temperature, volume, and time units with full accuracy and reference tables.",
    siteName: "Free Unit Converter",
  },
  twitter: {
    card: "summary",
    title: "Free Unit Converter",
    description: "Instant real-time conversion across Length, Weight, Temperature, Volume & Time.",
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
