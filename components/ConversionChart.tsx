"use client";

import { useState, useMemo } from "react";
import { formatNumber } from "@/lib/convert";
import styles from "./ConversionChart.module.css";

interface ConversionChartProps {
  startKg?: number;
  endKg?: number;
  startValue?: number;
  endValue?: number;
  step?: number;
  title?: string;
  subtitle?: string;
  fromUnit?: string;
  toUnit?: string;
  factor?: number;
}

/**
 * Unit Reference Table Component
 * Generates an interactive, searchable lookup chart for any unit pair.
 */
export default function ConversionChart({
  startKg,
  endKg,
  startValue,
  endValue,
  step = 1,
  title,
  subtitle,
  fromUnit = "kg",
  toUnit = "lbs",
  factor = 2.20462262185,
}: ConversionChartProps) {
  const startVal = startValue !== undefined ? startValue : (startKg !== undefined ? startKg : 1);
  const endVal = endValue !== undefined ? endValue : (endKg !== undefined ? endKg : 100);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 25;

  const defaultTitle = title || (fromUnit === "kg" && toUnit === "lbs"
    ? "Kilograms to Pounds Conversion Reference Chart"
    : `${fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)} to ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)} Conversion Reference Chart`);

  const defaultSubtitle = subtitle || (fromUnit === "kg" && toUnit === "lbs"
    ? "Common weight conversions from 1 kg up to 100 kg in 1 kg increments."
    : `Common conversions from 1 ${fromUnit} up to 100 ${fromUnit} in 1 ${fromUnit} increments.`);

  // Generate complete dataset using factor
  const allRows = useMemo(() => {
    const rows = [];
    for (let val = startVal; val <= endVal; val += step) {
      rows.push({
        from: val,
        to: val * factor,
      });
    }
    return rows;
  }, [startVal, endVal, step, factor]);

  // Filter based on user search term
  const filteredRows = useMemo(() => {
    if (!search.trim()) return allRows;

    // Sanitize search input: trim, lowercase, strip unit words and extra spaces
    const escapedFrom = fromUnit.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const escapedTo = toUnit.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const pattern = new RegExp(`kilograms|kilogram|pounds|pound|${escapedFrom}|${escapedTo}`, 'gi');
    const sanitized = search
      .toLowerCase()
      .replace(pattern, "")
      .replace(/\s+/g, "")
      .trim();

    if (!sanitized) return [];

    const numQuery = Number(sanitized);
    const isNum = !isNaN(numQuery);

    return allRows.filter((row) => {
      const fromStr = row.from.toString();
      const to4Str = row.to.toFixed(4);
      const to2Str = row.to.toFixed(2);

      if (isNum) {
        // Match exact from number
        if (row.from === numQuery) return true;
        // Match exact or 2-decimal to number
        if (to2Str === sanitized || to4Str === sanitized) return true;
        if (Math.abs(parseFloat(to2Str) - numQuery) < 0.0001) return true;
      }

      // Exact string comparison fallback
      if (fromStr === sanitized) return true;
      if (to2Str === sanitized || to4Str === sanitized) return true;

      return false;
    });
  }, [allRows, search, fromUnit, toUnit]);

  // Total pages
  const totalPages = Math.ceil(filteredRows.length / pageSize) || 1;

  // Slice active page items
  const pagedRows = useMemo(() => {
    const startIdx = (page - 1) * pageSize;
    return filteredRows.slice(startIdx, startIdx + pageSize);
  }, [filteredRows, page, pageSize]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className={styles.chartCard}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>{defaultTitle}</h2>
          <p className={styles.subtitle}>{defaultSubtitle}</p>
        </div>

        <div className={styles.controls}>
          <input
            type="text"
            placeholder={`Search ${fromUnit} or ${toUnit} (e.g. 45 or 45${fromUnit})`}
            value={search}
            onChange={handleSearchChange}
            className={styles.searchField}
            aria-label="Filter conversion chart"
          />
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{fromUnit === "kg" ? "Kilograms (kg)" : `${fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)} (${fromUnit})`}</th>
              <th>{toUnit === "lbs" ? "Pounds (lbs) [Exact]" : `${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)} (${toUnit}) [Exact]`}</th>
              <th>{toUnit === "lbs" ? "Pounds (lbs) [2 Decimals]" : `${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)} (${toUnit}) [2 Decimals]`}</th>
            </tr>
          </thead>
          <tbody>
            {pagedRows.length > 0 ? (
              pagedRows.map((row) => (
                <tr key={row.from}>
                  <td>
                    <strong>{row.from}</strong> <span className={styles.unitCell}>{fromUnit}</span>
                  </td>
                  <td>{row.to.toFixed(4)} <span className={styles.unitCell}>{toUnit}</span></td>
                  <td>{formatNumber(row.to, 2)} <span className={styles.unitCell}>{toUnit}</span></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ textAlign: "center", padding: "2rem" }}>
                  No matching conversions found for &quot;{search}&quot;.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <div>
            Showing {(page - 1) * pageSize + 1}–
            {Math.min(page * pageSize, filteredRows.length)} of {filteredRows.length} entries
          </div>

          <div className={styles.pageButtons}>
            <button
              type="button"
              className={styles.pageBtn}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pNum) => (
              <button
                key={pNum}
                type="button"
                className={`${styles.pageBtn} ${page === pNum ? styles.pageBtnActive : ""}`}
                onClick={() => setPage(pNum)}
              >
                {pNum}
              </button>
            ))}

            <button
              type="button"
              className={styles.pageBtn}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

