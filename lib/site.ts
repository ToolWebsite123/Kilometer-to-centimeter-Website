/**
 * Central site configuration.
 *
 * The site's public URL lives in exactly one place: set the
 * NEXT_PUBLIC_SITE_URL environment variable at build/deploy time to move
 * the whole site (canonical tags, Open Graph URLs, sitemap, robots and
 * structured-data URLs) to a custom domain. Until then it defaults to the
 * current Cloudflare Pages address.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://kilometer-to-centimeter-website.pages.dev"
).replace(/\/+$/, "");

export const SITE_NAME = "Free Unit Converter";

/** Builds an absolute URL for a site path, e.g. siteUrl("/about"). */
export function siteUrl(path = ""): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
