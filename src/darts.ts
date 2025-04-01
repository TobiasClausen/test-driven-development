export function calcPoints(input: string): number {
  const parts = input.trim().split(" ").map(Number);
  let total = 0;
  for (let i = 0; i < parts.length; i += 2) {
    total += parts[i] * (parts[i + 1] || 0);
  }
  return total;
}

export function possibleCheckout(score: number): string | null {
  const rest = 501 - score;
  if (rest % 2 !== 0) return null;
  const d = rest / 2;
  return d >= 1 && d <= 20 ? `Double ${d}` : null;
}
