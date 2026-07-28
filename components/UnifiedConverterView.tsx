"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Converter from "@/components/Converter";
import ConversionChart from "@/components/ConversionChart";
import PopularConversions from "@/components/PopularConversions";
import FAQSection from "@/components/FAQSection";
import { CategoryId, CATEGORIES } from "@/lib/categories";
import styles from "@/app/page.module.css";

interface UnifiedConverterViewProps {
  initialCategory?: CategoryId;
  title?: string;
}

export default function UnifiedConverterView({
  initialCategory = "weight",
  title,
}: UnifiedConverterViewProps = {}) {
  const router = useRouter();
  const defaultCatInfo = CATEGORIES[initialCategory] || CATEGORIES.weight;
  const [category, setCategory] = useState<CategoryId>(initialCategory);
  const [fromUnit, setFromUnit] = useState<string>(defaultCatInfo.defaultFrom);
  const [toUnit, setToUnit] = useState<string>(defaultCatInfo.defaultTo);
  const [fromValue, setFromValue] = useState<number | null>(1);

  const handleSelectionChange = (
    newCat: CategoryId,
    newFrom: string,
    newTo: string
  ) => {
    if (newCat !== category) {
      router.push(`/${newCat}-converter`);
    } else {
      setCategory(newCat);
      setFromUnit(newFrom);
      setToUnit(newTo);
    }
  };

  const catInfo = CATEGORIES[category] || CATEGORIES.weight;
  const fromInfo = catInfo.units.find((u) => u.id === fromUnit) || {
    name: fromUnit,
    symbol: fromUnit,
  };
  const toInfo = catInfo.units.find((u) => u.id === toUnit) || {
    name: toUnit,
    symbol: toUnit,
  };

  return (
    <div className={styles.pageLayout}>
      <div className={styles.mainColumn}>
        {/* Hero Section with Category Tabs & Converter */}
        <section className={styles.heroSection}>
          <span className="editorial-tag">Precision Utility</span>
          <h1 className={styles.heroTitle}>{title || "Free Multi-Unit Converter"}</h1>
          <p className="lead">
            Instantly convert between units of <strong>Length</strong>,{" "}
            <strong>Weight</strong>, <strong>Temperature</strong>,{" "}
            <strong>Volume</strong>, and <strong>Time</strong> with exact metrological precision.
          </p>

          <Converter
            initialCategory={category}
            initialFromUnit={fromUnit}
            initialToUnit={toUnit}
            onSelectionChange={handleSelectionChange}
            onFromValueChange={setFromValue}
            showTabs={true}
          />
        </section>

        {/* Formula Explanation Section */}
        <section className="editorial-card">
          <h2>
            How to Convert {fromInfo.name} ({fromInfo.symbol}) to {toInfo.name} ({toInfo.symbol})
          </h2>
          {category === "temperature" ? (
            <>
              <p>
                Temperature conversions between <strong>{fromInfo.name}</strong> and{" "}
                <strong>{toInfo.name}</strong> involve temperature scale shifts and offsets:
              </p>
              {fromUnit === "celsius" && toUnit === "fahrenheit" && (
                <p>
                  To convert Celsius to Fahrenheit, multiply the temperature in °C by 9/5 (1.8) and add 32:
                  <br />
                  <code>°F = (°C × 1.8) + 32</code>
                </p>
              )}
              {fromUnit === "fahrenheit" && toUnit === "celsius" && (
                <p>
                  To convert Fahrenheit to Celsius, subtract 32 from °F and multiply by 5/9:
                  <br />
                  <code>°C = (°F − 32) × (5/9)</code>
                </p>
              )}
              {fromUnit === "celsius" && toUnit === "kelvin" && (
                <p>
                  To convert Celsius to Kelvin, add 273.15 to the Celsius value:
                  <br />
                  <code>K = °C + 273.15</code>
                </p>
              )}
              {fromUnit === "kelvin" && toUnit === "celsius" && (
                <p>
                  To convert Kelvin to Celsius, subtract 273.15 from the Kelvin value:
                  <br />
                  <code>°C = K − 273.15</code>
                </p>
              )}
              {(!["celsius-fahrenheit", "fahrenheit-celsius", "celsius-kelvin", "kelvin-celsius"].includes(`${fromUnit}-${toUnit}`)) && (
                <p>
                  Use the interactive tool above for exact two-way temperature conversions with precision control.
                </p>
              )}
            </>
          ) : (
            <>
              <p>
                The conversion between <strong>{fromInfo.name} ({fromInfo.symbol})</strong> and{" "}
                <strong>{toInfo.name} ({toInfo.symbol})</strong> relies on internationally standard conversion ratios.
              </p>
              <p>
                To convert manually, enter your source value into the input field above or consult the reference conversion table below for instant lookups across popular quantities.
              </p>
            </>
          )}
        </section>

        {/* Dynamic Reference Conversion Table */}
        <ConversionChart
          category={category}
          fromUnit={fromUnit}
          toUnit={toUnit}
          highlightValue={fromValue}
        />

        <FAQSection />
      </div>

      {/* Right Sidebar synchronized with active category tab */}
      <aside className={styles.sidebarColumn}>
        <PopularConversions category={category} />
      </aside>
    </div>
  );
}
