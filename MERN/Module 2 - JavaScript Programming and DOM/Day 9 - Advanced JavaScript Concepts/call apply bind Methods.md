## Overview

JavaScript provides three methods to explicitly control the value of `this`:
- `call()` - Calls function with specified this
- `apply()` - Same as call, but arguments as array
- `bind()` - Returns new function with bound this

---

## call() Method

Calls a function with a specified `this` value and arguments.

### Syntax

```javascript
function.call(thisArg, arg1, arg2, ...)
```
### Example

javascript

```javascript
function greet(city) {
  console.log(this.name + " from " + city);
}

const person = { name: "Rahul" };

greet.call(person, "Delhi");  // "Rahul from Delhi"
```

---

## apply() Method

Same as call(), but arguments are passed as an array.

### Syntax

javascript

```javascript
function.apply(thisArg, [arg1, arg2, ...])
```

### Example

javascript

```javascript
function greet(city, country) {
  console.log(this.name + " from " + city + ", " + country);
}

const person = { name: "Rahul" };

greet.apply(person, ["Delhi", "India"]);  // "Rahul from Delhi, India"
```

---

## bind() Method

Returns a **new function** with this permanently bound.

### Syntax

javascript

```javascript
const newFunc = function.bind(thisArg, arg1, arg2, ...)
```

### Example

javascript

```javascript
function greet(city) {
  console.log(this.name + " from " + city);
}

const person = { name: "Rahul" };

const boundGreet = greet.bind(person);
boundGreet("Mumbai");  // "Rahul from Mumbai"
```

---

## Comparison

|Method|Invokes Immediately|Arguments|Returns|
|---|---|---|---|
|call()|Yes|Comma-separated|Function result|
|apply()|Yes|Array|Function result|
|bind()|No|Comma-separated|New function|

### Memory Aid

text

```text
call  → Comma-separated arguments
apply → Array arguments
bind  → Backup function (returns new function)
```

---

## Complete Example

javascript

```javascript
function introduce(city, country) {
  console.log(this.name + " " + this.age + " " + city + " " + country);
}

let person = { name: "Amit", age: 22 };

// call - comma separated
introduce.call(person, "Delhi", "India");
// "Amit 22 Delhi India"

// apply - array
introduce.apply(person, ["Mumbai", "India"]);
// "Amit 22 Mumbai India"

// bind - returns function
let boundFn = introduce.bind(person, "Pune", "India");
boundFn();
// "Amit 22 Pune India"
```

---

## Practical Use Cases

### Use Case 1: Borrowing Methods

javascript

```javascript
const person1 = {
  name: "John",
  greet() {
    console.log("Hello, " + this.name);
  }
};

const person2 = { name: "Jane" };

// Borrow greet from person1
person1.greet.call(person2);  // "Hello, Jane"
```

### Use Case 2: Using Array Methods on Array-like Objects

javascript

```javascript
function sum() {
  // arguments is array-like, not a real array
  const args = Array.prototype.slice.call(arguments);
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));  // 10
```

### Use Case 3: Finding Max/Min with apply

javascript

```javascript
const numbers = [5, 2, 9, 1, 7];

const max = Math.max.apply(null, numbers);  // 9
const min = Math.min.apply(null, numbers);  // 1

// Modern alternative with spread
const max2 = Math.max(...numbers);  // 9
```

### Use Case 4: Partial Application with bind

javascript

```javascript
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5));  // 10
console.log(double(10)); // 20
```

### Use Case 5: Preserving this in Callbacks

javascript

```javascript
const obj = {
  name: "Timer",
  count: 0,
  start() {
    setInterval(function() {
      this.count++;
      console.log(this.name + ": " + this.count);
    }.bind(this), 1000);
  }
};

obj.start();
// "Timer: 1", "Timer: 2", ...
```

---

## Arrow Functions Ignore call, apply, bind

Arrow functions do not have their own this, so these methods have no effect.

javascript

```javascript
const obj = { name: "Test" };

const arrow = () => {
  console.log(this.name);
};

arrow.call(obj);   // undefined (this is still outer scope)
arrow.apply(obj);  // undefined
const bound = arrow.bind(obj);
bound();           // undefined
```

---

## Summary

|Method|When to Use|
|---|---|
|call()|Invoke with different this, known arguments|
|apply()|Invoke with different this, arguments as array|
|bind()|Create new function with fixed this (for callbacks)|

---

## Related Notes

- [[this Keyword]]
- [[Arrow Functions]]
- [[JavaScript Functions]]

---

#module2 #javascript #call #apply #bind #day9