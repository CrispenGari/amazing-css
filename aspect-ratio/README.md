### `aspect-ratio`

The aspect ratio for most videos is `16:9` which means `16`-units width and `9`-units height. It's hard for us to calculate this aspect ratio correctly sometimes, using the `aspect-ratio` `css` property we can specify one dimension of an `html` element and then `css` will figure out the other one for us.

```css
video {
  width: 200px;
  aspect-ratio: 16/9;
  background-color: red;
}
```

To make a perfect square we can specify the aspect ratio as `1` as follows:

```css
video {
  width: 200px;
  aspect-ratio: 1;
  background-color: red;
}
```
