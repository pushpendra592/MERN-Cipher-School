# addEventListener() Method

The `addEventListener()` method attaches an event handler to an element.

### Syntax

```javascript
element.addEventListener(event, handler, options);
```

- **event**: Type of event (string)
- **handler**: Function to run when event occurs
- **options**: Optional configuration object

---

## Basic Usage

javascript

```javascript
let button = document.getElementById("myBtn");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});
```

### Using Named Functions

javascript

```javascript
function handleClick() {
  console.log("Button clicked!");
}

button.addEventListener("click", handleClick);
```

### Using Arrow Functions

javascript

```javascript
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

---

## Multiple Event Listeners

You can attach multiple listeners to the same element.

javascript

```javascript
let button = document.getElementById("myBtn");

button.addEventListener("click", function() {
  console.log("First handler");
});

button.addEventListener("click", function() {
  console.log("Second handler");
});

// Both handlers will run when button is clicked
```

---

## Removing Event Listeners

Use removeEventListener() to remove a handler.

javascript

```javascript
function handleClick() {
  console.log("Clicked!");
}

// Add listener
button.addEventListener("click", handleClick);

// Remove listener (must use same function reference)
button.removeEventListener("click", handleClick);
```

**Note:** Anonymous functions cannot be removed.

javascript

```javascript
// This cannot be removed later
button.addEventListener("click", function() {
  console.log("Clicked!");
});
```

---

## Practical Examples

### Example 1: Color Change on Hover

javascript

```javascript
let container = document.getElementById("container");

container.addEventListener("mouseover", function() {
  this.style.backgroundColor = "yellow";
});

container.addEventListener("mouseout", function() {
  this.style.backgroundColor = "aquamarine";
});
```

### Example 2: Double Click Toggle

javascript

```javascript
let box = document.getElementById("box");
let isBlue = false;

box.addEventListener("dblclick", function() {
  if (isBlue) {
    this.style.backgroundColor = "red";
  } else {
    this.style.backgroundColor = "blue";
  }
  isBlue = !isBlue;
});
```

### Example 3: Change Text on Click

javascript

```javascript
let heading = document.getElementById("heading");

heading.addEventListener("click", function() {
  this.innerText = "Text Changed!";
});
```

### Example 4: Keydown Event

javascript

```javascript
document.addEventListener("keydown", function(event) {
  let output = document.getElementById("output");
  output.innerText = `Key pressed: ${event.key}`;
});
```

### Example 5: Form Input Live Update

javascript

```javascript
let input = document.getElementById("nameInput");
let display = document.getElementById("nameDisplay");

input.addEventListener("input", function(event) {
  display.innerText = event.target.value;
});
```

### Example 6: Change Text Color Dynamically

html

```html
<input type="text" id="colorInput" placeholder="Enter color...">
<p id="colorText">This text will change color</p>
```

javascript

```javascript
let colorInput = document.getElementById("colorInput");
let colorText = document.getElementById("colorText");

colorInput.addEventListener("input", function(event) {
  colorText.style.color = event.target.value;
});
```

---

## Event Listener Options

### once

Listener runs only once, then is automatically removed.

javascript

```javascript
button.addEventListener("click", function() {
  console.log("This runs only once");
}, { once: true });
```

### capture

Listener triggers during capture phase instead of bubble phase.

javascript

```javascript
parent.addEventListener("click", function() {
  console.log("Parent (capture phase)");
}, { capture: true });

// Or shorthand
parent.addEventListener("click", handler, true);
```

---

## this Keyword in Event Listeners

In regular functions, this refers to the element that triggered the event.

javascript

```javascript
button.addEventListener("click", function() {
  console.log(this);  // The button element
  this.style.backgroundColor = "red";
});
```

**Note:** Arrow functions do NOT have their own this.

javascript

```javascript
button.addEventListener("click", () => {
  console.log(this);  // NOT the button! (inherits from parent scope)
});
```

---

## Common Patterns

### Toggle Class on Click

javascript

```javascript
button.addEventListener("click", function() {
  element.classList.toggle("active");
});
```

### Disable Button After Click

javascript

```javascript
button.addEventListener("click", function() {
  this.disabled = true;
  this.innerText = "Processing...";
});
```

### Form Validation on Submit

javascript

```javascript
form.addEventListener("submit", function(event) {
  let input = document.getElementById("email");
  
  if (!input.value.includes("@")) {
    event.preventDefault();
    alert("Please enter a valid email");
  }
});
```

---

## Activities

### Activity 1: Double Click Color Toggle

Create a box that changes color on double click and returns to original on another double click.

javascript

```javascript
let box = document.getElementById("box");
let originalColor = "lightblue";
let newColor = "coral";
let isChanged = false;

box.addEventListener("dblclick", function() {
  if (isChanged) {
    this.style.backgroundColor = originalColor;
  } else {
    this.style.backgroundColor = newColor;
  }
  isChanged = !isChanged;
});
```

### Activity 2: Change Text with Click and Keydown

javascript

```javascript
let text = document.getElementById("text");

// Change on click
text.addEventListener("click", function() {
  this.innerText = "Clicked!";
});

// Change on keydown
document.addEventListener("keydown", function(event) {
  text.innerText = `Key: ${event.key}`;
});
```

---

## Related Notes

- [[DOM Events]]
- [[Event Bubbling and Delegation]]
- [[DOM Content Manipulation]]

---

#module2 #javascript #dom #event-listeners #day8