### Radial Gradient

The `radial-gradient()` CSS function creates an image consisting of a progressive transition between two or more colors that radiate from an origin. Its shape may be a circle or an ellipse

Examples:

```css
.selector {
  background: radial-gradient(#e66465, #9198e5);
}
```

```css
.selector {
  background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
}
```

```css
.selector {
  background: radial-gradient(
    circle at 100%,
    #333,
    #333 50%,
    #eee 75%,
    #333 75%
  );
}
```

```css
.selector {
  background: radial-gradient(ellipse at top, #e66465, transparent),
    radial-gradient(ellipse at bottom, #4d9f0c, transparent);
}
```

### Ref

1. [developer.mozilla.org1](<https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient()>)
