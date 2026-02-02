## Overview

Arrow functions provide a concise syntax for writing function expressions in JavaScript. Introduced in ES6, they are now widely used, especially for short functions and callbacks.

---

## Basic Syntax

### Traditional Function

```javascript
function greet(greeting, name) {
  return `${greeting}, from ${name}`;
}
```
### Arrow Function

javascript

```javascript
let newGreet = (greeting, name) => {
  return `${greeting}, from ${name}`;
};
```

---

## Arrow Function Variations

### Full Syntax

javascript

```javascript
const add = (a, b) => {
  return a + b;
};
```

### Implicit Return (Single Expression)

If the function body is a single expression, you can omit braces and return.

javascript

```javascript
const add = (a, b) => a + b;

// Same as:
const addFull = (a, b) => {
  return a + b;
};
```

### Single Parameter (No Parentheses)

javascript

```javascript
const double = x => x * 2;

// Same as:
const doubleFull = (x) => x * 2;
```

### No Parameters

javascript

```javascript
const sayHello = () => "Hello!";
```

---

## Returning Objects

When returning an object literal with implicit return, wrap it in parentheses.

javascript

```javascript
// Wrong - JavaScript thinks {} is a code block
const createUser = (name) => { name: name };  // Returns undefined

// Correct - wrap object in parentheses
const createUser = (name) => ({ name: name });

// With shorthand property
const createUserData = (name, email) => ({
  name,
  email,
});

console.log(createUserData("John", "john@email.com"));
// { name: "John", email: "john@email.com" }
```

---

## Property Shorthand

If the key name matches the variable name, you can use shorthand syntax.

javascript

```javascript
const name = "Alice";
const age = 25;

// Long form
const user1 = { name: name, age: age };

// Shorthand
const user2 = { name, age };

// Both create: { name: "Alice", age: 25 }
```

---

## Arrow Functions vs Regular Functions

|Feature|Regular Function|Arrow Function|
|---|---|---|
|Syntax|function() {}|() => {}|
|this binding|Dynamic|Lexical (inherits from parent)|
|arguments object|Has it|Does not have it|
|Hoisting|Yes (declarations)|No|
|Constructor|Can use new|Cannot use new|

---

## When to Use Arrow Functions

### Good Use Cases

javascript

```javascript
// Array methods
const doubled = [1, 2, 3].map(x => x * 2);

// Callbacks
setTimeout(() => console.log("Done"), 1000);

// Short utility functions
const isEven = n => n % 2 === 0;
```

### Avoid When

javascript

```javascript
// Object methods (this binding issues)
const obj = {
  name: "John",
  greet: () => {
    console.log(this.name);  // undefined - 'this' is not the object
  }
};

// Use regular function instead
const obj = {
  name: "John",
  greet() {
    console.log(this.name);  // "John"
  }
};
```

---

## Practical Examples

### Multiply by Two

javascript

```javascript
const multiplyByTwo = num => num * 2;

console.log(multiplyByTwo(5));  // 10
```

### Sum Array

javascript

```javascript
const sumArray = arr => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};

// Or using reduce
const sumArrayReduce = arr => arr.reduce((sum, num) => sum + num, 0);

console.log(sumArray([1, 2, 3, 4, 5]));  // 15
```

### Find Even Numbers

javascript

```javascript
const findEvenNumbers = arr => arr.filter(num => num % 2 === 0);

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));  // [2, 4, 6]
```

### Array Operations Chain

javascript

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(n => n % 2 === 0)      // [2, 4]
  .map(n => n * 2)               // [4, 8]
  .reduce((sum, n) => sum + n);  // 12

console.log(result);  // 12
```

---

## Coding Challenges

### Challenge 1: Multiply by Two

javascript

```javascript
const multiplyByTwo = num => num * 2;

console.log(multiplyByTwo(5));   // 10
console.log(multiplyByTwo(10));  // 20
```

### Challenge 2: Sum Array

javascript

```javascript
const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);

console.log(sumArray([1, 2, 3, 4, 5]));  // 15
```

### Challenge 3: Find Even Numbers

javascript

```javascript
const findEvenNumbers = arr => arr.filter(num => num % 2 === 0);

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));  // [2, 4, 6]
```

---

## Summary

- Arrow functions offer concise syntax
- Use implicit return for single expressions
- Wrap object literals in parentheses
- Use property shorthand when key matches variable name
- Remember this binding differences
- Great for callbacks and array methods

---

## Related Notes

- [[JavaScript Functions]]
- [[JavaScript Arrays]]
- [[Rest and Spread Operators]]

---

#module1 #javascript #arrow-functions #es6 #day5
