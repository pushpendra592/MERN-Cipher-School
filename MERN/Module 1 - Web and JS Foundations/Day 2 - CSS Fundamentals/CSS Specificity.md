## What is Specificity

Specificity is the system CSS uses to determine which style rules apply when multiple rules target the same element. Higher specificity wins.

---

## Specificity Hierarchy

From highest to lowest priority:

| Priority | Type | Example |
|----------|------|---------|
| 1 (Highest) | Inline styles | `style="color: red;"` |
| 2 | ID selectors | `#myId` |
| 3 | Class selectors | `.myClass` |
| 4 (Lowest) | Element selectors | `p`, `div`, `h1` |

---

## Specificity Example

**HTML:**

```html
<p id="main" class="text" style="color: green;">Hello</p>
```

**CSS:**

```css
#main { color: blue; }      /* ID - high specificity */
.text { color: red; }       /* Class - medium specificity */
p { color: black; }         /* Element - low specificity */
```

**Result:** Text will be **green** because inline style has highest priority.

If we remove the inline style:

- Text would be **blue** (ID wins over class and element)

---

## Calculating Specificity

Specificity is calculated as a score with format: (inline, IDs, classes, elements)

| Selector              | Score   | Calculation           |
| --------------------- | ------- | --------------------- |
| ```p```               | 0,0,0,1 | 1 element             |
| ```.card```           | 0,0,1,0 | 1 class               |
| ```#header```         | 0,1,0,0 | 1 ID                  |
| ```#nav .link```      | 0,1,1,0 | 1 ID + 1 class        |
| ```div.card.active``` | 0,0,2,1 | 2 classes + 1 element |

Higher total score wins.

---

## Specificity Rules

### Rule 1: More Specific Wins

```css
.container p {
  color: blue;    /* Specificity: 0,0,1,1 */
}

p {
  color: red;     /* Specificity: 0,0,0,1 */
}
```

Result: Paragraphs inside .container will be blue.

---

### Rule 2: Later Rule Wins (Same Specificity)

```css
p {
  color: blue;
}

p {
  color: red;    /* This wins - comes later */
}
```

Result: Paragraphs will be red.

---

### Rule 3: !important Overrides All

```css
p {
  color: red !important;    /* Wins over everything */
}

#main {
  color: blue;
}
```

**Warning:** Avoid using !important as it makes debugging difficult.

---

## Best Practices

- **Prefer classes over IDs** for easier maintenance
- Keep specificity low and consistent
- Avoid inline styles for maintainability
- Never use !important unless absolutely necessary
- Use consistent naming conventions (BEM, etc.)

---

## Common Mistakes

|Mistake|Problem|Solution|
|---|---|---|
|Overusing IDs|Hard to override later|Use classes instead|
|Using !important|Creates specificity wars|Refactor selectors|
|Deep nesting|High specificity, fragile code|Keep selectors shallow|

---
### [[CSS Specificity - Quick Problems ]]

---
## Related Notes

- [[CSS Selectors]]
- [[CSS Fundamentals]]

---

#module1 #css #specificity #day2