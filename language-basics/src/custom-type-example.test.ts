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
    const MeerkatActivityType = (meerkat): boolean => {
      if (meerkat.currentActivity === 'scurry' || 'sniff' || 'flinch') {
        return true;
      }
      return false;
    };
    console.log(meerkat.currentActivity);
    expect(MeerkatActivityType(meerkat)).toBe(true);
  });
});
