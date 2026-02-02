## What is Scope Chain

When JavaScript cannot find a variable in the current scope, it searches in outer scopes. This process of looking up through nested scopes is called the **Scope Chain**.

---
## Scope Chain Order

```
Block Scope  
↓  
Function Scope  
↓  
Global Scope  
↓  
Not Found → ReferenceError
```

JavaScript starts from the innermost scope and moves outward until it finds the variable or throws an error.

---

## How Scope Chain Works

```javascript
let a = "Global";

function test() {
  let b = "Function";

  if (true) {
    let c = "Block";

    console.log(c);  // "Block" - found in block scope
    console.log(b);  // "Function" - found in function scope
    console.log(a);  // "Global" - found in global scope
  }
}

test();
````

### Lookup Process

1. c - Found immediately in block scope
2. b - Not in block scope, look up to function scope, found
3. a - Not in block or function scope, look up to global scope, found

---

## Scope Chain Examples

### Example 1: Variable Found in Outer Scope

javascript

```javascript
let a = 10;

function test() {
  console.log(a);  // 10 - found in global scope
}

test();
```

a is not in function scope, so JavaScript looks up to global scope and finds it.

---

### Example 2: Nested Functions

javascript

```javascript
function demo() {
  let x = 5;

  function show() {
    console.log(x);  // 5 - found in outer function scope
  }

  show();
}

demo();
```

x is not in show's scope, so it looks up to demo's scope and finds it.

---

### Example 3: Multiple Levels

javascript

```javascript
let num = 100;

function outer() {
  let num = 50;

  function inner() {
    console.log(num);  // 50 - found in outer function scope
  }

  inner();
}

outer();
```

inner looks for num:

1. Not in inner scope
2. Found in outer scope (50)
3. Stops searching (doesn't reach global)

---

### Example 4: Variable Not Found

javascript

```javascript
function demo() {
  if (true) {
    let x = 10;
    console.log(y);  // ReferenceError: y is not defined
  }
}

demo();
```

y is not found in any scope, so JavaScript throws a ReferenceError.

---

### Example 5: Shadowing in Scope Chain

javascript

```javascript
let name = "Global";

function outer() {
  let name = "Outer";

  function inner() {
    let name = "Inner";
    console.log(name);  // "Inner"
  }

  inner();
  console.log(name);  // "Outer"
}

outer();
console.log(name);  // "Global"
```

Each scope has its own name variable, shadowing the outer ones.

---

## Lexical Scope

JavaScript uses **lexical scoping** (also called static scoping). This means:

- Scope is determined by where variables and functions are written in the code
- NOT by where they are called

javascript

```javascript
let x = 10;

function foo() {
  console.log(x);  // 10 - uses lexical scope
}

function bar() {
  let x = 20;
  foo();  // Still prints 10, not 20
}

bar();
```

foo was defined in global scope, so it uses the global x (10), not the local x in bar (20).

---

## Scope Chain Visualization

javascript

```javascript
// Global Scope
let globalVar = "global";

function outerFunction() {
  // Outer Function Scope
  let outerVar = "outer";

  function innerFunction() {
    // Inner Function Scope
    let innerVar = "inner";

    if (true) {
      // Block Scope
      let blockVar = "block";

      // Can access all variables
      console.log(blockVar);   // "block"
      console.log(innerVar);   // "inner"
      console.log(outerVar);   // "outer"
      console.log(globalVar);  // "global"
    }
  }

  innerFunction();
}

outerFunction();
```

### Scope Chain Diagram

text

```text
┌─────────────────────────────────────┐
│ Global Scope                        │
│   globalVar = "global"              │
│   ┌─────────────────────────────┐   │
│   │ outerFunction Scope         │   │
│   │   outerVar = "outer"        │   │
│   │   ┌─────────────────────┐   │   │
│   │   │ innerFunction Scope │   │   │
│   │   │   innerVar = "inner"│   │   │
│   │   │   ┌─────────────┐   │   │   │
│   │   │   │ Block Scope │   │   │   │
│   │   │   │ blockVar    │   │   │   │
│   │   │   └─────────────┘   │   │   │
│   │   └─────────────────────┘   │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

---

## Class Activities with Solutions

### Activity 1

javascript

```javascript
function test() {
  var x = 10;
  console.log(x);
}

test();
console.log(x);
```

**Output:** 10, then ReferenceError  
**Reason:** x is function-scoped, not accessible outside test()

---

### Activity 2

javascript

```javascript
function demo() {
  let y = 20;
}

demo();
console.log(y);
```

**Output:** ReferenceError  
**Reason:** y is function-scoped with let, not accessible outside

---

### Activity 3

javascript

```javascript
var a = 5;

function show() {
  var a = 10;
  console.log(a);
}

show();
console.log(a);
```

**Output:** 10, then 5  
**Reason:** Inner a shadows outer a inside function

---

### Activity 4

javascript

```javascript
if (true) {
  let x = 10;
}

console.log(x);
```

**Output:** ReferenceError  
**Reason:** x is block-scoped, not accessible outside the if block

---

### Activity 5

javascript

```javascript
for (let i = 0; i < 2; i++) {
  console.log(i);
}

console.log(i);
```

**Output:** 0, 1, then ReferenceError  
**Reason:** i is block-scoped to the for loop

---

## Key Points

1. JavaScript searches from inner to outer scope
2. First match is used (shadowing)
3. If not found anywhere, ReferenceError
4. Lexical scoping - determined by code location, not call location
5. Each function creates a new scope level

---

## Related Notes

- [[JavaScript Scope]]
- [[JavaScript Functions]]
- [[Closures]] (Coming soon)

---

#module2 #javascript #scope-chain #day8
