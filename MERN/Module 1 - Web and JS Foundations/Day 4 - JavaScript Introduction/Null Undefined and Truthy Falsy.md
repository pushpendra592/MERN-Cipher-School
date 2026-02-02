## Undefined

A variable that has been declared but not assigned a value has the value `undefined`.

```javascript
var x;
console.log(x);         // undefined
console.log(typeof x);  // "undefined"
```

### When Undefined Occurs

1. Variable declared but not assigned
2. Function parameter not provided
3. Function with no return statement
4. Accessing non-existent object property

javascript

```javascript
// No assignment
let a;
console.log(a);  // undefined

// Missing parameter
function greet(name) {
  console.log(name);
}
greet();  // undefined

// No return
function noReturn() {
  let x = 1;
}
console.log(noReturn());  // undefined

// Non-existent property
let obj = { name: "John" };
console.log(obj.age);  // undefined
```

---

## Null

null represents the intentional absence of any object value. It is explicitly assigned to indicate "no value."

javascript

```javascript
var y = null;
console.log(y);         // null
console.log(typeof y);  // "object" (known JavaScript quirk)
```

### When to Use Null

javascript

```javascript
// Intentionally empty
let selectedUser = null;

// Reset a value
let data = { name: "John" };
data = null;  // Clear the reference

// Indicate missing data
function findUser(id) {
  // User not found
  return null;
}
```

---

## Null vs Undefined Comparison

|Aspect|undefined|null|
|---|---|---|
|Meaning|Variable exists but no value assigned|Intentional absence of value|
|typeof|"undefined"|"object"|
|Assignment|Automatic by JavaScript|Manual by developer|
|Use case|Uninitialized variables|Intentionally empty|

javascript

```javascript
console.log(undefined == null);   // true (loose equality)
console.log(undefined === null);  // false (strict equality)
```

---

## Checking for Null and Undefined

### Check Undefined

javascript

```javascript
function isUndefined(variable) {
  return typeof variable === "undefined";
}

let x;
console.log(isUndefined(x));     // true
console.log(isUndefined("hi"));  // false
```

### Check Null

javascript

```javascript
function isNull(variable) {
  return variable === null;
}

console.log(isNull(null));       // true
console.log(isNull(undefined));  // false
```

### Check Either

javascript

```javascript
function isUndefinedOrNull(variable) {
  return typeof variable === "undefined" || variable === null;
}

// Or using loose equality
function isNullish(variable) {
  return variable == null;  // Matches both null and undefined
}
```

### Checking Object vs Null

javascript

```javascript
let object = { data: "Pratik" };

if (!object && typeof object === "object") {
  console.log("This data is null");
} else {
  console.log("The data is object");
}
```

---

## Truthy and Falsy Values

In JavaScript, values can be classified as truthy or falsy based on how they evaluate in boolean contexts.

---

## Falsy Values

There are only six falsy values in JavaScript:

|Value|Type|
|---|---|
|false|boolean|
|0|number|
|"" (empty string)|string|
|null|object|
|undefined|undefined|
|NaN|number|

javascript

```javascript
// All evaluate to false
if (false) { }
if (0) { }
if ("") { }
if (null) { }
if (undefined) { }
if (NaN) { }
```

---

## Truthy Values

Everything that is not falsy is truthy.

javascript

```javascript
// All evaluate to true
if (true) { }
if (1) { }
if (-1) { }
if ("hello") { }
if ([]) { }           // Empty array is truthy!
if ({}) { }           // Empty object is truthy!
if (function() {}) { }
if ("0") { }          // String "0" is truthy!
if ("false") { }      // String "false" is truthy!
```

---

## Boolean Conversion

### Using Boolean()

javascript

```javascript
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
```

### Using Double NOT (!!)

javascript

```javascript
console.log(!!0);         // false
console.log(!!"hello");   // true
console.log(!![]);        // true
```

---

## Practical Applications

### Default Values

javascript

```javascript
// Using OR for defaults
function greet(name) {
  name = name || "Guest";
  return `Hello, ${name}!`;
}

console.log(greet());        // "Hello, Guest!"
console.log(greet("John"));  // "Hello, John!"

// Modern: Nullish coalescing (??)
function greetModern(name) {
  name = name ?? "Guest";
  return `Hello, ${name}!`;
}
```

### Conditional Checks

javascript

```javascript
let user = null;

if (user) {
  console.log("User exists");
} else {
  console.log("No user");  // This runs
}
```

### Filter Truthy Values

javascript

```javascript
function filterTruthyValues(arr) {
  return arr.filter(Boolean);
}

let mixed = [0, 1, "", "hello", null, undefined, false, true];
console.log(filterTruthyValues(mixed));  // [1, "hello", true]
```

---

## Coding Challenges

### Challenge 1: Check Truthy/Falsy

javascript

```javascript
function isTruthy(value) {
  return Boolean(value);
}

console.log(isTruthy(1));       // true
console.log(isTruthy(0));       // false
console.log(isTruthy(""));      // false
console.log(isTruthy("hello")); // true
```

### Challenge 2: Check Greater Than Zero

javascript

```javascript
function checkGreaterThanZero(num) {
  return num > 0;
}

console.log(checkGreaterThanZero(5));   // true
console.log(checkGreaterThanZero(-3));  // false
console.log(checkGreaterThanZero(0));   // false
```

### Challenge 3: Check Undefined

javascript

```javascript
function isUndefined(variable) {
  return typeof variable === "undefined";
}
```

### Challenge 4: Check Null

javascript

```javascript
function isNull(variable) {
  return variable === null;
}
```

### Challenge 5: Check Undefined or Null

javascript

```javascript
function isUndefinedOrNull(variable) {
  return typeof variable === "undefined" || variable === null;
}
```

---

## Summary Table

|Value|typeof|Truthy/Falsy|
|---|---|---|
|undefined|"undefined"|Falsy|
|null|"object"|Falsy|
|0|"number"|Falsy|
|""|"string"|Falsy|
|NaN|"number"|Falsy|
|false|"boolean"|Falsy|
|[]|"object"|Truthy|
|{}|"object"|Truthy|
|"0"|"string"|Truthy|

---

## Related Notes

- [[JavaScript Data Types]]
- [[JavaScript Numbers and Booleans]]

---

#module1 #javascript #null #undefined #truthy-falsy #day4