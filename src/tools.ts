export enum Gender {
    F = "female",
    M = "male"
}


// Section on interface and classes
export interface IPersonData {
    firstName: string,
    lastName: string,
    //gender: "male" | "female",
    gender: Gender,
    height?: any, //question mark here means optional
    hobbies: string[],
    birthday?: Date, //question mark here means optional
    isAlive: boolean
}

/**
 * class Person definition starts here
 */
export class Person {
    //declare property types
    firstName: string;
    lastName: string;
    gender: "male" | "female";
    height: number;
    hobbies: string[];
    birthday: Date;
    isAlive: boolean;

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

    constructor(personData: IPersonData) {
        this.firstName = personData.firstName;
        this.lastName = personData.lastName;
        this.gender = personData.gender;
        this.height = personData.height;
        this.hobbies = personData.hobbies;
        this.birthday = personData.birthday;
        this.isAlive = personData.isAlive;
    }
};





const logger = (output: string) => {
    console.log(output)
}

export default logger;

