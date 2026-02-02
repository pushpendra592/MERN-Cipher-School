## Overview

JavaScript provides several methods to find and access elements in the DOM. Choosing the right method depends on what you need to select.

---

## Selection Methods

### 1. getElementById()

Returns a **single element** with the specified ID.

```javascript
// Returns a reference to the element by its ID
let element = document.getElementById("someid");
```

Example:

```html
<div id="header">Welcome</div>
```

```javascript
let header = document.getElementById("header");
console.log(header);           // <div id="header">Welcome</div>
console.log(header.innerText); // "Welcome"
```

**Characteristics:**

- Returns single element or null if not found
- IDs should be unique on a page
- Fastest selection method

---

### 2. getElementsByClassName()

Returns an **HTMLCollection** of all elements with the specified class name.

javascript

```javascript
// Returns an array-like object of all elements with given class names
let elements = document.getElementsByClassName("someclass");
```

html

```html
<p class="pTag">First</p>
<p class="pTag">Second</p>
<p class="pTag">Third</p>
```

javascript

```javascript
let paragraphs = document.getElementsByClassName("pTag");
console.log(paragraphs);        // HTMLCollection(3) [p, p, p]
console.log(paragraphs.length); // 3
console.log(paragraphs[0]);     // First <p> element
```

---

### 3. getElementsByTagName()

Returns an **HTMLCollection** of all elements with the specified tag name.

javascript

```javascript
// Returns an HTMLCollection of elements with the given tag name
let elements = document.getElementsByTagName("LI");
```

html

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

javascript

```javascript
let listItems = document.getElementsByTagName("li");
console.log(listItems);        // HTMLCollection(3) [li, li, li]
console.log(listItems.length); // 3
```

---

### 4. querySelector()

Returns the **first element** that matches the CSS selector.

javascript

```javascript
// Returns the first element matching the specified selector
let element = document.querySelector(".someclass");
```

html

```html
<p class="pTag">First</p>
<p class="pTag">Second</p>
<div id="container">Content</div>
```

javascript

```javascript
// Select by class
let firstP = document.querySelector(".pTag");
console.log(firstP.innerText);  // "First"

// Select by ID
let container = document.querySelector("#container");

// Select by tag
let paragraph = document.querySelector("p");

// Complex selectors
let nested = document.querySelector("div.container > p.intro");
```

**Note:** Uses CSS selector syntax (same as styling in CSS).

---

### 5. querySelectorAll()

Returns a **NodeList** of all elements matching the CSS selector.

javascript

```javascript
// Returns a NodeList of elements matching the selector
let elements = document.querySelectorAll("div.note, div.alert");
```

html

```html
<p class="pTag">First</p>
<p class="pTag">Second</p>
<p class="pTag">Third</p>
```

javascript

```javascript
let allParagraphs = document.querySelectorAll(".pTag");
console.log(allParagraphs);        // NodeList(3) [p, p, p]
console.log(allParagraphs.length); // 3

// Complex selectors
let multiSelect = document.querySelectorAll("div.note, div.alert");
```

---

## Method Comparison

|Method|Returns|Selector Type|Live?|
|---|---|---|---|
|getElementById()|Single element|ID only|N/A|
|getElementsByClassName()|HTMLCollection|Class only|Yes|
|getElementsByTagName()|HTMLCollection|Tag only|Yes|
|querySelector()|Single element|CSS selector|N/A|
|querySelectorAll()|NodeList|CSS selector|No|

---

## HTMLCollection vs NodeList

### HTMLCollection

- Returned by getElementsByClassName() and getElementsByTagName()
- **Live collection** - updates automatically when DOM changes
- Can only contain element nodes
- Cannot use forEach() directly

javascript

```javascript
let collection = document.getElementsByClassName("item");

// Access by index
console.log(collection[0]);

// Access by name/id
console.log(collection.namedItem("myItem"));

// Loop with for...of or convert to array
for (let item of collection) {
  console.log(item);
}

// Convert to array for array methods
let arr = Array.from(collection);
arr.forEach(item => console.log(item));
```

---

### NodeList

- Returned by querySelectorAll() and some other methods
- **Static collection** - does not update when DOM changes
- Can contain any node type
- Has forEach() method (but no other array methods)

javascript

```javascript
let nodeList = document.querySelectorAll(".item");

// forEach works directly
nodeList.forEach(item => {
  console.log(item);
});

// For other array methods, convert to array
let arr = Array.from(nodeList);
let filtered = arr.filter(item => item.classList.contains("active"));
```

