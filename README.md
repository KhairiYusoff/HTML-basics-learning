# HTML

## 1. Definition

- HTML stands for Hyper Text Markup Language
- HTML is the standard markup language for creating Web pages
- HTML describes the structure of a Web page
- HTML elements tell the browser how to display the content

## 2. What is an HTML element?

An HTML element is defined by a start tag, some content, and an end tag:

`<tagname>` Content goes here... `</tagname>`

The HTML element is everything from the start tag to the end tag:

`<h1>`My First Heading`</h1>`

`<p>`My first paragraph.`</p>`

| Start Tag | Description | End Tag |
| --- | --- | --- |
| `<h1>` | My First Heading | `</h1>` |
| `<p>` | My first paragraph | `</p>` |
| `<br>` |	none | none |

Note: Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!

## 3. Web Browsers

The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.

A browser does not display the HTML tags, but uses them to determine how to display the document:

![example html display](my_1st_heading.png)

## 4. HTML Documents

All HTML documents must start with a document type declaration: `<!DOCTYPE html>`.

The HTML document itself begins with `<html>` and ends with `</html>`.

The visible part of the HTML document is between `<body>` and `</body>`.

## 5. The <!DOCTYPE> Declaration

The `<!DOCTYPE>` declaration represents the document type, and helps browsers to display web pages correctly.

It must only appear once, at the top of the page (before any HTML tags).

The `<!DOCTYPE>` declaration is not case sensitive.

The `<!DOCTYPE>` declaration for HTML5 is:

`<!DOCTYPE html>`

## 6. HTML Headings

HTML headings are defined with the `<h1>` to `<h6>` tags.

`<h1>` defines the most important heading. `<h6>` defines the least important heading: 
  
  ```
  <h1>My Heading 1</h1>
  
  <h2>My Heading 2</h2>
  
  <h3>My Heading 3</h3>
  ```
## 7. HTML Paragraphs

HTML paragraphs are defined with the `<p>` tag:

```
<p>This is a paragraph.</p>

<p>This is another paragraph.</p>
```

## 8. HTML Links

HTML links are defined with the `<a>` tag:

`<a href="https://www.google.com/">This is a Link</a>`

The link's destination is specified in the `href` attribute. 

Attributes are used to provide additional information about HTML elements.

## 9. HTML Images

HTML images are defined with the `<img>` tag.

The source file (`src`), alternative text (`alt`), `width`, and `height` are provided as attributes:

`<img src="khairi.jpg" alt="khairi_image" width="100" height="200">`

## 10. HTML <div> Tag

The `<div>` tag defines a division or a section in an HTML document.

The `<div>` tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.

The `<div>` tag is easily styled by using the class or id attribute.
