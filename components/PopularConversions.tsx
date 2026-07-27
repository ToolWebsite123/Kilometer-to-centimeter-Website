import Link from "next/link";
import { unitPairs } from "@/lib/unit-pairs";
import styles from "./PopularConversions.module.css";

interface PopularConversionsProps {
  currentSlug?: string;
}

const poundConversions = [
  { label: "Pounds to Grams (lbs to g)", slug: "pounds-to-grams" },
  { label: "Pounds to Milligrams (lbs to mg)", slug: "pounds-to-milligrams" },
  { label: "Pounds to Ounces (lbs to oz)", slug: "pounds-to-ounces" },
  { label: "Pounds to Kilograms (lbs to kg)", slug: "lbs-to-kg" },
  { label: "Pounds to Short Ton (lbs to ton)", slug: "lbs-to-ton" },
  { label: "Pounds to Metric Tonne (lbs to t)", slug: "pounds-to-tonne" },
  { label: "Pounds to Stone (lbs to st)", slug: "lbs-to-stone" },
];

export default function PopularConversions({ currentSlug }: PopularConversionsProps) {
  const filteredPairs = currentSlug
    ? unitPairs.filter((p) => p.slug !== currentSlug)
    : unitPairs;

  return (
    <div style={{ marginTop: "2.5rem" }}>
      {/* Main Popular Weight Conversions Grid */}
      <section className="editorial-card">
        <h2>Popular Weight & Mass Conversions</h2>
        <p>Select a unit pair to convert between metric and imperial systems with real-time precision:</p>
        <div className={styles.linksGrid}>
          {filteredPairs.map((pair) => (
            <Link
              key={pair.slug}
              href={`/convert/${pair.slug}`}
              className={styles.linkCard}
            >
              {pair.fromLabel} to {pair.toLabel}
            </Link>
          ))}
        </div>
      </section>

      {/* Convert Pound to Other Weight Units */}
      <section className="editorial-card" style={{ marginTop: "2rem" }}>
        <h2>Convert Pound to Other Weight Units</h2>
        <p>Direct lookup links for converting imperial pounds (lbs) to common mass units:</p>
        <div className={styles.linksGrid}>
          {poundConversions
            .filter((item) => item.slug !== currentSlug)
            .map((item) => (
              <Link
                key={item.slug}
                href={`/convert/${item.slug}`}
                className={styles.linkCard}
              >
                {item.label}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
