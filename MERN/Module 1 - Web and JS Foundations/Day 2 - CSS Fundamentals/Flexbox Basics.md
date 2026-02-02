## What is Flexbox

Flexbox (Flexible Box Layout) is a CSS layout method for arranging items in one direction (row or column). It handles alignment and spacing automatically.

---

## Enabling Flexbox

Apply `display: flex` to the parent container.

```css
.container {
  display: flex;
}
```

**Terminology:**

- **Flex Container:** The parent element with display: flex
- **Flex Items:** Direct children of the flex container

---

## Flex Direction

Controls the direction items flow.

```css
.container {
  display: flex;
  flex-direction: row;           /* Default */
}
```

|Value|Direction|Main Axis|
|---|---|---|
|row|Left to right|Horizontal|
|row-reverse|Right to left|Horizontal|
|column|Top to bottom|Vertical|
|column-reverse|Bottom to top|Vertical|

**Example:**

```css
.horizontal {
  flex-direction: row;
}

.vertical {
  flex-direction: column;
}
```

---

## Justify Content

Aligns items along the **main axis** (horizontal for row, vertical for column).

```css
.container {
  display: flex;
  justify-content: center;
}
```

|Value|Behavior|
|---|---|
|flex-start|Items at start (default)|
|flex-end|Items at end|
|center|Items centered|
|space-between|Even space between items|
|space-around|Even space around items|
|space-evenly|Equal space between and around|

**Visual Examples (flex-direction: row):**

text

```text
flex-start:      |[1][2][3]---------------------------|
flex-end:        |---------------------------[1][2][3]|
center:            |-----------[1][2][3]-----------|     
space-between:     |[1]-----------[2]-----------[3]|
space-around:     |----[1]--------[2]--------[3]----|
space-evenly:         |----[1]----[2]----[3]----|
```

Image

![[Flexbox.png]]

---

## Align Items

Aligns items along the **cross axis** (vertical for row, horizontal for column).

```css
.container {
  display: flex;
  align-items: center;
}
```

|Value|Behavior|
|---|---|
|flex-start|Items at top/start|
|flex-end|Items at bottom/end|
|center|Items centered vertically|
|stretch|Items stretch to fill (default)|
|baseline|Items align by text baseline|

---

## Combining Justify and Align

### Center Both Horizontally and Vertically

```css
.container {
  display: flex;
  justify-content: center;      /* Horizontal center */
  align-items: center;          /* Vertical center */
  height: 100vh;
}
```

This is the easiest way to center content on a page.

---

## Flex Wrap

Controls whether items wrap to new lines.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

|Value|Behavior|
|---|---|
|nowrap|All items on one line (default)|
|wrap|Items wrap to next line|
|wrap-reverse|Items wrap upward|

---

## Gap

Adds space between flex items.

```css
.container {
  display: flex;
  gap: 20px;                    /* All gaps */
  gap: 10px 20px;               /* Row gap | Column gap */
}
```

**Note:** Cleaner than using margins on items.

---

## Flex Item Properties

Properties applied to child items.

### flex-grow

Controls how much item grows relative to siblings.

```css
.item {
  flex-grow: 1;        /* Item grows to fill space */
}

.item-double {
  flex-grow: 2;        /* Grows twice as much */
}
```

### flex-shrink

Controls how much item shrinks when space is limited.

```css
.item {
  flex-shrink: 0;      /* Item will not shrink */
}
```

### flex-basis

Sets initial size before growing/shrinking.

```css
.item {
  flex-basis: 200px;   /* Start at 200px */
}
```

### Flex Shorthand

```css
.item {
  flex: 1;             /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
  flex: 0 0 200px;     /* Don't grow, don't shrink, 200px basis */
}
```

---

## Practical Examples

### Navigation Bar

```css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.nav-links {
  display: flex;
  gap: 20px;
}
```

### Card Layout

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px;     /* Grow, shrink, minimum 300px */
}
```

### Centering Content

```css
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### Footer with Spaced Sections

```css
footer {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
```

---

## Why Use Flexbox

- Easy alignment and centering
- Automatic space distribution
- Flexible and responsive
- Cleaner than floats or positioning
- Well-supported in modern browsers

---

## Flexbox vs Grid

|Flexbox|Grid|
|---|---|
|One-dimensional (row OR column)|Two-dimensional (rows AND columns)|
|Content-first|Layout-first|
|Good for components|Good for page layouts|
|Items can vary in size|Precise grid cells|

---

## Related Notes

- [[CSS Display Property]]
- [[CSS Box Model]]
- [[CSS Grid Basics]] (Day 3)

---

#module1 #css #flexbox #layout #day2