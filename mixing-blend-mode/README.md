### Mix Blend Mode `difference`

Create a nice background that blend in with text using `mix-blend-mode`. Here is the html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="banner">
      <video src="./hello.mp4" autoplay loop></video>
      <div class="banner__inner">
        <h1>Welcome to East London!</h1>
      </div>
    </div>
  </body>
</html>
```

Here is the `css`

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.banner {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}
.banner > video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner__inner {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.banner__inner > h1 {
  mix-blend-mode: difference;
  color: white;
  font-size: 5rem;
  user-select: none;
}
```
