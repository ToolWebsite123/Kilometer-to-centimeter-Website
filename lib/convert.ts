/**
 * Kilogram to Pounds Conversion Math & Constants
 * Pure, unit-testable conversion functions.
 */

// Official exact conversion constant based on International Yard and Pound Agreement (1959)
export const KG_TO_LBS_FACTOR = 2.20462262185;

/**
 * Converts kilograms to pounds.
 */
export function kgToLbs(kg: number): number {
  if (isNaN(kg) || kg < 0) return 0;
  return kg * KG_TO_LBS_FACTOR;
}

/**
 * Converts pounds to kilograms.
 */
export function lbsToKg(lbs: number): number {
  if (isNaN(lbs) || lbs < 0) return 0;
  return lbs / KG_TO_LBS_FACTOR;
}

/**
 * Formats a numeric value to a specified number of decimal places.
 * Trailing zeros are preserved up to requested decimal precision, 
 * or formatted cleanly without unnecessary trailing decimals if desired.
 */
export function formatNumber(value: number, decimals: number = 2): string {
  if (isNaN(value)) return "0";
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: true,
  });
}

/**
 * Data structure for a conversion chart row.
 */
export interface ConversionRow {
  kg: number;
  lbs: number;
}

/**
 * Generates an array of conversion rows for a specified range.
 */
export function generateChartData(start: number = 1, end: number = 100, step: number = 1): ConversionRow[] {
  const rows: ConversionRow[] = [];
  for (let kg = start; kg <= end; kg += step) {
    rows.push({
      kg,
      lbs: kgToLbs(kg),
    });
  }
  return rows;
}
