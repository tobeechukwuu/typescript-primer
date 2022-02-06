import logger, {Gender, IPersonData, Person}  from './tools';
let name: string = "Unai";

console.log(name)

let count: number = 10

name = 'Paul';

console.log(name)

count = 5

//"go": "npm run build && node build/index.js". Is is used to both build and run 'build/index.js' instead of run them on their own.

/*const person1 = new Person("Ifenna",,"male",1.7,["singing","baking","etc"], new Date(2003,12,2),true);
 This doesn't work because they are in their own right ( they carry their own data types), we grouped the new constructor so it should be grouped.*/

 const person1Data: IPersonData = {
     firstName: "Ifenna",
     lastName:  "Nwankwo",
     //gender:    "male",
     gender:    Gender.M,
     height:   1.7,
     hobbies: ["singing","baking","etc"],
     birthday: new Date(2003,12,2),
     isAlive: true
 }

 const person2Data: IPersonData = {
    firstName: "Maxine",
    lastName:  "Wayo",
    //gender:    "female",
    gender:    Gender.F,
    height:   1.67,
    hobbies: ["singing","dancing","etc"],
    birthday: new Date(2013,12,2),
    isAlive: false
}

//instantiate a person passing person1Data above as the properties of the Person

const person1 = new Person(person1Data);
const person2 = new Person(person2Data);

//const pronoun1 = person1.gender === "male"? "He":"She";

const pronoun1 = person1.gender === Gender.M? "He":"She";

//const pronoun2 = person2.gender === "female"? "She":"He";

const pronoun2 = person2.gender === Gender.F? "She":"He";


logger(`The first person is ${person1.firstName} ${person1.lastName}. 
${pronoun1} likes ${person1.hobbies.join(", ")}. ${pronoun1} was born on
${person1.birthday.toLocaleDateString("en-US")}`);

logger(`The second person is ${person2.firstName} ${person2.lastName}. 
${pronoun2} likes ${person2.hobbies.join(", ")}. ${pronoun2} was born on
${person2.birthday.toLocaleDateString("en-US")},
but ${pronoun2} sadly passed away during 9/11 therefore, her living is ${person2.isAlive}.`);
