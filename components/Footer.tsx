import Link from "next/link";
import styles from "./Footer.module.css";

/**
 * Site Footer Component
 * Restrained, editorial footer featuring site navigation and utility notes.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div className={styles.title}>Kg to Lbs Converter</div>
            <p className={styles.description}>
              A precise, lightweight editorial utility for converting mass between international kilograms (kg) and avoirdupois pounds (lbs).
            </p>
          </div>

          <div className={styles.linksCol}>
            <div className={styles.linkGroup}>
              <div className={styles.groupHeading}>Tools</div>
              <Link href="/" className={styles.link}>
                Converter
              </Link>
              <Link href="/guides/kg-to-lbs-chart" className={styles.link}>
                Conversion Chart
              </Link>
            </div>

            <div className={styles.linkGroup}>
              <div className={styles.groupHeading}>Guides</div>
              <Link href="/guides/70-kg-to-lbs" className={styles.link}>
                70 kg to lbs
              </Link>
              <Link href="/guides/1-kg-to-lbs" className={styles.link}>
                1 kg to lbs
              </Link>
              <Link href="/about" className={styles.link}>
                Formula & Standards
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div>© {currentYear} Kg to Lbs Converter. All rights reserved.</div>
          <div>Standard: 1 kg = 2.20462262185 lbs</div>
        </div>
      </div>
    </footer>
  );
}
