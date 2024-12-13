import { compute } from "../src/compute.js";
import { test, expect } from "vitest";

test("Addition Test", () => {
  expect(compute("10", "20", "+")).toBe("30");
});

test("Subtraction Test", () => {
  expect(compute("10", "20", "-")).toBe("-10");
});

test("Multiplying Test", () => {
  expect(compute("10", "20", "x")).toBe("200");
});

test("Dividing Test", () => {
  expect(compute("10", "20", "÷")).toBe("0.5");
});

test("Divide by 0 Test", () => {
  expect(compute("10", "0", "÷")).toBe("NaN");
});
