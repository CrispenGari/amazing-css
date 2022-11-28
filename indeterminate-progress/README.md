### indeterminate

In this example i will show how we can create an indeterminate progress using vanilla `css`.

### index.html

The code in this file looks as follows:

```html
<body>
  <div class="app">
    <div class="loading__container">
      <div class="loading__progress"></div>
    </div>
  </div>
</body>
```

### index.css

The code in this file looks as follows:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: black;
}
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading__container {
  width: 200px;
  border-radius: 999px;
  background-color: #f5f5f5;
  padding: 1px;
  position: relative;
  overflow: hidden;
}
.loading__progress {
  position: relative;
  width: 40%;
  padding: 3px;
  background-color: cornflowerblue;
  border-radius: 999px;
  animation: indeterminate 2s ease 500ms infinite alternate-reverse forwards;
}

@keyframes indeterminate {
  from {
    width: 40%;
    left: -20px;
  }
  to {
    width: 20%;
    left: 200px;
  }
}
```
