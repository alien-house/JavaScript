

window.onload = function () {
// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8
// rowSumOddNumbers(3); // 7 + 9 + 11 = 27

function rowSumOddNumbers(n) {
	var num = [];
	var m = (n * (n - 1))+1;
	for(var i = 0; i < n; i++){
		num.push(m + (2 * i));
	}
	return num.reduce((n,p) => (n + p));
}

	console.log(rowSumOddNumbers(2));





// function max(a){
// 	return a.reduce((p, n) => (p > n) ? p : n);
// }
// console.log(max([1,22,3,4,5]));



// function max(a) {
//   return a.reduce(function(x, y) {
//     if (x > y) return x;
//     return y;
//   });
// }
// console.log(max([1,22,3,4,5]));
// // 5




var ary = [1,2,3,4,5];
// function sum(a) {
//   return a.reduce(function(x, y) { return x + y; });
// }
function sum(a) {
  return a.reduce((x, y) => (x + y));
}
// console.log(sum(ary));




//----
function oddOrEven(array) {
   return array.reduce((p, n) => p + n, 0) % 2 ? 'odd' : 'even';
}


console.log(oddOrEven([423,42,1,1]));

	var Robison = new Rabbit(1, "Robison Rabbit", 1990, 2);
	var Leporidae = new Rabbit(2, "Leporidae Banii", 1490, 20);
	var Caprolagus = new Rabbit(3, "Caprolagus Rabbit", 1190, 8);
	var rabbitArray = [Robison, Leporidae, Caprolagus];

	for(var r of rabbitArray){
    	console.log(r.name);
	}
};


class Animal{
	constructor(){
		this.mouth;
	}
	speak(){
    	console.log("...");
	}
}
class Rabbit extends Animal{
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



(function(){


})();
