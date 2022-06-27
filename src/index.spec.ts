/**
 * Exemple de test unitaire en typescript avec jest.
 * @author Killian Raoux
 */
import { addition } from ".";

it("addition de deux nombres", () => {
  expect(addition(1, 2)).toBe(3);
});