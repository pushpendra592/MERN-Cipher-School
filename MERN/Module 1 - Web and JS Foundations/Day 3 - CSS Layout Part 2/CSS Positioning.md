## Overview

The `position` property controls how an element is positioned in the document flow and relative to other elements.

---

## Position Values

### 1. static (Default)

Element follows normal document flow. Top, right, bottom, left, and z-index have no effect.

```css
.element {
  position: static;
}
```

---

### 2. relative

Element is positioned relative to its normal position. Original space is preserved.

css

```css
.element {
  position: relative;
  top: 10px;      /* Moves down 10px from normal position */
  left: 20px;     /* Moves right 20px from normal position */
}
```

**Characteristics:**

- Element stays in document flow
- Original space is preserved
- Creates positioning context for absolute children

---

### 3. absolute

Element is removed from document flow and positioned relative to nearest positioned ancestor.

css

```css
.parent {
  position: relative;  /* Creates positioning context */
}

.child {
  position: absolute;
  top: 50px;
  left: 50px;
}
```

**Characteristics:**

- Removed from document flow
- Does not take up space
- Positioned relative to nearest positioned ancestor
- If no positioned ancestor, uses document body

---

### 4. fixed

Element is positioned relative to the viewport. Stays in place during scroll.

css

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
```

**Characteristics:**

- Removed from document flow
- Positioned relative to viewport
- Does not move when page scrolls
- Useful for sticky headers, floating buttons

---

### 5. sticky

Hybrid of relative and fixed. Toggles between them based on scroll position.

css

```css
.header {
  position: sticky;
  top: 20px;
}
```

**Characteristics:**

- Behaves like relative until scroll threshold
- Becomes fixed when threshold is reached
- Stays within parent container
- Requires at least one of: top, right, bottom, left

---

## Position Comparison

|Position|In Flow|Positioned To|Scrolls|
|---|---|---|---|
|static|Yes|N/A|Yes|
|relative|Yes|Its normal position|Yes|
|absolute|No|Positioned ancestor|Yes|
|fixed|No|Viewport|No|
|sticky|Yes/No|Viewport (at threshold)|Hybrid|

---

## Z-index

Controls stacking order of positioned elements. Higher values appear on top.

css

```css
.back {
  position: relative;
  z-index: 1;
}

.front {
  position: relative;
  z-index: 10;    /* Appears above .back */
}
```

**Rules:**

- Only works on positioned elements (not static)
- Higher z-index appears on top
- Elements with same z-index stack by DOM order
- Creates stacking context

---

## Practical Examples

### Centered Modal

css

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  position: relative;
  background: white;
  padding: 20px;
}
```

### Fixed Navigation

css

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Add padding to body to prevent content overlap */
body {
  padding-top: 60px;
}
```

### Sticky Header

css

```css
.section-header {
  position: sticky;
  top: 0;
  background: white;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
```

### Badge on Card

css

```css
.card {
  position: relative;
  padding: 20px;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: red;
  color: white;
  padding: 5px 10px;
  border-radius: 50%;
}
```

### Tooltip

css

```css
.tooltip-container {
  position: relative;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip-container:hover .tooltip {
  opacity: 1;
}
```

---

## Common Patterns

### Center Absolutely

css

```css
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Full Screen Overlay

css

```css
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* or */
  inset: 0;
}
```

### Stretch to Fill Parent

css

```css
.parent {
  position: relative;
}

.fill {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
```

---

## Related Notes

- [[CSS Box Model]]
- [[Flexbox Basics]]
- [[CSS Grid Basics]]

---

#module1 #css #positioning #layout #day3