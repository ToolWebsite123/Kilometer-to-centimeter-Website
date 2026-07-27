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
          <span className={styles.symbol}>[kg ⇄ lbs & more]</span>
        </Link>

        <nav className={styles.nav} aria-label="Main Navigation">
          <Link href="/" className={styles.navLink}>
            Converter
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
