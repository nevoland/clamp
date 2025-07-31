import { expect, test } from "vitest";

import { isClamped } from "./isClamped.js";

test("checks if values are clamped", () => {
  expect(isClamped(5, 0, 10)).toBe(true);

  expect(isClamped(5, 10, 0)).toBe(true);

  expect(isClamped(0, 0, 10)).toBe(true);

  expect(isClamped(10, 0, 10)).toBe(true);

  expect(isClamped(-1, 0, 10)).toBe(false);

  expect(isClamped(11, 10, 0)).toBe(false);

  expect(isClamped(5, 5, 5)).toBe(true);
  expect(isClamped(4, 5, 5)).toBe(false);

  expect(isClamped(999)).toBe(true);
  expect(isClamped(10, 0)).toBe(true);
  expect(isClamped(-1, undefined, 0)).toBe(true);
});
