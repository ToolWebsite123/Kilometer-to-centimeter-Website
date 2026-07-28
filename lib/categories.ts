export type CategoryId = "length" | "weight" | "temperature" | "volume" | "time";

export interface UnitInfo {
  id: string;
  name: string;
  symbol: string;
  ratioToBase?: number;
}

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  baseUnit: string;
  defaultFrom: string;
  defaultTo: string;
  units: UnitInfo[];
}

export const CATEGORIES: Record<CategoryId, CategoryInfo> = {
  length: {
    id: "length",
    name: "Length",
    baseUnit: "m",
    defaultFrom: "cm",
    defaultTo: "m",
    units: [
      { id: "mm", name: "Millimeter", symbol: "mm", ratioToBase: 0.001 },
      { id: "cm", name: "Centimeter", symbol: "cm", ratioToBase: 0.01 },
      { id: "m", name: "Meter", symbol: "m", ratioToBase: 1 },
      { id: "km", name: "Kilometer", symbol: "km", ratioToBase: 1000 },
      { id: "in", name: "Inch", symbol: "in", ratioToBase: 0.0254 },
      { id: "ft", name: "Foot", symbol: "ft", ratioToBase: 0.3048 },
      { id: "yd", name: "Yard", symbol: "yd", ratioToBase: 0.9144 },
      { id: "mi", name: "Mile", symbol: "mi", ratioToBase: 1609.344 },
    ],
  },
  weight: {
    id: "weight",
    name: "Weight",
    baseUnit: "kg",
    defaultFrom: "kg",
    defaultTo: "lbs",
    units: [
      { id: "mg", name: "Milligram", symbol: "mg", ratioToBase: 0.000001 },
      { id: "g", name: "Gram", symbol: "g", ratioToBase: 0.001 },
      { id: "kg", name: "Kilogram", symbol: "kg", ratioToBase: 1 },
      { id: "t", name: "Metric Ton", symbol: "t", ratioToBase: 1000 },
      { id: "oz", name: "Ounce", symbol: "oz", ratioToBase: 0.028349523125 },
      { id: "lbs", name: "Pound", symbol: "lbs", ratioToBase: 0.45359237 },
      { id: "st", name: "Stone", symbol: "st", ratioToBase: 6.35029318 },
    ],
  },
  temperature: {
    id: "temperature",
    name: "Temperature",
    baseUnit: "celsius",
    defaultFrom: "celsius",
    defaultTo: "fahrenheit",
    units: [
      { id: "celsius", name: "Celsius", symbol: "°C" },
      { id: "fahrenheit", name: "Fahrenheit", symbol: "°F" },
      { id: "kelvin", name: "Kelvin", symbol: "K" },
    ],
  },
  volume: {
    id: "volume",
    name: "Volume",
    baseUnit: "l",
    defaultFrom: "l",
    defaultTo: "gal",
    units: [
      { id: "ml", name: "Milliliter", symbol: "ml", ratioToBase: 0.001 },
      { id: "l", name: "Liter", symbol: "L", ratioToBase: 1 },
      { id: "m3", name: "Cubic Meter", symbol: "m³", ratioToBase: 1000 },
      { id: "ft3", name: "Cubic Foot", symbol: "ft³", ratioToBase: 0.0283168466 },
      { id: "tsp", name: "Teaspoon", symbol: "tsp", ratioToBase: 0.00492892159375 },
      { id: "tbsp", name: "Tablespoon", symbol: "tbsp", ratioToBase: 0.01478676478125 },
      { id: "cup", name: "Cup", symbol: "cup", ratioToBase: 0.2365882365 },
      { id: "floz", name: "Fluid Ounce", symbol: "fl oz", ratioToBase: 0.0295735295625 },
      { id: "qt", name: "Quart", symbol: "qt", ratioToBase: 0.946352946 },
      { id: "pt", name: "Pint", symbol: "pt", ratioToBase: 0.473176473 },
      { id: "gal", name: "Gallon", symbol: "gal", ratioToBase: 3.785411784 },
    ],
  },
  time: {
    id: "time",
    name: "Time",
    baseUnit: "s",
    defaultFrom: "hr",
    defaultTo: "s",
    units: [
      { id: "ps", name: "Picosecond", symbol: "ps", ratioToBase: 0.000000000001 },
      { id: "ns", name: "Nanosecond", symbol: "ns", ratioToBase: 0.000000001 },
      { id: "us", name: "Microsecond", symbol: "µs", ratioToBase: 0.000001 },
      { id: "ms", name: "Millisecond", symbol: "ms", ratioToBase: 0.001 },
      { id: "s", name: "Second", symbol: "s", ratioToBase: 1 },
      { id: "min", name: "Minute", symbol: "min", ratioToBase: 60 },
      { id: "hr", name: "Hour", symbol: "hr", ratioToBase: 3600 },
      { id: "day", name: "Day", symbol: "day", ratioToBase: 86400 },
      { id: "wk", name: "Week", symbol: "wk", ratioToBase: 604800 },
      { id: "mo", name: "Month", symbol: "mo", ratioToBase: 2629746 },
      { id: "yr", name: "Year", symbol: "yr", ratioToBase: 31557600 },
      { id: "decade", name: "Decade", symbol: "decade", ratioToBase: 315576000 },
      { id: "century", name: "Century", symbol: "century", ratioToBase: 3155760000 },
      { id: "millennium", name: "Millennium", symbol: "millennium", ratioToBase: 31557600000 },
    ],
  },
};

