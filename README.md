# Javascript Laboratory

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
