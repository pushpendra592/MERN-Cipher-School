## What are Tables

Tables display **tabular data** (rows and columns) in an organized way.

---

## Table Tags

| Tag | Purpose |
|-----|---------|
| `<table>` | Container for entire table |
| `<tr>` | Table Row (horizontal line) |
| `<th>` | Table Header cell (bold, centered by default) |
| `<td>` | Table Data cell |

---

## Basic Structure

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

---
## Complete Example

html

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>30</td>
    <td>Los Angeles</td>
  </tr>
</table>
```

### Renders As

|Name|Age|City|
|---|---|---|
|Alice|25|New York|
|Bob|30|Los Angeles|

---

## When to Use Tables

### Appropriate Uses

- Displaying structured data
- Price lists
- Schedules
- Comparison charts
- Statistics

### Do Not Use For

- Page layout (use CSS Flexbox or Grid instead)
- Positioning elements
- Creating columns of content

---

## Additional Table Elements

| Tag             | Purpose                 |
| --------------- | ----------------------- |
| ```<thead>```   | Groups header rows      |
| ```<tbody>```   | Groups body rows        |
| ```<tfoot>```   | Groups footer rows      |
| ```<caption>``` | Table title/description |

### Example with Grouping

html

```html
<table>
  <caption>Employee List</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>Engineering</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>Marketing</td>
    </tr>
  </tbody>
</table>
```

---
## Next Topic
- [[HTML Forms]]

---

