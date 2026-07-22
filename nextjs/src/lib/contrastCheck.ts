/**
 * WCAG 2.2 relative luminance and contrast ratio utilities.
 * Used to validate brand colors meet WCAG AA (4.5:1 for normal text, 3:1 for large text).
 */

/**
 * Convert a hex color string to its relative luminance value per WCAG 2.2.
 * @param hex - A valid hex color string (#rrggbb or #rgb).
 * @returns Relative luminance (0–1), or null if the input is invalid.
 */
export function hexToLuminance(hex: string): number | null {
  const cleaned = hex.replace(/^#/, "");
  let r: number, g: number, b: number;

  if (cleaned.length === 3) {
    r = parseInt(cleaned[0] + cleaned[0], 16);
    g = parseInt(cleaned[1] + cleaned[1], 16);
    b = parseInt(cleaned[2] + cleaned[2], 16);
  } else if (cleaned.length === 6) {
    r = parseInt(cleaned.slice(0, 2), 16);
    g = parseInt(cleaned.slice(2, 4), 16);
    b = parseInt(cleaned.slice(4, 6), 16);
  } else {
    return null;
  }

  const linearize = (channel: number): number => {
    const sRGB = channel / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  };

  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

/**
 * Calculate the WCAG 2.2 contrast ratio between two colors.
 * @returns Contrast ratio (1–21), or null if either color is invalid.
 */
export function contrastRatio(hex1: string, hex2: string): number | null {
  const l1 = hexToLuminance(hex1);
  const l2 = hexToLuminance(hex2);
  if (l1 === null || l2 === null) return null;
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if a foreground/background color pair meets WCAG AA.
 * @param foreground - The text color in hex.
 * @param background - The background color in hex.
 * @param isLargeText - Use 3:1 threshold for large text (18pt+ or 14pt+ bold). Default: false (4.5:1).
 * @returns { passes: boolean, ratio: number | null }
 */
export function checkWcagAA(
  foreground: string,
  background: string,
  isLargeText = false
): { passes: boolean; ratio: number | null } {
  const ratio = contrastRatio(foreground, background);
  if (ratio === null) return { passes: false, ratio: null };
  const threshold = isLargeText ? 3 : 4.5;
  return { passes: ratio >= threshold, ratio: Math.round(ratio * 100) / 100 };
}
