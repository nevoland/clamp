/**
 * Clamps a value between a range delimited by two numbers.
 *
 * The bounds are automatically reversed if `a` is larger than `b`.
 *
 * @param value The value to clamp.
 * @param a The minimum bound, defaulting to `-Infinity` if `undefined`.
 * @param b The maximum bound, defaulting to `+Infinity` if `undefined`.
 * @returns The clamped value.
 */
export function clamp(value: number, a = -Infinity, b = +Infinity) {
  return a < b
    ? value < a
      ? a
      : value > b
        ? b
        : value
    : value < b
      ? b
      : value > a
        ? a
        : value;
}
