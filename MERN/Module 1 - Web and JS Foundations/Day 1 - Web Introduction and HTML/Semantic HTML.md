# Semantic HTML

## What are Semantic Tags

Semantic tags describe the **meaning** and **role** of the content they contain. They tell both browsers and developers what purpose each section serves.

---

## Why Use Semantic HTML

| Benefit | Description |
|---------|-------------|
| Readability | Easier to understand code structure |
| Accessibility | Screen readers interpret content better |
| SEO | Search engines rank pages more accurately |
| Best Practice | Preferred over using div everywhere |

---

## Common Semantic Tags

### header

Represents the top section of a page.

**Typical content:** Logo, navigation, site title

```html
<header>
  <h1>My Website</h1>
  <p>Welcome to my site!</p>
</header>
````

---
### nav

Represents navigation links.

**Typical content:** Links to different pages or sections

```html
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>
```

---

### section

Groups related content together.

**Typical content:** Thematic grouping of content

```html
<section>
  <h2>Features</h2>
  <p>Our amazing features...</p>
</section>
```

---

### article

Represents independent, self-contained content.

**Typical content:** Blog posts, news articles, reviews

```html
<article>
  <h2>How to Learn HTML</h2>
  <p>HTML is easy to learn...</p>
</article>
```

---

### footer

Represents the bottom section of a page.

**Typical content:** Copyright, contact info, links

```html
<footer>
  <p>Copyright 2025 My Website. All rights reserved.</p>
</footer>
```

---

## Page Structure Example

```html
<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>

<section>
  <h2>Features</h2>
  <p>Content here...</p>
</section>

<article>
  <h2>Blog Post Title</h2>
  <p>Article content...</p>
</article>

<footer>
  <p>Copyright 2025</p>
</footer>
```

---

## Avoid This Pattern

Before semantic tags, developers used div for everything:

```html
<!-- Bad Practice -->
<div>Header stuff</div>
<div>Navigation</div>
<div>Content</div>
<div>Footer</div>
```

This does not convey meaning. Use semantic tags instead.

---
## Next Topic
- [[HTML Text and Media]]

---

#module1 #html #semantic #accessibility #day1