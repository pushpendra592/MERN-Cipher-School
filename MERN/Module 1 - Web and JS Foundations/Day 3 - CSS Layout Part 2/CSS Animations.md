## What are CSS Animations

Animations allow you to create multi-step, keyframe-based animations that can run automatically without requiring user interaction.

---

## Animation Syntax

### Keyframes Definition

```css
@keyframes animation-name {
  from {
    /* Starting styles */
  }
  to {
    /* Ending styles */
  }
}

/* Or with percentages */
@keyframes animation-name {
  0% {
    /* Starting styles */
  }
  50% {
    /* Middle styles */
  }
  100% {
    /* Ending styles */
  }
}
```

### Animation Property

css

```css
element {
  animation: name duration timing-function delay iteration-count direction fill-mode;
}
```

|Property|Description|
|---|---|
|name|Name of keyframes|
|duration|How long animation takes|
|timing-function|Speed curve|
|delay|Time before animation starts|
|iteration-count|How many times to repeat (number or infinite)|
|direction|Normal, reverse, alternate|
|fill-mode|Styles before/after animation|

---

## Animation Properties

### Individual Properties

css

```css
.element {
  animation-name: slide-in;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: forwards;
}
```

### Shorthand

css

```css
.element {
  animation: slide-in 1s ease-out 0.5s infinite alternate forwards;
}
```

---

## Animation Direction Values

|Value|Description|
|---|---|
|normal|Plays forward (default)|
|reverse|Plays backward|
|alternate|Forward, then backward|
|alternate-reverse|Backward, then forward|

---

## Animation Fill Mode Values

|Value|Description|
|---|---|
|none|No styles applied outside animation|
|forwards|Retains end state after animation|
|backwards|Applies start state during delay|
|both|Applies both forwards and backwards|

---

## Basic Animation Examples

### Slide In

css

```css
@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.slide-in-element {
  animation: slide-in 1s ease-out;
}
```

### Fade In

css

```css
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-in-text {
  animation: fadeIn 2s ease-in-out;
}
```

### Scale Pulse

css

```css
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.scale-element {
  width: 100px;
  height: 100px;
  background-color: coral;
  animation: scale 2s infinite ease-in-out;
}
```

---

## Multi-Step Animation

css

```css
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(50%);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-element {
  animation: slide-in 2s ease-out;
}
```

---

## Practical Animation Examples

### Rotate Continuously

css

```css
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotate-element {
  animation: rotate 3s infinite linear;
}
```

### Bounce Effect

css

```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.bounce-ball {
  width: 50px;
  height: 50px;
  background-color: green;
  border-radius: 50%;
  animation: bounce 2s infinite ease-in-out;
}
```

### Color Cycle

css

```css
@keyframes colorCycle {
  0% { color: red; }
  25% { color: blue; }
  50% { color: yellow; }
  75% { color: green; }
  100% { color: red; }
}

.color-cycle-text {
  font-size: 24px;
  font-weight: bold;
  animation: colorCycle 4s infinite linear;
}
```

### Pulse Circle

css

```css
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.pulse-circle {
  width: 100px;
  height: 100px;
  background-color: purple;
  border-radius: 50%;
  animation: pulse 3s infinite ease-in-out;
}
```

### Shake Effect

css

```css
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25%, 75% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
}

.shake-heading {
  font-size: 36px;
  font-weight: bold;
  animation: shake 2s infinite ease-in-out;
}
```

### Fading Background

css

```css
@keyframes fadeInBackground {
  0% {
    background-color: #ffcccb;
  }
  50% {
    background-color: #b3e0ff;
  }
  100% {
    background-color: #ffcccb;
  }
}

body {
  animation: fadeInBackground 4s infinite linear;
}
```

### Floating Clouds

css

```css
@keyframes floatClouds {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.cloud {
  width: 150px;
  height: 80px;
  background-image: url('cloud.png');
  background-size: cover;
  animation: floatClouds 10s infinite linear;
}
```

### Growing Bar

css

```css
@keyframes growBar {
  0% {
    height: 20px;
  }
  50% {
    height: 80px;
  }
  100% {
    height: 20px;
  }
}

.bar-chart {
  width: 50px;
  background-color: #3498db;
  animation: growBar 3s infinite ease-in-out;
}
```

---

## Scroll-Linked Animation (Modern)

Animations that progress based on scroll position.

css

```css
.element {
  animation: fade-in linear;
  animation-timeline: scroll();
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

**Note:** Browser support is still evolving for scroll-linked animations.

---

## Animation vs Transition

|Feature|Transition|Animation|
|---|---|---|
|Trigger|Requires state change (hover, class)|Can run automatically|
|Steps|Two states only|Multiple keyframes|
|Control|Limited|Full control|
|Looping|Not built-in|Built-in (iteration-count)|
|Use Case|Simple state changes|Complex animations|

---

## Best Practices

1. **Use transforms for performance** - Prefer transform and opacity over properties that trigger layout
    
2. **Keep animations subtle** - Avoid distracting users from content
    
3. **Respect user preferences:**
    

css

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

4. **Use appropriate timing** - Match animation speed to interaction importance
    
5. **Test on multiple devices** - Animations may perform differently on mobile
    

---

## Related Notes

- [[CSS Transitions and Transforms]]
- [[CSS Fundamentals]]

---

#module1 #css #animations #keyframes #day3