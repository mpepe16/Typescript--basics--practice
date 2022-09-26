abstract class Shape{
    centerX : number;
    centerY : number;
    constructor(centerX : number, centerY : number){
        this.centerX = centerX
        this.centerY = centerY;}
    getX(){
        return this.centerX;
    }
    getY(){
        return this.centerY;
    }
    abstract logShape() : void;
}