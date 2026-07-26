"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "How many pounds are in 1 kilogram?",
    answer:
      "There are exactly 2.20462262185 pounds in 1 kilogram. For quick mental math, you can approximate 1 kg as 2.2 pounds.",
  },
  {
    question: "What is the exact formula to convert kg to lbs?",
    answer:
      "To convert kilograms to pounds, multiply the mass in kilograms by 2.20462262185. Formula: Pounds = Kilograms × 2.20462262185. Conversely, to convert pounds to kilograms, divide pounds by 2.20462262185.",
  },
  {
    question: "How do I convert kilograms to pounds manually without a calculator?",
    answer:
      "A simple rule of thumb for quick estimation: double the kilogram value, then add 10% of that result. For example, to convert 70 kg: 70 × 2 = 140. 10% of 140 is 14. 140 + 14 = 154 lbs (very close to the exact 154.32 lbs).",
  },
  {
    question: "What is the difference between mass (kg) and weight (lbs)?",
    answer:
      "Strictly speaking, the kilogram (kg) is a metric base unit of mass (amount of matter), while the pound (lb) in common usage refers to the avoirdupois pound as a measure of weight or mass. On Earth's surface, standard acceleration due to gravity makes them directly convertible for everyday weight measurements.",
  },
  {
    question: "Why is 1 kg equal to 2.20462 lbs?",
    answer:
      "The conversion factor comes from the International Yard and Pound Agreement of 1959, which legally defined 1 avoirdupois pound as exactly 0.45359237 kilograms. Dividing 1 by 0.45359237 yields approximately 2.20462262185 lbs per kilogram.",
  },
];

interface FAQSectionProps {
  faqs?: FAQItem[];
}

/**
 * FAQ Section Component
 * Displays collapsible Q&A items and embeds JSON-LD FAQPage schema for search engine rich snippets.
 */
export default function FAQSection({ faqs = defaultFAQs }: FAQSectionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Structured Data (JSON-LD) for FAQPage schema
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
      {/* JSON-LD Schema Insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <p className={styles.intro}>
        Everything you need to know about converting kilograms to pounds, accuracy, and formulas.
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
