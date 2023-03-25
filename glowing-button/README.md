### Glowing Button

In this one we are going to create a glowing button on the `hover` effect using the `css` that i've leant from 'tik-tok'. So in the html we are going to have the following code:

```html
<div class="container">
  <button>Hello</button>
</div>
```

In the `css` we are going to have the following code in it:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container > button {
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 200px;
  box-shadow: 0 0 5px cornflowerblue, 0 0 25px cornflowerblue;
  transition: all 1s ease;
}

.container > button:hover {
  cursor: pointer;
  box-shadow: 0 0 5px cornflowerblue, 0 0 25px cornflowerblue,
    0 0 50px cornflowerblue, 0 0 100px cornflowerblue, 0 0 200px cornflowerblue;
}
```

Then now we have a glowing button.
