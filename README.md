# Javascript Laboratory

## Table of Contents

  1. [Variables](#sec-var)
  1. [Map](#sec-map)
  1. [Thanks](#sec-thanks)

<a name="sec-var"></a>
## Variables
We use "let" or "const" for minimize mutable state.
Normally, "var" is no longer need to use.

### var 
Declare a variable with the var keyword.
If you don't initialize, it has the value of undefined.

```javascript
var foo = 1;
var bar;
console.log(bar); // => undefined
```

### let 
Not allow to recreate.
```javascript
let msg;
let msg = "hoge"; // => error!
```

### const 
Not allow to reassignment and recreate.
required initializing value.
```javascript
const msg; // error!
const msg = "hoge";
const msg = "hoge"; // => error!
msg = "hoge"; // => error!
```
```javascript
const x = { y:5 }
x.y = 6;
console.log(x); // =>  {y: 6}
x = { y:9 } // => error!
x = { z:1 }// => error!
```

<a name="sec-map"></a>
## Map
The map() method creates a new array with the results of calling a provided function on every element in the calling array.
```javascript
var animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro',       species: 'dog'},
  {name: 'Hamilton',   species: 'dog'},
  {name: 'Harold',     species: 'fish'},
  {name: 'Ursula',     species: 'cat'},
  {name: 'Jimmy',      species: 'fish'}
]
 let names = animals.map(function(animal) {
  return animal.name
 })   
// arrow function ver!!
let names = animals.map((x) => x.name)  
console.log(names);
```


<a name="sec-recursion"></a>
## Recursion
Recursion is when a function calls itself until it doesn't.
if you cant find how many loop is needed, then this idea is better.
```javascript
var categories = [
  {id : 'animals', 'parent': null},
  {id : 'mammals', 'parent': 'animals'},
  {id : 'cats', 'parent': 'mammals'},
  {id : 'dogs', 'parent': 'mammals'},
  {id : 'chihuahua', 'parent': 'dogs'},
  {id : 'labrador', 'parent': 'dogs'},
  {id : 'persian', 'parent': 'cats'},
  {id : 'siamese', 'parent': 'cats'},
]
let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c =>
      node[c.id] = makeTree(categories, c.id))
  return node
}
console.log(
  JSON.stringify(
    makeTree(categories, null), null, 2)
)
```


<a name="sec-thanks"></a>
## Thanks
- [w3schools.com](https://www.w3schools.com/js/default.asp)
- [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [funfunfunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q/featured)