export const CATEGORY_LIST: CategoryInfo[] = [
  CATEGORIES.weight,
  CATEGORIES.length,
  CATEGORIES.temperature,
  CATEGORIES.volume,
  CATEGORIES.time,
];

/**
 * Converts a numerical value from one unit to another within a specified category.
 */
export function convertUnit(
  value: number,
  fromUnitId: string,
  toUnitId: string,
  categoryId: CategoryId
): number {
  if (isNaN(value)) return 0;
  if (fromUnitId === toUnitId) return value;

  if (categoryId === "temperature") {
    // Convert from source unit to Celsius first
    let inCelsius = value;
    if (fromUnitId === "fahrenheit") {
      inCelsius = (value - 32) * (5 / 9);
    } else if (fromUnitId === "kelvin") {
      inCelsius = value - 273.15;
    }

    // Convert from Celsius to target unit
    if (toUnitId === "celsius") {
      return inCelsius;
    } else if (toUnitId === "fahrenheit") {
      return inCelsius * (9 / 5) + 32;
    } else if (toUnitId === "kelvin") {
      return inCelsius + 273.15;
    }
    return inCelsius;
  }

  const category = CATEGORIES[categoryId];
  if (!category) return 0;

  const fromUnit = category.units.find((u) => u.id === fromUnitId);
  const toUnit = category.units.find((u) => u.id === toUnitId);

  if (!fromUnit || !toUnit || !fromUnit.ratioToBase || !toUnit.ratioToBase) {
    return 0;
  }

  // Convert to base unit, then convert from base unit to target unit
  const baseValue = value * fromUnit.ratioToBase;
  return baseValue / toUnit.ratioToBase;
}

/**
 * Gets a human-readable formula string for a conversion pair.
 */
export function getFormulaString(
  val: number,
  fromUnitId: string,
  toUnitId: string,
  categoryId: CategoryId,
  result: number,
  formattedResult: string
): string {
  if (categoryId === "temperature") {
    if (fromUnitId === "celsius" && toUnitId === "fahrenheit") {
      return `Formula: (${val} °C × 9/5) + 32 = ${formattedResult} °F`;
    }
    if (fromUnitId === "fahrenheit" && toUnitId === "celsius") {
      return `Formula: (${val} °F − 32) × 5/9 = ${formattedResult} °C`;
    }
    if (fromUnitId === "celsius" && toUnitId === "kelvin") {
      return `Formula: ${val} °C + 273.15 = ${formattedResult} K`;
    }
    if (fromUnitId === "kelvin" && toUnitId === "celsius") {
      return `Formula: ${val} K − 273.15 = ${formattedResult} °C`;
    }
    if (fromUnitId === "fahrenheit" && toUnitId === "kelvin") {
      return `Formula: (${val} °F − 32) × 5/9 + 273.15 = ${formattedResult} K`;
    }
    if (fromUnitId === "kelvin" && toUnitId === "fahrenheit") {
      return `Formula: (${val} K − 273.15) × 9/5 + 32 = ${formattedResult} °F`;
    }
    return `Formula: ${val} ${fromUnitId} = ${formattedResult} ${toUnitId}`;
  }

  const category = CATEGORIES[categoryId];
  const fromUnit = category?.units.find((u) => u.id === fromUnitId);
  const toUnit = category?.units.find((u) => u.id === toUnitId);

  if (fromUnit && toUnit && fromUnit.ratioToBase && toUnit.ratioToBase) {
    const factor = fromUnit.ratioToBase / toUnit.ratioToBase;
    return `Formula: ${val} ${fromUnit.symbol} × ${factor} = ${formattedResult} ${toUnit.symbol}`;
  }

  return `Formula: ${val} ${fromUnitId} = ${formattedResult} ${toUnitId}`;
}
