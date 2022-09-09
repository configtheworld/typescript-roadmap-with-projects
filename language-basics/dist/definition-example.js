"use strict";
exports.__esModule = true;
exports.generateDucks = exports.generateDuck = exports.Duck = void 0;
var faker_1 = require("@faker-js/faker");
/**
 * Duck Class
 * @attr name birthday nickname
 * @methods speak
 */
var Duck = /** @class */ (function () {
    function Duck(name, birthdate) {
        this.name = name;
        this.birthdate = birthdate;
    }
    Duck.prototype.speak = function () {
        return this.name + ': Quack Quack';
    };
    return Duck;
}());
exports.Duck = Duck;
/**
 * Simple Duck Object Generation
 */
var generateSampleDuck = function () {
    var sampleDuck = null;
    sampleDuck = new Duck('Donald', new Date('1976-07-29T02:25:31.672Z'));
    console.log('[' +
        sampleDuck.name +
        ', ' +
        sampleDuck.birthdate +
        ']' +
        sampleDuck.speak());
};
/**
 * generating instance from Duck class
 */
var generateDuck = function () {
    return new Duck(faker_1.faker.name.firstName(), faker_1.faker.date.birthdate());
};
exports.generateDuck = generateDuck;
/**
 * generating array of instances from Duck class
 */
var generateDucks = function () {
    return Array.from({ length: 50 }, function () { return (0, exports.generateDuck)(); });
};
exports.generateDucks = generateDucks;
