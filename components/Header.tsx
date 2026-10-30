import Link from "next/link";
import styles from "./Header.module.css";

/**
 * Site Header Component
 * Provides primary navigation for the unified multi-unit converter app.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span>Unit Converter</span>
          <span className={styles.symbol}>[km ⇄ cm & more]</span>
        </Link>

        <nav className={styles.nav} aria-label="Main Navigation">
          <Link href="/length-converter" className={styles.navLink}>
            Length
          </Link>
          <Link href="/weight-converter" className={styles.navLink}>
            Weight
          </Link>
          <Link href="/temperature-converter" className={styles.navLink}>
            Temperature
          </Link>
          <Link href="/volume-converter" className={styles.navLink}>
            Volume
          </Link>
          <Link href="/time-converter" className={styles.navLink}>
            Time
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
