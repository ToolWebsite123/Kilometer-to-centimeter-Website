import Converter from "@/components/Converter";
import ConversionChart from "@/components/ConversionChart";
import FAQSection from "@/components/FAQSection";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className="container">
      {/* Editorial Hero Section */}
      <section className={styles.heroSection}>
        <span className="editorial-tag">Precision Utility</span>
        <h1 className={styles.heroTitle}>Kg to Lbs Converter</h1>
        <p className="lead">
          Calculate mass conversions between metric kilograms (kg) and imperial avoirdupois pounds (lbs) in real time with exact precision.
        </p>

        {/* Real-time Interactive Converter */}
        <Converter initialKg={1} title="Instant Weight Conversion" />
      </section>

      {/* How the Formula Works Section */}
      <section className="editorial-card">
        <h2>How the Formula Works</h2>
        <p>
          The conversion between kilograms and pounds relies on the international standard defined by the International Yard and Pound Agreement of 1959. Under this agreement, exactly <strong>1 avoirdupois pound is equal to 0.45359237 kilograms</strong>. Conversely, dividing 1 by 0.45359237 yields the conversion factor of <strong>1 kilogram = 2.20462262185 pounds</strong>.
        </p>
        <p>
          To perform a manual calculation from kilograms to pounds, multiply your weight in kilograms by <code>2.20462262185</code>. If you are converting pounds to kilograms, divide your weight in pounds by <code>2.20462262185</code> (or multiply by 0.45359237). For quick mental estimates, doubling the kilogram figure and adding 10% provides an accuracy within 0.2%.
        </p>
      </section>

      {/* Reference Conversion Table */}
      <ConversionChart startKg={1} endKg={100} step={1} />

      {/* FAQ Section with JSON-LD Schema */}
      <FAQSection />
    </div>
  );
}
