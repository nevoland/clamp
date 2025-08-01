/**
 * Checks if a value is clamped within a specified range.
 *
 * The bounds are automatically reversed if `a` is larger than `b`.
 *
 * @param value The value to check.
 * @param a The minimum bound, defaulting to `-Infinity` if `undefined`.
 * @param b The maximum bound, defaulting to `+Infinity` if `undefined`.
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
