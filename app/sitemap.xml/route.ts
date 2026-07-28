import { unitPairs, getPairCategory } from "@/lib/unit-pairs";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://kgtolbsconverter.org";
  const lastModified = "2026-01-01T00:00:00.000Z";

  const staticUrls = [
    { url: `${baseUrl}`, priority: "1.0", changefreq: "daily" },
    { url: `${baseUrl}/length-converter`, priority: "0.8", changefreq: "daily" },
    { url: `${baseUrl}/weight-converter`, priority: "0.8", changefreq: "daily" },
    { url: `${baseUrl}/temperature-converter`, priority: "0.8", changefreq: "daily" },
    { url: `${baseUrl}/volume-converter`, priority: "0.8", changefreq: "daily" },
    { url: `${baseUrl}/time-converter`, priority: "0.8", changefreq: "daily" },
    { url: `${baseUrl}/about`, priority: "0.5", changefreq: "monthly" },
  ];

  const convertUrls = unitPairs.map((pair) => ({
    url: `${baseUrl}/${getPairCategory(pair)}/${pair.slug}`,
    priority: "0.7",
    changefreq: "weekly",
  }));

  const allUrls = [...staticUrls, ...convertUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
