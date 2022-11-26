import { describe, expect, it } from "vitest";
import { canReconfigure } from "../src/canReconfigure";

describe("canreconfigure", () => {
  // it("should be a function", () => {
  //   expect(typeof canReconfigure).toBe("function");
  // });

  it("should return throw if first parameter is missing", () => {
    expect(() => canReconfigure()).toThrow();
  });

  it("should return throw if first parameter is not a string", () => {
    expect(() => canReconfigure(2)).toThrow();
  });

  it("should return throw if second parameter is not a string", () => {
    expect(() => canReconfigure("a")).toThrow();
  });

  it("should return a boolean", () => {
    expect(typeof canReconfigure("a", "b")).toBe("boolean");
  });

  it("should return false if strings provided have different lenght", () => {
    expect(canReconfigure("abc", "de")).toBe(false);
  });

  it("should return false if strings provided have different lenght even with same unique letters", () => {
    expect(canReconfigure("aab", "ab")).toBe(false);
  });

  it("should return false if strings provided have different number of unique letters", () => {
    expect(canReconfigure("abc", "ddd")).toBe(false);
  });

  it("should return false if strings has different order of transformation", () => {
    expect(canReconfigure("XBOX", "XXBO")).toBe(false);
  });
});
