/**
 * Generic-typed Object Instances tests
 */

import { generateFrog } from './generic-example';

describe('Generic type <T> Tests', () => {
  test('Frog object id is defined', () => {
    const frog = generateFrog();
    expect(frog.id).toBeDefined();
  });
  test('Frog object name is reachable', () => {
    const frog = generateFrog();
    expect(frog.name).toBeDefined();
  });
  test('type of object is IFrog', () => {
    const frog = generateFrog();
    expect(typeof frog.id).toBe('number');
    expect(typeof frog.name).toBe('string');
    expect(typeof frog.content).toBe('string');
  });
});
