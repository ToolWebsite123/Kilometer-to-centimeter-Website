"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { formatNumber, KG_TO_LBS_FACTOR } from "@/lib/convert";
import styles from "./Converter.module.css";

interface ConverterProps {
  initialKg?: number;
  initialLbs?: number;
  title?: string;
  fromUnit?: string;
  toUnit?: string;
  fromLabel?: string;
  toLabel?: string;
  factor?: number;
}

type Precision = 0 | 1 | 2 | 4;

/**
 * Interactive Unit Converter Component
 * Provides real-time two-way calculations, precision settings, and swap capability.
 */
export default function Converter({
  initialKg,
  initialLbs,
  title = "Real-Time Weight Converter",
  fromUnit = "kg",
  toUnit = "lbs",
  fromLabel = "Kilograms",
  toLabel = "Pounds",
  factor = KG_TO_LBS_FACTOR,
}: ConverterProps) {
  // Determine starting state
  const defaultFrom = initialKg !== undefined ? initialKg : 1;
  const defaultTo = initialLbs !== undefined ? initialLbs : defaultFrom * factor;

  const [fromInput, setFromInput] = useState<string>(defaultFrom.toString());
  const [toInput, setToInput] = useState<string>(defaultTo.toFixed(2));
  const [activeDriver, setActiveDriver] = useState<"from" | "to">("from");
  const [decimals, setDecimals] = useState<Precision>(2);

  // Sync calculations whenever input values, precision, or factor change
  useEffect(() => {
    if (activeDriver === "from") {
      const numericFrom = parseFloat(fromInput);
      if (!isNaN(numericFrom)) {
        const calculatedTo = numericFrom * factor;
        setToInput(formatNumber(calculatedTo, decimals).replace(/,/g, ""));
      } else {
        setToInput("");
      }
    } else {
      const numericTo = parseFloat(toInput);
      if (!isNaN(numericTo)) {
        const calculatedFrom = numericTo / factor;
        setFromInput(formatNumber(calculatedFrom, decimals).replace(/,/g, ""));
      } else {
        setFromInput("");
      }
    }
  }, [fromInput, toInput, activeDriver, decimals, factor]);

  // Handle from input change
  const handleFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFromInput(val);
    setActiveDriver("from");

    const num = parseFloat(val);
    if (!isNaN(num)) {
      const toVal = num * factor;
      setToInput(toVal.toFixed(decimals));
    } else {
      setToInput("");
    }
  };

  // Handle to input change
  const handleToChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setToInput(val);
    setActiveDriver("to");

    const num = parseFloat(val);
    if (!isNaN(num)) {
      const fromVal = num / factor;
      setFromInput(fromVal.toFixed(decimals));
    } else {
      setFromInput("");
    }
  };

  // Swap active conversion direction and focus
  const handleSwap = () => {
    if (activeDriver === "from") {
      setActiveDriver("to");
    } else {
      setActiveDriver("from");
    }
  };

  // Quick preset handler
  const handlePreset = (val: number) => {
    setFromInput(val.toString());
    setActiveDriver("from");
    const calculatedTo = val * factor;
    setToInput(calculatedTo.toFixed(decimals));
  };

  // Numeric parsing for formatted readout display
  const currentFromNum = parseFloat(fromInput) || 0;
  const currentToNum = parseFloat(toInput) || 0;

  return (
    <div className={styles.converterCard}>
      <div className={styles.topBar}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.precisionControl}>
          <span className={styles.precisionLabel}>Decimals:</span>
          <div className={styles.precisionGroup}>
            {([0, 1, 2, 4] as Precision[]).map((prec) => (
              <button
                key={prec}
                type="button"
                className={`${styles.precisionBtn} ${decimals === prec ? styles.precisionBtnActive : ""}`}
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
            <label htmlFor={`${fromUnit}-input`} className={styles.label}>
              {fromLabel}
            </label>
            <span className={styles.unitTag}>{fromUnit}</span>
          </div>
          <div className={styles.inputWrapper}>
            <input
              id={`${fromUnit}-input`}
              type="number"
              step="any"
              min="0"
              value={fromInput}
              onChange={handleFromChange}
              placeholder={`Enter ${fromUnit}`}
              className={`${styles.input} ${activeDriver === "from" ? styles.inputDriving : ""}`}
              aria-label={`${fromLabel} value`}
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className={styles.swapCol}>
          <button
            type="button"
            className={styles.swapBtn}
            onClick={handleSwap}
            title="Swap driver unit"
            aria-label="Swap direction"
          >
            ⇄
          </button>
        </div>

        {/* To Field */}
        <div className={styles.inputGroup}>
          <div className={styles.labelRow}>
            <label htmlFor={`${toUnit}-input`} className={styles.label}>
              {toLabel}
            </label>
            <span className={styles.unitTag}>{toUnit}</span>
          </div>
          <div className={styles.inputWrapper}>
            <input
              id={`${toUnit}-input`}
              type="number"
              step="any"
              min="0"
              value={toInput}
              onChange={handleToChange}
              placeholder={`Enter ${toUnit}`}
              className={`${styles.input} ${activeDriver === "to" ? styles.inputDriving : ""}`}
              aria-label={`${toLabel} value`}
            />
          </div>
        </div>
      </div>

      {/* Preset Quick Select Buttons */}
      <div className={styles.presets}>
        <span className={styles.presetLabel}>Quick Presets:</span>
        {[1, 5, 10, 25, 50, 70, 100].map((val) => (
          <button
            key={val}
            type="button"
            className={styles.presetBtn}
            onClick={() => handlePreset(val)}
          >
            {val} {fromUnit}
          </button>
        ))}
      </div>

      {/* Dynamic Summary Readout */}
      <div className={styles.readout}>
        <div className={styles.readoutMain}>
          {formatNumber(currentFromNum, decimals)} {fromUnit} = {formatNumber(currentToNum, decimals)} {toUnit}
        </div>
        <div className={styles.readoutFormula}>
          Formula: {currentFromNum} × {factor} = {formatNumber(currentFromNum * factor, decimals)}
        </div>
      </div>
    </div>
  );
}

