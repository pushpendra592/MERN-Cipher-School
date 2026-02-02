## Overview

Comparison operators compare two values and return a boolean (`true` or `false`). Understanding the difference between loose and strict equality is crucial in JavaScript.

---

## Equality Operators

### Loose Equality (```===```)

Compares values after type coercion.

```javascript
console.log(1 == 1);          // true
console.log(1 == "1");        // true (string coerced to number)
console.log(0 == false);      // true
console.log(null == undefined); // true

console.log(1 == 2);          // false
console.log("Masai" == "masai"); // false (case-sensitive)
```

### Strict Equality

Compares values AND types. No coercion.

javascript

```javascript
console.log(1 === 1);         // true
console.log(1 === "1");       // false (different types)
console.log(0 === false);     // false
console.log(null === undefined); // false
```

### Recommendation

**Always use ```===```** (strict equality) to avoid unexpected type coercion.

---

## Inequality Operators

### Loose Inequality (!=)

javascript

```javascript
console.log("Masai" != "Masai");  // false
console.log("Masai" != "masai");  // true
console.log(1 != "1");            // false (type coercion)
```

### Strict Inequality (!==)

javascript

```javascript
console.log(1 !== "1");           // true (different types)
console.log(1 !== 1);             // false
```

---

## Relational Operators

### Greater Than (>)

javascript

```javascript
console.log(5 > 3);   // true
console.log(3 > 5);   // false
console.log(5 > 5);   // false
```

### Less Than (<)

javascript

```javascript
console.log(3 < 5);   // true
console.log(5 < 3);   // false
console.log(5 < 5);   // false
```

### Greater Than or Equal (>=)

javascript

```javascript
console.log(5 >= 5);  // true
console.log(5 >= 3);  // true
console.log(3 >= 5);  // false
```

### Less Than or Equal (<=)

javascript

```javascript
console.log(5 <= 5);  // true
console.log(3 <= 5);  // true
console.log(5 <= 3);  // false
```

---

## Comparison Operators Summary

|Operator|Description|Example|Result|
|---|---|---|---|
|==|Loose equal|5 == "5"|true|
|===|Strict equal|5 === "5"|false|
|!=|Loose not equal|5 != "5"|false|
|!==|Strict not equal|5 !== "5"|true|
|>|Greater than|5 > 3|true|
|<|Less than|5 < 3|false|
|>=|Greater or equal|5 >= 5|true|
|<=|Less or equal|5 <= 5|true|

---

## Exponentiation Operator (**)

Returns the first operand raised to the power of the second.

javascript

```javascript
console.log(2 ** 4);      // 16 (2^4)
console.log(3 ** 2);      // 9 (3^2)
console.log(10 ** 1.5);   // 31.622776601683793
console.log(4 ** 0.5);    // 2 (square root)
```

---

## Special Comparisons

### NaN Comparisons

javascript

```javascript
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false
console.log(isNaN(NaN));   // true
```

### null and undefined

javascript

```javascript
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(null == 0);           // false
console.log(undefined == 0);      // false
```

### String Comparisons

Strings are compared character by character using Unicode values.

javascript

```javascript
console.log("a" < "b");       // true
console.log("apple" < "banana"); // true
console.log("10" < "9");      // true (string comparison!)
console.log(10 < 9);          // false (number comparison)
```

---

## Coding Challenges

### Challenge 1: Check Equality

javascript

```javascript
function isEqual(value1, value2) {
  return value1 === value2;
}

console.log(isEqual(1, 1));           // true
console.log(isEqual(1, 2));           // false
console.log(isEqual("Masai", "Masai")); // true
console.log(isEqual("Masai", "masai")); // false
```

### Challenge 2: Check Inequality

javascript

```javascript
function isNotEqual(value1, value2) {
  return value1 !== value2;
}

console.log(isNotEqual("Masai", "Masai")); // false
console.log(isNotEqual("Masai", "masai")); // true
console.log(isNotEqual(1, "1"));           // true (strict)
```

---

## Related Notes

- [[Logical Operators]]
- [[Type Coercion and Conversion]]
- [[Null Undefined and Truthy Falsy]]

---

#module1 #javascript #comparison-operators #day5