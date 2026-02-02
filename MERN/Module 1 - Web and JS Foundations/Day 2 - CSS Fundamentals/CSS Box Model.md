## What is the Box Model

Every HTML element is treated as a rectangular box. The Box Model explains how an element's total size is calculated by combining four components.

---

## Box Model Components

From inside to outside:

### 1. Content

The actual content inside the element (text, images, etc.).

```css
div {
  width: 200px;      /* Content width */
  height: 100px;     /* Content height */
}
```

### 2. Padding

Space **inside** the element, between content and border.

```css
div {
  padding: 20px;                    /* All sides */
  padding: 10px 20px;               /* Vertical | Horizontal */
  padding: 10px 20px 15px 25px;     /* Top | Right | Bottom | Left */
}

/* Individual sides */
div {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 25px;
}
```

---

### 3. Border

The line surrounding padding and content.

```css
div {
  border: 2px solid black;         /* Width | Style | Color */
  border: 1px dashed #ccc;
}

/* Individual properties */
div {
  border-width: 2px;
  border-style: solid;             /* solid, dashed, dotted, none */
  border-color: black;
}

/* Individual sides */
div {
  border-top: 2px solid red;
  border-bottom: 1px dashed blue;
}
```

---

### 4. Margin

Space **outside** the element, creating distance from other elements.

```css
div {
  margin: 15px;                     /* All sides */
  margin: 10px 20px;                /* Vertical | Horizontal */
  margin: 10px 20px 15px 25px;      /* Top | Right | Bottom | Left */
}

/* Individual sides */
div {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 15px;
  margin-left: 25px;
}

/* Center horizontally */
div {
  margin: 0 auto;
}
```

---

## Visual Diagram

text

```text
+-------------------------------------------+
|                  MARGIN                   |
|   +-----------------------------------+   |
|   |              BORDER               |   |
|   |   +---------------------------+   |   |
|   |   |          PADDING          |   |   |
|   |   |   +-------------------+   |   |   |
|   |   |   |                   |   |   |   |
|   |   |   |      CONTENT      |   |   |   |
|   |   |   |                   |   |   |   |
|   |   |   +-------------------+   |   |   |
|   |   +---------------------------+   |   |
|   +-----------------------------------+   |
+-------------------------------------------+
```

---

## Calculating Total Size

### Default Box Model (content-box)

Total width = content + padding-left + padding-right + border-left + border-right

**Example:**

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
```

**Total width:** 200 + 20 + 20 + 5 + 5 = **250px**

---

### Border-Box Model

Total width = specified width (includes padding and border)

```css
div {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
```

**Total width:** **200px** (content automatically adjusts)

---

## Box-Sizing Property

```css
/* Apply to all elements (recommended) */
*, *::before, *::after {
  box-sizing: border-box;
}
```

|Value|Behavior|
|---|---|
|content-box|Width/height applies to content only (default)|
|border-box|Width/height includes padding and border|

**Best Practice:** Use border-box for easier calculations.

---

## Margin Collapse

When vertical margins meet, they collapse to the larger value.

```css
.box1 {
  margin-bottom: 20px;
}

.box2 {
  margin-top: 30px;
}

/* Space between boxes = 30px, not 50px */
```

**Note:** Horizontal margins do not collapse.

---

## Practical Examples

### Card Component

```css
.card {
  width: 300px;
  padding: 20px;
  margin: 15px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
```

### Centered Container

```css
.container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
```

---

## Related Notes

- [[CSS Display Property]]
- [[Flexbox Basics]]
- [[CSS Units]]

---

#module1 #css #box-model #layout #day2