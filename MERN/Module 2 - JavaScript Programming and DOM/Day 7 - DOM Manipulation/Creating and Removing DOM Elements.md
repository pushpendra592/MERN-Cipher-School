## Overview

JavaScript allows you to dynamically create new elements, add them to the page, and remove existing elements.

---

## Creating Elements

### document.createElement()

Creates a new HTML element.

```javascript
// Create a div element
let div = document.createElement("div");
div.innerText = "I am a div tag";

// Create a paragraph element
let pTag = document.createElement("p");
pTag.innerText = "I am a p tag";
```

**Note:** Created elements are not visible until added to the DOM.

---

## Adding Elements to the DOM

### appendChild()

Adds a single node as the last child of a parent element.

javascript

```javascript
let div = document.createElement("div");
div.innerText = "I am a div tag";

// Add to body
document.body.appendChild(div);
```

**Characteristics:**

- Adds only ONE node at a time
- Cannot add text directly (must be a node)
- Returns the appended node

javascript

```javascript
// Adding multiple elements - need multiple calls
let div = document.createElement("div");
let pTag = document.createElement("p");

document.body.appendChild(div);
document.body.appendChild(pTag);
```

---

### append()

Adds one or more nodes or text strings as the last children.

javascript

```javascript
let div = document.createElement("div");
let pTag = document.createElement("p");

// Add multiple elements at once
document.body.append(div, pTag);

// Can also add text directly
let container = document.getElementById("container");
container.append("Some text", div, "More text");
```

**Characteristics:**

- Can add MULTIPLE nodes at once
- Can add text strings directly
- Returns undefined

---

### append() vs appendChild()

|Feature|appendChild()|append()|
|---|---|---|
|Multiple nodes|No|Yes|
|Text strings|No|Yes|
|Return value|Appended node|undefined|
|Browser support|All browsers|Modern browsers|

---

### insertBefore()

Inserts a node before a specified child element.

javascript

```javascript
let divTag = document.createElement("div");
divTag.id = "Parent";

let firstChild = document.createElement("p");
firstChild.innerText = "This is p tag";

let secondChild = document.createElement("h1");
secondChild.innerText = "This is h1 tag";

// First add the p tag
divTag.appendChild(firstChild);

// Then insert h1 BEFORE the p tag
divTag.insertBefore(secondChild, firstChild);

document.body.appendChild(divTag);

// Result:
// <div id="Parent">
//   <h1>This is h1 tag</h1>
//   <p>This is p tag</p>
// </div>
```

**Syntax:** parentNode.insertBefore(newNode, referenceNode)

---

### prepend()

Adds nodes at the beginning of a parent element.

javascript

```javascript
let container = document.getElementById("container");
let newFirst = document.createElement("div");
newFirst.innerText = "I am first now";

container.prepend(newFirst);
```

---

### before() and after()

Insert elements relative to a target element.

javascript

```javascript
let target = document.getElementById("target");

let before = document.createElement("p");
before.innerText = "Before target";

let after = document.createElement("p");
after.innerText = "After target";

target.before(before);
target.after(after);
```

---

## Removing Elements

### remove()

Removes the element from the DOM.

javascript

```javascript
let element = document.getElementById("toRemove");
element.remove();
```

### removeChild()

Removes a child element from its parent.

javascript

```javascript
let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.removeChild(child);
```

---

## Complete Example: Building a Card

javascript

```javascript
let container = document.getElementById("container");

// Create card div
let div = document.createElement("div");
div.style.height = "300px";
div.style.width = "300px";
div.style.border = "2px solid black";

// Create image
let img = document.createElement("img");
img.src = "https://example.com/image.jpg";
img.alt = "image";
img.style.maxWidth = "100%";

// Create paragraph
let p = document.createElement("p");
p.innerText = "This is a p tag";
p.style.textAlign = "center";

// Assemble the card
div.append(img, p);

// Add to container
container.appendChild(div);
```

---

## Building Elements with Loops

### Creating Multiple Boxes

javascript

```javascript
let container = document.getElementById("container");

for (let i = 0; i < 4; i++) {
  let box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = "lightblue";
  box.style.margin = "10px";
  box.style.display = "inline-block";
  box.innerText = `Box ${i + 1}`;
  
  container.appendChild(box);
}
```

### Creating a List

javascript

```javascript
let ul = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.innerText = `Item ${i}`;
  ul.appendChild(li);
}

document.body.appendChild(ul);
```

---

## Practical Exercises

### Exercise 1: Change Text

Select an element with id="box" and change its text to "Hello World".

javascript

```javascript
let box = document.getElementById("box");
box.innerText = "Hello World";
```

### Exercise 2: Change Color of All Paragraphs

