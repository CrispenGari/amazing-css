### Smooth Scrolling

In this example we are going to demostrate how to archive smooth scroll on two different element. We just have to set the property `scroll-behavior` to `smooth` to an element to archive this.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
div.section-a,
.section-b {
  width: 100%;
  height: 100vh;
  background-image: url(./react\ native\ final\ file.jpg);
  background-color: green;
  background-blend-mode: multiply;
}
```
