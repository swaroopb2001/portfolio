// Vercel sets VERCEL_PROJECT_PRODUCTION_URL automatically (e.g. "portfolio-xyz.vercel.app").
// Set NEXT_PUBLIC_SITE_URL in Vercel if you add a custom domain.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
