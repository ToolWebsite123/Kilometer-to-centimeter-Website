import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getScaledValues } from "@/lib/scale-values";
import { formatNumber, KG_TO_LBS_FACTOR } from "@/lib/convert";
import Converter from "@/components/Converter";
import PopularConversions from "@/components/PopularConversions";

const LBS_TO_KG_FACTOR = 0.45359237;

export const dynamicParams = false;

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const values = getScaledValues();
  const params: { slug: string }[] = [];

  // kg-to-lbs (excluding 70)
  for (const val of values) {
    if (val !== 70) {
      params.push({ slug: `${val}-kg-to-lbs` });
    }
  }

  // lbs-to-kg (all values)
  for (const val of values) {
    params.push({ slug: `${val}-lbs-to-kg` });
  }

  return params;
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { slug } = params;

  if (slug.endsWith("-kg-to-lbs")) {
    const rawVal = slug.replace("-kg-to-lbs", "");
    const numVal = parseInt(rawVal, 10);
    if (isNaN(numVal) || numVal <= 0) return {};

    const lbsVal = formatNumber(numVal * KG_TO_LBS_FACTOR, 2);
    const title = `${numVal} kg to lbs – Convert ${numVal} Kilograms to Pounds`;
    const description = `Convert ${numVal} kg to lbs instantly. ${numVal} kilograms is equal to ${lbsVal} pounds. Includes conversion formula breakdown and nearby weight lookup table.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `https://kgtolbsconverter.org/${numVal}-kg-to-lbs`,
      },
      twitter: {
        title,
        description,
      },
    };
  }

  if (slug.endsWith("-lbs-to-kg")) {
    const rawVal = slug.replace("-lbs-to-kg", "");
    const numVal = parseInt(rawVal, 10);
    if (isNaN(numVal) || numVal <= 0) return {};

    const kgVal = formatNumber(numVal * LBS_TO_KG_FACTOR, 2);
    const title = `${numVal} lbs to kg – Convert ${numVal} Pounds to Kilograms`;
    const description = `Convert ${numVal} lbs to kg instantly. ${numVal} pounds is equal to ${kgVal} kilograms. Includes conversion formula breakdown and nearby weight lookup table.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `https://kgtolbsconverter.org/${numVal}-lbs-to-kg`,
      },
      twitter: {
        title,
        description,
      },
    };
  }

  return {};
}

