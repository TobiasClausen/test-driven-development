export function calcPoints(input: string): number {
  // Eingabe (z. B. "20 3 18 2") wird in Zahlen umgewandelt
  const parts = input.trim().split(" ").map(Number);

  let total = 0;

  // Durchlaufe alle Paare (z. B. [Wert] [Multiplikator])
  for (let i = 0; i < parts.length; i += 2) {
    // parts[i]     → z. B. die Zahl (z. B. 20)
    // parts[i + 1] → z. B. der Multiplikator (z. B. 3 für Triple)
    // Falls kein Multiplikator angegeben ist, wird 0 verwendet
    total += parts[i] * (parts[i + 1] || 0);
  }

  return total;
}

export function possibleCheckout(score: number): string | null {
  // Restpunktzahl bis 501 berechnen
  const rest = 501 - score;

  // Wenn der Rest ungerade ist, ist kein Checkout mit einem Double möglich
  if (rest % 2 !== 0) return null;

  // Potenzieller Double-Wert
  const d = rest / 2;

  // Nur gültig, wenn Double im Bereich 1–20 ist
  return d >= 1 && d <= 20 ? `Double ${d}` : null;
}
