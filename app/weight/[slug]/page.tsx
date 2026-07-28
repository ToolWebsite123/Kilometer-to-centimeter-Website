import { notFound } from "next/navigation";
import { Metadata } from "next";
import { unitPairs, getPairCategory } from "@/lib/unit-pairs";
import PairConverterView from "@/components/PairConverterView";

interface PageProps {
  params: {
    slug: string;
  };
}

const CATEGORY = "weight";

export function generateStaticParams() {
  return unitPairs
    .filter((pair) => getPairCategory(pair) === CATEGORY)
    .map((pair) => ({
      slug: pair.slug,
    }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const pair = unitPairs.find(
    (p) => p.slug === params.slug && getPairCategory(p) === CATEGORY
  );
  if (!pair) {
    return {};
  }

  const title = `Convert ${pair.fromLabel} to ${pair.toLabel} (${pair.fromUnit} to ${pair.toUnit})`;
  const description = `${pair.description} Check the exact mathematical formulas, conversion factors, and lookup charts.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://kgtolbsconverter.org/${CATEGORY}/${pair.slug}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function WeightPairPage({ params }: PageProps) {
  const pair = unitPairs.find(
    (p) => p.slug === params.slug && getPairCategory(p) === CATEGORY
  );

  if (!pair) {
    notFound();
  }

  return (
    <PairConverterView
      pair={pair}
      category={CATEGORY}
      categoryName="Weight Converter"
      categoryUrl="/weight-converter"
    />
  );
}
