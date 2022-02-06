"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["F"] = "female";
    Gender["M"] = "male";
})(Gender = exports.Gender || (exports.Gender = {}));
/**
 * class Person definition starts here
 */
class Person {
    /*constructor(firstName: string, lastName: string, gender: "male" | "female", height: number = -1,
        hobbies: string[] = [], birthday: Date, isAlive: boolean = true) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
        this.hobbies = hobbies;
        this.birthday = birthday;
        this.isAlive = isAlive;
    }*/
    constructor(personData) {
        this.firstName = personData.firstName;
        this.lastName = personData.lastName;
        this.gender = personData.gender;
        this.height = personData.height;
        this.hobbies = personData.hobbies;
        this.birthday = personData.birthday;
        this.isAlive = personData.isAlive;
    }
}
exports.Person = Person;
;
const logger = (output) => {
    console.log(output);
};
exports.default = logger;
//# sourceMappingURL=tools.js.map