## Overview

Destructuring is a JavaScript syntax that allows you to extract values from arrays or properties from objects and assign them to variables in a concise way.

---

## Array Destructuring

Use square brackets `[]` to destructure arrays. Variables are assigned in order of array elements.

### Basic Syntax

```javascript
const arr = [1, 3, 5, 7, 9];

const [first, second, third] = arr;
console.log(first);   // 1
console.log(second);  // 3
console.log(third);   // 5
```

### Skip Elements

javascript

```javascript
const arr = [1, 2, 3, 4, 5];

const [first, , third] = arr;  // Skip second element
console.log(first);   // 1
console.log(third);   // 3
```

### With Rest Operator

javascript

```javascript
const arr = [1, 3, 5, 7, 9];

const [first, second, ...rest] = arr;
console.log(first);   // 1
console.log(second);  // 3
console.log(rest);    // [5, 7, 9]
```

### Default Values

javascript

```javascript
const arr = [1, 2];

const [a, b, c = 10] = arr;
console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 10 (default value used)
```

### Swapping Variables

javascript

```javascript
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);  // 2
console.log(b);  // 1
```

---

## Object Destructuring

Use curly braces {} to destructure objects. Variables are matched by property name.

### Basic Syntax

javascript

```javascript
const user = {
  firstName: "Vivek",
  lastName: "Agarwal",
  age: 38
};

const { firstName, lastName, age } = user;
console.log(firstName);  // "Vivek"
console.log(lastName);   // "Agarwal"
console.log(age);        // 38
```

### Renaming Variables

Use colon : to assign to a different variable name.

javascript

```javascript
const user = {
  firstName: "Vivek",
  lastName: "Agarwal"
};

const { firstName: first, lastName: last } = user;
console.log(first);  // "Vivek"
console.log(last);   // "Agarwal"
// firstName and lastName are NOT defined as variables
```

### Default Values

javascript

```javascript
const user = {
  firstName: "Vivek",
  lastName: "Agarwal"
};

const { firstName, lastName, age = 40 } = user;
console.log(age);  // 40 (default value used)
```

### Rename with Default

javascript

```javascript
const user = { name: "John" };

const { name: userName, age: userAge = 25 } = user;
console.log(userName);  // "John"
console.log(userAge);   // 25
```

### With Rest Operator

javascript

```javascript
const user = {
  id: 1,
  name: "John",
  age: 25,
  city: "Delhi"
};

const { name, ...rest } = user;
console.log(name);  // "John"
console.log(rest);  // { id: 1, age: 25, city: "Delhi" }
```

---

## Nested Destructuring

### Nested Objects

javascript

```javascript
const user = {
  firstName: "Vivek",
  lastName: "Agarwal",
  age: 38,
  posts: [
    { title: "Post 1", comments: 10 },
    { title: "Post 2", comments: 11 },
  ],
};

// Extract nested properties
const {
  posts: [{ title }, { title: t2 }],
} = user;

console.log(title);  // "Post 1"
console.log(t2);     // "Post 2"
```

### Deep Nesting

javascript

```javascript
const user = {
  id: 339,
  name: "John",
  age: 42,
  subjects: ["HTML", "CSS", "Javascript"],
  education: {
    degree: {
      name: "BCA",
    },
  },
};

const {
  education: {
    degree: { name: degreeName }
  }
} = user;

console.log(degreeName);  // "BCA"
```

---

## Function Parameter Destructuring

### Array Parameters

javascript

```javascript
function getFirstAndLast([first, ...rest]) {
  const last = rest[rest.length - 1];
  return { first, last };
}

console.log(getFirstAndLast([1, 2, 3, 4, 5]));
// { first: 1, last: 5 }
```

### Object Parameters

javascript

```javascript
function greetUser({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old`);
}

greetUser({ name: "John", age: 25 });
// "Hello John, you are 25 years old"
```

### With Defaults

javascript

```javascript
function createUser({ name = "Anonymous", age = 0 } = {}) {
  return { name, age };
}

console.log(createUser());                    // { name: "Anonymous", age: 0 }
console.log(createUser({ name: "John" }));    // { name: "John", age: 0 }
console.log(createUser({ name: "Jane", age: 25 }));  // { name: "Jane", age: 25 }
```

---

## Practical Examples

### API Response Handling

javascript

```javascript
const response = {
  status: 200,
  data: {
    user: {
      id: 1,
      name: "John",
      email: "john@example.com"
    },
    token: "abc123"
  }
};

const {
  status,
  data: {
    user: { name, email },
    token
  }
} = response;

console.log(status);  // 200
console.log(name);    // "John"
console.log(token);   // "abc123"
```

### React-style Props

javascript

```javascript
function UserCard({ name, avatar, bio = "No bio available" }) {
  return `
    Name: ${name}
    Avatar: ${avatar}
    Bio: ${bio}
  `;
}

const user = { name: "John", avatar: "john.jpg" };
console.log(UserCard(user));
```

---

## Coding Challenges

### Activity 1: First and Last Elements

javascript

```javascript
function getFirstAndLast(arr) {
  const [first, ...rest] = arr;
  const last = rest.length > 0 ? rest[rest.length - 1] : first;
  return { first, last };
}

console.log(getFirstAndLast([1, 2, 3, 4, 5]));
// { first: 1, last: 5 }
```

### Activity 2: Get Post Count

javascript

```javascript
function getPostCount(user) {
  const { posts = [] } = user;
  return posts.length;
}

const user = {
  name: "John",
  posts: [{ id: 1 }, { id: 2 }, { id: 3 }]
};

console.log(getPostCount(user));  // 3
```

### Activity 3: Extract Degree Name

javascript

```javascript
function getDegreeName(user) {
  const {
    education: {
      degree: { name }
    }
  } = user;
  return name;
}

const user = {
  name: "John",
  education: {
    degree: {
      name: "BCA"
    }
  }
};

console.log(getDegreeName(user));  // "BCA"
```

---

## Key Points

1. **Array destructuring** - Order matters, uses []
2. **Object destructuring** - Name matters, uses {}
3. **Renaming** - Use : to rename variables
4. **Defaults** - Use = for default values
5. **Rest** - Use ... to collect remaining elements
6. **Nesting** - Can destructure deeply nested structures
7. **Only deepest keys become variables** in nested destructuring

---

## Related Notes

- [[Rest and Spread Operators]]
- [[JavaScript Objects]]
- [[JavaScript Arrays]]

---

#module1 #javascript #destructuring #es6 #day5