/// <reference path="shape.ts" />


class Triangle extends Shape {
    side1: number;
    side2: number;
    side3: number;
    height: number;
    constructor(side1: number, side2: number, side3:number, 
        centerX: number, centerY: number, name:string) {   
        super( centerX, centerY,name); 
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;}

    logShape(): void {
        let instance: any = this.constructor;
        console.log(" I am a  " + instance.name + "and I got 3 sides .");
    }

    calculateArea(): number {
         let sides : number [] = [this.side1,this.side2,this.side3];
         let base = Math.max(...sides);
         return (this.height * base) / 2;
    }
    
}