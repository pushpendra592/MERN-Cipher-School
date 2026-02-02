## Strings

Strings are sequences of characters used to represent text.

---

## Creating Strings

### Three Ways to Define Strings

```javascript
// Double quotes
var name = "Masai School";

// Single quotes
var subject = 'Coding';

// Template literals (backticks)
var val = `Hi`;
```

---
## String Properties and Methods

### Length Property

```javascript
var str = "Hello";
console.log(str.length);  // 5
```

### Common String Methods

```javascript
var str = "Hello World";

// Access character
console.log(str[0]);              // "H"
console.log(str.charAt(0));       // "H"

// Case conversion
console.log(str.toUpperCase());   // "HELLO WORLD"
console.log(str.toLowerCase());   // "hello world"

// Find substring
console.log(str.indexOf("World")); // 6
console.log(str.includes("World")); // true

// Extract substring
console.log(str.slice(0, 5));     // "Hello"
console.log(str.substring(0, 5)); // "Hello"

// Split into array
console.log(str.split(" "));      // ["Hello", "World"]

// Trim whitespace
var padded = "  Hello  ";
console.log(padded.trim());       // "Hello"

// Replace
console.log(str.replace("World", "JS")); // "Hello JS"
```

---

## Template Literals

Template literals provide an easier way to include variables and expressions within strings.

### Basic Syntax

Use backticks () instead of quotes and ${}` for expressions.

```javascript
var name = "Alice";

// Without template literals (concatenation)
console.log("Hello, " + name + "!");

// With template literals
console.log(`Hello, ${name}!`);
```

---

## Template Literal Features

### 1. Variable Interpolation

```javascript
var name = "Alice";
var age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
```

### 2. Expression Inclusion

```javascript
var a = 5;
var b = 10;

// Without template literals
console.log("The sum of a and b is " + (a + b) + ".");

// With template literals
console.log(`The sum of a and b is ${a + b}.`);
```

### 3. Multiline Strings

```javascript
// Without template literals
var message = "You have 5 apples.\n" + "Please come again!";

// With template literals
var item = "apple";
var quantity = 5;
var message = `You have ${quantity} ${item}s.
Please come again!`;

console.log(message);
// Output:
// You have 5 apples.
// Please come again!
```

### 4. Nested Expressions

```javascript
var isLoggedIn = true;
console.log(`User is ${isLoggedIn ? "logged in" : "logged out"}`);
```

---

## Coding Challenges

### Challenge 1: Reverse String

Write a function that reverses a string without using built-in reverse methods.

```javascript
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello"));  // "olleh"
```

### Challenge 2: Template Literal Greeting

```javascript
function greet(name, time) {
  return `Good ${time}, ${name}! Welcome back.`;
}

console.log(greet("John", "morning"));
// "Good morning, John! Welcome back."
```

---

## String Comparison

```javascript
// Strings are compared character by character
console.log("a" < "b");        // true
console.log("apple" < "banana"); // true
console.log("10" < "9");       // true (string comparison!)
```

---

## Related Notes

- [[JavaScript Data Types]]
- [[JavaScript Arrays]]

---

#module1 #javascript #strings #template-literals #day4