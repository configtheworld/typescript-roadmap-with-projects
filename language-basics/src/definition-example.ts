import { faker } from '@faker-js/faker';
/**
 * Simple Interface and Class Definition and Object Generation
 * @interface IDuck
 * @attr name birthday nickname
 * @methods speak
 */

interface IDuck {
  name: string;
  birthdate: Date;
  nickname?: string;
  speak(): string;
}
/**
 * Duck Class
 * @attr name birthday nickname
 * @methods speak
 */
export class Duck implements IDuck {
  name: string;
  birthdate: Date;
  nickname: string;

  public constructor(name: string, birthdate: Date) {
    this.name = name;
    this.birthdate = birthdate;
  }
  public speak() {
    return this.name + ': Quack Quack';
  }
}

/**
 * Simple Duck Object Generation
 */
const generateSampleDuck = () => {
  let sampleDuck: IDuck | null = null;

  sampleDuck = new Duck('Donald', new Date('1976-07-29T02:25:31.672Z'));

  console.log(
    '[' +
      sampleDuck.name +
      ', ' +
      sampleDuck.birthdate +
      ']' +
      sampleDuck.speak()
  );
};

/**
 * generating instance from Duck class
 */
export const generateDuck = (): Duck => {
  return new Duck(faker.name.firstName(), faker.date.birthdate());
};
/**
 * generating array of instances from Duck class
 */
export const generateDucks = (): Array<Duck> => {
  return Array.from({ length: 50 }, () => generateDuck());
};
