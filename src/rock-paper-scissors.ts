export function play(p1: string, p2: string): number {
  const normalize = (s: string) => s.trim().toLowerCase();
  const valid = ["rock", "paper", "scissors"];
  const beats: Record<string, string> = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  const m1 = normalize(p1);
  const m2 = normalize(p2);
  if (!valid.includes(m1) || !valid.includes(m2)) {
    throw new Error("Invalid move");
  }
  if (m1 === m2) return 0;
  return beats[m1] === m2 ? 1 : 2;
}
