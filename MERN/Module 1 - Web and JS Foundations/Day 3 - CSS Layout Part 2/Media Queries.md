## What are Media Queries

Media Queries are CSS rules that apply different styles based on device characteristics like screen size, orientation, and resolution. They are essential for creating responsive web designs.

---

## Basic Syntax

```css
@media (condition) {
  /* CSS rules applied when condition is true */
}
```

**Example:**

css

```css
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

---

## Media Query Features

### Width-based Queries

#### max-width

Applies styles to screens **up to** a certain width.

css

```css
@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}
```

#### min-width

Applies styles to screens **at least** a certain width.

css

```css
@media (min-width: 1024px) {
  .container {
    width: 1000px;
  }
}
```

#### Exact width

css

```css
@media (width: 768px) {
  body {
    background-color: blue;
  }
}
```

---

### Height-based Queries

css

```css
/* Maximum height */
@media (max-height: 600px) {
  .navbar {
    padding: 5px;
  }
}

/* Minimum height */
@media (min-height: 800px) {
  .sidebar {
    position: fixed;
  }
}
```

---

### Orientation

css

```css
/* Portrait - taller than wide */
@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}

/* Landscape - wider than tall */
@media (orientation: landscape) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

### Other Features

css

```css
/* Aspect ratio */
@media (aspect-ratio: 16/9) {
  .video {
    width: 100%;
  }
}

/* Resolution */
@media (resolution: 300dpi) {
  body {
    font-size: 16px;
  }
}
```

---

## Combining Media Queries

### AND Operator

All conditions must be true.

css

```css
@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### OR Operator (comma)

Any condition can be true.

css

```css
@media (max-width: 480px), (orientation: portrait) {
  body {
    font-size: 14px;
  }
}
```

### NOT Operator

Negates the condition.

css

```css
@media not (max-width: 768px) {
  .navbar {
    display: flex;
  }
}
```

---

## Common Breakpoints

|Device|Width Range|
|---|---|
|Mobile|320px - 480px|
|Small Tablet|481px - 768px|
|Tablet/iPad|769px - 1024px|
|Desktop|1025px - 1440px|
|Large Desktop|1441px+|

---

## Mobile-First Approach (Recommended)

Start with mobile styles, enhance for larger screens using min-width.

css

```css
/* Base: Mobile */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 95%;
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 80%;
    padding: 40px;
  }
}
```

**Advantages:**

- Simpler and cleaner code
- Better performance on mobile
- Progressive enhancement

---

## Desktop-First Approach

Start with desktop styles, reduce for smaller screens using max-width.

css

```css
/* Base: Desktop */
.container {
  width: 80%;
  padding: 40px;
}

/* Tablet */
@media (max-width: 1024px) {
  .container {
    width: 95%;
    padding: 20px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 10px;
  }
}
```

---

## Practical Examples

### Responsive Navigation

css

```css
/* Mobile: Vertical menu */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
  .nav-item {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
}

/* Desktop: Horizontal menu */
@media (min-width: 769px) {
  .navbar {
    flex-direction: row;
    justify-content: space-around;
  }
  .nav-item {
    padding: 20px;
  }
}
```

### Responsive Grid

css

```css
/* Mobile: Single column */
@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}

/* Tablet: Two columns */
@media (min-width: 481px) and (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: Three columns */
@media (min-width: 769px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Responsive Typography

css

```css
body {
  font-size: 14px;
  line-height: 1.4;
}

h1 {
  font-size: 24px;
}

@media (min-width: 768px) {
  body {
    font-size: 16px;
    line-height: 1.6;
  }
  h1 {
    font-size: 32px;
  }
}

@media (min-width: 1024px) {
  body {
    font-size: 18px;
  }
  h1 {
    font-size: 42px;
  }
}
```

---

## Common Patterns

### Hide on Mobile

css

```css
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}
```

### Show on Mobile Only

css

```css
.mobile-only {
  display: none;
}

@media (max-width: 768px) {
  .mobile-only {
    display: block;
  }
}
```

### Change Layout Direction

css

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

---

## Best Practices

1. **Always include viewport meta tag:**

html

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

2. **Use mobile-first approach** for simpler queries and better performance
    
3. **Base breakpoints on content** not specific devices
    
4. **Test on actual devices** not just browser emulation
    
5. **Organize media queries** by grouping related styles
    
6. **Keep selectors specific** to avoid unintended overrides
    

---

## Debugging Media Queries

### Chrome DevTools

1. Open DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Select device or custom dimensions
4. Test responsive behavior

### Visual Testing

css

```css
@media (max-width: 768px) {
  .test {
    border: 5px solid red;  /* Visual indicator */
  }
}
```

---

## Related Notes

- [[Responsive Design Principles]]
- [[CSS Grid Basics]]
- [[Flexbox Basics]]

---

#module1 #css #media-queries #responsive #day3