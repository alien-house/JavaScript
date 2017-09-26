export class Point{
    constructor(private x?: number, private y?:number){

    }
    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getX(){
        return this.x;
    }

    setX(value){
        if(value < 0){
            throw new Error('value cannot be less than 0');
        }
        this.x = value;
    }
    // we can do this also
    get X(){
        return this.x;
    }
    set X(v){
        this.x = v;
    }

}