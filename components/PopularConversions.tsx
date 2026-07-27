import Link from "next/link";
import { unitPairs, UnitPair } from "@/lib/unit-pairs";
import { CategoryId } from "@/lib/categories";
import styles from "./PopularConversions.module.css";

interface PopularConversionsProps {
  currentSlug?: string;
  category?: CategoryId;
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

const LENGTH_UNITS = ["cm", "in", "mm", "m", "ft", "km", "mi"];
const WEIGHT_UNITS = ["kg", "lbs", "g", "grams", "oz", "stone", "st", "ton", "mg", "t"];
const VOLUME_UNITS = ["l", "ml", "gal", "qt", "pt", "cup", "fl-oz", "liters", "milliliters", "gallons"];
const TIME_UNITS = ["sec", "min", "hr", "day", "wk", "mo", "yr", "hours", "seconds"];
const TEMP_UNITS = ["celsius", "fahrenheit", "kelvin", "c", "f", "k"];

const getPairCategory = (pair: UnitPair): CategoryId => {
  const from = pair.fromUnit.toLowerCase();
  if (LENGTH_UNITS.includes(from)) return "length";
  if (WEIGHT_UNITS.includes(from)) return "weight";
  if (VOLUME_UNITS.includes(from)) return "volume";
  if (TIME_UNITS.includes(from)) return "time";
  if (TEMP_UNITS.includes(from)) return "temperature";
  return "weight";
};

const categoryTitles: Record<CategoryId, string> = {
  weight: "Popular Weight & Mass Conversions",
  length: "Popular Length Conversions",
  volume: "Popular Volume Conversions",
  time: "Popular Time Conversions",
  temperature: "Popular Temperature Conversions",
};

export default function PopularConversions({ currentSlug, category }: PopularConversionsProps) {
  let activeCategory: CategoryId = category || "weight";

  if (!category && currentSlug) {
    const currentPair = unitPairs.find((p) => p.slug === currentSlug);
    if (currentPair) {
      activeCategory = getPairCategory(currentPair);
    }
  }

  const categoryPairs = unitPairs.filter(
    (p) => getPairCategory(p) === activeCategory && p.slug !== currentSlug
  );

  return (
    <div>
      {/* Category Specific Popular Conversions Grid */}
      {categoryPairs.length > 0 && (
        <section className="editorial-card">
          <h2>{categoryTitles[activeCategory] || "Popular Conversions"}</h2>
          <p>Select a unit pair to convert between metric and imperial systems with real-time precision:</p>
          <div className={styles.linksGrid}>
            {categoryPairs.map((pair) => (
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
      )}

      {/* Convert Pound to Other Weight Units (Only shown on Weight category) */}
      {activeCategory === "weight" && (
        <section className="editorial-card" style={{ marginTop: "1.5rem" }}>
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
      )}
    </div>
  );
}
