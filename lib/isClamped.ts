/**
 * Checks if a value is clamped within a specified range.
 *
 * @param value The value to check.
 * @param min The minimum value of the range.
 * @param max The maximum value of the range.
 * @returns True if the value is within the range [min, max], false otherwise.
 */
export function isClamped(
  value: number,
  a: number = -Infinity,
  b: number = Infinity,
): boolean {
  const min = a < b ? a : b;
  const max = a < b ? b : a;
  return !(value < min || value > max);
}
