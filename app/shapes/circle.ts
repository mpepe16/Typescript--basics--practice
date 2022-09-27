/// <reference path="shape.ts" />


class Circle extends Shape {
    radius: number;
    readonly pi :number = 3.14;

    // Possible to use radius as a parameter property. Just adding as public radius in the constructor

    constructor(centerX: number, centerY: number, radius: number,name:string){
        super(centerX, centerY,name);
        this.radius = radius;
    }
    logShape(): void {
        let instance: any = this.constructor;
        console.log(instance.name);
    }

    calculateAre(): number{
        return (this.radius * this.radius) * this.pi;
    }
    
}