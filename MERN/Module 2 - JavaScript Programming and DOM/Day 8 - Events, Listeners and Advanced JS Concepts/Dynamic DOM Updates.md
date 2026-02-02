## Overview

Dynamic DOM updates allow you to change webpage content based on data, user input, or events without reloading the page.

---

## Rendering Data Dynamically

Usually data comes from a database, but we can simulate with arrays.

### Example: Generate List from Array

```javascript
let items = ["apple", "banana", "mango", "orange"];

function generateList() {
  let listContainer = document.getElementById("list");
  listContainer.innerHTML = "";  // Clear existing content
  
  items.forEach(function(item) {
    let li = document.createElement("li");
    li.innerText = item;
    listContainer.appendChild(li);
  });
}

generateList();
```

---

## Live Updates with Input Events

### Update Text as User Types

html

```html
<input type="text" id="inputTag" placeholder="Type the text...">
<p id="output"></p>
```

javascript

```javascript
let input = document.getElementById("inputTag");
let output = document.getElementById("output");

input.addEventListener("input", function(event) {
  output.innerText = event.target.value;
});
```

### Inline Event Version

html

```html
<input
  type="text"
  id="inputTag"
  placeholder="Type the text..."
  oninput="updateText(event)"
/>
<p id="output"></p>

<script>
function updateText(event) {
  document.getElementById("output").innerText = event.target.value;
}
</script>
```

---

## Dynamic Color Change

Change text color based on user input.

html

```html
<input type="text" id="colorInput" placeholder="Enter a color...">
<p id="colorText">This text will change color</p>
```

javascript

```javascript
function updateColor(event) {
  let color = event.target.value;
  document.getElementById("colorText").style.color = color;
}

document.getElementById("colorInput").addEventListener("input", updateColor);
```

---

## Adding Items Dynamically

### Add Item to List

html

```html
<input type="text" id="newItem" placeholder="Enter item...">
<button id="addBtn">Add</button>
<ul id="itemList"></ul>
```

javascript

```javascript
let items = [];

document.getElementById("addBtn").addEventListener("click", function() {
  let input = document.getElementById("newItem");
  let value = input.value.trim();
  
  if (value !== "") {
    items.push(value);
    renderList();
    input.value = "";  // Clear input
  }
});

function renderList() {
  let list = document.getElementById("itemList");
  list.innerHTML = "";
  
  items.forEach(function(item, index) {
    let li = document.createElement("li");
    li.innerText = item;
    
    // Add delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", function() {
      items.splice(index, 1);
      renderList();
    });
    
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}
```

---

## Button-Based Text Modification

### Change Content with Buttons

html

```html
<p id="text">Original Text</p>
<button id="changeBtn">Change Text</button>
<button id="resetBtn">Reset</button>
```

javascript

```javascript
let text = document.getElementById("text");
let originalText = text.innerText;

document.getElementById("changeBtn").addEventListener("click", function() {
  text.innerText = "Modified Text!";
  text.style.color = "blue";
});

document.getElementById("resetBtn").addEventListener("click", function() {
  text.innerText = originalText;
  text.style.color = "black";
});
```

---

## Counter Example

html

```html
<p>Count: <span id="count">0</span></p>
<button id="increment">+</button>
<button id="decrement">-</button>
<button id="reset">Reset</button>
```

javascript

```javascript
let count = 0;
let countDisplay = document.getElementById("count");

function updateDisplay() {
  countDisplay.innerText = count;
}

document.getElementById("increment").addEventListener("click", function() {
  count++;
  updateDisplay();
});

document.getElementById("decrement").addEventListener("click", function() {
  count--;
  updateDisplay();
});

document.getElementById("reset").addEventListener("click", function() {
  count = 0;
  updateDisplay();
});
```

---

## Search/Filter List

html

```html
<input type="text" id="search" placeholder="Search...">
<ul id="list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
  <li>Date</li>
</ul>
```

javascript

```javascript
let searchInput = document.getElementById("search");
let listItems = document.querySelectorAll("#list li");

searchInput.addEventListener("input", function(event) {
  let searchTerm = event.target.value.toLowerCase();
  
  listItems.forEach(function(item) {
    let text = item.innerText.toLowerCase();
    
    if (text.includes(searchTerm)) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
});
```

---

## Form with Dynamic Validation

html

```html
<form id="signupForm">
  <input type="text" id="username" placeholder="Username">
  <span id="usernameError" class="error"></span>
  
  <input type="email" id="email" placeholder="Email">
  <span id="emailError" class="error"></span>
  
  <button type="submit">Sign Up</button>
</form>
```

javascript

```javascript
let form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  let isValid = true;
  
  // Validate username
  let username = document.getElementById("username").value;
  let usernameError = document.getElementById("usernameError");
  
  if (username.trim() === "") {
    usernameError.innerText = "Username is required";
    isValid = false;
  } else if (username.length < 3) {
    usernameError.innerText = "Username must be at least 3 characters";
    isValid = false;
  } else {
    usernameError.innerText = "";
  }
  
  // Validate email
  let email = document.getElementById("email").value;
  let emailError = document.getElementById("emailError");
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email.trim() === "") {
    emailError.innerText = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.innerText = "Please enter a valid email";
    isValid = false;
  } else {
    emailError.innerText = "";
  }
  
  if (isValid) {
    console.log("Form is valid, submitting...");
    // Submit form or process data
  }
});
```

---

## Real-time Validation

javascript

```javascript
document.getElementById("email").addEventListener("input", function(event) {
  let email = event.target.value;
  let emailError = document.getElementById("emailError");
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email === "") {
    emailError.innerText = "";
    this.style.borderColor = "";
  } else if (!emailRegex.test(email)) {
    emailError.innerText = "Invalid email format";
    this.style.borderColor = "red";
  } else {
    emailError.innerText = "Valid email";
    emailError.style.color = "green";
    this.style.borderColor = "green";
  }
});
```

---

## Assignment: Dynamic Form Validation

Create a form with:

- Username field (required, min 3 characters)
- Email field (required, valid email format)
- Phone field (required, valid phone regex)
- Error messages displayed dynamically
- Styling states (valid/invalid borders)

javascript

```javascript
// Email regex
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone regex (10 digits)
let phoneRegex = /^\d{10}$/;

// Validation logic
function validateField(input, regex, errorElement, message) {
  let value = input.value.trim();
  
  if (value === "") {
    errorElement.innerText = "This field is required";
    input.classList.add("invalid");
    input.classList.remove("valid");
    return false;
  } else if (regex && !regex.test(value)) {
    errorElement.innerText = message;
    input.classList.add("invalid");
    input.classList.remove("valid");
    return false;
  } else {
    errorElement.innerText = "";
    input.classList.add("valid");
    input.classList.remove("invalid");
    return true;
  }
}
```

---

## Key Patterns

|Pattern|Use Case|
|---|---|
|Render from data|Display lists, tables from arrays|
|Live input update|Show typing in real-time|
|Add/Remove items|Todo lists, shopping carts|
|Filter/Search|Filter displayed items|
|Form validation|Validate before submission|

---

## Related Notes

- [[Event Listeners]]
- [[Event Bubbling and Delegation]]
- [[Creating and Removing DOM Elements]]

---

#module2 #javascript #dom #dynamic-updates #day8