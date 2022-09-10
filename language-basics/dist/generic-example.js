"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.generateFrog = void 0;
var faker_1 = require("@faker-js/faker");
// Generics in Methods
// NOTE:
// without generic type, function does not know what are the objects attributes
// const addID = (obj:object) => { // here object type do not have solid attributes
//   const id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// NOTE: Generics can be specified for the input object
// <T>(obj: T): T =>
// <T extends object>(obj: T): T =>
// <T extends {name:string}>(obj: T): T =>
/**
 * addID
 * @param obj
 * @returns obj with id attribute
 */
var addID = function (obj) {
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
/**
 * generating frog object
 */
var generateFrog = function () {
    var frog = {
        name: faker_1.faker.name.firstName(),
        content: 'Content of String'
    };
    return addID(frog);
};
exports.generateFrog = generateFrog;
console.log((0, exports.generateFrog)());
