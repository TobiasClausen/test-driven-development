import { isValid } from './isbn13';

describe("isValid", () => {
  test("valid ISBN", () => {
    expect(isValid("9780306406157")).toBe(true);
  });
  test("invalid check digit", () => {
    expect(isValid("9780306406158")).toBe(false);
  });
  test("invalid format", () => {
    expect(() => isValid("97803")).toThrow("ISBN must be 13 digits");
  });
});
