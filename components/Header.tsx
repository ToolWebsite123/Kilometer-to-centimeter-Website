import Link from "next/link";
import styles from "./Header.module.css";

/**
 * Site Header Component
 * Provides primary navigation across converter, guides, chart, and about pages.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span>Kg to Lbs</span>
          <span className={styles.symbol}>[kg ⇄ lbs]</span>
        </Link>

        <nav className={styles.nav} aria-label="Main Navigation">
          <Link href="/" className={styles.navLink}>
            Converter
          </Link>
          <Link href="/guides/kg-to-lbs-chart" className={styles.navLink}>
            Chart
          </Link>
          <Link href="/guides/70-kg-to-lbs" className={styles.navLink}>
            70 kg
          </Link>
          <Link href="/guides/1-kg-to-lbs" className={styles.navLink}>
            1 kg
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
