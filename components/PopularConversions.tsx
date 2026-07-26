import Link from "next/link";
import { unitPairs } from "@/lib/unit-pairs";
import styles from "./PopularConversions.module.css";

interface PopularConversionsProps {
  currentSlug?: string;
}

export default function PopularConversions({ currentSlug }: PopularConversionsProps) {
  const filteredPairs = currentSlug
    ? unitPairs.filter((p) => p.slug !== currentSlug)
    : unitPairs;

  return (
    <section className="editorial-card" style={{ marginTop: "2.5rem" }}>
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
  );
}
