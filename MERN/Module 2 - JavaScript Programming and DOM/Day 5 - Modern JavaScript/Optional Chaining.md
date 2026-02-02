## Overview

Optional chaining (`?.`) allows you to safely access deeply nested properties without explicitly checking if each reference in the chain is valid. If any part is `null` or `undefined`, it returns `undefined` instead of throwing an error.

---

## The Problem

Without optional chaining, accessing nested properties requires verbose null checks.

### Traditional Approach

```javascript
const person = {
  name: "John",
  address: {
    city: "New York",
    street: "123 Main St",
  },
};

// Verbose null checking
if (person.address) {
  let address = person.address;
  if (address.city) {
    let city = address.city;
    console.log(city);
  }
}
```

### With Optional Chaining

javascript

```javascript
const city = person.address?.city;
console.log(city);  // "New York"
```

---

## Basic Syntax

javascript

```javascript
obj?.property        // Property access
obj?.[expression]    // Dynamic property access
func?.()             // Function call
```

---

## Property Access

### Safe Property Access

javascript

```javascript
const person = {
  name: "John",
  address: {
    city: "New York",
  },
};

// Property exists
const city = person.address?.city;
console.log(city);  // "New York"

// Property doesn't exist
const zip = person.address?.zip;
console.log(zip);  // undefined (no error!)

// Parent doesn't exist
const country = person.location?.country;
console.log(country);  // undefined (no error!)
```

### Without Optional Chaining

javascript

```javascript
const person = { name: "John" };

// This would throw an error
// const city = person.address.city;  // TypeError!

// Safe way without optional chaining
const city = person.address && person.address.city;
```

---

## Dynamic Property Access

javascript

```javascript
const user = {
  preferences: {
    theme: "dark"
  }
};

const key = "theme";
const theme = user.preferences?.[key];
console.log(theme);  // "dark"
```

---

## Function Calls

javascript

```javascript
const user = {
  name: "John",
  greet() {
    return `Hello, ${this.name}`;
  }
};

// Method exists
console.log(user.greet?.());  // "Hello, John"

// Method doesn't exist
console.log(user.sayBye?.());  // undefined (no error!)
```

---

## Chaining Multiple Levels

javascript

```javascript
const data = {
  user: {
    profile: {
      settings: {
        theme: "dark"
      }
    }
  }
};

// Safe access through multiple levels
const theme = data.user?.profile?.settings?.theme;
console.log(theme);  // "dark"

// Any level missing returns undefined
const missing = data.user?.account?.balance;
console.log(missing);  // undefined
```

---

## With Nullish Coalescing

Combine with ?? to provide default values.

javascript

```javascript
const user = {
  name: "John"
};

// Provide default if undefined
const theme = user.settings?.theme ?? "light";
console.log(theme);  // "light"

const name = user.profile?.name ?? "Anonymous";
console.log(name);  // "Anonymous"
```

---

## With Arrays

javascript

```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob" }
];

// Safe array access
console.log(users[0]?.name);  // "Alice"
console.log(users[2]?.name);  // undefined

// Access nested array
const data = {
  items: [{ id: 1 }, { id: 2 }]
};

console.log(data.items?.[0]?.id);  // 1
console.log(data.items?.[5]?.id);  // undefined
```

---

## Practical Examples

### API Response Handling

javascript

```javascript
const response = {
  data: {
    user: {
      name: "John"
    }
  }
};

// Safe access
const userName = response?.data?.user?.name ?? "Guest";
console.log(userName);  // "John"

// Missing data
const emptyResponse = {};
const name = emptyResponse?.data?.user?.name ?? "Guest";
console.log(name);  // "Guest"
```

### DOM Element Access

javascript

```javascript
// Safe DOM access
const element = document.querySelector("#app")?.textContent;
```

---

## Coding Challenges

### Activity 1: Safe Age Access

javascript

```javascript
function getAge(person) {
  return person?.age ?? 0;
}

console.log(getAge({ name: "John", age: 25 }));  // 25
console.log(getAge({ name: "Jane" }));           // 0
console.log(getAge(null));                       // 0
```

### Activity 2: Calculate Average Grades

javascript

```javascript
function calculateAverageGrades(students) {
  return students.map((student) => {
    const grades = student?.grades ?? [];
    const averageGrade =
      grades.length > 0 
        ? grades.reduce((a, b) => a + b) / grades.length 
        : 0;
    return { name: student.name, averageGrade };
  });
}

const students = [
  { name: "Alice", grades: [90, 85, 88] },
  { name: "Bob" },  // No grades
  { name: "Charlie", grades: [] }
];

console.log(calculateAverageGrades(students));
// [
//   { name: "Alice", averageGrade: 87.67 },
//   { name: "Bob", averageGrade: 0 },
//   { name: "Charlie", averageGrade: 0 }
// ]
```

### Activity 3: Apply Discount

javascript

```javascript
function applyDiscount(product) {
  const price = product?.price;
  return price 
    ? (price * 0.9).toFixed(2) 
    : "Price not available";
}

console.log(applyDiscount({ name: "Laptop", price: 1000 }));  // "900.00"
console.log(applyDiscount({ name: "Unknown" }));              // "Price not available"
console.log(applyDiscount(null));                             // "Price not available"
```

---

## Key Points

1. **Returns undefined** if any part of the chain is null or undefined
2. **Short-circuits** - stops evaluation at the first nullish value
3. **Works with** - properties, arrays, function calls
4. **Combine with ??** for default values
5. **Cannot be used** on the left side of assignment

javascript

```javascript
// This is NOT valid
// user?.name = "John";  // Error!
```

---

## Related Notes

- [[Null Undefined and Truthy Falsy]]
- [[JavaScript Objects]]
- [[Destructuring]]

---

#module1 #javascript #optional-chaining #es6 #day5