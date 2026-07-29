import Link from "next/link";
import styles from "./Footer.module.css";

/**
 * Site Footer Component
 * Editorial footer featuring navigation and utility notes for multi-category unit converter.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div className={styles.title}>Free Unit Converter</div>
            <p className={styles.description}>
              A precise, lightweight editorial utility for converting Length, Weight, Temperature, Volume, and Time in real time.
            </p>
          </div>

          <div className={styles.linksCol}>
            <div className={styles.linkGroup}>
              <div className={styles.groupHeading}>Navigation</div>
              <Link href="/" className={styles.link}>
                Multi-Unit Converter
              </Link>
              <Link href="/about" className={styles.link}>
                About & Standards
              </Link>
              <Link href="/privacy-policy" className={styles.link}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={styles.link}>
                Terms of Service
              </Link>
            </div>

            <div className={styles.linkGroup}>
              <div className={styles.groupHeading}>Popular Conversions</div>
              <Link href="/weight/kg-to-lbs" className={styles.link}>
                Kg to Lbs
              </Link>
              <Link href="/weight/lbs-to-kg" className={styles.link}>
                Lbs to Kg
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div>© {currentYear} Free Unit Converter. All rights reserved.</div>
          <div>Precision Standard: International Metrology Definitions</div>
        </div>
      </div>
    </footer>
  );
}
