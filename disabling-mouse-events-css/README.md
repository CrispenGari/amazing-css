### Disabling mouse events using `css`

The idea behind this is to use the `pointer-events` property to set it to `none` to disable the button. Suppose we have a button that we want to disable using animations after a second. We can do it as follows:

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
div button {
  width: 100px;
  padding: 10px;
  background: green;
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  animation: fade 1s ease 0.5s 1 alternate forwards;
}

@keyframes fade {
  from {
    opacity: 1;
    pointer-events: all;
  }
  to {
    opacity: 0.3;
    pointer-events: none;
  }
}
```
