"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = __importStar(require("./tools"));
let name = "Unai";
console.log(name);
let count = 10;
name = 'Paul';
console.log(name);
count = 5;
//"go": "npm run build && node build/index.js". Is is used to both build and run 'build/index.js' instead of run them on their own.
/*const person1 = new Person("Ifenna",,"male",1.7,["singing","baking","etc"], new Date(2003,12,2),true);
 This doesn't work because they are in their own right ( they carry their own data types), we grouped the new constructor so it should be grouped.*/
const person1Data = {
    firstName: "Ifenna",
    lastName: "Nwankwo",
    //gender:    "male",
    gender: tools_1.Gender.M,
    height: 1.7,
    hobbies: ["singing", "baking", "etc"],
    birthday: new Date(2003, 12, 2),
    isAlive: true
};
const person2Data = {
    firstName: "Maxine",
    lastName: "Wayo",
    //gender:    "female",
    gender: tools_1.Gender.F,
    height: 1.67,
    hobbies: ["singing", "dancing", "etc"],
    birthday: new Date(2013, 12, 2),
    isAlive: false
};
//instantiate a person passing person1Data above as the properties of the Person
const person1 = new tools_1.Person(person1Data);
const person2 = new tools_1.Person(person2Data);
//const pronoun1 = person1.gender === "male"? "He":"She";
const pronoun1 = person1.gender === tools_1.Gender.M ? "He" : "She";
//const pronoun2 = person2.gender === "female"? "She":"He";
const pronoun2 = person2.gender === tools_1.Gender.F ? "She" : "He";
(0, tools_1.default)(`The first person is ${person1.firstName} ${person1.lastName}. 
${pronoun1} likes ${person1.hobbies.join(", ")}. ${pronoun1} was born on
${person1.birthday.toLocaleDateString("en-US")}`);
(0, tools_1.default)(`The second person is ${person2.firstName} ${person2.lastName}. 
${pronoun2} likes ${person2.hobbies.join(", ")}. ${pronoun2} was born on
${person2.birthday.toLocaleDateString("en-US")},
but ${pronoun2} sadly passed away during 9/11 therefore, her living is ${person2.isAlive}.`);
//# sourceMappingURL=index.js.map