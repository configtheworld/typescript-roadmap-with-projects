import { generateMeerkat, Meerkat } from './custom-type-example';
/**
 * Tests for custom typed instances
 */
describe('Custom Types on Meerkats', () => {
  test("Instance's type is IMeerkat", () => {
    const meerkat = generateMeerkat();
    expect(meerkat).toBeInstanceOf(Meerkat);
  });

  test("Instance's currentActivity type is MeerkatActivity", () => {
    const meerkat = generateMeerkat();
    expect(typeof meerkat.currentActivity).toBe('string');
  });
});