javascript

```javascript
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function(p) {
  p.style.color = "blue";
});
```

### Exercise 3: Create and Add Element

Create a new h2 element with text "Welcome" and add it inside a div.

javascript

```javascript
let h2 = document.createElement("h2");
h2.innerText = "Welcome";

let div = document.getElementById("myDiv");
div.appendChild(h2);
```

### Exercise 4: Add Border to First Card

javascript

```javascript
let firstCard = document.querySelector(".card");
firstCard.style.border = "2px solid black";
```

### Exercise 5: Create Unordered List

javascript

```javascript
let ul = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.innerText = i;
  ul.appendChild(li);
}

document.body.appendChild(ul);
```

### Exercise 6: Profile Box

javascript

```javascript
let profileBox = document.createElement("div");
profileBox.style.border = "1px solid #ccc";
profileBox.style.padding = "20px";
profileBox.style.width = "300px";

let img = document.createElement("img");
img.src = "profile.jpg";
img.alt = "Profile Picture";
img.style.width = "100px";
img.style.borderRadius = "50%";

let name = document.createElement("h3");
name.innerText = "John Doe";

let bio = document.createElement("p");
bio.innerText = "Web Developer passionate about JavaScript";

profileBox.append(img, name, bio);
document.body.appendChild(profileBox);
```

### Exercise 7: Create Table

javascript

```javascript
let table = document.createElement("table");
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";

for (let i = 0; i < 3; i++) {
  let tr = document.createElement("tr");
  
  for (let j = 0; j < 3; j++) {
    let td = document.createElement("td");
    td.innerText = `Row ${i + 1}, Col ${j + 1}`;
    td.style.border = "1px solid black";
    td.style.padding = "10px";
    tr.appendChild(td);
  }
  
  table.appendChild(tr);
}

document.body.appendChild(table);
```

### Exercise 8: Navigation Bar

javascript

```javascript
let nav = document.createElement("nav");
nav.style.backgroundColor = "#333";
nav.style.padding = "10px";

let links = ["Home", "About", "Services", "Contact"];

links.forEach(function(text) {
  let a = document.createElement("a");
  a.href = "#";
  a.innerText = text;
  a.style.color = "white";
  a.style.marginRight = "20px";
  a.style.textDecoration = "none";
  nav.appendChild(a);
});

document.body.prepend(nav);
```

### Exercise 9: Product Card

javascript

```javascript
function createProductCard(name, price, description) {
  let card = document.createElement("div");
  card.style.border = "1px solid #ddd";
  card.style.padding = "15px";
  card.style.width = "250px";
  card.style.borderRadius = "8px";

  let productName = document.createElement("h3");
  productName.innerText = name;

  let productPrice = document.createElement("p");
  productPrice.innerText = `$${price}`;
  productPrice.style.color = "green";
  productPrice.style.fontSize = "20px";

  let productDesc = document.createElement("p");
  productDesc.innerText = description;
  productDesc.style.color = "#666";

  let button = document.createElement("button");
  button.innerText = "Add to Cart";
  button.style.padding = "10px 20px";
  button.style.cursor = "pointer";

  card.append(productName, productPrice, productDesc, button);
  return card;
}

let container = document.getElementById("container");
let card = createProductCard("Laptop", 999, "High-performance laptop for developers");
container.appendChild(card);
```

### Exercise 10: Remove Paragraph

javascript

```javascript
let paragraph = document.querySelector("p");
paragraph.remove();
```

---

## Simple Calculator using Prompt

javascript

```javascript
// Simple Calculator
let num1 = parseFloat(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter second number:"));

let result;

switch(operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Cannot divide by zero";
    }
    break;
  default:
    result = "Invalid operator";
}

// Display result
let resultDiv = document.createElement("div");
resultDiv.innerHTML = `<h2>Result: ${num1} ${operator} ${num2} = ${result}</h2>`;
resultDiv.style.padding = "20px";
resultDiv.style.fontSize = "24px";
document.body.appendChild(resultDiv);
```

---

## Method Summary

|Method|Purpose|Multiple|Text|
|---|---|---|---|
|appendChild()|Add child at end|No|No|
|append()|Add children at end|Yes|Yes|
|prepend()|Add at beginning|Yes|Yes|
|insertBefore()|Insert before reference|No|No|
|before()|Insert before element|Yes|Yes|
|after()|Insert after element|Yes|Yes|
|remove()|Remove element|-|-|
|removeChild()|Remove child from parent|-|-|

---

## Related Notes

- [[DOM Content Manipulation]]
- [[DOM Styling]]
- [[Accessing DOM Elements]]

---

#module2 #javascript #dom #create-elements #day7