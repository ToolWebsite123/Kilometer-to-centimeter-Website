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

const CATEGORY = "temperature";

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

  const title = `Convert ${pair.fromLabel} to ${pair.toLabel}`;
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

export default function TemperaturePairPage({ params }: PageProps) {
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
      categoryName="Temperature Converter"
      categoryUrl="/temperature-converter"
    />
  );
}
