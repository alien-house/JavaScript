# Javascript Laboratory

## Variables

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

