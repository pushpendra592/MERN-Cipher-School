# JavaScript Scope

## What is Scope

Scope is the area where a variable can be accessed. It decides:
- Where a variable is visible
- Where it can be used

---

## Types of Scope

JavaScript has three types of scope:

1. **Global Scope**
2. **Function Scope**
3. **Block Scope** (let and const)

---

## 1. Global Scope

Variables declared outside any function or block are in global scope. They are accessible everywhere in the code.

```javascript
let a = 10;

function show() {
  console.log(a);  // Can access 'a'
}

show();           // 10
console.log(a);   // 10
```

### Characteristics

- Declared outside all functions and blocks
- Accessible from anywhere in the code
- Attached to the global object (window in browsers)

javascript

```javascript
var globalVar = "I am global";

console.log(window.globalVar);  // "I am global" (in browsers)
```

---

## 2. Function Scope

Variables declared inside a function are only accessible within that function.

javascript

```javascript
function test() {
  let b = 20;
  console.log(b);  // 20
}

test();
console.log(b);  // ReferenceError: b is not defined
```

### var is Function Scoped

The var keyword has function scope (not block scope).

javascript

```javascript
function demo() {
  var x = 10;
  console.log(x);  // 10
}

demo();
console.log(x);  // ReferenceError: x is not defined
```

### var in Global Context

javascript

```javascript
var x = 10;

function test() {
  console.log(x);  // 10 - can access global var
}

test();
console.log(x);  // 10
```

---

## 3. Block Scope (let and const)

Variables declared with let and const inside a block {} are only accessible within that block.

javascript

```javascript
if (true) {
  let x = 5;
  const y = 10;
  console.log(x);  // 5
  console.log(y);  // 10
}

console.log(x);  // ReferenceError: x is not defined
console.log(y);  // ReferenceError: y is not defined
```

### Block Scope in Loops

javascript

```javascript
for (let i = 1; i <= 3; i++) {
  console.log(i);  // 1, 2, 3
}

console.log(i);  // ReferenceError: i is not defined
```

### var Does NOT Have Block Scope

javascript

```javascript
for (var i = 0; i < 3; i++) {
  var x = i;
  console.log(x);  // 0, 1, 2
}

console.log(x);  // 2 - still accessible!
console.log(i);  // 3 - still accessible!
```

---

## Scope Comparison

|Keyword|Global|Function|Block|
|---|---|---|---|
|var|Yes|Yes|No|
|let|Yes|Yes|Yes|
|const|Yes|Yes|Yes|

---

## Practical Examples

### Example 1: Variable Shadowing

javascript

```javascript
let num = 100;

function show() {
  let num = 50;  // Shadows global num

  if (true) {
    let num = 10;  // Shadows function num
    console.log(num);  // 10
  }
  
  console.log(num);  // 50
}

show();
console.log(num);  // 100
```

### Example 2: Function Scope with var

javascript

```javascript
function test() {
  var x = 10;
  console.log(x);  // 10
}

test();
console.log(x);  // ReferenceError
```

**Output:** 10, then ReferenceError because x is function-scoped.

### Example 3: var Inside Function

javascript

```javascript
var a = 5;

function show() {
  var a = 10;
  console.log(a);  // 10
}

show();
console.log(a);  // 5
```

**Output:** 10, then 5. The inner a shadows the outer a within the function.

### Example 4: Block Scope Error

javascript

```javascript
if (true) {
  let x = 10;
}

console.log(x);  // ReferenceError
```

**Output:** ReferenceError because x is block-scoped.

### Example 5: Loop with let

javascript

```javascript
for (let i = 0; i < 2; i++) {
  console.log(i);  // 0, 1
}

console.log(i);  // ReferenceError
```

**Output:** 0, 1, then ReferenceError.

### Example 6: const Reassignment Error

javascript

```javascript
if (true) {
  const a = 5;
  a = 10;  // TypeError: Assignment to constant variable
}

console.log(a);
```

**Error:** TypeError on reassignment, then ReferenceError because a is block-scoped.

---

## Best Practices

1. **Use const by default** - prevents accidental reassignment
2. **Use let when reassignment is needed** - provides block scope
3. **Avoid var** - function scope can lead to bugs
4. **Declare variables at the top** of their scope
5. **Keep global variables minimal** - reduces naming conflicts

---

## Related Notes

- [[Scope Chain]]
- [[JavaScript Functions]]
- [[JavaScript Data Types]]

---

#module2 #javascript #scope #day8