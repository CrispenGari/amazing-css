# Some Css Tricks

Some amazing css styles and selectors.

## CSS Pseudo-elements

They are used to style specified parts of an element.

### 1. ::before

The `::before` pseudo-element can be used to insert some content before the content of an element.

```
p::before{
    content: "before contents",
}
```

### 2. ::after

The `::after` pseudo-element can be used to insert some content after the content of an element.

```
p::after{
    content: "after contents",
}
```

### 3. ::first-line

Used to apply some styles to the first line of the element.

```
p::first-line{
  color: lightseagreen;
}
```

### 4. ::first-letter

Apply styles to the first letter of the element.

```
p::first-line{
  color: lightseagreen;
}
```

### 5. ::marker

Used to apply styles of the marker of the element fo example markers of the list styles.

```
p::marker {
  color: red;
  font-size: 23px;
}
```

### 6. ::selection

The `::selection` pseudo-element matches the portion of an element that is selected by a user.

```
p::selection {
  color: red;
  font-size: 23px;
}
```

## CSS Pseudo Classes

### 1. :active

The `:active` selector is used to select and style the active link.

```
button:active{
    background: black;
    color: white;
    border: none;
}
```

### 2. :checked

The `:checked` selector matches every checked <input> element (only for radio buttons and checkboxes) and <option> element.

```
input:checked {
  display: none;
}

```

### 3. :disabled

The `:disabled` selector matches every disabled element (mostly used on form elements).

```
button:disabled {
  background: black;
  color: white;
  user-select: none;
}
```

### 4. :empty

The `:empty` selector matches every element that has no children (including text nodes).

```
p:empty {
  background: black;
  width: 100%;
  color: white;
  padding: 10px;
}

```

### 5. :enabled

The `:enabled` selector matches every enabled element (mostly used on form elements).

```
button:enabled {
  background: black;
  color: white;
  user-select: none;
}
```

### 6 :first-child

The `:first-child` selector is used to select the specified selector, only if it is the first child of its parent.

```
p:first-child{
    color: white;
    background: black;
}
```

### 7 :last-child

The `:last-child` selector is used to select the specified selector, only if it is the first child of its parent.

```
p:last-child{
    color: white;
    background: black;
}
```

### 8. :first-of-type

The `:first-of-type` selector matches every element that is the first child, of a particular type, of its parent.

```
p:first-of-type {
  color: red;
}
```

### 9. :last-of-type

The `:last-of-type` selector matches every element that is the first child, of a particular type, of its parent.

```
p:last-of-type {
  color: red;
}
```

### 10. :focus

The `:focus` selector is used to select the element that has focus.

```
input:focus{
    border: 1px solid lightseagreen;
}
```

### 11. :hover

The `:hover` selector is used to select the element that has been hovered.

```
button:focus{
    background:  lightseagreen;
    cursor: pointer;
}
```

### 12. :in-range

The `:in-range` selector selects all elements with a value that is within a specified range.

Let's say we have an input that takes numbers between 1 and 5;

#### `index.html`

```<input id="value1" name="value1" type="number" placeholder="Pin" min="1" max="5" value='20' required>

```

#### `index.css`

```
input:in-range {
  background: green;
  color: white;
}

```

### 12. :out-of-range

The `:out-of-range` selector selects all elements with a value that is within a specified range.

Let's say we have an input that takes numbers between 1 and 5;

#### `index.html`

```<input id="value1" name="value1" type="number" placeholder="Pin" min="1" max="5" value='20' required>

```

#### `index.css`

```
input:out-of-range {
  background: green;
  color: white;
}

```

### 13. :invalid

The `:invalid` selector selects form elements with a value that does not validate according to the element's settings.

#### `index.html`

```
 <input type="email" placeholder="Email" required />
```

#### `index.css`

```
input:invalid {
  border: 1px solid red;
}
```

### 14. :lang(language)

The :lang() selector is used to select elements with a lang attribute with the specified value.

#### `index.html`

```
 <p lang="fr">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos
    voluptatum voluptas praesentium pariatur inventore unde culpa corrupti
    perferendis ut! Doloremque labore repellendus adipisci ut ipsam. Nisi
    deleniti non placeat!
</p>
<p lang="hello">
    The lang attribute value is most often a two-letter language code, like
    lang="fr" (for French), or two language codes combined, like
    lang="fr-ca" (for Canadian French).
</p>
```

> Note that you can pass any language name variable to the elements

#### `index.css`

```
p:lang(hello) {
  background: red;
  color: blue;
}

```

### 15. :link

```
a:link {
  color: red;
}
```

### 16. :nth-child(n)

The `:nth-child()` CSS pseudo-class matches elements based on their position in a group of siblings.

```
li:nth-child(2) {
  color: black;
}
```

> n can be `odd` or `even` or `Nn` where N is an integer

### 17 :nth-last-of-type(n)

The `:nth-last-of-type()` CSS pseudo-class matches elements of a given type, based on their position among a group of siblings, counting from the end.

```
p:nth-last-of-type(4n) {
  color: lime;
}
```

### 18. :nth-of-type(n)

The `:nth-of-type()` CSS pseudo-class matches elements of a given type (tag name), based on their position among a group of siblings.

```
p:nth-of-type(4n) {
  color: lime;
}
```

### 19. :only-of-type

The `:only-of-type` CSS pseudo-class represents an element that has no siblings of the same type.

```
p:only-of-type {
  background-color: lime;
}
```

### 20. :only-child

The `:only-child` CSS pseudo-class represents an element without any siblings. This is the same as `:first-child:last-child` or `:nth-child(1):nth-last-child(1)`, but with a lower specificity.

```
p:only-child {
  background-color: lime;
}
```

### Read more about the Selectors

- [Css Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/:link)
