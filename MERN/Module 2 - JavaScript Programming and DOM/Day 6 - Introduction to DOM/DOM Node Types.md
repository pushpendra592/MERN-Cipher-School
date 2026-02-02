## Overview

In the DOM, everything is a **node**. Different types of nodes represent different parts of the document.

---

## Types of Nodes

### 1. Document Node

Represents the entire document. It is the root of the DOM tree.

```javascript
console.log(document);
console.log(document.nodeType);  // 9
console.log(document.nodeName);  // "#document"
```

---

### 2. Element Node

Represents HTML tags/elements like ```<div>, <p>, <h1>, etc```.

html

```html
<div id="container">
  <p>Hello</p>
</div>
```

javascript

```javascript
let div = document.getElementById("container");
console.log(div.nodeType);  // 1
console.log(div.nodeName);  // "DIV"
```

---

### 3. Text Node

Represents the text content inside an element.

html

```html
<p>Hello World</p>
```

javascript

```javascript
let p = document.querySelector("p");
let textNode = p.firstChild;
console.log(textNode.nodeType);  // 3
console.log(textNode.nodeName);  // "#text"
console.log(textNode.nodeValue); // "Hello World"
```

---

### 4. Attribute Node

Represents attributes of HTML elements (id, class, href, etc.).

html

```html
<a href="https://example.com" id="link">Click me</a>
```

javascript

```javascript
let link = document.getElementById("link");
let hrefAttr = link.getAttributeNode("href");
console.log(hrefAttr.nodeType);  // 2
console.log(hrefAttr.nodeName);  // "href"
console.log(hrefAttr.nodeValue); // "https://example.com"
```

**Note:** Attribute nodes are rarely accessed directly. Use getAttribute() instead.

---

### 5. Comment Node

Represents HTML comments.

html

```html
<!-- This is a comment -->
<p>Hello</p>
```

javascript

```javascript
// Comment nodes have nodeType 8
let comment = document.body.childNodes[0]; // If first child is comment
console.log(comment.nodeType);  // 8
console.log(comment.nodeName);  // "#comment"
```

---

## Node Type Summary

| Node Type | nodeType Value | nodeName                   | Description          |
| --------- | -------------- | -------------------------- | -------------------- |
| Document  | 9              | ```#document```            | The entire document  |
| Element   | 1              | ```Tag name (e.g., DIV)``` | HTML elements        |
| Text      | 3              | ```#text```                | Text inside elements |
| Attribute | 2              | ```Attribute name```       | Element attributes   |
| Comment   | 8              | ```#comment```             | HTML comments        |

---

## Node Properties

Every node has these properties:

javascript

```javascript
let element = document.getElementById("myId");

// Node type information
console.log(element.nodeType);   // Number (1 for elements)
console.log(element.nodeName);   // Tag name
console.log(element.nodeValue);  // null for elements, text for text nodes

// Navigation properties
console.log(element.parentNode);      // Parent node
console.log(element.childNodes);      // All child nodes (NodeList)
console.log(element.firstChild);      // First child node
console.log(element.lastChild);       // Last child node
console.log(element.nextSibling);     // Next sibling node
console.log(element.previousSibling); // Previous sibling node
```

---

## Element-Only Navigation

These properties only return element nodes (skip text and comment nodes):

javascript

```javascript
let element = document.getElementById("myId");

console.log(element.parentElement);         // Parent element
console.log(element.children);              // Child elements only (HTMLCollection)
console.log(element.firstElementChild);     // First child element
console.log(element.lastElementChild);      // Last child element
console.log(element.nextElementSibling);    // Next sibling element
console.log(element.previousElementSibling); // Previous sibling element
```

---

## Node vs Element Navigation

|Node Navigation|Element Navigation|Returns|
|---|---|---|
|parentNode|parentElement|Parent|
|childNodes|children|Children|
|firstChild|firstElementChild|First child|
|lastChild|lastElementChild|Last child|
|nextSibling|nextElementSibling|Next sibling|
|previousSibling|previousElementSibling|Previous sibling|

**Key Difference:**

- Node navigation includes text nodes, comment nodes, etc.
- Element navigation only includes element nodes

---

## Example: Traversing the DOM

html

```html
<div id="parent">
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>
</div>
```

javascript

```javascript
let parent = document.getElementById("parent");

// Get all children (elements only)
console.log(parent.children);
// HTMLCollection [p, p, p]

// Get first and last element children
console.log(parent.firstElementChild.textContent);  // "First paragraph"
console.log(parent.lastElementChild.textContent);   // "Third paragraph"

// Navigate between siblings
let first = parent.firstElementChild;
console.log(first.nextElementSibling.textContent);  // "Second paragraph"
```

---

## Checking Node Types

javascript

```javascript
function checkNodeType(node) {
  switch(node.nodeType) {
    case 1:
      return "Element";
    case 3:
      return "Text";
    case 8:
      return "Comment";
    case 9:
      return "Document";
    default:
      return "Other";
  }
}

let div = document.getElementById("myDiv");
console.log(checkNodeType(div));  // "Element"
console.log(checkNodeType(document));  // "Document"
```

---

## Related Notes

- [[Introduction to DOM]]
- [[Accessing DOM Elements]]

---

#module1 #javascript #dom #nodes #day6