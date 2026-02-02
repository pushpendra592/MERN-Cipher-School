## What is Display

The display property controls how an element behaves in the document flow and how it affects surrounding elements.

---

## Display Values

### 1. block

Takes full available width and starts on a new line.

```css
div {
  display: block;
}
```

**Characteristics:**

- Takes 100% width of parent by default
- Starts on a new line
- Can set width and height
- Stacks vertically

**Default block elements:** div, p, h1-h6, header, footer, section, article, form

**Example:**

```css
.box {
  display: block;
  width: 200px;
  height: 100px;
  background: lightblue;
}
```

---

### 2. inline

Takes only the space needed and flows within text.

```css
span {
  display: inline;
}
```

**Characteristics:**

- Takes only content width
- Does not start on new line
- Cannot set width and height
- Flows with text horizontally

**Default inline elements:** span, a, strong, em, img, button

**Example:**

```css
.highlight {
  display: inline;
  background: yellow;
  /* width and height have no effect */
}
```

---

### 3. inline-block

Flows inline but allows width and height settings.

```css
.nav-item {
  display: inline-block;
  width: 100px;
  height: 40px;
}
```

**Characteristics:**

- Does not start on new line
- Can set width and height
- Respects vertical margin and padding
- Best of both block and inline

**Use cases:** Navigation items, buttons, badges

**Example:**

```css
.button {
  display: inline-block;
  width: 120px;
  height: 40px;
  padding: 10px 20px;
  text-align: center;
}
```

---

### 4. none

Hides the element completely.

```css
.hidden {
  display: none;
}
```

**Characteristics:**

- Element is removed from document flow
- Takes no space on page
- Not accessible to screen readers

**Difference from visibility: hidden:**

|Property|Element Hidden|Takes Space|
|---|---|---|
|display: none|Yes|No|
|visibility: hidden|Yes|Yes|

---

### 5. flex

Enables Flexbox layout on the container.

```css
.container {
  display: flex;
}
```

See [[Flexbox Basics]] for details.

---

### 6. grid

Enables CSS Grid layout on the container.

```css
.container {
  display: grid;
}
```

Covered in Day 3.

---

## Display Comparison

|Value|New Line|Set Width/Height|Use Case|
|---|---|---|---|
|block|Yes|Yes|Containers, sections|
|inline|No|No|Text elements|
|inline-block|No|Yes|Buttons, nav items|
|none|-|-|Hide elements|
|flex|-|-|Flexible layouts|
|grid|-|-|Grid layouts|

---

## Practical Examples

### Navigation Menu (inline-block)

```css
nav a {
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
}
```

### Toggle Visibility

```css
.modal {
  display: none;
}

.modal.active {
  display: block;
}
```

### Block to Inline

```css
li {
  display: inline;      /* Makes list items flow horizontally */
}
```

---

## Related Notes

- [[Flexbox Basics]]
- [[CSS Box Model]]

---

#module1 #css #display #layout #day2