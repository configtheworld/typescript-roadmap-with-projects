"use strict";
exports.__esModule = true;
var custom_type_example_1 = require("./custom-type-example");
/**
 * Tests for custom typed instances
 */
describe('Custom Types on Meerkats', function () {
    test("Instance's type is IMeerkat", function () {
        var meerkat = (0, custom_type_example_1.generateMeerkat)();
        expect(meerkat).toBeInstanceOf(custom_type_example_1.Meerkat);
    });
    test("Instance's currentActivity type is MeerkatActivity", function () {
        var meerkat = (0, custom_type_example_1.generateMeerkat)();
        expect(typeof meerkat.currentActivity).toBe('string');
    });
});
