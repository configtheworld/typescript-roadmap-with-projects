"use strict";
exports.__esModule = true;
exports.generateMeerkat = exports.Meerkat = void 0;
var faker_1 = require("@faker-js/faker");
/**
 * Meerkat Class for demonstration
 * @params name , currentActivity
 */
var Meerkat = /** @class */ (function () {
    function Meerkat(name, currentActivity) {
        this.name = name;
        this.currentActivity = currentActivity;
    }
    return Meerkat;
}());
exports.Meerkat = Meerkat;
/**
 * generating instance from Meerkat class
 */
var generateMeerkat = function () {
    var activity = faker_1.faker.helpers.arrayElement([
        'scurry',
        'sniff',
        'flinch',
    ]);
    return new Meerkat(faker_1.faker.name.firstName(), activity);
};
exports.generateMeerkat = generateMeerkat;
