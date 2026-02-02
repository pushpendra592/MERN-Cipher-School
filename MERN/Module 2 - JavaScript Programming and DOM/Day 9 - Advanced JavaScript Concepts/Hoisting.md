## What is Hoisting

Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.

**Important:** Only declarations are hoisted, not initializations (values).

Declaration goes UP  
Value stays DOWN

---

## How Hoisting Works

Before code runs, JavaScript:
1. Creates memory (Memory Creation Phase)
2. Stores variable and function names
3. Then executes code line by line

This is part of the Execution Context creation.

---

## Hoisting with var

`var` is hoisted and initialized with `undefined`.

```javascript
console.log(a);  // undefined
var a = 10;
console.log(a);  // 10
````

### What JavaScript Sees

javascript

```javascript
var a;           // Declaration hoisted
console.log(a);  // undefined
a = 10;          // Assignment stays
console.log(a);  // 10
```

---

### var Inside Function

javascript

```javascript
var x = 5;

function test() {
  console.log(x);  // undefined (local x hoisted)
  var x = 20;
  console.log(x);  // 20
}

test();
```

Local x is hoisted inside the function, shadowing global x.

---

## Hoisting with let and const

let and const are hoisted BUT not initialized. They stay in the **Temporal Dead Zone (TDZ)**.

---

## Temporal Dead Zone (TDZ)

TDZ is the time between hoisting and initialization of let/const variables where they cannot be accessed.

javascript

```javascript
{
  // TDZ starts
  console.log(x);  // ReferenceError
  let x = 5;       // TDZ ends
}
```

### TDZ Example

javascript

```javascript
console.log(a);  // ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

---

## Hoisting with Function Declarations

Function declarations are **fully hoisted** - both name and body.

javascript

```javascript
hello();  // "Hello"

function hello() {
  console.log("Hello");
}
```

### Another Example

javascript

```javascript
sum(2, 3);  // Works! Returns 5

function sum(a, b) {
  return a + b;
}
```

---

## Function Expression (Not Fully Hoisted)

Function expressions follow variable hoisting rules.

### With var

javascript

```javascript
test();  // TypeError: test is not a function

var test = function() {
  console.log("Hi");
};
```

test is hoisted as undefined, not as a function.

### With let

javascript

```javascript
show();  // ReferenceError: Cannot access 'show' before initialization

let show = function() {
  console.log("Hello");
};
```

---

## Arrow Functions and Hoisting

Arrow functions behave like function expressions.

javascript

```javascript
demo();  // ReferenceError

const demo = () => {
  console.log("Hey");
};
```

---

## Comparison Table

|Type|Hoisted|Initialized|Can Use Before Declaration|
|---|---|---|---|
|var|Yes|undefined|Yes (gets undefined)|
|let|Yes|No|No (TDZ)|
|const|Yes|No|No (TDZ)|
|Function Declaration|Yes|Yes (full function)|Yes|
|Function Expression|Partial|No|No|
|Arrow Function|Partial|No|No|

---

## Practice Questions

### Q1: var in Function

javascript

```javascript
var num = 100;

function show() {
  console.log(num);
  var num = 50;
}

show();
```

**Output:** undefined

Local num is hoisted inside function.

---

### Q2: Arrow Function

javascript

```javascript
demo();

const demo = () => {
  console.log("Arrow");
};
```

**Output:** ReferenceError

const is in TDZ.

---

### Q3: let Inside Function

javascript

```javascript
var x = 5;

function test() {
  console.log(x);
  let x = 10;
}

test();
```

**Output:** ReferenceError

Local let x is in TDZ.

---

### Q4: Function Expression vs Declaration

javascript

```javascript
var show = function() {
  console.log("First");
};

function show() {
  console.log("Second");
}

show();
```

**Output:** "First"

Function declaration is hoisted first, then var assignment overwrites it.

---

### Q5: var Function Expression and Declaration

javascript

```javascript
hello();

var hello = function() {
  console.log("Hi");
};

function hello() {
  console.log("Hello");
}
```

**Output:** "Hello"

Function declaration is hoisted with body. var hello is hoisted as undefined but function declaration takes precedence initially.

---

### Q6: var in if Block

javascript

```javascript
function demo() {
  console.log(x);

  if (true) {
    var x = 10;
  }
}

demo();
```

**Output:** undefined

var has function scope, not block scope. It's hoisted to function level.

---

## Key Points

1. **var** is hoisted with undefined
2. **let/const** are hoisted but in TDZ
3. **Function declarations** are fully hoisted
4. **Function expressions** follow variable rules
5. **Arrow functions** follow variable rules
6. Hoisting happens in Memory Creation Phase

---

## Best Practices

1. Declare variables at the top of their scope
2. Use const by default, let when needed
3. Avoid var to prevent hoisting confusion
4. Define functions before calling them
5. Understand TDZ to avoid ReferenceErrors

---

## Related Notes

- [[JavaScript Execution Context]]
- [[JavaScript Scope]]
- [[Arrow Functions]]

---

#module2 #javascript #hoisting #day9
