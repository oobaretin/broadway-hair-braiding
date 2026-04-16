/** Canonical site URL for metadata, sitemap, and Open Graph. */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, '');

  // Vercel sets VERCEL_URL (no protocol) on each deployment — good default before a custom domain.
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/$/, '')}`;

  return 'https://mayaafricanhairbraiding.com'.replace(/\/$/, '');
}

export const SITE_URL = resolveSiteUrl();

export const BUSINESS_NAME = 'Maya African Hair Braiding';
