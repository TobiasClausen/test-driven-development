export function isValid(isbn: string): boolean {
  if (!/^\d{13}$/.test(isbn)) {
    throw new Error("ISBN must be 13 digits");
  }
  const digits = isbn.split("").map(Number);
  const check = digits.pop()!;
  const sum = digits.reduce((acc, d, i) => acc + d * (i % 2 === 0 ? 1 : 3), 0);
  const calculated = (10 - (sum % 10)) % 10;
  return calculated === check;
}
