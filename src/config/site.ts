export const SITE = {
  instagram: "https://instagram.com/malicknoirr",
  instagramHandle: "@malicknoirr",
  contactEmail: "",
};

/**
 * Enquiries use a confirmed inbox when configured, otherwise Instagram.
 * This does not place an order or take payment.
 */
export function buildFallbackMailto(productTitle: string, sizeLabel: string) {
  if (!SITE.contactEmail) return SITE.instagram;
  const subject = encodeURIComponent(`Print enquiry: ${productTitle} (${sizeLabel})`);
  const body = encodeURIComponent(
    `Hi malicknoir,\n\nI'm interested in "${productTitle}" in ${sizeLabel}. Please could you confirm availability and delivery costs?\n\nDelivery country:\n\nThanks!`
  );
  return `mailto:${SITE.contactEmail}?subject=${subject}&body=${body}`;
}
