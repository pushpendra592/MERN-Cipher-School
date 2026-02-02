## Overview

JavaScript can convert values between types in two ways:
- **Implicit (Coercion)**: Automatic conversion by JavaScript
- **Explicit (Conversion)**: Manual conversion using functions

---

## Type Coercion (Implicit)

Type coercion happens automatically in certain contexts.

### Where Coercion Occurs

1. Arithmetic operations
2. Logical operators
3. Comparison operators
4. String concatenation
5. Conditional statements
6. Template literals

---

### Arithmetic Coercion

```javascript
// String to Number
console.log("5" - 2);      // 3 (string coerced to number)
console.log("5" * 2);      // 10
console.log("5" / 2);      // 2.5

// String concatenation (+ with string)
console.log("5" + 2);      // "52" (number coerced to string)
console.log(5 + "2");      // "52"

// Boolean to Number
console.log(true + true);  // 2 (true = 1)
console.log(true + false); // 1 (false = 0)

// Special cases
console.log(10 * "abc");   // NaN
console.log("10" - "2");   // 8
```

---

### Comparison Coercion

javascript

```javascript
// Loose equality coerces types
console.log(5 == "5");     // true
console.log(0 == false);   // true
console.log("" == false);  // true
console.log(null == undefined); // true

// Strict equality - no coercion
console.log(5 === "5");    // false
console.log(0 === false);  // false
```

---

### Boolean Coercion

Values are coerced to booleans in conditional contexts.

javascript

```javascript
// In if statements
if ("hello") {
  console.log("Truthy!");  // This runs
}

if (0) {
  console.log("This won't run");
}

// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy
```

---

## Type Conversion (Explicit)

Manual conversion using built-in functions.

### Converting to Number

javascript

```javascript
// Number()
console.log(Number("123"));      // 123
console.log(Number("123.45"));   // 123.45
console.log(Number("abc"));      // NaN
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN

// parseInt() - parses integer from string
console.log(parseInt("123"));     // 123
console.log(parseInt("123px"));   // 123 (stops at non-digit)
console.log(parseInt("px123"));   // NaN
console.log(parseInt("3.14"));    // 3

// parseFloat() - parses decimal from string
console.log(parseFloat("3.14"));    // 3.14
console.log(parseFloat("3.14em"));  // 3.14

// Unary plus (+)
console.log(+"123");     // 123
console.log(+"3.14");    // 3.14
```

---

### Converting to String

```javascript
// String()
console.log(String(123));        // "123"
console.log(String(true));       // "true"
console.log(String(null));       // "null"
console.log(String(undefined));  // "undefined"
console.log(String([1, 2, 3]));  // "1,2,3"
console.log(String({}));         // "[object Object]"

// .toString()
console.log((123).toString());   // "123"
console.log(true.toString());    // "true"

// Template literals
console.log(`${123}`);           // "123"

// Concatenation with empty string
console.log(123 + "");           // "123"
```

---

### Converting to Boolean

```javascript
// Boolean()
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true

// Double NOT
console.log(!!0);         // false
console.log(!!"hello");   // true
```

---

## Conversion Summary Table

|From|To Number|To String|To Boolean|
|---|---|---|---|
|"123"|123|"123"|true|
|""|0|""|false|
|"abc"|NaN|"abc"|true|
|true|1|"true"|true|
|false|0|"false"|false|
|null|0|"null"|false|
|undefined|NaN|"undefined"|false|
|[]|0|""|true|
|{}|NaN|"[object Object]"|true|

---

## Type Identification

### typeof Operator

```javascript
console.log(typeof 123);         // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (historical bug!)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
```

### Checking Arrays

```javascript
// typeof returns "object" for arrays
console.log(typeof []);           // "object"

// Use Array.isArray()
console.log(Array.isArray([]));   // true
console.log(Array.isArray({}));   // false
```

### Checking null

```javascript
// typeof null is "object" (JavaScript bug)
let value = null;
console.log(value === null);      // true

// Safe null check
function isNull(val) {
  return val === null;
}
```

### Object.prototype.toString

More precise type checking for objects.

```javascript
console.log(Object.prototype.toString.call({}));        // "[object Object]"
console.log(Object.prototype.toString.call([]));        // "[object Array]"
console.log(Object.prototype.toString.call(new Date())); // "[object Date]"
console.log(Object.prototype.toString.call(/regex/));    // "[object RegExp]"
console.log(Object.prototype.toString.call(null));       // "[object Null]"
```

---

## Type Identification Tips

|Check|Method|
|---|---|
|Primitives|typeof|
|Arrays|Array.isArray()|
|null|=== null|
|Objects|Object.prototype.toString.call()|
|Functions|typeof === "function"|

---

## Edge Cases

### The document.all Anomaly

```javascript
// Historical quirk in browsers
console.log(typeof document.all);  // "undefined"
// But it's not really undefined!
```

### Empty Object to String

```javascript
let obj = {};
console.log(String(obj));  // "[object Object]"
```

### Array Coercion

```javascript
console.log([] + []);      // "" (both coerced to empty strings)
console.log([] + {});      // "[object Object]"
console.log({} + []);      // "[object Object]" or 0 (depends on context)
```

---

## Best Practices

1. **Use strict equality (```===```)** to avoid coercion surprises
2. **Explicitly convert** when type conversion is needed
3. **Use Array.isArray()** for array checks
4. **Use ```===``` null** for null checks
5. **Validate user input** before operations

```javascript
// Bad - relies on coercion
if (value == null) { }

// Good - explicit checks
if (value === null || value === undefined) { }

// Better - using optional chaining
if (value?.property) { }
```

---

## Related Notes

- [[Comparison Operators]]
- [[Logical Operators]]
- [[Null Undefined and Truthy Falsy]]
- [[JavaScript Data Types]]

---

#module1 #javascript #type-coercion #type-conversion #day5