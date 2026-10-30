"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "How do unit conversions work?",
    answer:
      "Unit conversion calculates equivalent values between different measurement systems (such as metric and imperial). Linear units like length, weight, volume, and time use fixed multiplier ratios relative to a standard base unit. Temperature conversions additionally apply offset shifts to account for different zero points.",
  },
  {
    question: "How many pounds are in 1 kilogram?",
    answer:
      "There are approximately 2.20462262185 pounds in 1 kilogram, according to the 1959 International Yard and Pound Agreement. For quick mental math, you can approximate 1 kg as 2.2 pounds by doubling the kilograms and adding 10%.",
  },
  {
    question: "How do I convert Celsius to Fahrenheit or Kelvin?",
    answer:
      "To convert Celsius to Fahrenheit, multiply by 9/5 (or 1.8) and add 32. Formula: °F = (°C × 1.8) + 32. To convert Celsius to Kelvin, add 273.15. Formula: K = °C + 273.15.",
  },
  {
    question: "How many centimeters and inches are in 1 meter?",
    answer:
      "1 meter equals exactly 100 centimeters or 39.37007874 inches (approximately 39.3701 in). Conversely, 1 inch equals exactly 2.54 centimeters.",
  },
  {
    question: "How do volume conversions work between liters and gallons?",
    answer:
      "1 US fluid gallon equals 3.785411784 liters. Therefore, 1 liter equals approximately 0.264172 US liquid gallons.",
  },
  {
    question: "Why are temperature conversions different from length or weight?",
    answer:
      "Length, weight, volume, and time share a true zero point (zero mass or zero length is zero in any unit). Temperature scales use different baseline zero points (0°C = 32°F = 273.15 K), which requires combining a scale factor with an offset calculation.",
  },
];

interface FAQSectionProps {
  faqs?: FAQItem[];
}

/**
 * Universal FAQ Section Component
 * Displays collapsible Q&A items and embeds JSON-LD FAQPage schema for search engine rich snippets.
 */
export default function FAQSection({ faqs = defaultFAQs }: FAQSectionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={styles.faqSection} aria-label="Frequently Asked Questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <p className={styles.intro}>
        Common questions about measurement conversions across Length, Weight, Temperature, Volume, and Time.
      </p>

      <div className={styles.accordion}>
        {faqs.map((faq, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div key={idx} className={styles.faqItem}>
              <button
                type="button"
                className={styles.questionBtn}
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && <div className={styles.answer}>{faq.answer}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
