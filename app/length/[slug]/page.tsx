import { notFound } from "next/navigation";
import { Metadata } from "next";
import { unitPairs, getPairCategory } from "@/lib/unit-pairs";
import { siteUrl } from "@/lib/site";
import PairConverterView from "@/components/PairConverterView";

interface PageProps {
  params: {
    slug: string;
  };
}

const CATEGORY = "length";

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
  const description = `${pair.description} See the formula, conversion factor and lookup chart.`;

  return {
    title,
    description,
    alternates: {
      canonical: siteUrl(`/${CATEGORY}/${pair.slug}`),
    },
    openGraph: {
      title,
      description,
      url: siteUrl(`/${CATEGORY}/${pair.slug}`),
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function LengthPairPage({ params }: PageProps) {
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
      categoryName="Length Converter"
      categoryUrl="/length-converter"
    />
  );
}
