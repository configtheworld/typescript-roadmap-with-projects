import { Duck, generateDuck, generateDucks } from './definition-example';
/**
 * Interface, Class and Object Generation Tests
 */
describe('Definition Tests : Interface, Class and Object Generation', () => {
  test('Generated Duck is Instance of Duck class', () => {
    const duck = generateDuck();
    expect(duck).toBeInstanceOf(Duck);
  });

  test('Ducks speak returns string', () => {
    const duck = generateDuck();
    expect(typeof duck.speak()).toBe('string');
  });

  test('Return 50 Duck Instances', () => {
    const ducks = generateDucks();
    expect(ducks.length).toBe(50);
  });
});
