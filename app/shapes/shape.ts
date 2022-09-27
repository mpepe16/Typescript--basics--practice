abstract class Shape{
    centerX : number;
    centerY : number;
    name : string;
    constructor(centerX : number, centerY : number, name : string){
        this.centerX = centerX
        this.centerY = centerY;
        this.name = name;
    }
    getX(){
        return this.centerX;
    }
    getY(){
        return this.centerY;
    }
    abstract logShape() : void;
}