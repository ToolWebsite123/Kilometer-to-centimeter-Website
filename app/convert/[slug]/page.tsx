import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { unitPairs } from "@/lib/unit-pairs";
import Converter from "@/components/Converter";
import ConversionChart from "@/components/ConversionChart";
import PopularConversions from "@/components/PopularConversions";
import styles from "@/app/page.module.css";
import { CategoryId, CATEGORIES } from "@/lib/categories";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return unitPairs.map((pair) => ({
    slug: pair.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const pair = unitPairs.find((p) => p.slug === params.slug);
  if (!pair) {
    return {};
  }

  const title = `Convert ${pair.fromLabel} to ${pair.toLabel} (${pair.fromUnit} to ${pair.toUnit})`;
  const description = `${pair.description} Check the exact mathematical formulas, conversion factors, and lookup charts.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://kgtolbsconverter.org/convert/${pair.slug}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function ConvertPage({ params }: PageProps) {
  const pair = unitPairs.find((p) => p.slug === params.slug);

  if (!pair) {
    notFound();
  }

  const getCategoryForUnit = (unitId: string): CategoryId => {
    for (const catId of Object.keys(CATEGORIES) as CategoryId[]) {
      if (CATEGORIES[catId].units.some((u) => u.id === unitId)) {
        return catId;
      }
    }
    return "weight";
  };
  const activeCategory: CategoryId = getCategoryForUnit(pair.fromUnit);

  return (
    <div className="container" style={{ maxWidth: "1200px" }}>
      <div className={styles.pageLayout}>
        <div className={styles.mainColumn}>
          <span className="editorial-tag">Programmatic Conversion</span>
          <h1>{pair.fromLabel} to {pair.toLabel} Converter</h1>
          <p className="lead">
            {pair.description}
          </p>

          {/* Tabbed Converter Component */}
          <Converter
            key={pair.slug}
            initialCategory={activeCategory}
            fromUnit={pair.fromUnit}
            toUnit={pair.toUnit}
            fromLabel={pair.fromLabel}
            toLabel={pair.toLabel}
            factor={pair.factor}
            showTabs={true}
            title={`${pair.fromLabel} to ${pair.toLabel} Instant Calculator`}
          />

          {/* Conversion formula explanation */}
          <section className="editorial-card" style={{ marginTop: "2.5rem" }}>
            <h2>How to Convert {pair.fromLabel} to {pair.toLabel}</h2>
            <p>
              To convert <strong>{pair.fromLabel} ({pair.fromUnit})</strong> to <strong>{pair.toLabel} ({pair.toUnit})</strong>, you can use the conversion factor of <strong>{pair.factor}</strong>.
            </p>
            <p>
              Multiply the amount of {pair.fromLabel.toLowerCase()} by {pair.factor} to get the corresponding value in {pair.toLabel.toLowerCase()}:
            </p>
            <p style={{ fontFamily: "var(--font-mono)", background: "var(--paper)", padding: "1rem", border: "1px solid var(--line)" }}>
              Value in {pair.toLabel} = Value in {pair.fromLabel} × <strong>{pair.factor}</strong>
            </p>
            <p>
              Conversely, to convert from {pair.toLabel.toLowerCase()} to {pair.fromLabel.toLowerCase()}, you can divide the value by {pair.factor}:
            </p>
            <p style={{ fontFamily: "var(--font-mono)", background: "var(--paper)", padding: "1rem", border: "1px solid var(--line)" }}>
              Value in {pair.fromLabel} = Value in {pair.toLabel} ÷ <strong>{pair.factor}</strong>
            </p>
          </section>

          {/* ConversionChart Component */}
          <ConversionChart
            category={activeCategory}
            fromUnit={pair.fromUnit}
            toUnit={pair.toUnit}
            factor={pair.factor}
            title={`${pair.fromLabel} to ${pair.toLabel} Conversion Chart`}
            subtitle={`Reference lookup table for various conversions from 1 ${pair.fromUnit} up to 100 ${pair.fromUnit}.`}
          />

          <p style={{ marginTop: "2rem" }}>
            ← <Link href="/">Return to Main Multi-Unit Converter</Link>
          </p>
        </div>

        {/* Right Sidebar */}
        <aside className={styles.sidebarColumn}>
          <PopularConversions currentSlug={pair.slug} />
        </aside>
      </div>
    </div>
  );
}
