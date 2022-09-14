/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/config/cssstub.js',
  },
};
