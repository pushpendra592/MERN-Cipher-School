
### Elements

```text
div        → <div></div>
p          → <p></p>
```

### Nesting (`>`)

```text
div>p>span
```

```html
<div>
  <p><span></span></p>
</div>
```

### Siblings (`+`)

```text
h1+p
```

```html
<h1></h1>
<p></p>
```

### Multiplication (`*`)

```text
li*3
```

```html
<li></li>
<li></li>
<li></li>
```

---

## 🔹 IDs & Classes

### ID (`#`)

```text
div#header
```

```html
<div id="header"></div>
```

### Class (`.`)

```text
div.container
```

```html
<div class="container"></div>
```

### Multiple classes

```text
div.box.red.shadow
```

```HTML
<div class ="box red shadow"></div>
```
---

## 🔹 Attributes (`[]`)

```text
a[href="https://example.com" target="_blank"]
```

```html
<a href="https://example.com" target="_blank"></a>
```

---

## 🔹 Text Content (`{}`)

```text
p{Hello World}
```

```html
<p>Hello World</p>
```

---

## 🔹 Numbering (`$`)

```text
ul>li.item$*3
```

```html
<ul>
	<li class="item1"></li>
	<li class="item2"></li>
	<li class="item3"></li>
</ul>
```

Start from another number:

```text
li.item$@5*3
```

```HTML
<li class="item5"></li>
<li class="item6"></li>
<li class="item7"></li>
```

---

## 🔹 Grouping (`()`)

```text
div>(header>h1)+(main>p)+footer
```

```HTML
<div>
	<header>
		<h1></h1>
	</header>
	<main>
		<p></p>
	</main>
	<footer></footer>
</div>
```
---

## 🔹 Implicit Tags

```text
.container
```

```HTML
<div class="container"></div>
```

---

```text
ul>.item*3
```

```HTML
<ul>
	<li class="item"></li>
	<li class="item"></li>
	<li class="item"></li>
</ul>
```

---

## 🔹 HTML Boilerplate

```text
!
```

or

```text
html:5
```

---

## 🔹 Common Shortcuts

```text
form>input:text+input:email+input:submit
```

```text
table>tr*3>td*4
```

---

## 🔹 CSS Emmet (examples)

```text
m10        → margin: 10px;
p20-10     → padding: 20px 10px;
d:f        → display: flex;
jc:c       → justify-content: center;
ai:c       → align-items: center;
```

---

## 🔹 Real-world Example

```text
nav>ul>li*3>a{Link $}
```
