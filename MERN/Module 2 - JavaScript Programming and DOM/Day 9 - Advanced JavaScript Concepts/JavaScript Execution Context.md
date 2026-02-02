# JavaScript Execution Context

## Definition

Execution Context is the environment in which JavaScript code is created and executed. It is a container where JavaScript manages memory, variables, functions, and runs the code.

---

## Types of Execution Context

| Type | Description |
|------|-------------|
| Global Execution Context | Created when JS file runs, only one per program |
| Function Execution Context | Created each time a function is called |
| Eval Execution Context | Created inside eval() function (rarely used) |

---

## Phases of Execution Context

Each execution context has two phases:

### 1. Memory Creation Phase (Hoisting Phase)

During this phase:
- Memory is allocated to variables and functions
- `this` keyword is set
- Code is NOT executed yet

| Declaration | Value Stored |
|-------------|--------------|
| var | undefined |
| let | TDZ (Temporal Dead Zone) |
| const | TDZ (Temporal Dead Zone) |
| function | Complete function stored |

### 2. Execution Phase

During this phase:
- Code is executed line by line
- Values are assigned to variables
- Functions are executed

---

## Working Flow
JS File Runs  
↓  
Global Execution Context Created  
↓  
Memory Creation Phase  
↓  
Execution Phase

text

````text

**Important:** For every function call, a new execution context is created.

---

## Example 1: var Hoisting

```javascript
console.log(a);
var a = 10;
````

### Memory Phase

text

```text
a → undefined
```

### Execution Phase

text

```text
console.log(a) → undefined
a = 10
```

**Output:** undefined

---

## Example 2: Function Hoisting

javascript

```javascript
hello();

function hello() {
  console.log("Hi");
}
```

### Memory Phase

text

```text
hello → function hello() { console.log("Hi"); }
```

### Execution Phase

text

```text
hello() → "Hi"
```

**Output:** Hi

---

## Example 3: let and TDZ

javascript

```javascript
console.log(x);
let x = 5;
```

### Memory Phase

text

```text
x → TDZ (Temporal Dead Zone)
```

### Execution Phase

text

```text
console.log(x) → ReferenceError
```

**Output:** ReferenceError: Cannot access 'x' before initialization

---

## Call Stack

The call stack manages execution contexts.

javascript

```javascript
function first() {
  console.log("First");
  second();
}

function second() {
  console.log("Second");
}

first();
```

### Call Stack Flow

text

```text
1. Global EC created → pushed to stack
2. first() called → first EC pushed
3. second() called → second EC pushed
4. second() finishes → second EC popped
5. first() finishes → first EC popped
6. Global EC remains until program ends
```

---

## Practice Questions

### Q1: Simple var

javascript

```javascript
console.log(a);
var a = 10;
console.log(a);
```

**Memory Phase:** a → undefined

**Execution Phase:**

1. console.log(a) → undefined
2. a = 10
3. console.log(a) → 10

**Output:** undefined, 10

---

### Q2: Function Declaration

javascript

```javascript
sayHi();

function sayHi() {
  console.log("Hello");
}
```

**Memory Phase:** sayHi → function

**Execution Phase:** sayHi() → "Hello"

**Output:** Hello

---

### Q3: Variable in Function

javascript

```javascript
var x = 5;

function test() {
  console.log(x);
}

test();
```

**Memory Phase (Global):** x → undefined, test → function

**Execution Phase:**

1. x = 5
2. test() → new EC created
3. console.log(x) → 5 (found in outer scope)

**Output:** 5

---

### Q4: var Without Initial Value

javascript

```javascript
console.log(num);
var num;
num = 20;
console.log(num);
```

**Output:** undefined, 20

---

### Q5: var and Function Together

javascript

```javascript
console.log(a);
var a = 5;

hello();

function hello() {
  console.log("Hi");
}
```

**Output:** undefined, Hi

---

### Q6: let with TDZ

javascript

```javascript
console.log(x);
let x = 10;
console.log(x);
```

**Output:** ReferenceError (code stops at first line)

---

### Q7: var Shadowing in Function

javascript

```javascript
var a = 10;

function demo() {
  console.log(a);
  var a = 20;
  console.log(a);
}

demo();
```

**Memory Phase (demo):** a → undefined (local)

**Execution Phase:**

1. console.log(a) → undefined (local a)
2. a = 20
3. console.log(a) → 20

**Output:** undefined, 20

---

### Q8: Function Expression

javascript

```javascript
hello();

var hello = function() {
  console.log("Hello");
};
```

**Memory Phase:** hello → undefined

**Execution Phase:** hello() → TypeError: hello is not a function

**Output:** TypeError

---

### Q9: let Inside Function with TDZ

javascript

```javascript
let x = 5;

function show() {
  console.log(x);
  let x = 10;
}

show();
```

**Output:** ReferenceError (local x is in TDZ)

---

### Q10: var + let Together

javascript

```javascript
console.log(a + b);
var a = 10;
let b = 20;
console.log(a + b);
```

**Output:** ReferenceError (b is in TDZ at first line)

---

## Key Concepts Summary

|Concept|Description|
|---|---|
|Execution Context|Environment where code runs|
|Memory Phase|Variables/functions stored in memory|
|Execution Phase|Code runs line by line|
|Call Stack|Manages active execution contexts|
|TDZ|Temporal Dead Zone for let/const|

---

## Related Notes

- [[Hoisting]]
- [[JavaScript Scope]]
- [[Closures]]

---

#module2 #javascript #execution-context #day9