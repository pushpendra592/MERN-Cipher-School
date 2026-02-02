## Introduction

In JavaScript, `this` is a keyword that refers to the object related to the current function call. Its value depends on **how a function is called**, not where it is written.

---

## Execution Context and this

The value of `this` is determined by the execution context:

| Context | this Value |
|---------|------------|
| Global | window (browser) / global (Node.js) |
| Function (non-strict) | window |
| Function (strict) | undefined |
| Object Method | The object |
| Arrow Function | Inherited from parent scope |
| Event Handler | The element (regular function) |

---

## this in Global Context

### In Browser

```javascript
console.log(this);  // window object
console.log(this === window);  // true
```

### In Strict Mode

javascript

```javascript
"use strict";
console.log(this);  // undefined
```

### In Node.js

In Node.js global scope, this refers to module.exports.

---

## this Inside Regular Functions

### Non-Strict Mode

javascript

```javascript
function show() {
  console.log(this);
}

show();  // window object
```

### Strict Mode

javascript

```javascript
"use strict";

function show() {
  console.log(this);
}

show();  // undefined
```

---

## this Inside Object Methods

When a function is called as a method of an object, this refers to that object.

javascript

```javascript
const user = {
  name: "Pratik",
  greet() {
    console.log(this.name);
  }
};

user.greet();  // "Pratik"
```

Here:

- greet() is called using user
- So this refers to user

---

## this in Nested Functions (Problem)

javascript

```javascript
const obj = {
  name: "Alex",
  show() {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};

obj.show();  // undefined
```

**Why?**

- inner() is a regular function
- It is NOT called by obj
- So this refers to window (or undefined in strict mode)

This is a common mistake!

---

## Solutions for Nested Function Problem

### Solution 1: Store this in Variable

javascript

```javascript
const obj = {
  name: "Alex",
  show() {
    const self = this;  // Store reference
    function inner() {
      console.log(self.name);
    }
    inner();
  }
};

obj.show();  // "Alex"
```

### Solution 2: Use Arrow Function

javascript

```javascript
const obj = {
  name: "Alex",
  show() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

obj.show();  // "Alex"
```

Arrow functions don't have their own this - they inherit from parent scope.

---

## this in Event Handlers

### Regular Function

javascript

```javascript
button.addEventListener("click", function() {
  console.log(this);  // The button element
});
```

### Arrow Function

javascript

```javascript
button.addEventListener("click", () => {
  console.log(this);  // window (or outer scope)
});
```

**Note:** Arrow functions are usually NOT used when this needs to refer to the element.

---

## Arrow Functions as Object Methods (Problem)

javascript

```javascript
const obj = {
  name: "John",
  greet: () => {
    console.log(this.name);
  }
};

obj.greet();  // undefined
```

**Why?**

- Arrow function doesn't bind this to obj
- It takes this from global scope

**Best Practice:** Use regular functions for object methods.

---

## Comparison: Regular vs Arrow Functions

|Feature|Regular Function|Arrow Function|
|---|---|---|
|Own this|Yes|No|
|Lexical this|No|Yes|
|Constructor|Yes (can use new)|No|
|arguments object|Yes|No|
|Suitable for methods|Yes|No|

---

## this Summary Rules

1. **Global scope:** this = window (or undefined in strict mode)
2. **Regular function:** this = window (or undefined in strict mode)
3. **Object method:** this = the object
4. **Arrow function:** this = inherited from parent scope
5. **Event handler (regular):** this = the element
6. **Event handler (arrow):** this = outer scope

---

## Real-Life Example: Timer

### Without Arrow Function (Problem)

javascript

```javascript
function Timer() {
  this.count = 0;
  
  setInterval(function() {
    this.count++;  // this is window, not Timer
    console.log(this.count);
  }, 1000);
}

new Timer();  // NaN (window.count is undefined)
```

### With Arrow Function (Solution)

javascript

```javascript
function Timer() {
  this.count = 0;
  
  setInterval(() => {
    this.count++;  // this is Timer instance
    console.log(this.count);
  }, 1000);
}

new Timer();  // 1, 2, 3, 4...
```

Arrow function preserves this from the constructor.

---

## Related Notes

- [[call apply bind Methods]]
- [[Arrow Functions]]
- [[JavaScript Execution Context]]

---

#module2 #javascript #this-keyword #day9