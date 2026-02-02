## Headings

Headings create titles and subtitles using h1 to h6 tags.

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
<h4>Level 4</h4>
<h5>Level 5</h5>
<h6>Level 6</h6>
```

### Heading Hierarchy

| Tag                     | Size    | Usage                               |
| ----------------------- | ------- | ----------------------------------- |
| ```<h1>```              | Largest | Main page title (use once per page) |
| ```<h2>```              | Large   | Section headings                    |
| ```<h3>```              | Medium  | Subsection headings                 |
| ```<h4>``` - ```<h6>``` | Smaller | Further subdivisions                |

### Best Practices

- Use only **one** h1 per page
- Maintain hierarchy (do not skip from h1 to h3)
- Important for SEO and screen readers

---

## Paragraphs

The p tag creates blocks of text.

```html
<p>This is a paragraph of text.</p>
<p>Each p tag creates a new paragraph block.</p>
```

Browser automatically adds space before and after paragraphs.

---

## Links (Anchor Tags)

The a tag creates clickable links.

```html
<a href="https://google.com">Go to Google</a>
```

### Link Types

| Type     | Example                   | Description                  |
| -------- | ------------------------- | ---------------------------- |
| Absolute | href="https://google.com" | Full URL to external site    |
| Relative | href="about.html"         | Path to file on same website |
| Anchor   | href="#section-id"        | Jump to section on same page |

### Examples

```html
<!-- External link -->
<a href="https://google.com">Google</a>

<!-- Internal link -->
<a href="about.html">About Page</a>

<!-- Anchor link -->
<a href="#contact">Jump to Contact Section</a>
```

---

## Images

The img tag embeds images in the webpage.

```html
<img src="photo.jpg" alt="Description of image">
```

### Attributes

|Attribute|Purpose|Required|
|---|---|---|
|src|Path to image file|Yes|
|alt|Alternative text for accessibility|Yes|
|width|Image width|No|
|height|Image height|No|

### Notes

- img is a **self-closing tag** (no closing tag needed)
- Always include alt text for accessibility
- Use descriptive alt text that explains the image

### Examples

```html
<!-- Local image -->
<img src="images/logo.png" alt="Company logo">

<!-- External image -->
<img src="https://example.com/photo.jpg" alt="Example photo">

<!-- With dimensions -->
<img src="photo.jpg" alt="Sunset" width="300" height="200">
```

---
## Next Topic
- [[HTML Tables]]

---

#module1 #html #text #images #links #day1