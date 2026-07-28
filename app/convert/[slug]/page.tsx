import { redirect, notFound } from "next/navigation";
import { unitPairs, getPairCategory } from "@/lib/unit-pairs";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return unitPairs.map((pair) => ({
    slug: pair.slug,
  }));
}

export default function LegacyConvertRedirect({ params }: PageProps) {
  const pair = unitPairs.find((p) => p.slug === params.slug);
  if (!pair) {
    notFound();
  }

  const category = getPairCategory(pair);
  redirect(`/${category}/${params.slug}`);
}
