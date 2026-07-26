export interface UnitPair {
  slug: string;
  fromUnit: string;
  toUnit: string;
  fromLabel: string;
  toLabel: string;
  factor: number;
  description: string;
}

export const unitPairs: UnitPair[] = [
  {
    slug: "kg-to-lbs",
    fromUnit: "kg",
    toUnit: "lbs",
    fromLabel: "Kilograms",
    toLabel: "Pounds",
    factor: 2.20462262185,
    description: "Convert kilograms (kg) to pounds (lbs) instantly using our real-time weight calculator and conversion tables.",
  },
  {
    slug: "lbs-to-kg",
    fromUnit: "lbs",
    toUnit: "kg",
    fromLabel: "Pounds",
    toLabel: "Kilograms",
    factor: 0.45359237,
    description: "Convert pounds (lbs) to kilograms (kg) with precision using our interactive weight conversion tool.",
  },
  {
    slug: "kg-to-grams",
    fromUnit: "kg",
    toUnit: "grams",
    fromLabel: "Kilograms",
    toLabel: "Grams",
    factor: 1000,
    description: "Convert kilograms (kg) to grams (grams) instantly using our fast mass conversion calculator.",
  },
  {
    slug: "grams-to-kg",
    fromUnit: "grams",
    toUnit: "kg",
    fromLabel: "Grams",
    toLabel: "Kilograms",
    factor: 0.001,
    description: "Convert grams (grams) to kilograms (kg) with accuracy using our real-time weight converter.",
  },
  {
    slug: "kg-to-oz",
    fromUnit: "kg",
    toUnit: "oz",
    fromLabel: "Kilograms",
    toLabel: "Ounces",
    factor: 35.2739619496,
    description: "Convert kilograms (kg) to ounces (oz) easily using our accurate online mass converter.",
  },
  {
    slug: "oz-to-kg",
    fromUnit: "oz",
    toUnit: "kg",
    fromLabel: "Ounces",
    toLabel: "Kilograms",
    factor: 0.028349523125,
    description: "Convert ounces (oz) to kilograms (kg) instantly with our simple weight conversion tool.",
  },
  {
    slug: "kg-to-stone",
    fromUnit: "kg",
    toUnit: "stone",
    fromLabel: "Kilograms",
    toLabel: "Stone",
    factor: 0.157473044418,
    description: "Convert kilograms (kg) to stone (stone) with our real-time mass calculator and lookup charts.",
  },
  {
    slug: "stone-to-kg",
    fromUnit: "stone",
    toUnit: "kg",
    fromLabel: "Stone",
    toLabel: "Kilograms",
    factor: 6.35029318,
    description: "Convert stone (stone) to kilograms (kg) easily using our precise weight converter.",
  },
];
