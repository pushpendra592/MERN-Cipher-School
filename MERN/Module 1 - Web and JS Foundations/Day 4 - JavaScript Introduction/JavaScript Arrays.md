## What are Arrays

Arrays are ordered collections used to store lists of items. Items can be of any type and are accessed by index.

---

## Creating Arrays

```javascript
// Array literal
var colors = ["red", "green", "blue"];

// Empty array
var arr = [];

// Array with mixed types
var mixed = [1, "hello", true, null];
```

## Accessing Array Elements

Arrays are zero-indexed (first element is at index 0).

javascript

```javascript
var colors = ["red", "green", "blue"];

console.log(colors[0]);  // "red"
console.log(colors[1]);  // "green"
console.log(colors[2]);  // "blue"
console.log(colors[3]);  // undefined
```

---

## Array Length

javascript

```javascript
var colors = ["red", "green", "blue"];
console.log(colors.length);  // 3
```

---

## Modifying Arrays

### Update Element

javascript

```javascript
var colors = ["red", "green", "blue"];
colors[2] = "orange";
console.log(colors);  // ["red", "green", "orange"]
```

### Add Element at End

javascript

```javascript
colors[3] = "purple";
// or
colors[colors.length] = "purple";
```

---

## Array Methods

### Adding Elements

#### push() - Add to End

javascript

```javascript
var arr = [1, 2, 3];
arr.push(4);
console.log(arr);  // [1, 2, 3, 4]
```

#### unshift() - Add to Beginning

javascript

```javascript
var arr = [1, 2, 3];
arr.unshift(0);
console.log(arr);  // [0, 1, 2, 3]
```

---

### Removing Elements

#### pop() - Remove from End

javascript

```javascript
var arr = [1, 2, 3];
var removed = arr.pop();
console.log(arr);      // [1, 2]
console.log(removed);  // 3
```

#### shift() - Remove from Beginning

javascript

```javascript
var arr = [1, 2, 3];
var removed = arr.shift();
console.log(arr);      // [2, 3]
console.log(removed);  // 1
```

---

### Finding Elements

#### indexOf() - Find Index

javascript

```javascript
var colors = ["red", "green", "blue"];
console.log(colors.indexOf("green"));  // 1
console.log(colors.indexOf("yellow")); // -1 (not found)
```

#### includes() - Check Existence

javascript

```javascript
var colors = ["red", "green", "blue"];
console.log(colors.includes("green"));  // true
console.log(colors.includes("yellow")); // false
```

---

### Extracting Elements

#### slice() - Extract Without Modifying

javascript

```javascript
var arr = [1, 2, 3, 4, 5];

// slice(start, end) - end not included
console.log(arr.slice(1, 4));  // [2, 3, 4]
console.log(arr.slice(2));     // [3, 4, 5]
console.log(arr);              // [1, 2, 3, 4, 5] (unchanged)
```

#### splice() - Add/Remove Elements

javascript

```javascript
var arr = [1, 2, 3, 4, 5];

// splice(start, deleteCount, ...itemsToAdd)
arr.splice(2, 1);           // Remove 1 element at index 2
console.log(arr);           // [1, 2, 4, 5]

arr.splice(2, 0, 3);        // Insert 3 at index 2
console.log(arr);           // [1, 2, 3, 4, 5]

arr.splice(1, 2, "a", "b"); // Replace 2 elements starting at index 1
console.log(arr);           // [1, "a", "b", 4, 5]
```

---

## Array Methods Summary

|Method|Action|Modifies Original|
|---|---|---|
|push()|Add to end|Yes|
|pop()|Remove from end|Yes|
|unshift()|Add to beginning|Yes|
|shift()|Remove from beginning|Yes|
|splice()|Add/remove anywhere|Yes|
|slice()|Extract portion|No|
|indexOf()|Find index|No|
|includes()|Check existence|No|

---

## Iterating Over Arrays

### for Loop

javascript

```javascript
var colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

### for...of Loop

javascript

```javascript
for (let color of colors) {
  console.log(color);
}
```

### forEach Method

javascript

```javascript
colors.forEach(function(color, index) {
  console.log(`${index}: ${color}`);
});
```

---

## Arrays of Objects

javascript

```javascript
var students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 21 }
];

// Access
console.log(students[0].name);  // "Alice"

// Iterate
for (let student of students) {
  console.log(student.name);
}
```

---

## Coding Challenges

### Challenge 1: Sum Array

javascript

```javascript
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));  // 15
```

### Challenge 2: Find Maximum

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

### Challenge 3: Get Array of Colors

javascript

```javascript
function getArrayOfColors(color1, color2, color3) {
  return [color1, color2, color3];
}

console.log(getArrayOfColors("red", "green", "blue"));
// ["red", "green", "blue"]
```

---

## Related Notes

- [[JavaScript Data Types]]
- [[JavaScript Objects]]
- [[JavaScript Functions]]

---

#module1 #javascript #arrays #day4