export default function NumericScalePage({ params }: PageProps) {
  const { slug } = params;
  const validValues = getScaledValues();

  if (slug.endsWith("-kg-to-lbs")) {
    const rawVal = slug.replace("-kg-to-lbs", "");
    const numVal = parseInt(rawVal, 10);

    if (isNaN(numVal) || !validValues.includes(numVal) || numVal === 70) {
      notFound();
    }

    const lbsExact = (numVal * KG_TO_LBS_FACTOR).toFixed(4);
    const lbsFormatted = formatNumber(numVal * KG_TO_LBS_FACTOR, 2);

    const nearbyRange = [-2, -1, 0, 1, 2]
      .map((offset) => numVal + offset)
      .filter((v) => v > 0);

    const otherUnits = [
      { unit: "Grams", symbol: "g", value: formatNumber(numVal * 1000, 2) },
      { unit: "Ounces", symbol: "oz", value: formatNumber(numVal * 35.2739619496, 2) },
      { unit: "Stone", symbol: "st", value: formatNumber(numVal * 0.157473044418, 4) },
      { unit: "US Ton (Short Ton)", symbol: "ton", value: (numVal / 907.18474).toFixed(6) },
      { unit: "Metric Tonne", symbol: "t", value: (numVal / 1000).toFixed(6) },
      { unit: "Imperial Ton (Long Ton)", symbol: "ton", value: (numVal / 1016.0469088).toFixed(6) },
    ];

    const webAppSchema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": `${numVal} kg to lbs Converter`,
      "operatingSystem": "All",
      "applicationCategory": "UtilityApplication",
      "url": `https://kgtolbsconverter.org/${numVal}-kg-to-lbs`,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kgtolbsconverter.org",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": `${numVal} kg to lbs`,
          "item": `https://kgtolbsconverter.org/${numVal}-kg-to-lbs`,
        },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How many pounds is ${numVal} kg?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${numVal} kilograms is equal to ${lbsFormatted} pounds.`,
          },
        },
        {
          "@type": "Question",
          "name": `What is the formula to convert ${numVal} kg to lbs?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Multiply ${numVal} by ${KG_TO_LBS_FACTOR} to get ${lbsExact} lbs.`,
          },
        },
      ],
    };

    return (
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <span className="editorial-tag">Mass Conversion</span>
        <h1>{numVal} kg to lbs – Convert {numVal} Kilograms to Pounds</h1>
        <p className="lead">
          <strong>{numVal} kilograms (kg) is equal to {lbsFormatted} pounds (lbs).</strong>
        </p>

        <Converter
          initialCategory="weight"
          initialKg={numVal}
          showTabs={true}
          title={`Convert ${numVal} Kilograms to Pounds`}
        />

        <section className="editorial-card" style={{ marginTop: "2.5rem" }}>
          <h2>Conversion Formula</h2>
          <p>
            To convert <strong>{numVal} kilograms</strong> to pounds, multiply <code>{numVal}</code> by the international conversion factor <code>{KG_TO_LBS_FACTOR}</code>:
          </p>
          <p style={{ fontFamily: "var(--font-mono)", background: "var(--paper)", padding: "1rem", border: "1px solid var(--line)" }}>
            {numVal} kg × {KG_TO_LBS_FACTOR} = <strong>{lbsExact} lbs</strong>
          </p>
        </section>

        <section className="editorial-card" style={{ marginTop: "2.5rem" }}>
          <h2>Convert {numVal} kg to Other Units</h2>
          <p>Comparison table showing {numVal} kg converted into other mass measurement units:</p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
              <thead>
                <tr style={{ background: "var(--paper-subtle)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid var(--line)" }}>Unit</th>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid var(--line)" }}>Symbol</th>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid var(--line)" }}>Value</th>
                </tr>
              </thead>
              <tbody>
                {otherUnits.map((item) => (
                  <tr key={item.unit} style={{ borderBottom: "1px solid var(--line)" }}>
                    <td style={{ padding: "0.75rem" }}><strong>{item.unit}</strong></td>
                    <td style={{ padding: "0.75rem" }}><code>{item.symbol}</code></td>
                    <td style={{ padding: "0.75rem" }}>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="editorial-card" style={{ marginTop: "2.5rem" }}>
          <h2>Nearby Kilograms to Pounds Reference Table</h2>
          <p>Quick lookup table for values surrounding {numVal} kg:</p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
              <thead>
                <tr style={{ background: "var(--paper-subtle)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid var(--line)" }}>Kilograms (kg)</th>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid var(--line)" }}>Pounds (lbs) [Exact]</th>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid var(--line)" }}>Pounds (lbs) [2 Decimals]</th>
                </tr>
              </thead>
              <tbody>
                {nearbyRange.map((val) => {
                  const isCurrent = val === numVal;
                  const exact = (val * KG_TO_LBS_FACTOR).toFixed(4);
                  const rounded = formatNumber(val * KG_TO_LBS_FACTOR, 2);
                  return (
                    <tr
                      key={val}
                      style={{
                        background: isCurrent ? "var(--paper-subtle)" : "transparent",
                        fontWeight: isCurrent ? "bold" : "normal",
                        borderBottom: "1px solid var(--line)",
                      }}
                    >
                      <td style={{ padding: "0.75rem" }}>{val} kg</td>
                      <td style={{ padding: "0.75rem" }}>{exact} lbs</td>
                      <td style={{ padding: "0.75rem" }}>{rounded} lbs</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <PopularConversions category="weight" />

        <p style={{ marginTop: "2rem" }}>
          ← <Link href="/">Return to Main Weight Converter</Link>
        </p>
      </div>
    );
  }

  if (slug.endsWith("-lbs-to-kg")) {
    const rawVal = slug.replace("-lbs-to-kg", "");
    const numVal = parseInt(rawVal, 10);

    if (isNaN(numVal) || !validValues.includes(numVal)) {
      notFound();
    }

    const kgExact = (numVal * LBS_TO_KG_FACTOR).toFixed(4);
    const kgFormatted = formatNumber(numVal * LBS_TO_KG_FACTOR, 2);

    const nearbyRange = [-2, -1, 0, 1, 2]
      .map((offset) => numVal + offset)
      .filter((v) => v > 0);

    const kgEquivalent = numVal * LBS_TO_KG_FACTOR;

    const otherUnits = [
      { unit: "Grams", symbol: "g", value: formatNumber(kgEquivalent * 1000, 2) },
      { unit: "Ounces", symbol: "oz", value: formatNumber(numVal * 16, 2) },
      { unit: "Stone", symbol: "st", value: formatNumber(numVal / 14, 4) },
      { unit: "US Ton (Short Ton)", symbol: "ton", value: (numVal / 2000).toFixed(6) },
      { unit: "Metric Tonne", symbol: "t", value: (kgEquivalent / 1000).toFixed(6) },
      { unit: "Imperial Ton (Long Ton)", symbol: "ton", value: (numVal / 2240).toFixed(6) },
    ];

    const webAppSchema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": `${numVal} lbs to kg Converter`,
      "operatingSystem": "All",
      "applicationCategory": "UtilityApplication",
      "url": `https://kgtolbsconverter.org/${numVal}-lbs-to-kg`,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kgtolbsconverter.org",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": `${numVal} lbs to kg`,
          "item": `https://kgtolbsconverter.org/${numVal}-lbs-to-kg`,
        },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How many kilograms is ${numVal} lbs?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `${numVal} pounds is equal to ${kgFormatted} kilograms.`,
          },
        },
        {
          "@type": "Question",
          "name": `What is the formula to convert ${numVal} lbs to kg?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Multiply ${numVal} by ${LBS_TO_KG_FACTOR} to get ${kgExact} kg.`,
          },
        },
      ],
    };

    return (
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <span className="editorial-tag">Mass Conversion</span>
        <h1>{numVal} lbs to kg – Convert {numVal} Pounds to Kilograms</h1>
        <p className="lead">
          <strong>{numVal} pounds (lbs) is equal to {kgFormatted} kilograms (kg).</strong>
        </p>

        <Converter
          initialCategory="weight"
          fromUnit="lbs"
          toUnit="kg"
          fromLabel="Pounds"
          toLabel="Kilograms"
          factor={LBS_TO_KG_FACTOR}
          showTabs={true}
          title={`Convert ${numVal} Pounds to Kilograms`}
        />

        <section className="editorial-card" style={{ marginTop: "2.5rem" }}>
          <h2>Conversion Formula</h2>
          <p>
            To convert <strong>{numVal} pounds</strong> to kilograms, multiply <code>{numVal}</code> by the official conversion factor <code>{LBS_TO_KG_FACTOR}</code>:
          </p>
          <p style={{ fontFamily: "var(--font-mono)", background: "var(--paper)", padding: "1rem", border: "1px solid var(--line)" }}>
            {numVal} lbs × {LBS_TO_KG_FACTOR} = <strong>{kgExact} kg</strong>
          </p>
        </section>

        <section className="editorial-card" style={{ marginTop: "2.5rem" }}>
          <h2>Convert {numVal} lbs to Other Units</h2>
          <p>Comparison table showing {numVal} lbs converted into other mass measurement units:</p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
              <thead>
                <tr style={{ background: "var(--paper-subtle)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid var(--line)" }}>Unit</th>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid var(--line)" }}>Symbol</th>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid var(--line)" }}>Value</th>
                </tr>
              </thead>
              <tbody>
                {otherUnits.map((item) => (
                  <tr key={item.unit} style={{ borderBottom: "1px solid var(--line)" }}>
                    <td style={{ padding: "0.75rem" }}><strong>{item.unit}</strong></td>
                    <td style={{ padding: "0.75rem" }}><code>{item.symbol}</code></td>
                    <td style={{ padding: "0.75rem" }}>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="editorial-card" style={{ marginTop: "2.5rem" }}>
          <h2>Nearby Pounds to Kilograms Reference Table</h2>
          <p>Quick lookup table for values surrounding {numVal} lbs:</p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
              <thead>
                <tr style={{ background: "var(--paper-subtle)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid var(--line)" }}>Pounds (lbs)</th>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid var(--line)" }}>Kilograms (kg) [Exact]</th>
                  <th style={{ padding: "0.75rem", borderBottom: "2px solid var(--line)" }}>Kilograms (kg) [2 Decimals]</th>
                </tr>
              </thead>
              <tbody>
                {nearbyRange.map((val) => {
                  const isCurrent = val === numVal;
                  const exact = (val * LBS_TO_KG_FACTOR).toFixed(4);
                  const rounded = formatNumber(val * LBS_TO_KG_FACTOR, 2);
                  return (
                    <tr
                      key={val}
                      style={{
                        background: isCurrent ? "var(--paper-subtle)" : "transparent",
                        fontWeight: isCurrent ? "bold" : "normal",
                        borderBottom: "1px solid var(--line)",
                      }}
                    >
                      <td style={{ padding: "0.75rem" }}>{val} lbs</td>
                      <td style={{ padding: "0.75rem" }}>{exact} kg</td>
                      <td style={{ padding: "0.75rem" }}>{rounded} kg</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <PopularConversions category="weight" />

        <p style={{ marginTop: "2rem" }}>
          ← <Link href="/">Return to Main Weight Converter</Link>
        </p>
      </div>
    );
  }

  notFound();
}
