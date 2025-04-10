export function formatDuration(seconds: number): string {
  // Negativen Wert abfangen – Dauer darf nicht negativ sein
  if (seconds < 0) throw new Error("Negative duration not allowed");

  // Runde die Sekunden auf die nächste ganze Zahl
  const total = Math.round(seconds);

  // Berechne Stunden, Minuten und Sekunden
  const h = Math.floor(total / 3600);             // 1 Stunde = 3600 Sekunden
  const m = Math.floor((total % 3600) / 60);       // Restliche Minuten
  const s = total % 60;                            // Restliche Sekunden

  // Ergebnis-String vorbereiten
  let result = "";

  // Hänge Stunden an, falls vorhanden
  if (h > 0) result += `${h}h`;

  // Hänge Minuten an, falls vorhanden
  if (m > 0) result += `${m}m`;

  // Sekunden werden immer angezeigt, außer es gibt Stunden oder Minuten und Sekunden = 0
  // Aber: Wenn alles 0 ist, wird trotzdem "0s" angezeigt
  if (s > 0 || result === "") result += `${s}s`;

  return result;
}
