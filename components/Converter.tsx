"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { formatNumber } from "@/lib/convert";
import {
  CategoryId,
  CATEGORY_LIST,
  CATEGORIES,
  convertUnit,
  getFormulaString,
} from "@/lib/categories";
import styles from "./Converter.module.css";

interface ConverterProps {
  initialCategory?: CategoryId;
  initialFromUnit?: string;
  initialToUnit?: string;
  initialValue?: number;
  onSelectionChange?: (
    category: CategoryId,
    fromUnit: string,
    toUnit: string
  ) => void;
  showTabs?: boolean;
  title?: string;
  // Backward compatibility props for /convert/[slug] and scale pages
  initialKg?: number;
  initialLbs?: number;
  fromUnit?: string;
  toUnit?: string;
  fromLabel?: string;
  toLabel?: string;
  factor?: number;
}

type Precision = 0 | 1 | 2 | 4;

const PRESETS_BY_CATEGORY: Record<CategoryId, number[]> = {
  weight: [1, 5, 10, 25, 50, 70, 100],
  length: [1, 10, 50, 100, 500, 1000],
  temperature: [0, 10, 20, 37, 100],
  volume: [1, 2, 5, 10, 25, 100],
  time: [1, 2, 5, 12, 24, 48],
};

export default function Converter({
  initialCategory = "weight",
  initialFromUnit,
  initialToUnit,
  initialValue,
  initialKg,
  initialLbs,
  onSelectionChange,
  showTabs = true,
  title,
  fromUnit: propFromUnit,
  toUnit: propToUnit,
  factor: propFactor,
}: ConverterProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryId>(initialCategory);

  const categoryInfo = CATEGORIES[activeCategory] || CATEGORIES.weight;

  const [fromUnitId, setFromUnitId] = useState<string>(
    propFromUnit || initialFromUnit || categoryInfo.defaultFrom
  );
  const [toUnitId, setToUnitId] = useState<string>(
    propToUnit || initialToUnit || categoryInfo.defaultTo
  );

  const startingFromValue =
    initialKg !== undefined
      ? initialKg
      : initialLbs !== undefined
      ? initialLbs / 2.20462262185
      : initialValue !== undefined
      ? initialValue
      : 1;

  const [fromInput, setFromInput] = useState<string>(startingFromValue.toString());
  const [toInput, setToInput] = useState<string>("");
  const [activeDriver, setActiveDriver] = useState<"from" | "to">("from");
  const [decimals, setDecimals] = useState<Precision>(2);

  // Sync prop updates if passed from parent
  useEffect(() => {
    if (propFromUnit) setFromUnitId(propFromUnit);
    if (propToUnit) setToUnitId(propToUnit);
  }, [propFromUnit, propToUnit]);

  // Handle Tab Switch
  const handleTabChange = (catId: CategoryId) => {
    setActiveCategory(catId);
    const newCat = CATEGORIES[catId];
    const newFrom = newCat.defaultFrom;
    const newTo = newCat.defaultTo;
    setFromUnitId(newFrom);
    setToUnitId(newTo);
    setActiveDriver("from");

    if (onSelectionChange) {
      onSelectionChange(catId, newFrom, newTo);
    }
  };

  // Handle Dropdown Changes
  const handleFromUnitSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const newFrom = e.target.value;
    setFromUnitId(newFrom);
    if (onSelectionChange) {
      onSelectionChange(activeCategory, newFrom, toUnitId);
    }
  };

  const handleToUnitSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const newTo = e.target.value;
    setToUnitId(newTo);
    if (onSelectionChange) {
      onSelectionChange(activeCategory, fromUnitId, newTo);
    }
  };

  // Synchronize calculations whenever input, units, or precision change
  useEffect(() => {
    if (activeDriver === "from") {
      const numFrom = parseFloat(fromInput);
      if (!isNaN(numFrom)) {
        const calculatedTo = convertUnit(
          numFrom,
          fromUnitId,
          toUnitId,
          activeCategory
        );
        setToInput(formatNumber(calculatedTo, decimals).replace(/,/g, ""));
      } else {
        setToInput("");
      }
    } else {
      const numTo = parseFloat(toInput);
      if (!isNaN(numTo)) {
        const calculatedFrom = convertUnit(
          numTo,
          toUnitId,
          fromUnitId,
          activeCategory
        );
        setFromInput(formatNumber(calculatedFrom, decimals).replace(/,/g, ""));
      } else {
        setFromInput("");
      }
    }
  }, [fromInput, toInput, activeDriver, decimals, fromUnitId, toUnitId, activeCategory]);

  const handleFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFromInput(val);
    setActiveDriver("from");
  };

  const handleToChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setToInput(val);
    setActiveDriver("to");
  };

  const handleSwap = () => {
    const oldFrom = fromUnitId;
    const oldTo = toUnitId;
    setFromUnitId(oldTo);
    setToUnitId(oldFrom);
    if (onSelectionChange) {
      onSelectionChange(activeCategory, oldTo, oldFrom);
    }
  };

  const handlePreset = (val: number) => {
    setFromInput(val.toString());
    setActiveDriver("from");
  };

  const currentFromUnit = categoryInfo.units.find((u) => u.id === fromUnitId) || {
    id: fromUnitId,
    name: fromUnitId,
    symbol: fromUnitId,
  };

  const currentToUnit = categoryInfo.units.find((u) => u.id === toUnitId) || {
    id: toUnitId,
    name: toUnitId,
    symbol: toUnitId,
  };

  const currentFromNum = parseFloat(fromInput) || 0;
  const rawCalculatedTo = convertUnit(
    currentFromNum,
    fromUnitId,
    toUnitId,
    activeCategory
  );
  const formattedToNum = formatNumber(rawCalculatedTo, decimals);

  const presets = PRESETS_BY_CATEGORY[activeCategory] || [1, 5, 10, 25, 50, 100];
  const cardTitle =
    title ||
    `${categoryInfo.name} Converter (${currentFromUnit.name} to ${currentToUnit.name})`;

  return (
    <div className={styles.converterCard}>
      {/* Category Tabs */}
      {showTabs && (
        <nav className={styles.tabNav} aria-label="Category Selection">
          {CATEGORY_LIST.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.tabBtn} ${
                activeCategory === cat.id ? styles.tabBtnActive : ""
              }`}
              onClick={() => handleTabChange(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      )}

      <div className={styles.topBar}>
        <h2 className={styles.title}>{cardTitle}</h2>

        <div className={styles.precisionControl}>
          <span className={styles.precisionLabel}>Decimals:</span>
          <div className={styles.precisionGroup}>
            {([0, 1, 2, 4] as Precision[]).map((prec) => (
              <button
                key={prec}
                type="button"
                className={`${styles.precisionBtn} ${
                  decimals === prec ? styles.precisionBtnActive : ""
                }`}
                onClick={() => setDecimals(prec)}
                aria-label={`Set precision to ${prec} decimal places`}
              >
                {prec}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {/* From Field */}
        <div className={styles.inputGroup}>
          <div className={styles.labelRow}>
            <label htmlFor="from-unit-select" className={styles.label}>
              From
            </label>
            <span className={styles.unitTag}>{currentFromUnit.symbol}</span>
          </div>

          <select
            id="from-unit-select"
            value={fromUnitId}
            onChange={handleFromUnitSelect}
            className={styles.unitSelect}
            aria-label="Select source unit"
          >
            {categoryInfo.units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>

          <div className={styles.inputWrapper}>
            <input
              id={`${fromUnitId}-input`}
              type="number"
              step="any"
              value={fromInput}
              onChange={handleFromChange}
              placeholder={`Enter ${currentFromUnit.name}`}
              className={`${styles.input} ${
                activeDriver === "from" ? styles.inputDriving : ""
              }`}
              aria-label={`${currentFromUnit.name} input value`}
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className={styles.swapCol}>
          <button
            type="button"
            className={styles.swapBtn}
            onClick={handleSwap}
            title="Swap units"
            aria-label="Swap source and target units"
          >
            ⇄
          </button>
        </div>

        {/* To Field */}
        <div className={styles.inputGroup}>
          <div className={styles.labelRow}>
            <label htmlFor="to-unit-select" className={styles.label}>
              To
            </label>
            <span className={styles.unitTag}>{currentToUnit.symbol}</span>
          </div>

          <select
            id="to-unit-select"
            value={toUnitId}
            onChange={handleToUnitSelect}
            className={styles.unitSelect}
            aria-label="Select target unit"
          >
            {categoryInfo.units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>

          <div className={styles.inputWrapper}>
            <input
              id={`${toUnitId}-input`}
              type="number"
              step="any"
              value={toInput}
              onChange={handleToChange}
              placeholder={`Enter ${currentToUnit.name}`}
              className={`${styles.input} ${
                activeDriver === "to" ? styles.inputDriving : ""
              }`}
              aria-label={`${currentToUnit.name} input value`}
            />
          </div>
        </div>
      </div>

      {/* Quick Presets */}
      <div className={styles.presets}>
        <span className={styles.presetLabel}>Quick Presets:</span>
        {presets.map((val) => (
          <button
            key={val}
            type="button"
            className={styles.presetBtn}
            onClick={() => handlePreset(val)}
          >
            {val} {currentFromUnit.symbol}
          </button>
        ))}
      </div>

      {/* Readout & Formula */}
      <div className={styles.readout}>
        <div className={styles.readoutMain}>
          {formatNumber(currentFromNum, decimals)} {currentFromUnit.symbol} ={" "}
          {formattedToNum} {currentToUnit.symbol}
        </div>
        <div className={styles.readoutFormula}>
          {getFormulaString(
            currentFromNum,
            fromUnitId,
            toUnitId,
            activeCategory,
            rawCalculatedTo,
            formattedToNum
          )}
        </div>
      </div>
    </div>
  );
}
