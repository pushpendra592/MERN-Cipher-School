## Overview

Logical operators are used to combine or invert boolean values. In JavaScript, they also work with non-boolean values due to truthy/falsy evaluation.

---

## Basic Logical Operators

| Operator | Name | Description |
|----------|------|-------------|
| `&&` | AND | Returns true if both operands are true |
| `\|\|` | OR | Returns true if at least one operand is true |
| `!` | NOT | Inverts the boolean value |

---

## Logical AND (&&)

Returns `true` only if **both** operands are true.

### With Booleans

```javascript
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false
```

### Short-Circuit Behavior

AND is **eager to find a falsy value**. Once found, it returns immediately without checking further.

javascript

```javascript
let a = "Prachi";
let b = "Vivek";
let c = "Rishi";

let z = a && b && c;
console.log(z);  // "Rishi" (last truthy value)
```

**Rule:** Returns the **first falsy value** or the **last truthy value**.

javascript

```javascript
console.log(false && "hello");  // false
console.log("" && "hello");     // "" (empty string is falsy)
console.log("hello" && "world"); // "world"
console.log("hello" && 0);      // 0
```

---

## Logical OR (||)

Returns true if **at least one** operand is true.

### With Booleans

javascript

```javascript
console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false
```

### Short-Circuit Behavior

OR is **eager to find a truthy value**. Once found, it returns immediately.

javascript

```javascript
let a = false;
let b = 0;
let c = null;

let z = a || b || c;
console.log(z);  // null (last falsy value)
```

**Rule:** Returns the **first truthy value** or the **last falsy value**.

javascript

```javascript
console.log(false || "hello");  // "hello"
console.log("" || "default");   // "default"
console.log("first" || "second"); // "first"
console.log(0 || null || "yes"); // "yes"
```

### Default Values Pattern

javascript

```javascript
let defaultUser = false;
let user = "Akash";
console.log(defaultUser || user);  // "Akash"

function greet(name) {
  name = name || "Guest";
  return `Hello, ${name}!`;
}

console.log(greet());        // "Hello, Guest!"
console.log(greet("John"));  // "Hello, John!"
```

---

## Logical NOT (!)

Inverts the boolean value.

javascript

```javascript
console.log(!true);   // false
console.log(!false);  // true
console.log(!"hello"); // false (string is truthy)
console.log(!0);      // true (0 is falsy)
console.log(!"");     // true (empty string is falsy)
```

### Double NOT (!!)

Converts any value to its boolean equivalent.

javascript

```javascript
console.log(!!1);       // true
console.log(!!0);       // false
console.log(!!"hello"); // true
console.log(!!"");      // false
console.log(!!null);    // false
```

---

## Complex Examples

### Example 1

javascript

```javascript
let res = (null && "A") || ("" || (5 && "Hi"));
// Step 1: null && "A" = null (first falsy)
// Step 2: "" || (5 && "Hi") = "" || "Hi" = "Hi"
// Step 3: null || "Hi" = "Hi"
console.log(res);  // "Hi"
```

### Example 2

javascript

```javascript
let res = !("" || 0) && (NaN || "JS");
// Step 1: "" || 0 = 0 (last falsy)
// Step 2: !0 = true
// Step 3: NaN || "JS" = "JS"
// Step 4: true && "JS" = "JS"
console.log(res);  // "JS"
```

### Example 3

javascript

```javascript
let res = (false || (0 && "X")) || (("A" && null) || 10);
// Step 1: 0 && "X" = 0
// Step 2: false || 0 = 0
// Step 3: "A" && null = null
// Step 4: null || 10 = 10
// Step 5: 0 || 10 = 10
console.log(res);  // 10
```

### Example 4

javascript

```javascript
let res = (undefined || ("" && 5)) || (NaN && "OK") || "Final";
// Step 1: "" && 5 = ""
// Step 2: undefined || "" = ""
// Step 3: NaN && "OK" = NaN
// Step 4: "" || NaN = NaN
// Step 5: NaN || "Final" = "Final"
console.log(res);  // "Final"
```

### Example 5

javascript

```javascript
let res = (("Hi" && 0) || (false && "No")) && ("Yes" || null);
// Step 1: "Hi" && 0 = 0
// Step 2: false && "No" = false
// Step 3: 0 || false = false
// Step 4: "Yes" || null = "Yes"
// Step 5: false && "Yes" = false
console.log(res);  // false
```

---

## Operator Precedence

1. ! (NOT) - highest
2. && (AND)
3. || (OR) - lowest

javascript

```javascript
// Without parentheses
console.log(true || false && false);  // true
// Evaluated as: true || (false && false) = true || false = true

// With parentheses for clarity
console.log((true || false) && false); // false
```

---

## Coding Challenges

### Challenge 1: Is Truthy

javascript

```javascript
function isTruthy(a, b, c) {
  return !!(a || b || c);
}

// Or simply
function isTruthy(a, b, c) {
  return a || b || c ? true : false;
}

console.log(isTruthy(false, false, true));  // true
console.log(isTruthy(false, false, false)); // false
```

### Challenge 2: Find Largest Number

javascript

```javascript
function findLargestNumber(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

// Or using Math.max
function findLargestNumber(a, b, c) {
  return Math.max(a, b, c);
}

console.log(findLargestNumber(5, 9, 3));  // 9
```

### Challenge 3: Calculate Average

javascript

```javascript
function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));  // 3
```

---

## Summary

|Operator|Behavior|
|---|---|
|&&|Returns first falsy OR last truthy|
|\||Returns first truthy OR last falsy|
|!|Inverts boolean value|

---

## Related Notes

- [[Comparison Operators]]
- [[Null Undefined and Truthy Falsy]]
- [[Type Coercion and Conversion]]

---

#module1 #javascript #logical-operators #day5