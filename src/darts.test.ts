import { calcPoints, possibleCheckout } from './darts';

test("calcPoints", () => {
  expect(calcPoints("3 20 1 17 2 4")).toBe(85);
  expect(calcPoints("2 15 1 18 3 19")).toBe(105);
  expect(calcPoints("3 20 1 5")).toBe(65);
});

test("possibleCheckout", () => {
  expect(possibleCheckout(477)).toBe("Double 12");
  expect(possibleCheckout(480)).toBe(null);
  expect(possibleCheckout(441)).toBe(null);
});
