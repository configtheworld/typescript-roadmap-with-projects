import { faker } from '@faker-js/faker';

/**
 * Generics in Interfaces
 * content type be defined while creating an instance
 */

interface IFrog<T> {
  id?: number;
  name: string;
  content: T;
}

/**
 * Generics in Methods
 *
 * NOTE:
 * without generic type, function does not know what are the objects attributes
 * const addID = (obj:object) => return {...obj,id:13} // here object type do not have solid attributes
 * console.log(addID(obj).id) is not reachable
 *
 * NOTE: Generics can be specified for the input object
 * <T>(obj: T): T =>
 * <T extends object>(obj: T): T =>
 * <T extends {name:string}>(obj: T): T =>
 */

/**
 * addID
 * @param obj
 * @returns obj with id attribute
 */
const addID = <T extends { name: string }>(obj: T): T => {
  const id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

/**
 * generating frog object from Frog interface and content type is generic
 */
export const generateFrog = () => {
  let frog: IFrog<string> = {
    name: faker.name.firstName(),
    content: 'Content of String',
  };
  return addID(frog);
};
