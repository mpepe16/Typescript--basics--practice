class Player implements Person {
    name: string;
    age?: number | undefined;
    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }
    formatName () {
        return this.name.toUpperCase(); 
    }
    
}