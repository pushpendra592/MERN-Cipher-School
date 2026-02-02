## Overview

JavaScript allows you to dynamically change the styles of elements using the style property or by manipulating CSS classes.

---

## Inline Styles with style Property

### Setting Individual Styles

```javascript
let element = document.getElementById("myElement");

// Set individual style properties
element.style.color = "red";
element.style.backgroundColor = "yellow";
element.style.fontSize = "20px";
element.style.padding = "10px";
element.style.border = "2px solid black";
```

### CSS Property Naming Convention

CSS properties with hyphens are converted to camelCase in JavaScript.

|CSS Property|JavaScript|
|---|---|
|background-color|backgroundColor|
|font-size|fontSize|
|border-radius|borderRadius|
|margin-top|marginTop|
|text-align|textAlign|
|z-index|zIndex|

---

### Getting Styles

javascript

```javascript
let element = document.getElementById("myElement");

// Get inline style
console.log(element.style.color);

// Get computed style (includes CSS stylesheet)
let computedStyle = window.getComputedStyle(element);
console.log(computedStyle.color);
console.log(computedStyle.fontSize);
```

---

## Working with CSS Classes

### className Property

Gets or sets the entire class attribute as a string.

javascript

```javascript
let element = document.getElementById("myElement");

// Get class
console.log(element.className);  // "card active"

// Set class (replaces all classes)
element.className = "new-class";

// Add to existing classes
element.className += " another-class";
```

---

### classList Property (Recommended)

Provides methods to add, remove, and toggle classes.

javascript

```javascript
let element = document.getElementById("myElement");

// Add class
element.classList.add("active");

// Remove class
element.classList.remove("hidden");

// Toggle class (add if absent, remove if present)
element.classList.toggle("visible");

// Check if class exists
if (element.classList.contains("active")) {
  console.log("Element is active");
}

// Replace class
element.classList.replace("old-class", "new-class");

// Add multiple classes
element.classList.add("class1", "class2", "class3");

// Remove multiple classes
element.classList.remove("class1", "class2");
```

---

### classList Methods Summary

|Method|Description|
|---|---|
|add("class")|Adds one or more classes|
|remove("class")|Removes one or more classes|
|toggle("class")|Toggles a class on/off|
|contains("class")|Returns true if class exists|
|replace("old", "new")|Replaces a class|

---

## Practical Examples

### Example 1: Style a Box

javascript

```javascript
let box = document.createElement("div");
box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "lightblue";
box.style.border = "2px solid navy";
box.style.borderRadius = "10px";
box.style.display = "flex";
box.style.justifyContent = "center";
box.style.alignItems = "center";
box.innerText = "Styled Box";

document.body.appendChild(box);
```

### Example 2: Style Multiple Elements

javascript

```javascript
let paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function(p) {
  p.style.color = "blue";
  p.style.fontSize = "16px";
  p.style.lineHeight = "1.6";
});
```

### Example 3: Toggle Dark Mode

javascript

```javascript
let body = document.body;
let button = document.getElementById("toggleBtn");

button.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
});
```

### Example 4: Highlight Active Item

javascript

```javascript
let items = document.querySelectorAll(".nav-item");

items.forEach(function(item) {
  item.addEventListener("click", function() {
    // Remove active from all
    items.forEach(i => i.classList.remove("active"));
    // Add active to clicked
    this.classList.add("active");
  });
});
```

---

## Setting Multiple Styles at Once

### Using Object.assign

javascript

```javascript
let element = document.getElementById("myElement");

Object.assign(element.style, {
  color: "white",
  backgroundColor: "black",
  padding: "20px",
  borderRadius: "8px"
});
```

### Using cssText

javascript

```javascript
let element = document.getElementById("myElement");

element.style.cssText = "color: white; background-color: black; padding: 20px;";
```

**Note:** cssText replaces all inline styles.

---

## Best Practices

1. **Use classes over inline styles** when possible
2. **classList is preferred** over className
3. **Separate concerns** - keep styling logic in CSS, toggle classes with JS
4. **Cache elements** to avoid repeated DOM queries
5. **Use CSS custom properties** for dynamic values

css

```css
/* CSS */
.card {
  --card-color: blue;
  background-color: var(--card-color);
}
```

javascript

```javascript
// JavaScript
element.style.setProperty("--card-color", "red");
```

---

## Related Notes

- [[DOM Content Manipulation]]
- [[Creating and Removing DOM Elements]]
- [[CSS Fundamentals]]

---

#module2 #javascript #dom #styling #day7