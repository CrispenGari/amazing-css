### Modal using Vanilar CSS and JavaScript

We are going to create a simple closable modal using css and javascript.

Our `html` will look as follows:

```html
<div class="app">
  <button id="btn-open">OPEN</button>
  <div class="modal">
    <div class="modal__inner">
      <div class="modal__header">
        <h1>Modal</h1>
        <button id="btn-close">Close</button>
      </div>
      <div class="modal__body">
        <h1>Modal Body</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
          deleniti molestiae qui ea magnam. Perspiciatis voluptate cupiditate
          eligendi pariatur, harum facere, facilis natus reprehenderit a
          similique vero, eveniet eaque quibusdam!
        </p>
      </div>
    </div>
  </div>
</div>
```

Note that we don't care about the styling so our `css` will have the following basic styles:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.app {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}
.modal__inner {
  background-color: white;
  width: 100%;
  padding: 10px;
  max-width: 500px;
  border-radius: 5px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
}
h1 {
  font-size: 1rem;
  text-transform: uppercase;
}
.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
}
button {
  cursor: pointer;
}
.modal--show {
  display: flex !important;
}
```

In our javascript we have the following code. But only one segment need explanation:

```js
document.getElementById("btn-open").addEventListener("click", () => {
  document.querySelector(".modal").classList.add("modal--show");
});
document.getElementById("btn-close").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("modal--show");
});

// Clicking outside

window.addEventListener("click", (e) => {
  if (e.target === document.getElementById("btn-open")) {
    document.querySelector(".modal").classList.add("modal--show");
    return;
  }
  if (document.querySelector(".modal__inner").contains(e.target)) {
    return;
  } else {
    document.querySelector(".modal").classList.remove("modal--show");
  }
});
```

We are listening on the click of the `window` object. If the current target is lies outside the `modal__inner` class when we click, then we are going then to close the `modal` that's what the following function does:

```js
window.addEventListener("click", (e) => {
  if (e.target === document.getElementById("btn-open")) {
    document.querySelector(".modal").classList.add("modal--show");
    return;
  }
  if (document.querySelector(".modal__inner").contains(e.target)) {
    return;
  } else {
    document.querySelector(".modal").classList.remove("modal--show");
  }
});
```
