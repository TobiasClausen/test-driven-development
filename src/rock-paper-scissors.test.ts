import { play } from './rock-paper-scissors';

describe("play", () => {
  test.each([
    ["rock", "scissors", 1],
    ["scissors", "rock", 2],
    ["paper", "rock", 1],
    ["rock", "rock", 0],
    ["  Scissors ", " PAPER ", 1]
  ])("play(%s, %s) = %i", (a, b, res) => {
    expect(play(a, b)).toBe(res);
  });

  test("invalid input throws", () => {
    expect(() => play("banana", "rock")).toThrow("Invalid move");
  });
});
