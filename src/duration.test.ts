import { formatDuration } from './duration';

describe("formatDuration", () => {
  test("formats 33s correctly", () => {
    expect(formatDuration(33)).toBe("33s");
  });
  test("formats 123s as 2m3s", () => {
    expect(formatDuration(123)).toBe("2m3s");
  });
  test("formats 500s as 8m20s", () => {
    expect(formatDuration(500)).toBe("8m20s");
  });
  test("formats 3600 as 1h", () => {
    expect(formatDuration(3600)).toBe("1h");
  });
  test("formats 3999 as 1h6m39s", () => {
    expect(formatDuration(3999)).toBe("1h6m39s");
  });
  test("formats 0 as 0s", () => {
    expect(formatDuration(0)).toBe("0s");
  });
  test("rounds 3999.4 correctly", () => {
    expect(formatDuration(3999.4)).toBe("1h6m39s");
  });
  test("throws on negative input", () => {
    expect(() => formatDuration(-1)).toThrow("Negative duration not allowed");
  });
});
