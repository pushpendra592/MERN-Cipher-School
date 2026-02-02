## Overview

Font properties control the appearance of text, including typeface, size, weight, and style.

---

## Font Properties

### 1. font-family

Sets the typeface for text.

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-family: "Times New Roman", Georgia, serif;
}
```

**Key Points:**

- Provide multiple fonts as fallbacks
- Browser tries each font in order until one is available
- End with a generic family (serif, sans-serif, monospace)
- Use quotes for font names with spaces

**Generic Font Families:**

|Family|Description|Example|
|---|---|---|
|serif|Has decorative strokes|Times New Roman|
|sans-serif|Clean, no strokes|Arial, Helvetica|
|monospace|Fixed-width characters|Courier New|
|cursive|Script-like|Comic Sans MS|
|fantasy|Decorative|Impact|

---

### 2. font-size

Controls the size of text.

```css
p {
  font-size: 16px;
}

h1 {
  font-size: 2.5rem;
}

.small-text {
  font-size: 0.875em;
}
```

**Common Units:**

|Unit|Type|Description|
|---|---|---|
|px|Absolute|Fixed pixel size|
|em|Relative|Relative to parent font size|
|rem|Relative|Relative to root font size|
|%|Relative|Percentage of parent size|

**Recommended base size:** 14-16px for body text

---

### 3. font-weight

Controls text thickness (boldness).

```css
p {
  font-weight: normal;    /* or 400 */
}

strong {
  font-weight: bold;      /* or 700 */
}

.light {
  font-weight: 300;
}
```

**Weight Values:**

|Keyword|Numeric|
|---|---|
|lighter|-|
|normal|400|
|bold|700|
|bolder|-|

Numeric values: 100, 200, 300, 400, 500, 600, 700, 800, 900

---

### 4. font-style

Sets italic or oblique text.

```css
em {
  font-style: italic;
}

.normal {
  font-style: normal;
}
```

**Values:** normal, italic, oblique

---

### 5. line-height

Controls spacing between lines of text.

```css
p {
  line-height: 1.5;        /* 1.5 times font size */
}

.tight {
  line-height: 1.2;
}

.loose {
  line-height: 2;
}
```

**Recommended:** 1.4 to 1.6 for body text readability

---

### 6. letter-spacing

Controls space between characters.

```css
h1 {
  letter-spacing: 2px;
}

.tight {
  letter-spacing: -0.5px;
}
```

---

### 7. text-transform

Changes text capitalization.

```css
.uppercase {
  text-transform: uppercase;
}

.lowercase {
  text-transform: lowercase;
}

.capitalize {
  text-transform: capitalize;    /* First Letter Of Each Word */
}
```

---

## Font Shorthand

Combine multiple font properties in one declaration.

```css
p {
  font: italic bold 16px/1.5 Arial, sans-serif;
}

/* Equivalent to: */
p {
  font-style: italic;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
  font-family: Arial, sans-serif;
}
```

**Order:** style weight size/line-height family

---

## Web Fonts (Google Fonts)

Import external fonts for more options.

**HTML Method:**

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

**CSS Method:**

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```

---

## Best Practices

- Use readable fonts for body text (14-16px minimum)
- Limit to 2-3 font families per site
- Ensure sufficient line-height for readability
- Always provide fallback fonts
- Test fonts across different devices

---

## Related Notes

- [[CSS Colors]]
- [[CSS Units]]

---

#module1 #css #fonts #typography #day2