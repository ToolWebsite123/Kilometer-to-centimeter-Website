"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";
import type { FAQItem } from "@/lib/faqs";

export type { FAQItem };

interface FAQSectionProps {
  faqs: FAQItem[];
  intro?: string;
}

/**
 * FAQ Section Component
 * Displays collapsible Q&A items and embeds JSON-LD FAQPage schema for search engine rich snippets.
 * Each page passes its own topic-specific questions from lib/faqs.ts.
 */
export default function FAQSection({ faqs, intro }: FAQSectionProps) {
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
        {intro || "Common questions about this conversion."}
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