---

## Live vs Static Collections

### Live Collection (HTMLCollection)

javascript

```javascript
let items = document.getElementsByClassName("item");
console.log(items.length);  // e.g., 3

// Add new element with class "item"
let newItem = document.createElement("div");
newItem.className = "item";
document.body.appendChild(newItem);

console.log(items.length);  // 4 - automatically updated!
```

### Static Collection (NodeList)

javascript

```javascript
let items = document.querySelectorAll(".item");
console.log(items.length);  // e.g., 3

// Add new element with class "item"
let newItem = document.createElement("div");
newItem.className = "item";
document.body.appendChild(newItem);

console.log(items.length);  // Still 3 - not updated!
```

---

## Practical Examples

### Example 1: Get Element by ID

html

```html
<div id="parent">
  <p class="pTag">First</p>
  <p class="pTag">Second</p>
</div>
```

javascript

```javascript
let div = document.getElementById("parent");
console.log(div.innerText);  // "First\nSecond"
```

### Example 2: Get Multiple Elements

javascript

```javascript
// By class
let p = document.getElementsByClassName("pTag");
console.log(p);  // HTMLCollection [p, p]

// By tag
let tag = document.getElementsByTagName("p");
console.log(tag);  // HTMLCollection [p, p]

// Using querySelector
let ans = document.querySelector(".pTag");
console.log(ans);  // First <p> element only

// Using querySelectorAll
let res = document.querySelectorAll(".pTag");
console.log(res);  // NodeList [p, p]
```

### Example 3: Complex Selectors

javascript

```javascript
// Select by multiple classes
let element = document.querySelector(".card.active");

// Select child elements
let child = document.querySelector("#container > .item");

// Select by attribute
let input = document.querySelector('input[type="text"]');

// Select multiple different elements
let mixed = document.querySelectorAll("h1, h2, h3");
```

---

## CSS Selector Syntax for querySelector

|Selector|Example|Description|
|---|---|---|
|#id|"#header"|Select by ID|
|.class|".container"|Select by class|
|tag|"p"|Select by tag name|
|tag.class|"div.active"|Tag with class|
|parent > child|"ul > li"|Direct child|
|ancestor descendant|"div p"|Any descendant|
|[attribute]|"[disabled]"|Has attribute|
|[attr="value"]|"[type='text']"|Attribute equals|
|:first-child|"li:first-child"|First child|
|:nth-child(n)|"li:nth-child(2)"|Nth child|

---

## When to Use Which Method

|Scenario|Recommended Method|
|---|---|
|Single element by ID|getElementById()|
|Single element by complex selector|querySelector()|
|Multiple elements, need live updates|getElementsByClassName() / getElementsByTagName()|
|Multiple elements, static snapshot|querySelectorAll()|
|Complex CSS selectors|querySelector() / querySelectorAll()|

---

## Common Mistakes

### Mistake 1: Forgetting Return Type

javascript

```javascript
// getElementById returns element, not collection
let element = document.getElementById("myId");
// element.forEach() - ERROR! Not a collection

// getElementsByClassName returns collection
let elements = document.getElementsByClassName("myClass");
// elements.innerText - ERROR! Collection, not single element
// Use elements[0].innerText instead
```

### Mistake 2: Forgetting CSS Selector Syntax

javascript

```javascript
// querySelector uses CSS syntax
document.querySelector("myClass");   // Wrong - looks for <myClass> tag
document.querySelector(".myClass");  // Correct - looks for class
document.querySelector("#myId");     // Correct - looks for ID
```

### Mistake 3: Assuming Live Updates

javascript

```javascript
let items = document.querySelectorAll(".item");
// Adding new .item elements won't update this NodeList
// Re-query if you need updated list
items = document.querySelectorAll(".item");
```

---

## Summary

|Method|Returns|Use Case|
|---|---|---|
|getElementById()|Element|Single unique element|
|getElementsByClassName()|HTMLCollection (live)|Multiple elements by class|
|getElementsByTagName()|HTMLCollection (live)|Multiple elements by tag|
|querySelector()|Element|First match with CSS selector|
|querySelectorAll()|NodeList (static)|All matches with CSS selector|

---

## Related Notes

- [[Introduction to DOM]]
- [[DOM Node Types]]
- [[DOM Manipulation]] (Coming soon)

---

#module1 #javascript #dom #selectors #day6

text
