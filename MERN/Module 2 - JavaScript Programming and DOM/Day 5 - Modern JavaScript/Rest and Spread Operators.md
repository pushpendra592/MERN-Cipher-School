## Overview

Both rest and spread use the same syntax (`...`) but serve opposite purposes:
- **Rest**: Collects multiple elements into an array
- **Spread**: Expands an array/object into individual elements

---

## Rest Operator

The rest operator collects multiple function arguments or remaining elements into an array.

### Analogy

Think of the rest operator as a basket that holds all the extra items you want to carry.

---

### Rest in Function Parameters

```javascript
function trackGuests(first, second, ...rest) {
  console.log(first);   // "John"
  console.log(second);  // "Jane"
  console.log(rest);    // ["Alice", "Bob", "Charlie"]
}

trackGuests("John", "Jane", "Alice", "Bob", "Charlie");
```

### Rest is Always an Array

javascript

```javascript
function doSomething(first, second, ...rest) {
  console.log(first, second, rest);
  // rest is guaranteed to be an array, even if empty
}

doSomething("one", "two", "three", "four", "five");
// Output: one two ["three", "four", "five"]

doSomething("one", "two");
// Output: one two []
```

### Practical Example: Print Hobbies

javascript

```javascript
function printPerson(name, ...hobbies) {
  console.log(`${name}'s hobbies are ${hobbies.join(", ")}`);
}

printPerson("Rahul", "Cricket", "Travel", "Gaming");
// Output: Rahul's hobbies are Cricket, Travel, Gaming
```

---

### Rest in Destructuring

#### With Objects

javascript

```javascript
const user = {
  id: 1,
  name: "John",
  age: 25,
  city: "Delhi"
};

const { age, ...rest } = user;

console.log(age);   // 25
console.log(rest);  // { id: 1, name: "John", city: "Delhi" }
```

#### With Arrays

javascript

```javascript
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;

console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5]
```

---

## Spread Operator

The spread operator expands an array or object in place.

### Analogy

Think of the spread operator as unpacking a suitcase and placing its contents separately.

---

### Spread with Arrays

javascript

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(...numbers);  // 1 2 3 4 5

// Combining arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4, 5, 6]

// Copying arrays
let original = [1, 2, 3];
let copy = [...original];
copy.push(4);
console.log(original);  // [1, 2, 3] (unchanged)
console.log(copy);      // [1, 2, 3, 4]
```

### Spread with Objects

javascript

```javascript
let user = {
  firstName: "John",
  lastName: "Doe",
};

let updatedUser = {
  ...user,
  age: 25,
};

console.log(updatedUser);
// { firstName: "John", lastName: "Doe", age: 25 }
```

### Adding Computed Properties

javascript

```javascript
let user = {
  firstName: "Vivek",
  lastName: "Agarwal",
};

let fullUser = {
  ...user,
  fullName: `${user.firstName} ${user.lastName}`,
};

console.log(fullUser);
// { firstName: "Vivek", lastName: "Agarwal", fullName: "Vivek Agarwal" }
```

---

## Rest vs Spread Comparison

|Feature|Rest|Spread|
|---|---|---|
|Purpose|Collects elements|Expands elements|
|Context|Function parameters, destructuring|Function calls, array/object literals|
|Result|Creates an array|Unpacks into individual elements|
|Position|Must be last|Can be anywhere|

---

## Practical Applications

### Function with Variable Arguments

javascript

```javascript
// Sum any number of arguments
const sum = (...numbers) => numbers.reduce((total, n) => total + n, 0);

console.log(sum(1, 2));           // 3
console.log(sum(1, 2, 3, 4, 5));  // 15
```

### Merging Objects

javascript

```javascript
const defaults = {
  theme: "light",
  fontSize: 14,
  language: "en"
};

const userSettings = {
  theme: "dark",
  fontSize: 16
};

const settings = { ...defaults, ...userSettings };
console.log(settings);
// { theme: "dark", fontSize: 16, language: "en" }
// Later values override earlier ones
```

### Passing Array as Function Arguments

javascript

```javascript
const numbers = [5, 2, 8, 1, 9];

// Without spread
console.log(Math.max.apply(null, numbers));  // 9

// With spread
console.log(Math.max(...numbers));  // 9
```

---

## Coding Challenges

### Activity 1: Sum with Rest

javascript

```javascript
function sumNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5));  // 15
console.log(sumNumbers(10, 20));         // 30
```

### Activity 2: Merge Objects with Spread

javascript

```javascript
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const person = { name: "John", age: 25 };
const job = { title: "Developer", company: "Tech Co" };

console.log(mergeObjects(person, job));
// { name: "John", age: 25, title: "Developer", company: "Tech Co" }
```

### Activity 3: String to Array with Spread

javascript

```javascript
function stringToArray(str) {
  return [...str];
}

console.log(stringToArray("hello"));
// ["h", "e", "l", "l", "o"]
```

---

## Rules and Best Practices

1. **Rest must be last** in function parameters or destructuring
2. **Only one rest** parameter allowed per function
3. **Spread creates shallow copies** - nested objects/arrays still share references
4. **Order matters** when spreading objects - later properties override earlier ones

javascript

```javascript
// Rest must be last
function valid(a, b, ...rest) {}   // OK
// function invalid(...rest, a) {}  // Error!

// Spread order matters
const obj = { ...{ a: 1 }, ...{ a: 2 } };
console.log(obj.a);  // 2 (second value wins)
```

---

## Related Notes

- [[Arrow Functions]]
- [[Destructuring]]
- [[JavaScript Arrays]]
- [[JavaScript Objects]]

---

#module1 #javascript #rest #spread #es6 #day5