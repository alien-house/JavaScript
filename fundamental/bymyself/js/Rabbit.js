

class Animal{
	constructor(){
		this.mouth;
	}
	speak(){
    	console.log("...");
	}
}

export class Rabbit extends Animal{
	constructor(IDName, name, year, cuteness){
		super();
		this._IDName = IDName;
		this._name = name;
		this._year = year;
		this._cuteness = cuteness;
	}
	speak(){
    	console.log("kobikobi");
	}
	get name() {
		return this._name;
	}
	set name(val) {
		this._name = val;
	}
}
