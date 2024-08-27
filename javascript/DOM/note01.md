# The DOM (Document Object Model)

- HTML DOM methods are **actions** you can perform (on HTML element).

- HTML DOM properties are **value** (of HTML Elements) that you can set or change.

## The DOM Programming Interface

- The HTML DOM can be accessed with JavaScript (and with other programming languages).

- In the DOM, all HTML elements are defined as **objects**.

- The Programming interface is the properties and methods for each object.

- A **property** is a value that you can get or set (like changing the content of an HTML element).

- A **method** is an action you can do (like add or delete an HTML element).

**Example**:

```
 <html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>
```

- In the example, the `getElementById` is a **method**, while `innerHTML` is a **property**.

### The getElementById Method

- The most common way to use an HTML element is to use the `id` of the element.

### The innerHTML Property

- The easiest way to get the content of an element is by using the `innerHTML` property.

- The `innerHTML` property is useful for getting or replacing the content of HTML elements.

- The `innerHTML` property can be used to get or change any HTML element, including `<html>` and `<body>`.

## JavaScript HTML DOM Document

- The HTML DOM document object is the owner of all other objects in your web page.

### The HTML DOM Document Object

- The document object represents your web page.

- For accessing any element in an HTML page, we can access by document object.

### Finding HTML Elements

| **Method** | **Description** |
|------------|-----------------|
| document.getElementById(id) | Find an element by element id |
| **document.getElementByTagName(name) | Find elements by tag name |
| **document.getElementByClassName(name) | Find elements by class name |
