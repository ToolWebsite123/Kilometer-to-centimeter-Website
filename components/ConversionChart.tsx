"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { formatNumber } from "@/lib/convert";
import {
  CategoryId,
  CATEGORIES,
  convertUnit,
} from "@/lib/categories";
import styles from "./ConversionChart.module.css";

interface ConversionChartProps {
  category?: CategoryId;
  fromUnit?: string;
  toUnit?: string;
  startValue?: number;
  endValue?: number;
  step?: number;
  title?: string;
  subtitle?: string;
  // Legacy compatibility props
  startKg?: number;
  endKg?: number;
  factor?: number;
}

export default function ConversionChart({
  category = "weight",
  fromUnit = "kg",
  toUnit = "lbs",
  startValue,
  endValue,
  step,
  title,
  subtitle,
  startKg,
  endKg,
}: ConversionChartProps) {
  const catInfo = CATEGORIES[category] || CATEGORIES.weight;
  const fromInfo = catInfo.units.find((u) => u.id === fromUnit) || {
    id: fromUnit,
    name: fromUnit,
    symbol: fromUnit,
  };
  const toInfo = catInfo.units.find((u) => u.id === toUnit) || {
    id: toUnit,
    name: toUnit,
    symbol: toUnit,
  };

  const isTemp = category === "temperature";
  const defaultStart = startValue ?? (startKg ?? (isTemp ? 0 : 1));
  const defaultEnd = endValue ?? (endKg ?? 100);
  const defaultStep = step ?? (isTemp ? 5 : 1);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 25;

  const defaultTitle =
    title ||
    `${fromInfo.name} to ${toInfo.name} Conversion Reference Table`;

  const defaultSubtitle =
    subtitle ||
    `Common conversions from ${defaultStart} ${fromInfo.symbol} up to ${defaultEnd} ${fromInfo.symbol} in ${defaultStep} ${fromInfo.symbol} increments.`;

  // Generate complete dataset dynamically using convertUnit
  const allRows = useMemo(() => {
    const rows = [];
    for (let val = defaultStart; val <= defaultEnd; val += defaultStep) {
      const convertedVal = convertUnit(val, fromUnit, toUnit, category);
      rows.push({
        from: val,
        to: convertedVal,
      });
    }
    return rows;
  }, [defaultStart, defaultEnd, defaultStep, fromUnit, toUnit, category]);

  // Filter based on user search term
  const filteredRows = useMemo(() => {
    if (!search.trim()) return allRows;

    const escapedFrom = fromInfo.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const escapedTo = toInfo.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const pattern = new RegExp(
      `${escapedFrom}|${escapedTo}|${fromInfo.symbol}|${toInfo.symbol}`,
      "gi"
    );
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
        if (row.from === numQuery) return true;
        if (to2Str === sanitized || to4Str === sanitized) return true;
        if (Math.abs(parseFloat(to2Str) - numQuery) < 0.0001) return true;
      }

      if (fromStr === sanitized) return true;
      if (to2Str === sanitized || to4Str === sanitized) return true;

      return false;
    });
  }, [allRows, search, fromInfo, toInfo]);

  const totalPages = Math.ceil(filteredRows.length / pageSize) || 1;

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
            placeholder={`Search ${fromInfo.symbol} or ${toInfo.symbol} (e.g. 45 or 45 ${fromInfo.symbol})`}
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
              <th>
                {fromInfo.name} ({fromInfo.symbol})
              </th>
              <th>
                {toInfo.name} ({toInfo.symbol}) [Exact / 4 Dec]
              </th>
              <th>
                {toInfo.name} ({toInfo.symbol}) [2 Decimals]
              </th>
            </tr>
          </thead>
          <tbody>
            {pagedRows.length > 0 ? (
              pagedRows.map((row) => (
                <tr key={row.from}>
                  <td>
                    {fromUnit === "kg" && toUnit === "lbs" ? (
                      <Link href={`/${row.from}-kg-to-lbs`}>
                        <strong>{row.from}</strong>{" "}
                        <span className={styles.unitCell}>{fromInfo.symbol}</span>
                      </Link>
                    ) : fromUnit === "lbs" && toUnit === "kg" ? (
                      <Link href={`/${row.from}-lbs-to-kg`}>
                        <strong>{row.from}</strong>{" "}
                        <span className={styles.unitCell}>{fromInfo.symbol}</span>
                      </Link>
                    ) : (
                      <>
                        <strong>{row.from}</strong>{" "}
                        <span className={styles.unitCell}>{fromInfo.symbol}</span>
                      </>
                    )}
                  </td>
                  <td>
                    {row.to.toFixed(4)}{" "}
                    <span className={styles.unitCell}>{toInfo.symbol}</span>
                  </td>
                  <td>
                    {formatNumber(row.to, 2)}{" "}
                    <span className={styles.unitCell}>{toInfo.symbol}</span>
                  </td>
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
            {Math.min(page * pageSize, filteredRows.length)} of{" "}
            {filteredRows.length} entries
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
                className={`${styles.pageBtn} ${
                  page === pNum ? styles.pageBtnActive : ""
                }`}
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
