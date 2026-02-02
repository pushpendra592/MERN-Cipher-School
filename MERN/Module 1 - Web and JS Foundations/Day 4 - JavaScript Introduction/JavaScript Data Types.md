## Overview

JavaScript has two categories of data types: Primitive (value types) and Non-Primitive (reference types).

---

## Primitive Data Types (Value Types)

Primitives are immutable and stored directly in the variable's memory location.

| Type | Description | Example |
|------|-------------|---------|
| string | Sequence of characters | `"Hello"` |
| number | Integers and decimals | `42`, `3.14` |
| boolean | True or false | `true`, `false` |
| undefined | Variable declared but not assigned | `undefined` |
| null | Intentional absence of value | `null` |
| bigint | Large integers | `9007199254740991n` |
| symbol | Unique identifier | `Symbol("id")` |

---

## Non-Primitive Data Types (Reference Types)

Non-primitives are mutable and stored as references to memory locations.

| Type | Description | Example |
|------|-------------|---------|
| object | Collection of key-value pairs | `{ name: "John" }` |
| array | Ordered list of values | `[1, 2, 3]` |
| function | Reusable block of code | `function() {}` |

---

## Checking Data Types with typeof

Use `typeof` operator to determine the type of a value.

```javascript
var name = "Masai School";
console.log(typeof name);       // "string"

var num = 100;
console.log(typeof num);        // "number"

var isActive = true;
console.log(typeof isActive);   // "boolean"

var x;
console.log(typeof x);          // "undefined"

var y = null;
console.log(typeof y);          // "object" (known quirk)

var arr = [1, 2, 3];
console.log(typeof arr);        // "object"

var obj = { a: 1 };
console.log(typeof obj);        // "object"

function greet() {}
console.log(typeof greet);      // "function"
```

## Primitive vs Non-Primitive

|Feature|Primitive|Non-Primitive|
|---|---|---|
|Stored as|Value|Reference|
|Mutable|No|Yes|
|Comparison|By value|By reference|
|Copy behavior|Creates new copy|Copies reference|
### Value vs Reference Example

```javascript
// Primitive - copies value
let a = 10;
let b = a;
b = 20;
console.log(a);  // 10 (unchanged)

// Non-primitive - copies reference
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Jane";
console.log(obj1.name);  // "Jane" (changed!)
```

---

## Related Notes

- [[JavaScript Strings and Template Literals]]
- [[JavaScript Numbers and Booleans]]
- [[JavaScript Objects]]
- [[JavaScript Arrays]]
- [[Null Undefined and Truthy Falsy]]

---

#module1 #javascript #data-types #day4