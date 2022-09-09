"use strict";
exports.__esModule = true;
var definition_example_1 = require("./definition-example");
/**
 * Interface, Class and Object Generation Tests
 */
describe('Definition Tests : Interface, Class and Object Generation', function () {
    test('Generated Duck is Instance of Duck class', function () {
        var duck = (0, definition_example_1.generateDuck)();
        expect(duck).toBeInstanceOf(definition_example_1.Duck);
    });
    test('Ducks speak returns string', function () {
        var duck = (0, definition_example_1.generateDuck)();
        expect(typeof duck.speak()).toBe('string');
    });
    test('Return 50 Duck Instances', function () {
        var ducks = (0, definition_example_1.generateDucks)();
        expect(ducks.length).toBe(50);
    });
});
