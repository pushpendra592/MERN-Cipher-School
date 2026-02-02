## What is HTML

**HTML** stands for HyperText Markup Language

| Term | Meaning |
|------|---------|
| HyperText | Text with links connecting documents |
| Markup | Content marked with tags to define structure |
| Language | A standardized system for communication |

---

## Purpose of HTML

HTML creates the **structure and layout** of webpages. It organizes content so browsers and people can understand what each element is.

---

## Key Facts

- File extension: ```.html``` (e.g., index.html, about.html, contact.html)
- Built with **elements** and **tags**
- Tags define what each piece of content represents

---

## Element Anatomy

```html
<tagname>Content</tagname>
```

| Part        | Description                          |
| ----------- | ------------------------------------ |
| Opening Tag | ```<tagname>``` - starts the element |
| Content     | The text or nested elements inside   |
| Closing Tag | ```</tagname>``` - ends the element  |
### Example

```html
<p>This is a paragraph</p>
```

---

## HTML Document Structure

### Boilerplate Template

```html
<!DOCTYPE html>
<html>
	<head>
	    <title>Page Title</title>
	  </head>
	<body>
	    <h1>Hello World!</h1>
	</body>
</html>
```

### Structure Breakdown

| Element               | Purpose                                           |
| --------------------- | ------------------------------------------------- |
| ```<!DOCTYPE html>``` | Declares HTML5 document type (must be first line) |
| ```<html>```          | Root element wrapping entire document             |
| ```<head>```          | Contains metadata (not visible on page)           |
| ```<body>```          | Contains all visible content                      |

### Head Section Contents

| Tag            | Purpose                               |
| -------------- | ------------------------------------- |
| ```<title>```  | Browser tab title                     |
| ```<meta>```   | Character encoding, viewport settings |
| ```<link>```   | External stylesheets, fonts           |
| ```<script>``` | JavaScript files                      |

---
## Next Topic
- [[Semantic HTML]]

---

#module1 #html #fundamentals #day1