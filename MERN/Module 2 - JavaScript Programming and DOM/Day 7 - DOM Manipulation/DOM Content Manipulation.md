## Overview

Once you access DOM elements, you can modify their content, attributes, and styles dynamically using JavaScript.

---

## Accessing Element Content

### innerText

Gets or sets the visible text content of an element.

```javascript
let element = document.getElementById("myId");

// Get text
console.log(element.innerText);

// Set text
element.innerText = "I am a new p Tag";
```

**Characteristics:**

- Returns only visible text
- Respects CSS styling (hidden elements not included)
- Triggers reflow (slower)

---

### innerHTML

Gets or sets the HTML content inside an element.

javascript

```javascript
let parent = document.getElementById("Parent");

// Get HTML
console.log(parent.innerHTML);

// Set HTML (can include tags)
parent.innerHTML = "<p>I am a Child p tag of Parent div</p>";
```

**Characteristics:**

- Can include HTML tags
- Parses and renders HTML
- Security risk with user input (XSS attacks)

---

### textContent

Gets or sets all text content, including hidden elements.

javascript

```javascript
let element = document.getElementById("myId");

// Get all text (including hidden)
console.log(element.textContent);

// Set text
element.textContent = "New text content";
```

---

## Comparison: innerText vs innerHTML vs textContent

|Property|Returns|Includes Hidden|Parses HTML|Performance|
|---|---|---|---|---|
|innerText|Visible text only|No|No|Slower|
|innerHTML|HTML string|Yes|Yes|Medium|
|textContent|All text|Yes|No|Fastest|

### Example

html

```html
<div id="example">
  <p>Visible text</p>
  <p style="display:none">Hidden text</p>
</div>
```

javascript

```javascript
let div = document.getElementById("example");

console.log(div.innerText);    // "Visible text"
console.log(div.textContent);  // "Visible text Hidden text"
console.log(div.innerHTML);    // "<p>Visible text</p><p style="display:none">Hidden text</p>"
```

---

## Working with Attributes

### getAttribute()

Gets the value of an attribute.

javascript

```javascript
let link = document.querySelector("a");
let href = link.getAttribute("href");
console.log(href);
```

### setAttribute()

Sets or updates an attribute value.

javascript

```javascript
let img = document.querySelector("img");
img.setAttribute("src", "new-image.jpg");
img.setAttribute("alt", "New description");
```

### Direct Property Access

Many attributes can be accessed directly as properties.

javascript

```javascript
let img = document.querySelector("img");

// Get
console.log(img.src);
console.log(img.alt);
console.log(img.id);

// Set
img.src = "new-image.jpg";
img.alt = "New description";
img.id = "newId";
```

### removeAttribute()

Removes an attribute from an element.

javascript

```javascript
let button = document.querySelector("button");
button.removeAttribute("disabled");
```

---

## Working with Data Attributes

Custom data attributes start with data-.

html

```html
<div class="item" data-id="123" data-category="electronics">Product</div>
```

javascript

```javascript
let item = document.querySelector(".item");

// Using getAttribute
console.log(item.getAttribute("data-id"));  // "123"

// Using dataset property
console.log(item.dataset.id);        // "123"
console.log(item.dataset.category);  // "electronics"

// Set data attribute
item.dataset.price = "99.99";
```

### Iterating with Data Attributes

javascript

```javascript
let allItems = document.querySelectorAll(".item");

allItems.forEach(function(element) {
  console.log(element.getAttribute("data-id"));
});
```

---

## HTMLCollection vs NodeList (Detailed)

### HTMLCollection

Returned by getElementsByClassName() and getElementsByTagName().

javascript

```javascript
let items = document.getElementsByClassName("item");

// Cannot use forEach directly
// items.forEach() - ERROR!

// Use for loop
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// Or convert to array
let itemsArray = Array.from(items);
itemsArray.forEach(item => console.log(item));
```

**Characteristics:**

- Live collection (updates when DOM changes)
- Cannot use forEach directly
- Only contains element nodes

---

### NodeList

Returned by querySelectorAll().

javascript

```javascript
let items = document.querySelectorAll(".item");

// Can use forEach directly
items.forEach(function(element) {
  console.log(element);
});

// Convert to array for other methods
let itemsArray = Array.from(items);
// OR
let itemsArray2 = [...items];

// Now can use filter, map, etc.
let filtered = itemsArray.filter(item => item.classList.contains("active"));
```

**Characteristics:**

- Static collection (does not update when DOM changes)
- Has forEach method
- Can contain any node type

---

### Key Differences Summary

|Feature|HTMLCollection|NodeList|
|---|---|---|
|Returned by|getElementsByClassName, getElementsByTagName|querySelectorAll|
|Live updates|Yes|No|
|forEach|No|Yes|
|Other HOFs|No|No (convert to array)|
|Node types|Elements only|Any nodes|

---

## Practical Examples

### Example 1: Change Text and Color

javascript

```javascript
let val = document.getElementById("myId");
val.innerText = "I am a new p Tag";
val.style.color = "green";
```

### Example 2: Add HTML Content

javascript

```javascript
let parent = document.getElementById("Parent");
parent.innerHTML = "<p>I am a Child p tag of Parent div</p>";
```

### Example 3: Working with Multiple Elements

javascript

```javascript
let paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function(p) {
  p.style.color = "blue";
});
```

### Example 4: Convert Collection to Array

javascript

```javascript
let allItems = document.querySelectorAll(".item");
console.log(allItems);
// NodeList(8) [div.item, div.item, ...]

// Method 1: Array.from()
let allItemsArray = Array.from(allItems);
console.log(allItemsArray);

// Method 2: Spread operator
let allItemsArray2 = [...allItems];
console.log(allItemsArray2);
```

---

## Best Practices

1. **Use textContent for plain text** - Faster and safer than innerHTML
2. **Avoid innerHTML with user input** - Security risk (XSS)
3. **Use combinators in selectors** - Instead of IDs for multiple elements
4. **Convert to array** when you need array methods beyond forEach
5. **Cache DOM selections** - Store in variables to avoid repeated queries

javascript

```javascript
// Bad - queries DOM multiple times
document.getElementById("myId").innerText = "Hello";
document.getElementById("myId").style.color = "red";

// Good - cache the reference
let element = document.getElementById("myId");
element.innerText = "Hello";
element.style.color = "red";
```

---

## Related Notes

- [[Accessing DOM Elements]]
- [[Creating and Removing DOM Elements]]
- [[DOM Styling]]

---

#module2 #javascript #dom #manipulation #day7