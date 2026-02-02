## Event Bubbling

Event bubbling is when an event starts from the target element and moves upward through its parent elements.

### How It Works

When you click on a child element:
1. Event triggers on the child (target)
2. Event bubbles up to parent
3. Continues up to grandparent
4. Until it reaches the document

```html
<div id="grandparent">
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
</div>
```

```javascript
document.getElementById("grandparent").addEventListener("click", function() {
  console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function() {
  console.log("Child clicked");
});

// Click on button outputs:
// "Child clicked"
// "Parent clicked"
// "Grandparent clicked"
```

---

## Stopping Event Bubbling

Use stopPropagation() to prevent the event from bubbling up.

javascript

```javascript
document.getElementById("child").addEventListener("click", function(event) {
  event.stopPropagation();
  console.log("Child clicked");
});

// Now clicking child only logs "Child clicked"
// Parent and grandparent handlers don't run
```

### Example

javascript

```javascript
let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function() {
  console.log("Parent");
});

child.addEventListener("click", function(event) {
  event.stopPropagation();
  console.log("Child");
});

// Click on child: Only "Child" is logged
// Click on parent: Only "Parent" is logged
```

---

## Event Capturing (Trickling)

The opposite of bubbling - event travels from top to bottom.

Use the third parameter true or { capture: true } to enable capturing.

javascript

```javascript
parent.addEventListener("click", function() {
  console.log("Parent (capture)");
}, true);  // or { capture: true }

child.addEventListener("click", function() {
  console.log("Child");
});

// Click on child outputs:
// "Parent (capture)" - runs first (capture phase)
// "Child" - runs second (target phase)
```

### Event Flow Phases

1. **Capture Phase** - Event travels down from document to target
2. **Target Phase** - Event reaches the target element
3. **Bubble Phase** - Event travels up from target to document

---

## Event Delegation

Event delegation is a technique where a single event listener is added to a parent element to handle events of its child elements using event bubbling.

### Without Delegation (Bad)

Adding listener to each element individually.

javascript

```javascript
document.querySelectorAll("li").forEach(function(li) {
  li.addEventListener("click", function() {
    alert(this.innerText);
  });
});
```

**Problems:**

- Many event listeners (memory inefficient)
- Does not work for dynamically added elements

---

### With Delegation (Good)

Single listener on parent, check which child was clicked.

javascript

```javascript
let ul = document.querySelector("ul");

ul.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    alert(event.target.innerText);
  }
});
```

**Benefits:**

- Single event listener (memory efficient)
- Works for dynamically added elements
- Cleaner code

---

## event.target vs event.currentTarget

|Property|Description|
|---|---|
|event.target|Element that triggered the event (clicked element)|
|event.currentTarget|Element that has the event listener|

javascript

```javascript
ul.addEventListener("click", function(event) {
  console.log("Target:", event.target);         // The <li> clicked
  console.log("CurrentTarget:", event.currentTarget);  // The <ul>
});
```

---

## Practical Examples

### Example 1: Todo List with Delegation

html

```html
<ul id="todoList">
  <li>Task 1 <button class="delete">X</button></li>
  <li>Task 2 <button class="delete">X</button></li>
  <li>Task 3 <button class="delete">X</button></li>
</ul>
```

javascript

```javascript
let todoList = document.getElementById("todoList");

todoList.addEventListener("click", function(event) {
  // Check if delete button was clicked
  if (event.target.classList.contains("delete")) {
    // Remove the parent <li>
    event.target.parentElement.remove();
  }
});
```

### Example 2: Tab Navigation

html

```html
<div class="tabs">
  <button data-tab="tab1">Tab 1</button>
  <button data-tab="tab2">Tab 2</button>
  <button data-tab="tab3">Tab 3</button>
</div>
```

javascript

```javascript
let tabs = document.querySelector(".tabs");

tabs.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    let tabId = event.target.dataset.tab;
    console.log("Show tab:", tabId);
    
    // Remove active from all buttons
    document.querySelectorAll(".tabs button").forEach(btn => {
      btn.classList.remove("active");
    });
    
    // Add active to clicked button
    event.target.classList.add("active");
  }
});
```

### Example 3: Dropdown Menu

javascript

```javascript
let dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", function(event) {
  if (event.target.classList.contains("dropdown-item")) {
    console.log("Selected:", event.target.innerText);
  }
});
```

---

## Why Use Event Delegation

|Benefit|Description|
|---|---|
|Performance|Single listener vs many listeners|
|Dynamic elements|Works for elements added later|
|Memory|Less memory usage|
|Cleaner code|Centralized event handling|

---

## Navigating Parent and Children

### Getting Children

javascript

```javascript
let parent = document.getElementById("parent");
let children = parent.children;  // HTMLCollection of children
```

### Getting Parent

javascript

```javascript
let child = document.getElementById("child");
let parent = child.parentElement;  // Direct parent element
```

### Example

javascript

```javascript
// Remove clicked item's parent
list.addEventListener("click", function(event) {
  if (event.target.classList.contains("remove-btn")) {
    event.target.parentElement.remove();
  }
});
```

---

## Summary

|Concept|Description|
|---|---|
|Bubbling|Event travels from target up to document|
|Capturing|Event travels from document down to target|
|stopPropagation()|Stops event from continuing|
|Delegation|Single parent listener handles child events|
|event.target|Element that triggered event|
|event.currentTarget|Element with the listener|

---

## Related Notes

- [[DOM Events]]
- [[Event Listeners]]
- [[Dynamic DOM Updates]]

---

#module2 #javascript #dom #event-bubbling #event-delegation #day8