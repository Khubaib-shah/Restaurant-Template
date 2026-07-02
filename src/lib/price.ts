/**
 * Format raw numbers into standard Pakistan Rupee currency string
 * e.g. 1250 -> "Rs. 1,250"
 */
export function formatPrice(price: number): string {
  return `Rs. ${Math.round(price).toLocaleString('en-US')}`;
}

/**
 * Calculate the discount percentage between original price and discounted price
 * e.g. original = 1250, discounted = 750 -> 40
 */
export function calculateDiscountPercent(original: number, discounted: number): number {
  if (original <= 0 || discounted >= original) return 0;
  return Math.round(((original - discounted) / original) * 100);
}
