## Overview

CSS units define measurements for sizes, spacing, and positioning. Choosing the right unit affects responsiveness and accessibility.

---

## Unit Categories

### Absolute Units

Fixed size regardless of context.

### Relative Units

Size relative to another value (parent, root, viewport).

---

## Common Units

### 1. px (Pixels) - Absolute

Fixed unit based on screen pixels.

```css
div {
  width: 200px;
  height: 100px;
  border: 1px solid black;
}
```

**Characteristics:**

- Always the same size on same screen
- Does not scale with user preferences
- Good for: borders, shadows, precise measurements

---

### 2. % (Percentage) - Relative

Relative to parent element's size.

```css
.container {
  width: 80%;        /* 80% of parent width */
}

.half {
  width: 50%;        /* Half of parent width */
}
```

**Characteristics:**

- Changes based on parent size
- Good for: responsive layouts, flexible containers

**Example:**

```css
.parent {
  width: 1000px;
}

.child {
  width: 50%;        /* Results in 500px */
}
```

---

### 3. em - Relative

Relative to the parent element's font size.

```css
.parent {
  font-size: 16px;
}

.child {
  font-size: 1.5em;      /* 24px (16 x 1.5) */
  padding: 1em;          /* 24px (based on own font-size) */
}
```

**Characteristics:**

- Compounds when nested (can be unpredictable)
- Good for: component-based scaling

**Compounding Example:**

```css
.level-1 { font-size: 1.5em; }    /* 24px if root is 16px */
.level-2 { font-size: 1.5em; }    /* 36px (24 x 1.5) */
.level-3 { font-size: 1.5em; }    /* 54px (36 x 1.5) */
```

---

### 4. rem (Root em) - Relative

Relative to the root (html) element's font size.

```css
html {
  font-size: 16px;       /* Root font size */
}

h1 {
  font-size: 2rem;       /* 32px (16 x 2) */
}

p {
  font-size: 1rem;       /* 16px */
  margin: 1.5rem;        /* 24px */
}
```

**Characteristics:**

- Always relative to root, not parent
- More predictable than em
- Good for: consistent sizing, accessibility

---

### 5. vw (Viewport Width) - Relative

Percentage of viewport (browser window) width.

```css
.hero {
  width: 100vw;          /* Full viewport width */
  font-size: 5vw;        /* Scales with screen width */
}
```

**1vw = 1% of viewport width**

---

### 6. vh (Viewport Height) - Relative

Percentage of viewport height.

```css
.fullscreen {
  height: 100vh;         /* Full viewport height */
}

.half-screen {
  height: 50vh;
}
```

**1vh = 1% of viewport height**

---

## Unit Comparison

|Unit|Type|Relative To|Best For|
|---|---|---|---|
|px|Absolute|Screen|Borders, shadows, fixed elements|
|%|Relative|Parent element|Flexible layouts|
|em|Relative|Parent font-size|Component scaling|
|rem|Relative|Root font-size|Consistent sizing|
|vw|Relative|Viewport width|Full-width elements|
|vh|Relative|Viewport height|Full-height sections|

---

## When to Use Each Unit

### Use px for:

- Borders
- Box shadows
- Small fixed spacing
- Media query breakpoints

### Use % for:

- Container widths
- Responsive images
- Flexible grid columns

### Use rem for:

- Font sizes
- Spacing (margin, padding)
- Consistent component sizing

### Use em for:

- Component-specific scaling
- Button padding relative to text

### Use vw/vh for:

- Full-screen sections
- Viewport-based typography

---

## Practical Examples

### Responsive Container

```css
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
```

### Scalable Typography

```css
html {
  font-size: 16px;
}

h1 { font-size: 2.5rem; }    /* 40px */
h2 { font-size: 2rem; }      /* 32px */
h3 { font-size: 1.5rem; }    /* 24px */
p { font-size: 1rem; }       /* 16px */
```

### Full-Height Hero Section

```css
.hero {
  height: 100vh;
  width: 100%;
  padding: 2rem;
}
```

---

## Best Practices

- Use relative units for responsive design
- Set a base font-size on html element
- Prefer rem over em for predictability
- Use px only for fixed measurements
- Combine units appropriately for flexibility

---

## Related Notes

- [[CSS Fonts]]
- [[CSS Box Model]]
- [[Flexbox Basics]]

---

#module1 #css #units #responsive #day2