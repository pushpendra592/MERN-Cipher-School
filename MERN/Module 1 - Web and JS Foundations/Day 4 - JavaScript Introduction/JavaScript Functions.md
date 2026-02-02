## What is a Function

A function is a reusable block of code that performs a specific task. Functions help organize code and avoid repetition.

---

## Function Characteristics

- Callable (executable)
- Can take arguments (parameters)
- Contains statements that perform tasks
- Can return a value

---

## Creating Functions

### 1. Function Declaration

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(3, 5));  // 8
```

**Characteristics:**

- Hoisted (can be called before definition)
- Named function

---

### 2. Function Expression

javascript

```javascript
const add = function(a, b) {
  return a + b;
};

console.log(add(3, 5));  // 8
```

**Characteristics:**

- Not hoisted
- Can be anonymous or named
- Assigned to a variable

---

### 3. Arrow Function

javascript

```javascript
const add = (a, b) => {
  return a + b;
};

// Shorthand for single expression
const addShort = (a, b) => a + b;

console.log(add(3, 5));       // 8
console.log(addShort(3, 5));  // 8
```

**Characteristics:**

- Shorter syntax
- Does not have its own this
- Not hoisted

---

## Function Parameters and Arguments

### Parameters

Variables listed in function definition.

### Arguments

Actual values passed when calling the function.

javascript

```javascript
function greet(name, greeting) {  // Parameters
  return `${greeting}, ${name}!`;
}

greet("John", "Hello");  // Arguments
```

### Default Parameters

javascript

```javascript
function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet("John"));           // "Hello, John!"
console.log(greet("John", "Hi"));     // "Hi, John!"
```

---

## Return Statement

Functions can return a value using return.

javascript

```javascript
function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log(result);  // 20
```

### Functions Without Return

If no return statement, function returns undefined.

javascript

```javascript
function add(a, b) {
  let c = a + b;
  // No return statement
}

let result = add(3, 5);
console.log(result);  // undefined
```

---

## Function Scope

Variables declared inside a function are local to that function.

javascript

```javascript
function example() {
  let localVar = "I'm local";
  console.log(localVar);  // Works
}

example();
// console.log(localVar);  // Error: localVar is not defined
```

---

## Practical Examples

### Find Maximum Number

javascript

```javascript
// Function declaration
function giveMaxNumber(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Function expression
const giveMaxNumberExpr = function(a, b) {
  return a > b ? a : b;
};

// Arrow function
const giveMaxNumberArrow = (a, b) => a > b ? a : b;

console.log(giveMaxNumber(3, 7));        // 7
console.log(giveMaxNumberExpr(3, 7));    // 7
console.log(giveMaxNumberArrow(3, 7));   // 7
```

### Reverse String

javascript

```javascript
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello"));  // "olleh"
```

### Sum Array

javascript

```javascript
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));  // 15
```

### Find Max in Array

javascript

```javascript
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(findMax([3, 7, 2, 9, 1]));  // 9
```

### Get Array of Colors

javascript

```javascript
function getArrayOfColors(color1, color2, color3) {
  return [color1, color2, color3];
}

console.log(getArrayOfColors("red", "green", "blue"));
// ["red", "green", "blue"]
```

---

## Function Comparison

|Feature|Declaration|Expression|Arrow|
|---|---|---|---|
|Syntax|function name()|const name = function()|const name = () =>|
|Hoisting|Yes|No|No|
|this binding|Dynamic|Dynamic|Lexical|
|Best for|General use|Callbacks|Short functions|

---

## Calling Functions

javascript

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

// Direct call
console.log(greet("John"));

// Store result
let message = greet("Jane");
console.log(message);

// Pass as argument
function process(fn, value) {
  return fn(value);
}
console.log(process(greet, "Bob"));
```

---

## Related Notes

- [[JavaScript Data Types]]
- [[JavaScript Arrays]]
- [[JavaScript Objects]]

---

#module1 #javascript #functions #day4