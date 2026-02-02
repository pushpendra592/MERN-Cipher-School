## What are Events

Events are actions that happen on a webpage, such as clicks, key presses, form submissions, and more. They are used to handle user interaction and make websites interactive.

---

## Why Events are Important

Without events, websites are static (only text and images, no interaction).

With events, you can:
- **Handle user actions** - clicks, typing, submitting
- **Update content dynamically** - change text, images, styles
- **Validate user input** - check forms before submission
- **Improve user experience** - create smooth, interactive features
- **Control program flow** - run code only when needed

---

## Common Event Types

### Mouse Events

| Event | Description |
|-------|-------------|
| click | Element is clicked |
| dblclick | Element is double-clicked |
| mouseover | Mouse enters element |
| mouseout | Mouse leaves element |
| mousedown | Mouse button pressed |
| mouseup | Mouse button released |
| mousemove | Mouse moves over element |

### Keyboard Events

| Event | Description |
|-------|-------------|
| keydown | Key is pressed down |
| keyup | Key is released |
| keypress | Key is pressed (deprecated) |

### Form Events

| Event | Description |
|-------|-------------|
| submit | Form is submitted |
| change | Input value changes (on blur) |
| input | Input value changes (immediate) |
| focus | Element receives focus |
| blur | Element loses focus |

### Window Events

| Event | Description |
|-------|-------------|
| load | Page fully loaded |
| scroll | Page is scrolled |
| resize | Window is resized |

---

## Two Ways to Handle Events

### 1. Inline Events (HTML)

Directly in HTML attributes.

```html
<button onclick="alert('Clicked!')">Click Me</button>

<input type="text" onchange="console.log(this.value)">
```

**Disadvantages:**

- Mixes HTML and JavaScript
- Hard to maintain
- Limited functionality

---

### 2. addEventListener (JavaScript)

Attach event handlers using JavaScript.

javascript

```javascript
let button = document.getElementById("myBtn");

button.addEventListener("click", function() {
  alert("Clicked!");
});
```

**Advantages:**

- Separates HTML and JavaScript
- Can add multiple handlers
- More control over event behavior

---

## Event Object

When an event occurs, JavaScript creates an event object with information about the event.

javascript

```javascript
button.addEventListener("click", function(event) {
  console.log(event.type);      // "click"
  console.log(event.target);    // Element that triggered event
  console.log(event.clientX);   // Mouse X position
  console.log(event.clientY);   // Mouse Y position
});
```

### Common Event Object Properties

|Property|Description|
|---|---|
|type|Type of event (click, keyup, etc.)|
|target|Element that triggered the event|
|currentTarget|Element with the event listener|
|clientX, clientY|Mouse position relative to viewport|
|key|Key pressed (for keyboard events)|
|preventDefault()|Prevents default behavior|
|stopPropagation()|Stops event bubbling|

---

## Basic Examples

### Click Event

javascript

```javascript
let button = document.getElementById("btn");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});
```

### Mouse Hover

javascript

```javascript
let box = document.getElementById("box");

box.addEventListener("mouseover", function() {
  this.style.backgroundColor = "yellow";
});

box.addEventListener("mouseout", function() {
  this.style.backgroundColor = "white";
});
```

### Keyboard Event

javascript

```javascript
document.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
});
```

### Input Event

javascript

```javascript
let input = document.getElementById("textInput");

input.addEventListener("input", function(event) {
  console.log("Current value:", event.target.value);
});
```

---

## Inline Event Example

html

```html
<input
  type="text"
  id="inputTag"
  placeholder="type the text..."
  oninput="updateText(event)"
/>
<p id="output"></p>

<script>
function updateText(event) {
  console.log(event.target.value);
  document.getElementById("output").innerText = event.target.value;
}
</script>
```

---

## Testing Events in Console

You can test events on any website using the console:

javascript

```javascript
document.body.onclick = function() {
  console.log("User clicked on the body");
};
```

---

## preventDefault()

Stops the default browser behavior for an event.

javascript

```javascript
let link = document.querySelector("a");

link.addEventListener("click", function(event) {
  event.preventDefault();  // Prevents navigation
  console.log("Link click prevented");
});

let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();  // Prevents form submission
  console.log("Form submit prevented");
});
```

---

## Related Notes

- [[Event Listeners]]
- [[Event Bubbling and Delegation]]
- [[DOM Content Manipulation]]

---

#module2 #javascript #dom #events #day8