// Logical AND operator -> always looks for the first false value


let a = {};
// let a = 0;

// let b = "pk";
let b = false;

let c = NaN;

let z = a && b && c;

console.log(z);