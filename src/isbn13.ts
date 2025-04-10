export function isValid(isbn: string): boolean {
  // Überprüfe: Die ISBN muss genau 13 Ziffern lang sein (nur Zahlen erlaubt)
  if (!/^\d{13}$/.test(isbn)) {
    throw new Error("ISBN must be 13 digits"); // Fehlermeldung bei falscher Eingabe
  }

  // Zerlege die ISBN in ein Array von Zahlen
  const digits = isbn.split("").map(Number);

  // Der letzte Wert ist die Prüfziffer
  const check = digits.pop()!;

  // Berechne die Summe nach dem ISBN-13-Algorithmus:
  // - Positionen mit geradem Index (0, 2, 4, ...) werden mit 1 multipliziert
  // - Positionen mit ungeradem Index (1, 3, 5, ...) werden mit 3 multipliziert
  const sum = digits.reduce((acc, d, i) => acc + d * (i % 2 === 0 ? 1 : 3), 0);

  // Die Prüfziffer ist so gewählt, dass (Summe + Prüfziffer) durch 10 teilbar ist
  const calculated = (10 - (sum % 10)) % 10;

  // Vergleiche die berechnete Prüfziffer mit der tatsächlichen
  return calculated === check;
}
