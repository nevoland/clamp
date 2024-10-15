import { expect, test } from "vitest";

import { clamp } from "./clamp.js";

test("clamps values", () => {
  expect(clamp(5, 0, -5)).toBe(0);
  expect(clamp(5, -5, 0)).toBe(0);
  expect(clamp(5, -5, -5)).toBe(-5);
  expect(clamp(2, 5, 0)).toBe(2);
  expect(clamp(-1, 5, 0)).toBe(0);
});
