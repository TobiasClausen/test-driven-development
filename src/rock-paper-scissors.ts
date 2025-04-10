export function play(p1: string, p2: string): number {
  // Funktion, um Eingaben zu bereinigen (z. B. Leerzeichen entfernen, in Kleinbuchstaben umwandeln)
  const normalize = (s: string) => s.trim().toLowerCase();

  // Gültige Züge im Spiel
  const valid = ["rock", "paper", "scissors"];

  // Diese Tabelle zeigt, welcher Zug welchen anderen schlägt
  const beats: Record<string, string> = {
    rock: "scissors",     // Stein schlägt Schere
    paper: "rock",        // Papier schlägt Stein
    scissors: "paper",    // Schere schlägt Papier
  };

  // Bereinige beide Eingaben
  const m1 = normalize(p1);
  const m2 = normalize(p2);

  // Überprüfe, ob beide Eingaben gültig sind
  if (!valid.includes(m1) || !valid.includes(m2)) {
    throw new Error("Invalid move"); // Fehler, wenn ein ungültiger Zug eingegeben wurde
  }

  // Wenn beide denselben Zug machen → Unentschieden
  if (m1 === m2) return 0;

  // Wenn Spieler 1 gewinnt → Rückgabe 1, sonst gewinnt Spieler 2 → Rückgabe 2
  return beats[m1] === m2 ? 1 : 2;
}

