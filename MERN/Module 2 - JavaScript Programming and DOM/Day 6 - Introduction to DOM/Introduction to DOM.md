## What is the DOM

The **Document Object Model (DOM)** is a programming interface for web documents. It represents the structure of HTML and XML documents as a tree where each node represents a part of the document.

---

## Why is DOM Important

Understanding DOM is crucial for web development because it allows:

- **Dynamic manipulation** of web pages
- **Interactive user experiences**
- **Dynamic content updates** without reloading the entire page
- Access to **modify content, structure, and style** programmatically

---

## DOM as a Tree Structure

The DOM is a cross-platform and language-independent interface that treats an HTML document as a **tree structure** consisting of nodes.

### Analogy: Blueprint of a House

Think of the DOM as a **blueprint of a house**:
- Each element (node) in the DOM tree represents a **room** (HTML element)
- Developers can **rearrange or modify** the rooms (elements) as needed
- Changes happen **without rebuilding** the entire house (web page)

---

## Visual Representation

### HTML Document

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p class="intro">Welcome to my page</p>
  </body>
</html>
```

### DOM Tree Structure

text

```text
Document
└── html
    ├── head
    │   └── title
    │       └── "My Page" (text)
    └── body
        ├── h1
        │   └── "Hello World" (text)
        └── p (class="intro")
            └── "Welcome to my page" (text)
```

---

## Key Characteristics

|Feature|Description|
|---|---|
|Tree Structure|Hierarchical representation of document|
|Cross-platform|Works across different browsers and systems|
|Language-independent|Can be manipulated by various languages (primarily JavaScript)|
|Dynamic|Can be modified after page load|
|Live|Changes to DOM reflect immediately on the page|

---

## The Document Object

The document object is the entry point to the DOM. It represents the entire HTML document.

javascript

```javascript
// The document object
console.log(document);

// Access document properties
console.log(document.title);        // Page title
console.log(document.URL);          // Page URL
console.log(document.body);         // Body element
console.log(document.head);         // Head element
console.log(document.documentElement); // HTML element
```

---

## What Can You Do with DOM

### 1. Access Elements

javascript

```javascript
// Find elements in the document
let heading = document.getElementById("main-heading");
let paragraphs = document.getElementsByTagName("p");
```

### 2. Modify Content

javascript

```javascript
// Change text content
heading.textContent = "New Heading";
```

### 3. Change Styles

javascript

```javascript
// Modify CSS
heading.style.color = "blue";
```

### 4. Add/Remove Elements

javascript

```javascript
// Create and append new elements
let newElement = document.createElement("div");
document.body.appendChild(newElement);
```

### 5. Handle Events

javascript

```javascript
// React to user interactions
heading.addEventListener("click", function() {
  alert("Heading clicked!");
});
```

---

## DOM vs HTML

|Aspect|HTML|DOM|
|---|---|---|
|Nature|Static markup|Dynamic interface|
|Format|Text file|Object model in memory|
|Modification|Requires file edit|Can change at runtime|
|Access|Not directly accessible by JS|Fully accessible by JS|

---

## Browser Rendering Process

1. **Parse HTML** - Browser reads HTML file
2. **Create DOM** - Builds DOM tree from HTML
3. **Parse CSS** - Reads stylesheets
4. **Create CSSOM** - Builds CSS Object Model
5. **Render Tree** - Combines DOM and CSSOM
6. **Layout** - Calculates positions and sizes
7. **Paint** - Draws pixels on screen

---

## Related Notes

- [[DOM Node Types]]
- [[Accessing DOM Elements]]
- [[HTML Fundamentals]]

---

#module1 #javascript #dom #day6