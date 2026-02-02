Forms **collect user input** and send it to a server for processing.

---

## Common Use Cases

- Contact forms
- Login and signup pages
- Search boxes
- Surveys and questionnaires
- E-commerce checkouts

---

## Basic Form Structure

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <button type="submit">Submit</button>
</form>
```

## Core Form Elements

| Element          | Purpose                             |
| ---------------- | ----------------------------------- |
| ```<form>```     | Container for form elements         |
| ```<input>```    | Receives user input (various types) |
| ```<label>```    | Describes input field               |
| ```<button>```   | Triggers form submission            |
| ```<textarea>``` | Multi-line text input               |

---

## Input Types

|Type|Purpose|Example Use|
|---|---|---|
|text|Single-line text|Names, usernames|
|email|Email with validation|Email addresses|
|password|Hidden character input|Passwords|
|radio|Single selection from group|Gender, payment method|
|checkbox|Multiple selections|Agreements, preferences|
|submit|Submit button|Form submission|

### Text Input

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" placeholder="Enter username">
```

### Email Input

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

Browser automatically validates email format.

### Password Input

```html
<label for="password">Password:</label>
<input type="password" id="password" name="password">
```

Characters display as dots for privacy.

### Radio Buttons

Single selection - all related radios share the same name attribute.

```html
<label><input type="radio" name="gender" value="male"> Male</label>
<label><input type="radio" name="gender" value="female"> Female</label>
<label><input type="radio" name="gender" value="other"> Other</label>
```

Selecting one automatically deselects others in the group.

### Checkboxes

Multiple selections allowed.

```html
<label><input type="checkbox" name="agree"> I agree to terms</label>
<label><input type="checkbox" name="newsletter"> Subscribe to newsletter</label>
```

---

## Form Attributes

|Attribute|Purpose|Example|
|---|---|---|
|placeholder|Hint text inside input|placeholder="e.g., John"|
|required|Makes field mandatory|required|
|for|Links label to input|for="email"|
|name|Identifies field in submitted data|name="fullname"|
|id|Unique identifier for element|id="email"|

### Label-Input Connection

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

The for attribute matches the id attribute. Clicking the label focuses the input.

---

## Form Submission Methods

### Form Tag Attributes

```html
<form action="/submit-url" method="POST">
```

- **action** - URL where data is sent
- **method** - How data is transmitted

### GET vs POST

|Feature|GET|POST|
|---|---|---|
|Data location|Visible in URL|Hidden in request body|
|Data size|Limited (~2000 chars)|Unlimited|
|Security|Less secure|More secure|
|Use case|Search, filtering|Login, signup, sensitive data|
|Bookmarkable|Yes|No|

### GET Method

html

```html
<form method="GET" action="/search">
```

- Data appears in URL: site.com/search?name=John&age=25
- Use for: Search queries, filtering, non-sensitive data

### POST Method

html

```html
<form method="POST" action="/login">
```

- Data hidden in request body
- Use for: Passwords, personal info, large data, account creation

---

## Complete Form Example

html

```html
<form action="/submit-contact" method="POST">
  
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" required placeholder="John Smith">
  
  <label for="email">Email Address:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="phone">Phone Number:</label>
  <input type="text" id="phone" name="phone" placeholder="123-456-7890">
  
  <label>How did you hear about us?</label>
  <label><input type="radio" name="source" value="google"> Google Search</label>
  <label><input type="radio" name="source" value="social"> Social Media</label>
  <label><input type="radio" name="source" value="friend"> Friend Referral</label>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>
  
  <label>
    <input type="checkbox" name="agree" required> 
    I agree to the terms and conditions
  </label>
  
  <button type="submit">Send Message</button>
</form>
```

---

## Submission Flow

1. Browser validates required fields
2. If valid, sends data to action URL using specified method
3. Backend processes the form data
4. User receives confirmation

---
## Next Topic
- [[CSS Selectors]]
---
