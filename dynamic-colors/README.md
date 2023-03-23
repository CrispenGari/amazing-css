### Dynamic Colors

Let's say we have an element, an `h1` that has a position of `fixed` and we want it to be visible even when we scroll the giant `div` with a class name `box`. What we can have in our `html` is as follows:

```html
<body>
  <h1>Hello</h1>
  <div class="box"></div>
</body>
```

In our css we are going to specify the `mix-blend-mode` to `difference` so that it will our `h1` text will be visible when the `.box` div is on top of it.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: black;
}
h1 {
  position: fixed;
  mix-blend-mode: difference;
  top: 0;
  color: red;
}
.box {
  width: 20%;
  background-color: white;
  height: 100vw;
  margin-top: 300px;
}
```
