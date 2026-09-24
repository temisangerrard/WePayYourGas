export const SITE = {
  instagram: "https://instagram.com/malicknoirr",
  instagramHandle: "@malicknoirr",
  contactEmail: "hello@malicknoir.com",
};

/**
 * Builds the checkout URL for a given payment link + size/product context.
 * If no payment link has been added yet in src/data/products.ts, we fall
 * back to a pre-filled email so no "buy" click ever dead-ends.
 */
export function buildFallbackMailto(productTitle: string, sizeLabel: string) {
  const subject = encodeURIComponent(`Reserve print: ${productTitle} (${sizeLabel})`);
  const body = encodeURIComponent(
    `Hi malicknoir,\n\nI'd like to order "${productTitle}" in ${sizeLabel}.\n\nName:\nShipping address:\n\nThanks!`
  );
  return `mailto:${SITE.contactEmail}?subject=${subject}&body=${body}`;
}
