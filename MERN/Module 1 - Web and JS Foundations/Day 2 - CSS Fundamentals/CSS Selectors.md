## What are CSS Selectors

CSS selectors are patterns used to target HTML elements you want to style. They tell CSS which elements should receive specific styles.

---

## Types of Selectors

### 1. Element Selector

Targets HTML tags directly by their tag name.

```css
p {
  color: blue;
}

h1 {
  font-size: 32px;
}
```

- Targets **all** instances of that element
- Use when styling all elements of one type

---

### 2. Class Selector

Starts with a dot (.) and targets elements with a specific class attribute.

**HTML:**

html

```html
<div class="header">Welcome</div>
<p class="header">Introduction</p>
```

**CSS:**

css

```css
.header {
  background-color: navy;
  color: white;
}
```

- Can be reused multiple times on the same page
- Can be applied to different element types
- **Preferred method for styling**

---

### 3. ID Selector

Starts with a hash (#) and targets a single unique element.

**HTML:**

```html
<nav id="navbar">Navigation here</nav>
```

**CSS:**

```css
#navbar {
  position: fixed;
  top: 0;
}
```

- Should be unique on a page (one element per ID)
- Higher specificity than classes
- Reserve for JavaScript interactions or unique elements

---

## Selector Comparison

| Selector | Syntax          | Reusability           | Specificity |
| -------- | --------------- | --------------------- | ----------- |
| Element  | ```p { }```     | All matching elements | Lowest      |
| Class    | ```.name { }``` | Multiple elements     | Medium      |
| ID       | ```#name { }``` | Single element        | High        |

---

## Best Practices

- **Prefer classes over IDs** for styling
- Classes improve scalability and maintenance
- Use IDs for JavaScript hooks or anchor links
- Keep selector names descriptive and meaningful

---

## Multiple Selectors

### Grouping Selectors

Apply same styles to multiple selectors:

css

```css
h1, h2, h3 {
  font-family: Arial, sans-serif;
  color: #333;
}
```

### Combining Selectors

Target elements with multiple classes:

css

```css
/* Element with both classes */
.card.featured {
  border: 2px solid gold;
}

/* Element inside another */
.container p {
  margin: 10px;
}
```

---
## Next Topic
- [[CSS Colors]]

---

#module1 #css #selectors #day2