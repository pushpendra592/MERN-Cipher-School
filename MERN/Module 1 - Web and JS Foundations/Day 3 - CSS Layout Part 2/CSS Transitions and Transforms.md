## CSS Transitions

Transitions provide a way to smoothly animate changes between property values over a specified duration.

---

## Transition Syntax

```css
element {
  transition: property duration timing-function delay;
}
```

|Property|Description|
|---|---|
|property|CSS property to animate|
|duration|Time for transition (seconds or milliseconds)|
|timing-function|Speed curve of transition|
|delay|Time before transition starts|

---

## Basic Transition Example

css

```css
button {
  background-color: pink;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #3498db;
}
```

---

## Transition Properties

### Single Property

css

```css
.element {
  transition: background-color 0.3s;
}
```

### Multiple Properties

css

```css
.element {
  transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
}
```

### All Properties

css

```css
.element {
  transition: all 0.3s ease;
}
```

### Individual Properties

css

```css
.element {
  transition-property: transform, opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
  transition-delay: 0.1s;
}
```

---

## Timing Functions

|Function|Description|
|---|---|
|ease|Slow start, fast middle, slow end (default)|
|linear|Constant speed|
|ease-in|Slow start, fast end|
|ease-out|Fast start, slow end|
|ease-in-out|Slow start and end|
|cubic-bezier(n,n,n,n)|Custom curve|

css

```css
.element { transition-timing-function: ease; }
.element { transition-timing-function: linear; }
.element { transition-timing-function: ease-in; }
.element { transition-timing-function: ease-out; }
.element { transition-timing-function: ease-in-out; }
.element { transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); }
```

---

## Expanding Box Example

css

```css
.expanding-box {
  width: 100px;
  height: 50px;
  background-color: coral;
  transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
}

.expanding-box:hover {
  width: 150px;
  background-color: #ff6347;
}
```

---

## CSS Transforms

Transforms modify the appearance of an element in 2D or 3D space without affecting document flow.

---

## Transform Functions

### translate

Moves element from its current position.

css

```css
.element {
  transform: translate(20px, 40px);      /* X, Y */
  transform: translateX(20px);            /* X only */
  transform: translateY(40px);            /* Y only */
}
```

### scale

Resizes element.

css

```css
.element {
  transform: scale(1.5);                  /* Both axes */
  transform: scaleX(2);                   /* Width only */
  transform: scaleY(0.5);                 /* Height only */
  transform: scale(1.5, 2);               /* X, Y */
}
```

### rotate

Rotates element.

css

```css
.element {
  transform: rotate(45deg);               /* Clockwise */
  transform: rotate(-45deg);              /* Counter-clockwise */
}
```

### skew

Skews element along axes.

css

```css
.element {
  transform: skew(30deg, 20deg);          /* X, Y */
  transform: skewX(30deg);                /* X only */
  transform: skewY(20deg);                /* Y only */
}
```

### Multiple Transforms

css

```css
.element {
  transform: translate(20px, 40px) rotate(45deg) scale(1.5);
}
```

---

## Combining Transitions and Transforms

### Scale on Hover

css

```css
.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: transform 0.3s ease-in-out;
}

.box:hover {
  transform: scale(1.2);
}
```

### Rotate and Color Change

css

```css
.card {
  width: 200px;
  height: 150px;
  background-color: #3498db;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.card:hover {
  transform: rotate(15deg);
  background-color: #e74c3c;
}
```

### Skew with Opacity

css

```css
.element {
  width: 150px;
  height: 100px;
  background-color: #2ecc71;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.element:hover {
  transform: skew(20deg);
  opacity: 0.8;
}
```

### Slide Effect

css

```css
.image {
  width: 200px;
  height: 150px;
  transition: transform 0.3s ease-in-out;
}

.image:hover {
  transform: translateX(20px);
}
```

### Rotate and Scale on Click

css

```css
.button {
  padding: 10px;
  background-color: #3498db;
  transition: transform 0.3s ease-in-out;
}

.button:active {
  transform: rotate(360deg) scale(1.2);
}
```

---

## Transform Origin

Sets the point around which transforms are applied.

css

```css
.element {
  transform-origin: center;            /* Default */
  transform-origin: top left;
  transform-origin: 50% 50%;
  transform-origin: 0 0;
}
```

---

## Practical Examples

### Button Hover Effect

css

```css
.btn {
  padding: 12px 24px;
  background: #3498db;
  border: none;
  color: white;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.btn:active {
  transform: translateY(0);
}
```

### Card Lift Effect

css

```css
.card {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}
```

### Image Zoom

css

```css
.image-container {
  overflow: hidden;
}

.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}
```

---

## Related Notes

- [[CSS Animations]]
- [[Flexbox Basics]]

---

#module1 #css #transitions #transforms #day3