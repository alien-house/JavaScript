

var array = [
    "Pick up drycleaning",
    "Clean Batcave",
    "Save Gotham"
];

for (var index in array) {
    var value = array[index];
    console.log(`${index}: ${value}`);
}

for (var value of array) {
    console.log(`${value}`);
}
