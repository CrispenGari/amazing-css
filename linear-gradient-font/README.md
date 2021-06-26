### Linear Gradient on text color

The idea is to create a background of an element that contains out text to have a linear gradient, and then we clip the background to the text. **Note:** The element that contains text must not have a display block.

Here is the code that converts the text from black to linear gradient `green` to `blue`.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
}
div h1 {
  display: inline;
  background: linear-gradient(to right, green, blue);
  -webkit-background-clip: text;
  color: transparent;
  /*
  You can use
-webkit-text-fill-color: transparent;
  */
}
```
