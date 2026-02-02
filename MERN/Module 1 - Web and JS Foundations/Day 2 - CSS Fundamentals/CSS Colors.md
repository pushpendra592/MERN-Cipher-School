## Overview

CSS provides multiple ways to define colors for text, backgrounds, borders, and other properties.

---

## Color Definition Methods

### 1. Color Names

Simple predefined color keywords.

```css
p {
  color: red;
  background-color: lightblue;
}
```

**Common color names:**

- red, blue, green, yellow, orange, purple
- black, white, gray
- lightgray, darkgray
- coral, teal, navy, maroon

**Pros:** Easy to read and remember  
**Cons:** Limited options (around 140 named colors)

---

### 2. Hexadecimal (Hex) Values

Six-digit codes representing RGB values.

```css
h1 {
  color: #FF5733;        /* Orange-red */
  background: #0000FF;   /* Blue */
}
```

**Format:** #RRGGBB

- RR = Red (00-FF)
- GG = Green (00-FF)
- BB = Blue (00-FF)

**Shorthand:** #RGB expands to #RRGGBB

- #F00 = #FF0000 (red)
- #0F0 = #00FF00 (green)
- #00F = #0000FF (blue)

**Common Hex Values:**

|Color|Hex|
|---|---|
|Black|#000000|
|White|#FFFFFF|
|Red|#FF0000|
|Green|#00FF00|
|Blue|#0000FF|
|Gray|#808080|

---

### 3. RGB Values

Defines colors using Red, Green, Blue values (0-255).

```css
div {
  color: rgb(255, 87, 51);        /* Orange */
  background: rgb(0, 0, 255);    /* Blue */
}
```

**Format:** rgb(red, green, blue)

- Each value ranges from 0 to 255
- 0 = no color, 255 = full color

---

### 4. RGBA Values

RGB with Alpha (transparency) channel.

```css
div {
  background: rgba(255, 0, 0, 0.5);    /* 50% transparent red */
}
```

**Format:** rgba(red, green, blue, alpha)

- Alpha ranges from 0 (fully transparent) to 1 (fully opaque)

---

### 5. HSL Values

Defines colors using Hue, Saturation, Lightness.

```css
p {
  color: hsl(120, 100%, 50%);    /* Pure green */
}
```

**Format:** hsl(hue, saturation, lightness)

- Hue: 0-360 (color wheel degree)
- Saturation: 0%-100% (gray to full color)
- Lightness: 0%-100% (black to white)

---

## Color Comparison

| Method | Example                      | Best For             |
| ------ | ---------------------------- | -------------------- |
| Name   | ```red```                    | Quick prototyping    |
| Hex    | ```#FF5733```                | Design consistency   |
| RGB    | ```rgb(255, 87, 51)```       | Dynamic colors       |
| RGBA   | ```rgba(255, 87, 51, 0.5)``` | Transparency effects |
| HSL    | ```hsl(12, 100%, 60%)```     | Color variations     |

---

## Color Properties

```css
.element {
  color: #333;                    /* Text color */
  background-color: #f5f5f5;      /* Background */
  border-color: #ddd;             /* Border */
  outline-color: blue;            /* Outline */
}
```

---

## Best Practices

- Use consistent colors throughout the site
- Create a color palette with CSS variables
- Ensure sufficient contrast for readability
- Test colors for accessibility (color blindness)

### CSS Variables for Colors

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #333;
}

h1 {
  color: var(--primary-color);
}
```

---
## Next Topic
- [[CSS Fonts]]

---