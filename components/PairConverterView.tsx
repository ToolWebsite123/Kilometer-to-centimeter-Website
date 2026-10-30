"use client";

import { useState } from "react";
import Link from "next/link";
import Converter from "@/components/Converter";
import ConversionChart from "@/components/ConversionChart";
import PopularConversions from "@/components/PopularConversions";
import FAQSection from "@/components/FAQSection";
import { buildPairFAQs } from "@/lib/faqs";
import { siteUrl } from "@/lib/site";
import { UnitPair } from "@/lib/unit-pairs";
import { CategoryId } from "@/lib/categories";
import styles from "@/app/page.module.css";

interface PairConverterViewProps {
  pair: UnitPair;
  category: CategoryId;
  categoryName: string;
  categoryUrl: string;
}

export default function PairConverterView({
  pair,
  category,
  categoryName,
  categoryUrl,
}: PairConverterViewProps) {
  const [fromValue, setFromValue] = useState<number | null>(1);

  return (
    <div className="container" style={{ maxWidth: "1200px" }}>
      <div className={styles.pageLayout}>
        <div className={styles.mainColumn}>
          <span className="editorial-tag">Programmatic Conversion</span>
          <h1>{pair.fromLabel} to {pair.toLabel} Converter</h1>
          <p className="lead">{pair.description}</p>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: `${pair.fromLabel} to ${pair.toLabel} Converter`,
                url: siteUrl(`/${category}/${pair.slug}`),
                applicationCategory: "UtilitiesApplication",
                operatingSystem: "Any",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
                  { "@type": "ListItem", position: 2, name: categoryName, item: siteUrl(categoryUrl) },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: `${pair.fromLabel} to ${pair.toLabel}`,
                    item: siteUrl(`/${category}/${pair.slug}`),
                  },
                ],
              }),
            }}
          />

          <Converter
            key={pair.slug}
            initialCategory={category}
            fromUnit={pair.fromUnit}
            toUnit={pair.toUnit}
            fromLabel={pair.fromLabel}
            toLabel={pair.toLabel}
            factor={pair.factor}
            showTabs={true}
            title={`${pair.fromLabel} to ${pair.toLabel} Instant Calculator`}
            onFromValueChange={setFromValue}
          />

          <section className="editorial-card" style={{ marginTop: "2.5rem" }}>
            <h2>How to Convert {pair.fromLabel} to {pair.toLabel}</h2>
            {category === "temperature" ? (
              <p>
                To convert <strong>{pair.fromLabel} ({pair.fromUnit})</strong> to <strong>{pair.toLabel} ({pair.toUnit})</strong>, you can use the interactive calculator above for exact scale offset conversions.
              </p>
            ) : (
              <>
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
                {pair.note && <p>{pair.note}</p>}
                <p style={{ fontFamily: "var(--font-mono)", background: "var(--paper)", padding: "1rem", border: "1px solid var(--line)" }}>
                  Value in {pair.fromLabel} = Value in {pair.toLabel} ÷ <strong>{pair.factor}</strong>
                </p>
              </>
            )}
          </section>

          <ConversionChart
            category={category}
            fromUnit={pair.fromUnit}
            toUnit={pair.toUnit}
            factor={pair.factor}
            title={`${pair.fromLabel} to ${pair.toLabel} Conversion Chart`}
            subtitle={
              category === "temperature"
                ? `Reference lookup table for various conversions from 0 ${pair.fromUnit} up to 1000 ${pair.fromUnit} in 5 ${pair.fromUnit} increments.`
                : `Reference lookup table for various conversions from 1 ${pair.fromUnit} up to 1000 ${pair.fromUnit}.`
            }
            highlightValue={fromValue}
          />

          <FAQSection
            faqs={buildPairFAQs(pair, category)}
            intro={`Common questions about converting ${pair.fromLabel.toLowerCase()} to ${pair.toLabel.toLowerCase()}.`}
          />

          <p style={{ marginTop: "2rem" }}>
            ← <Link href={categoryUrl}>Return to {categoryName}</Link>
          </p>
        </div>

        <aside className={styles.sidebarColumn}>
          <PopularConversions currentSlug={pair.slug} category={category} />
        </aside>
      </div>
    </div>
  );
}
