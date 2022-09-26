/// <reference path="person.ts" />

class Player implements Person {
    //The exclamation mark ! is known as the non-null assertion operator in TypeScript.
    // We are telling typescript that we are certain that the name property wont be null or undefined.
    name: string;
    age?: number | undefined;
    
    formatName () {
        return this.name.toUpperCase(); 
    }
}
