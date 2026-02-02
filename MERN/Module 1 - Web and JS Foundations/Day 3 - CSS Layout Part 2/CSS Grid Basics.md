## What is CSS Grid

CSS Grid is a powerful two-dimensional layout system that allows you to create complex layouts with rows and columns simultaneously.

---

## Key Concepts

| Term | Description |
|------|-------------|
| Grid Container | Parent element with `display: grid` |
| Grid Items | Direct children of the grid container |
| Tracks | Rows and columns |
| Grid Lines | Dividing lines between tracks |
| Grid Cells | Single unit in the grid |
| Grid Areas | Rectangular space made of grid cells |

---

## Basic Syntax

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 20px;
}
```

---
## Grid Container Properties

### grid-template-columns

Defines the number and size of columns.

css

```css
.container {
  /* Three equal columns */
  grid-template-columns: 1fr 1fr 1fr;
  
  /* Shorthand with repeat */
  grid-template-columns: repeat(3, 1fr);
  
  /* Mixed sizes */
  grid-template-columns: 200px 1fr 2fr;
  
  /* Auto-fit for responsive */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

### grid-template-rows

Defines the number and size of rows.

css

```css
.container {
  grid-template-rows: 100px 200px 100px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
}
```

---

### gap

Space between grid items.

css

```css
.container {
  gap: 20px;                /* All gaps */
  gap: 10px 20px;           /* Row gap | Column gap */
  row-gap: 10px;            /* Row gap only */
  column-gap: 20px;         /* Column gap only */
}
```

---

### justify-items

Horizontal alignment of items within cells.

css

```css
.container {
  justify-items: start;     /* Align to start */
  justify-items: end;       /* Align to end */
  justify-items: center;    /* Center horizontally */
  justify-items: stretch;   /* Fill width (default) */
}
```

---

### align-items

Vertical alignment of items within cells.

css

```css
.container {
  align-items: start;       /* Align to top */
  align-items: end;         /* Align to bottom */
  align-items: center;      /* Center vertically */
  align-items: stretch;     /* Fill height (default) */
}
```

---

### justify-content

Aligns the entire grid horizontally within container.

css

```css
.container {
  justify-content: start;
  justify-content: end;
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}
```

---

### align-content

Aligns the entire grid vertically within container.

css

```css
.container {
  align-content: start;
  align-content: end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
}
```

---

## Grid Item Properties

### grid-column

Specifies which column lines item spans.

css

```css
.item {
  grid-column: 1 / 3;       /* Start at line 1, end at line 3 */
  grid-column: 1 / span 2;  /* Start at line 1, span 2 columns */
  grid-column: 2;           /* Start at line 2 */
}
```

---

### grid-row

Specifies which row lines item spans.

css

```css
.item {
  grid-row: 1 / 3;          /* Start at line 1, end at line 3 */
  grid-row: 1 / span 2;     /* Start at line 1, span 2 rows */
}
```

---

Image

![[Gridbox.png]]

---

### Spanning Multiple Cells

css

```css
/* Span 2 columns and 2 rows */
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}

/* Or using span */
.item {
  grid-column: span 2;
  grid-row: span 2;
}
```

---

## Grid Template Areas

Define named grid areas for easier layout.

css

```css
.container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

---

## Practical Examples

### Basic Three Column Layout

css

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### Responsive Grid with Auto-fit

css

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

### Asymmetric Layout

**HTML:**

html

```html
<div class="asymmetric-grid">
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
  <div class="item item-4"></div>
  <div class="item item-5"></div>
  <div class="item item-6"></div>
</div>
```

**CSS:**

css

```css
.asymmetric-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px;
  gap: 15px;
}

.item-1 {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.item-2 {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
}

.item-3 {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
}

.item-4 {
  grid-column: 3 / 4;
  grid-row: 2 / 4;
}

.item-5 {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

.item-6 {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}
```

### Holy Grail Layout

css

```css
.page {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 10px;
}

header {
  grid-column: 1 / -1;
}

footer {
  grid-column: 1 / -1;
}
```

---

## Useful Grid Properties Summary

|Property|Description|
|---|---|
|grid-template-columns|Define column sizes|
|grid-template-rows|Define row sizes|
|gap|Space between items|
|grid-auto-flow|How items are placed (row/column)|
|justify-items|Horizontal alignment of items|
|align-items|Vertical alignment of items|
|justify-content|Horizontal alignment of grid|
|align-content|Vertical alignment of grid|
|grid-column|Item column placement|
|grid-row|Item row placement|

---

## Related Notes

- [[Flexbox Basics]]
- [[Media Queries]]
- [[Responsive Design Principles]]

---

#module1 #css #grid #layout #day3