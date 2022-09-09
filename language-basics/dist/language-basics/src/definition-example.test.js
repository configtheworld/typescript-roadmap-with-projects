"use strict";
exports.__esModule = true;
var definition_example_1 = require("./definition-example");
describe('Object Class Interface Definitions', function () {
    test('Return 50 Duck Instances', function () {
        var ducks = definition_example_1.fakeDucks();
        expect(ducks.length).toBe(50);
    });
});
