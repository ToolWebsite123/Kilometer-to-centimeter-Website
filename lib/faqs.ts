import type { CategoryId } from "./categories";
import type { UnitPair } from "./unit-pairs";

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Per-page FAQ content.
 *
 * Every hub page gets questions about its own category, the homepage gets
 * kilometer-to-centimeter questions (the site's main topic), and pair pages
 * get questions generated from their own conversion data. All figures below
 * are exact definitions or are marked as approximations.
 */

export const homeFAQs: FAQItem[] = [
  {
    question: "How many centimeters are in 1 kilometer?",
    answer:
      "Exactly 100,000 centimeters. One kilometer is 1,000 meters and one meter is 100 centimeters, so 1 km = 1,000 × 100 = 100,000 cm. This is exact by definition, not an approximation.",
  },
  {
    question: "How do I convert kilometers to centimeters manually?",
    answer:
      "Multiply the number of kilometers by 100,000. For example, 2.5 km × 100,000 = 250,000 cm. A quick shortcut: move the decimal point 5 places to the right.",
  },
  {
    question: "How do I convert centimeters back to kilometers?",
    answer:
      "Divide the number of centimeters by 100,000. For example, 250,000 cm ÷ 100,000 = 2.5 km. The converter above also works in this direction — just swap the two units.",
  },
  {
    question: "How many centimeters is a marathon (42.195 km)?",
    answer:
      "A marathon is 42.195 kilometers, which is 42.195 × 100,000 = 4,219,500 centimeters.",
  },
  {
    question: "Why would I need to convert kilometers to centimeters?",
    answer:
      "Kilometers and centimeters sit at opposite ends of the metric length scale. Converting between them is useful when working with map scales, engineering or science measurements, or any task where a long distance has to be expressed in the same unit as a small measured length.",
  },
  {
    question: "What other conversions can I do on this site?",
    answer:
      "Besides kilometers and centimeters, the tabs above convert length (miles, feet, inches, millimeters), weight (kilograms, pounds, grams, ounces), temperature (Celsius, Fahrenheit, Kelvin), volume (liters, gallons, milliliters) and time (seconds, minutes, hours, days, years).",
  },
];

export const lengthFAQs: FAQItem[] = [
  {
    question: "How many centimeters are in 1 kilometer?",
    answer:
      "Exactly 100,000 centimeters: 1 kilometer is 1,000 meters, and each meter is 100 centimeters (1,000 × 100 = 100,000). To convert kilometers to centimeters, multiply by 100,000.",
  },
  {
    question: "How many centimeters and inches are in 1 meter?",
    answer:
      "1 meter equals exactly 100 centimeters or 39.37007874 inches (approximately 39.3701 in). Conversely, 1 inch equals exactly 2.54 centimeters.",
  },
  {
    question: "How many kilometers are in 1 mile?",
    answer:
      "1 mile is exactly 1.609344 kilometers. In the other direction, 1 kilometer is approximately 0.621371 miles.",
  },
  {
    question: "How many inches are in 1 foot?",
    answer:
      "1 foot is exactly 12 inches, which makes 1 foot exactly 30.48 centimeters (12 × 2.54 cm).",
  },
  {
    question: "How do I convert millimeters to centimeters?",
    answer:
      "Divide the number of millimeters by 10, because 1 centimeter is exactly 10 millimeters. For example, 55 mm ÷ 10 = 5.5 cm.",
  },
];

export const weightFAQs: FAQItem[] = [
  {
    question: "How many pounds are in 1 kilogram?",
    answer:
      "There are approximately 2.20462262185 pounds in 1 kilogram, according to the 1959 International Yard and Pound Agreement. For quick mental math, you can approximate 1 kg as 2.2 pounds by doubling the kilograms and adding 10%.",
  },
  {
    question: "How many grams are in 1 kilogram?",
    answer:
      "Exactly 1,000 grams. Going further down the metric scale, 1 gram is exactly 1,000 milligrams.",
  },
  {
    question: "How many ounces are in 1 pound?",
    answer:
      "Exactly 16 ounces. One ounce is approximately 28.3495 grams.",
  },
  {
    question: "How do I convert pounds back to kilograms?",
    answer:
      "Multiply the number of pounds by 0.45359237 (the exact definition of a pound in kilograms). For example, 100 lbs × 0.45359237 = 45.359237 kg, about 45.36 kg.",
  },
  {
    question: "How many pounds are in 1 stone?",
    answer:
      "1 stone is exactly 14 pounds, which is approximately 6.35029 kilograms. The stone is still commonly used for body weight in the UK and Ireland.",
  },
];

export const temperatureFAQs: FAQItem[] = [
  {
    question: "How do I convert Celsius to Fahrenheit or Kelvin?",
    answer:
      "To convert Celsius to Fahrenheit, multiply by 9/5 (or 1.8) and add 32. Formula: °F = (°C × 1.8) + 32. To convert Celsius to Kelvin, add 273.15. Formula: K = °C + 273.15.",
  },
  {
    question: "Why are temperature conversions different from length or weight?",
    answer:
      "Length and weight have a true zero — zero means none of the quantity, in every unit. Celsius and Fahrenheit instead set their zero points at chosen reference events, so converting between them needs both a scale factor and an offset. Kelvin is the exception: its zero is absolute zero, the true zero of temperature, which is why converting Celsius to Kelvin (K = °C + 273.15) needs only an offset.",
  },
  {
    question: "At what temperature are Celsius and Fahrenheit equal?",
    answer:
      "At −40. A temperature of −40 degrees Celsius is exactly −40 degrees Fahrenheit — the only point where the two scales meet.",
  },
  {
    question: "What are the freezing and boiling points of water in each scale?",
    answer:
      "At standard atmospheric pressure, water freezes at 0 °C = 32 °F = 273.15 K and boils at 100 °C = 212 °F = 373.15 K.",
  },
  {
    question: "How do I convert Fahrenheit to Celsius?",
    answer:
      "Subtract 32, then multiply by 5/9. Formula: °C = (°F − 32) × 5/9. For example, normal body temperature: (98.6 − 32) × 5/9 = 37 °C.",
  },
];

export const volumeFAQs: FAQItem[] = [
  {
    question: "How do volume conversions work between liters and gallons?",
    answer:
      "1 US fluid gallon equals 3.785411784 liters. Therefore, 1 liter equals approximately 0.264172 US liquid gallons.",
  },
  {
    question: "How many milliliters are in 1 liter?",
    answer:
      "Exactly 1,000 milliliters. One milliliter is the same volume as one cubic centimeter (1 ml = 1 cm³).",
  },
  {
    question: "Is a US gallon the same as a UK (imperial) gallon?",
    answer:
      "No. A US gallon is 3.785411784 liters, while an imperial gallon is 4.54609 liters — about 20% larger. This converter uses US liquid gallons.",
  },
  {
    question: "How many cups are in 1 liter?",
    answer:
      "One US cup is approximately 236.588 milliliters, so 1 liter is approximately 4.23 US cups (1,000 ÷ 236.588 ≈ 4.2268).",
  },
  {
    question: "How many liters are in 1 cubic meter?",
    answer:
      "Exactly 1,000 liters. A cubic meter is a cube measuring 1 m × 1 m × 1 m, and each liter is 1,000 cubic centimeters.",
  },
];

export const timeFAQs: FAQItem[] = [
  {
    question: "How many seconds are in 1 day?",
    answer:
      "Exactly 86,400 seconds: 24 hours × 60 minutes × 60 seconds. One day also contains exactly 1,440 minutes.",
  },
  {
    question: "How many days are in 1 year?",
    answer:
      "An average Gregorian calendar year is 365.2425 days — the figure this converter uses — because leap years add an extra day in most years divisible by 4. A common year has 365 days and a leap year has 366.",
  },
  {
    question: "How many days are in 1 month?",
    answer:
      "It depends on the month: calendar months run from 28 to 31 days. For conversions, this site uses the average month of 30.436875 days (one average Gregorian year of 365.2425 days divided by 12).",
  },
  {
    question: "How many weeks are in 1 year?",
    answer:
      "Approximately 52.18 weeks: an average year of 365.2425 days divided by 7 days per week equals about 52.1775 weeks.",
  },
  {
    question: "How many milliseconds are in 1 second?",
    answer:
      "Exactly 1,000 milliseconds. Going smaller, 1 millisecond is exactly 1,000 microseconds, and 1 microsecond is exactly 1,000 nanoseconds.",
  },
];

const hubFAQs: Record<CategoryId, FAQItem[]> = {
  length: lengthFAQs,
  weight: weightFAQs,
  temperature: temperatureFAQs,
  volume: volumeFAQs,
  time: timeFAQs,
};

const hubFAQIntros: Record<CategoryId, string> = {
  length: "Common questions about length and distance conversions.",
  weight: "Common questions about weight and mass conversions.",
  temperature: "Common questions about temperature conversions.",
  volume: "Common questions about volume and capacity conversions.",
  time: "Common questions about time conversions.",
};

export function faqsForCategory(category: CategoryId): FAQItem[] {
  return hubFAQs[category];
}

export function faqIntroForCategory(category: CategoryId): string {
  return hubFAQIntros[category];
}

/** Format a computed example value: up to 4 decimal places, with grouping. */
function formatExample(value: number): { text: string; exact: boolean } {
  const rounded = Math.round(value * 10000) / 10000;
  return {
    text: rounded.toLocaleString("en-US", { maximumFractionDigits: 4 }),
    exact: rounded === value,
  };
}

/** Singular form for long word-like unit ids ("grams" -> "gram"); symbols pass through. */
function singularUnit(unit: string): string {
  return unit.length > 3 && unit.endsWith("s") ? unit.slice(0, -1) : unit;
}

const temperatureFormulas: Record<
  string,
  { formula: string; exampleQ: string; exampleA: string; reverse: string }
> = {
  "celsius-to-fahrenheit": {
    formula: "°F = (°C × 1.8) + 32",
    exampleQ: "What is 100 °C in Fahrenheit?",
    exampleA:
      "100 °C is exactly 212 °F — the boiling point of water at standard atmospheric pressure. Using the formula: (100 × 1.8) + 32 = 212.",
    reverse:
      "To convert Fahrenheit back to Celsius, subtract 32 and multiply by 5/9: °C = (°F − 32) × 5/9.",
  },
  "fahrenheit-to-celsius": {
    formula: "°C = (°F − 32) × 5/9",
    exampleQ: "What is 212 °F in Celsius?",
    exampleA:
      "212 °F is exactly 100 °C — the boiling point of water at standard atmospheric pressure. Using the formula: (212 − 32) × 5/9 = 100.",
    reverse:
      "To convert Celsius back to Fahrenheit, multiply by 1.8 and add 32: °F = (°C × 1.8) + 32.",
  },
  "celsius-to-kelvin": {
    formula: "K = °C + 273.15",
    exampleQ: "What is 0 °C in Kelvin?",
    exampleA:
      "0 °C is exactly 273.15 K — the freezing point of water. Kelvin uses the same step size as Celsius, so you only add the offset of 273.15.",
    reverse:
      "To convert Kelvin back to Celsius, subtract 273.15: °C = K − 273.15.",
  },
  "kelvin-to-celsius": {
    formula: "°C = K − 273.15",
    exampleQ: "What is 273.15 K in Celsius?",
    exampleA:
      "273.15 K is exactly 0 °C — the freezing point of water. Kelvin and Celsius use the same step size, so you only subtract the offset of 273.15.",
    reverse:
      "To convert Celsius back to Kelvin, add 273.15: K = °C + 273.15.",
  },
  "fahrenheit-to-kelvin": {
    formula: "K = (°F − 32) × 5/9 + 273.15",
    exampleQ: "What is 32 °F in Kelvin?",
    exampleA:
      "32 °F is exactly 273.15 K — the freezing point of water. Using the formula: (32 − 32) × 5/9 + 273.15 = 273.15.",
    reverse:
      "To convert Kelvin back to Fahrenheit, subtract 273.15, multiply by 1.8 and add 32: °F = (K − 273.15) × 1.8 + 32.",
  },
  "kelvin-to-fahrenheit": {
    formula: "°F = (K − 273.15) × 1.8 + 32",
    exampleQ: "What is 273.15 K in Fahrenheit?",
    exampleA:
      "273.15 K is exactly 32 °F — the freezing point of water. Using the formula: (273.15 − 273.15) × 1.8 + 32 = 32.",
    reverse:
      "To convert Fahrenheit back to Kelvin, subtract 32, multiply by 5/9 and add 273.15: K = (°F − 32) × 5/9 + 273.15.",
  },
};

/**
 * FAQs for a pair page, generated from that pair's own conversion data so
 * every pair page answers questions about its own two units.
 */
export function buildPairFAQs(pair: UnitPair, category: CategoryId): FAQItem[] {
  const fromLower = pair.fromLabel.toLowerCase();
  const toLower = pair.toLabel.toLowerCase();

  if (category === "temperature") {
    const t = temperatureFormulas[pair.slug];
    if (t) {
      return [
        {
          question: `What is the formula to convert ${pair.fromLabel} to ${pair.toLabel}?`,
          answer: `Use the formula ${t.formula}. Temperature conversions combine a scale factor with an offset, because the ${pair.fromLabel} and ${pair.toLabel} scales start at different zero points.`,
        },
        { question: t.exampleQ, answer: t.exampleA },
        {
          question: `How do I convert ${pair.toLabel} back to ${pair.fromLabel}?`,
          answer: t.reverse,
        },
      ];
    }
  }

  const example = formatExample(10 * pair.factor);
  const toNoun = pair.toUnit.length > 3 ? toLower : pair.toUnit;

  return [
    {
      question: `How many ${toNoun} are in 1 ${singularUnit(pair.fromUnit)}?`,
      answer: `There are ${pair.factor} ${toNoun} in 1 ${singularUnit(pair.fromUnit)}. This conversion factor is the basis for every ${fromLower} to ${toLower} calculation on this page.`,
    },
    {
      question: `What is the formula to convert ${pair.fromLabel} to ${pair.toLabel}?`,
      answer: `Multiply the value in ${fromLower} by ${pair.factor}: Value in ${pair.toLabel} = Value in ${pair.fromLabel} × ${pair.factor}.`,
    },
    {
      question: `How many ${pair.toLabel} are in 10 ${pair.fromLabel}?`,
      answer: `10 ${fromLower} × ${pair.factor} = ${example.exact ? "" : "approximately "}${example.text} ${toLower}.`,
    },
    {
      question: `How do I convert ${pair.toLabel} back to ${pair.fromLabel}?`,
      answer: `Divide the value in ${toLower} by ${pair.factor}: Value in ${pair.fromLabel} = Value in ${pair.toLabel} ÷ ${pair.factor}. Or use the converter above with the units swapped.`,
    },
  ];
}
