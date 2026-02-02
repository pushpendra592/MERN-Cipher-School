## Numbers

JavaScript has a single number type that handles both integers and decimals.

---

## Creating Numbers

```javascript
var num = 100;        // Integer
var dec = 100.001;    // Decimal (floating point)
var neg = -50;        // Negative
var exp = 2.5e6;      // Scientific notation (2,500,000)
```

---
## Number Operations

### Arithmetic Operators

javascript

```javascript
var a = 10;
var b = 3;

console.log(a + b);   // 13 (addition)
console.log(a - b);   // 7  (subtraction)
console.log(a * b);   // 30 (multiplication)
console.log(a / b);   // 3.333... (division)
console.log(a % b);   // 1  (modulus/remainder)
console.log(a ** b);  // 1000 (exponentiation)
```

### Increment and Decrement

javascript

```javascript
var x = 5;
x++;          // x is now 6
x--;          // x is now 5

// Pre vs Post increment
var a = 5;
console.log(++a);  // 6 (increment first, then use)
console.log(a++);  // 6 (use first, then increment)
console.log(a);    // 7
```

---

## Special Number Values

javascript

```javascript
console.log(Infinity);          // Infinity
console.log(-Infinity);         // -Infinity
console.log(1 / 0);             // Infinity
console.log("abc" / 2);         // NaN (Not a Number)
console.log(isNaN("abc" / 2));  // true
```

---

## Number Methods

javascript

```javascript
var num = 3.14159;

// Fixed decimal places
console.log(num.toFixed(2));    // "3.14" (string)

// Parse strings to numbers
console.log(parseInt("42"));     // 42
console.log(parseFloat("3.14")); // 3.14
console.log(Number("42"));       // 42

// Check if finite
console.log(isFinite(100));      // true
console.log(isFinite(Infinity)); // false
```

---

## Booleans

Booleans have only two values: true and false.

---

## Creating Booleans

javascript

```javascript
var x = true;
var y = false;

// From comparison
var isAdult = age >= 18;
var isEqual = a === b;
```

---

## Comparison Operators

|Operator|Description|Example|
|---|---|---|
|==|Equal (loose)|5 == "5" is true|
|===|Equal (strict)|5 === "5" is false|
|!=|Not equal (loose)|5 != "5" is false|
|!==|Not equal (strict)|5 !== "5" is true|
|>|Greater than|5 > 3 is true|
|<|Less than|5 < 3 is false|
|>=|Greater or equal|5 >= 5 is true|
|<=|Less or equal|5 <= 5 is true|

javascript

```javascript
console.log(5 == "5");    // true (type coercion)
console.log(5 === "5");   // false (strict comparison)
console.log(5 != "5");    // false
console.log(5 !== "5");   // true
```

---

## Logical Operators

|Operator|Description|Example|
|---|---|---|
|&&|AND|true && false is false|
|\||OR|true \| false is true|
|!|NOT|!true is false|

javascript

```javascript
var a = true;
var b = false;

console.log(a && b);  // false (both must be true)
console.log(a || b);  // true (at least one true)
console.log(!a);      // false (negation)
```

---

## Boolean Conversion

Values automatically convert to boolean in conditional contexts.

javascript

```javascript
// Falsy values (convert to false)
Boolean(0);         // false
Boolean("");        // false
Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false
Boolean(false);     // false

// Truthy values (convert to true)
Boolean(1);         // true
Boolean("hello");   // true
Boolean([]);        // true
Boolean({});        // true
```

---

## Coding Challenges

### Challenge: Find Maximum

javascript

```javascript
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(findMax([3, 7, 2, 9, 1]));  // 9
```

### Challenge: Check Greater Than Zero

javascript

```javascript
function checkGreaterThanZero(num) {
  return num > 0;
}

console.log(checkGreaterThanZero(5));   // true
console.log(checkGreaterThanZero(-3));  // false
console.log(checkGreaterThanZero(0));   // false
```

---

## Related Notes

- [[JavaScript Data Types]]
- [[Null Undefined and Truthy Falsy]]

---

#module1 #javascript #numbers #booleans #day4