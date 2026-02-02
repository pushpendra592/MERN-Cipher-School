## Overview

JavaScript stores primitive and non-primitive data types differently. Understanding this distinction is crucial for avoiding unexpected behavior in your code.

---

## Store by Value (Primitives)

Primitive types are stored directly in the variable's memory location. When you assign a primitive to another variable, a copy of the value is created.

### Primitive Types

- string
- number
- boolean
- undefined
- null
- bigint
- symbol

### Example

```javascript
let a = 10;
let b = a;      // b gets a COPY of a's value

b = 20;

console.log(a); // 10 (unchanged)
console.log(b); // 20
```

### Visual Representation

text

```text
Variable a: [10]  --> stores value directly
Variable b: [10]  --> gets its own copy

After b = 20:
Variable a: [10]  --> still 10
Variable b: [20]  --> changed independently
```

---

## Store by Reference (Non-Primitives)

Non-primitive types (objects, arrays, functions) store a reference to the memory location where the data is kept. When you assign a non-primitive to another variable, both variables point to the same memory location.

### Non-Primitive Types

- object
- array
- function

### Object Example

javascript

```javascript
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1;  // obj2 gets a REFERENCE to same object

obj2.age = 30;

console.log(obj1.age);  // 30 (changed!)
console.log(obj2.age);  // 30
```

### Array Example

javascript

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1;  // arr2 references same array

arr2.push(4);

console.log(arr1);  // [1, 2, 3, 4] (changed!)
console.log(arr2);  // [1, 2, 3, 4]
```

### Visual Representation

text

```text
Variable obj1: [reference] ---> { name: "Alice", age: 25 }
Variable obj2: [reference] ----^

Both point to the SAME object in memory!
```

---

## Comparison Table

|Feature|Primitives (Value)|Non-Primitives (Reference)|
|---|---|---|
|Stored as|Actual value|Memory address|
|Copy behavior|Creates new copy|Copies reference|
|Modification|Independent|Affects all references|
|Comparison|By value|By reference|

---

## Comparison Behavior

### Primitives Compare by Value

javascript

```javascript
let a = 5;
let b = 5;
console.log(a === b);  // true (same value)
```

### Non-Primitives Compare by Reference

javascript

```javascript
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2);  // false (different references)

let arr3 = arr1;
console.log(arr1 === arr3);  // true (same reference)
```

---

## Creating True Copies of Non-Primitives

To create an independent copy, you need to explicitly copy the data.

### Shallow Copy Methods

#### Arrays

javascript

```javascript
let original = [1, 2, 3];

// Spread operator
let copy1 = [...original];

// slice method
let copy2 = original.slice();

// Array.from
let copy3 = Array.from(original);

copy1.push(4);
console.log(original);  // [1, 2, 3] (unchanged)
console.log(copy1);     // [1, 2, 3, 4]
```

#### Objects

javascript

```javascript
let original = { name: "Alice", age: 25 };

// Spread operator
let copy1 = { ...original };

// Object.assign
let copy2 = Object.assign({}, original);

copy1.age = 30;
console.log(original.age);  // 25 (unchanged)
console.log(copy1.age);     // 30
```

### Deep Copy (for Nested Objects)

javascript

```javascript
let original = {
  name: "Alice",
  address: { city: "NYC" }
};

// Deep copy using JSON (simple method)
let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "LA";
console.log(original.address.city);  // "NYC" (unchanged)
console.log(deepCopy.address.city);  // "LA"
```

---

## Common Pitfalls

### Pitfall 1: Unintentional Mutation

javascript

```javascript
function updateAge(person) {
  person.age = 30;  // Modifies original object!
  return person;
}

let user = { name: "John", age: 25 };
updateAge(user);
console.log(user.age);  // 30 (original changed!)
```

### Solution: Create Copy First

javascript

```javascript
function updateAge(person) {
  let copy = { ...person };
  copy.age = 30;
  return copy;
}

let user = { name: "John", age: 25 };
let updated = updateAge(user);
console.log(user.age);     // 25 (unchanged)
console.log(updated.age);  // 30
```

---

## Why This Matters

1. **Prevents bugs** - Know when changes affect other variables
2. **React/State management** - Immutability is crucial
3. **Function side effects** - Understand when functions modify inputs
4. **Performance** - References are more memory-efficient

---

## Related Notes

- [[JavaScript Data Types]]
- [[JavaScript Objects]]
- [[JavaScript Arrays]]

---

#module1 #javascript #value-reference #day5