import { faker } from '@faker-js/faker';
/**
 * Custom Type
 * @type Activity
 */
export type Activity = 'scurry' | 'sniff' | 'flinch';

/**
 * Meerkat Class for demonstration
 * @params name , currentActivity
 */
export class Meerkat {
  name: string;
  currentActivity: Activity;
  public constructor(name: string, currentActivity: Activity) {
    this.name = name;
    this.currentActivity = currentActivity;
  }
}
/**
 * generating instance from Meerkat class
 */
export const generateMeerkat = (): Meerkat => {
  const activity = faker.helpers.arrayElement([
    'scurry',
    'sniff',
    'flinch',
  ]) as Activity;
  return new Meerkat(faker.name.firstName(), activity);
};
