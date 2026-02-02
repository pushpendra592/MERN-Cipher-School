## What are Objects

Objects are collections of related data and functionality stored as key-value pairs. They represent real-world entities with properties and behaviors.

---

## Creating Objects

### Object Literal Syntax

```javascript
var person = {
  name: "John",
  age: 30,
  city: "New York"
};
```

### Empty Object

javascript

```javascript
var obj = {};
```

---

## Accessing Properties

### Dot Notation

javascript

```javascript
var person = {
  name: "John",
  age: 30
};

console.log(person.name);  // "John"
console.log(person.age);   // 30
```

### Bracket Notation

javascript

```javascript
console.log(person["name"]);  // "John"
console.log(person["age"]);   // 30

// Useful for dynamic keys
var key = "name";
console.log(person[key]);     // "John"
```

---

## Adding and Updating Properties

### Using Dot Notation

javascript

```javascript
var person = {
  name: "John"
};

// Add new property
person.age = 30;

// Update existing property
person.name = "Jane";

console.log(person);  // { name: "Jane", age: 30 }
```

### Using Bracket Notation

javascript

```javascript
var person = {};

person["name"] = "John";
person["skill"] = "coding";

// Dynamic key
var key = "city";
person[key] = "New York";

console.log(person);  // { name: "John", skill: "coding", city: "New York" }
```

---

## Deleting Properties

javascript

```javascript
var person = {
  name: "John",
  age: 30,
  city: "New York"
};

delete person.city;

console.log(person);  // { name: "John", age: 30 }
```

---

## Checking Properties

javascript

```javascript
var person = {
  name: "John",
  age: 30
};

// Using 'in' operator
console.log("name" in person);     // true
console.log("city" in person);     // false

// Using hasOwnProperty
console.log(person.hasOwnProperty("name"));  // true
```

---

## Nested Objects

javascript

```javascript
var student = {
  name: "Alice",
  grades: {
    math: 90,
    science: 85
  },
  address: {
    city: "Boston",
    zip: "02101"
  }
};

// Access nested properties
console.log(student.grades.math);      // 90
console.log(student.address.city);     // "Boston"
console.log(student["grades"]["science"]);  // 85
```

---

## Objects with Methods

Objects can contain functions (called methods).

javascript

```javascript
var calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(10, 4)); // 6
```

### Shorthand Method Syntax

javascript

```javascript
var calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};
```

---

## Object Methods

### Object.keys()

Returns array of property names.

javascript

```javascript
var person = { name: "John", age: 30 };
console.log(Object.keys(person));  // ["name", "age"]
```

### Object.values()

Returns array of property values.

javascript

```javascript
var person = { name: "John", age: 30 };
console.log(Object.values(person));  // ["John", 30]
```

### Object.entries()

Returns array of [key, value] pairs.

javascript

```javascript
var person = { name: "John", age: 30 };
console.log(Object.entries(person));  
// [["name", "John"], ["age", 30]]
```

---

## Iterating Over Objects

javascript

```javascript
var person = {
  name: "John",
  age: 30,
  city: "New York"
};

// for...in loop
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// name: John
// age: 30
// city: New York
```

---

## Checking for Null Objects

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

## Practical Examples

### Student Data

javascript

```javascript
var students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 21 }
];

// Access first student's name
console.log(students[0].name);  // "Alice"

// Loop through students
for (let student of students) {
  console.log(`${student.name} is ${student.age} years old`);
}
```

---

## Related Notes

- [[JavaScript Data Types]]
- [[JavaScript Arrays]]
- [[JavaScript Functions]]

---

#module1 #javascript #objects #day4