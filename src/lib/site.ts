/** Canonical site URL for metadata, sitemap, and Open Graph. Override with NEXT_PUBLIC_SITE_URL when deployed. */
const rawSiteUrl =
  typeof process.env.NEXT_PUBLIC_SITE_URL === 'string'
    ? process.env.NEXT_PUBLIC_SITE_URL.trim()
    : '';
export const SITE_URL = (
  rawSiteUrl.length > 0 ? rawSiteUrl : 'https://broadwayhairbraiding.com'
).replace(/\/$/, '');

export const BUSINESS_NAME = 'Broadway Hair Braiding';
