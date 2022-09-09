"use strict";
exports.__esModule = true;
var faker_1 = require("@faker-js/faker");
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
// Simple Object Generation
var generateDuck = function () {
    var sampleDuck = null;
    sampleDuck = new Duck('Donald', new Date('1976-07-29T02:25:31.672Z'));
    console.log('[' +
        sampleDuck.name +
        ', ' +
        sampleDuck.birthdate +
        ']' +
        sampleDuck.speak());
};
// Generation Test Function
var fakeDuck = function () {
    return new Duck(faker_1.faker.name.firstName(), faker_1.faker.date.birthdate());
};
exports.fakeDucks = function () {
    return Array.from({ length: 50 }, function () { return fakeDuck(); });
};
