### Blending background Image and background Color.

We can not set both background image and background color at the same time. In order to do that we have to blend the two backgrounds to get a beautiful looking background. Example

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
  background-image: url(./react\ native\ final\ file.jpg);
  background-color: green;
  background-blend-mode: multiply;

  /* THESE ARE OTHER OPTIONS WE CAN TRY OUT */

  /*
    background-blend-mode: multiply;
    background-blend-mode: difference;
    background-blend-mode: saturation;
    background-blend-mode: darken;
    background-blend-mode: hue;
    background-blend-mode: inherit;
    background-blend-mode: hard-light;
    background-blend-mode: exclusion;
    background-blend-mode: lighten;
    background-blend-mode: overlay;
    background-blend-mode: soft-light;
    e.t.c
  */
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
