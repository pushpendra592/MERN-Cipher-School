## What is a Closure

A closure is a function that remembers and can access variables from its outer function even after the outer function has finished execution.

Inner function + Outer variables = Closure

text

````text

---

## Why Do We Need Closures

Closures help to:
- Remember data
- Create private variables
- Control access to data
- Use in callbacks, timers, modules

---

## Basic Example

```javascript
function outer() {
  let x = 10;
  
  function inner() {
    console.log(x);
  }
  
  return inner;
}

let fn = outer();
fn();  // 10
````

### How It Works

1. outer() runs
2. x is created with value 10
3. inner() is defined and uses x
4. inner is returned
5. outer() finishes executing
6. But x is NOT deleted!
7. When fn() is called, it still has access to x

---

## Key Point

text

```text
Data is NOT destroyed
Used for private data
Works because of scope chain
```

---

## Counter Example

javascript

```javascript
function counter() {
  let count = 0;
  
  return function() {
    count++;
    console.log(count);
  };
}

let c1 = counter();
c1();  // 1
c1();  // 2
c1();  // 3

let c2 = counter();
c2();  // 1 (separate closure)
```

Each call to counter() creates a new closure with its own count.

---

## Closure with Parameters

javascript

```javascript
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

---

## Private Variables Pattern

Closures can create private variables that cannot be accessed from outside.

javascript

```javascript
function counterApp() {
  let count = 0;  // Private variable
  
  return {
    inc: function() {
      count++;
      return count;
    },
    dec: function() {
      count--;
      return count;
    },
    value: function() {
      return count;
    }
  };
}

let c = counterApp();
console.log(c.inc());    // 1
console.log(c.inc());    // 2
console.log(c.dec());    // 1
console.log(c.value());  // 1

// Cannot access count directly
console.log(c.count);    // undefined
```

---

## Closure in Loops (Common Problem)

### Problem with var

javascript

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}

// Output: 4, 4, 4 (not 1, 2, 3!)
```

**Why?** var has function scope. By the time setTimeout runs, the loop has finished and i is 4.

### Solution 1: Use let

javascript

```javascript
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}

// Output: 1, 2, 3
```

let creates a new binding for each iteration.

### Solution 2: IIFE (Immediately Invoked Function Expression)

javascript

```javascript
for (var i = 1; i <= 3; i++) {
  (function(x) {
    setTimeout(function() {
      console.log(x);
    }, x * 1000);
  })(i);
}

// Output: 1, 2, 3
```

Each iteration creates a new closure with its own x.

---

## Closure Use Cases

### 1. Data Privacy / Encapsulation

javascript

```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
console.log(account.deposit(50));   // 150
console.log(account.withdraw(30));  // 120
console.log(account.getBalance());  // 120
// account.balance is undefined - private!
```

### 2. Function Factories

javascript

```javascript
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

console.log(sayHello("John"));  // "Hello, John!"
console.log(sayHi("Jane"));     // "Hi, Jane!"
```

### 3. Memoization

javascript

```javascript
function memoize(fn) {
  const cache = {};
  
  return function(arg) {
    if (cache[arg]) {
      console.log("From cache");
      return cache[arg];
    }
    
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

function slowSquare(n) {
  // Simulate slow operation
  return n * n;
}

const fastSquare = memoize(slowSquare);
console.log(fastSquare(5));  // 25 (calculated)
console.log(fastSquare(5));  // "From cache", 25
```

### 4. Event Handlers

javascript

```javascript
function setupButton(buttonId, message) {
  const button = document.getElementById(buttonId);
  
  button.addEventListener("click", function() {
    alert(message);  // Closure remembers message
  });
}

setupButton("btn1", "Hello!");
setupButton("btn2", "Goodbye!");
```

---

## Practice Questions

### Q1: Step Counter

javascript

```javascript
function createCounter() {
  let count = 0;
  
  return function() {
    count += 2;
    console.log(count);
  };
}

let c = createCounter();
c();  // ?
c();  // ?
c();  // ?
```

**Output:** 2, 4, 6

---

### Q2: Multiple Closures

javascript

```javascript
function outer() {
  let x = 10;
  
  function inner1() {
    console.log(x);
  }
  
  function inner2() {
    x = 20;
  }
  
  return { inner1, inner2 };
}

const fns = outer();
fns.inner1();  // ?
fns.inner2();
fns.inner1();  // ?
```

**Output:** 10, 20

Both inner functions share the same closure.

---

## Summary

|Concept|Description|
|---|---|
|Closure|Function + its outer scope variables|
|Creation|When inner function references outer variables|
|Persistence|Outer variables survive after outer function ends|
|Privacy|Create truly private variables|
|Use Cases|Callbacks, private data, factories, memoization|

---

## Key Points

1. Closure = Inner function + Outer variables
2. Data persists even after outer function ends
3. Each function call creates a new closure
4. Used for data privacy and encapsulation
5. Works because of JavaScript's scope chain
6. Common in callbacks, event handlers, timers

---

## Related Notes

- [[JavaScript Scope]]
- [[Scope Chain]]
- [[JavaScript Functions]]

---

#module2 #javascript #closures #day9