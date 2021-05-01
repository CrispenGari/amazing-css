### Transition - CSS

Transition are styles which are applied to a certain html element when a certain action happened on the element for example when someone `hovers` an element and when someone `clicks` an element

### Example

> This will just show a simple hover transition on an element.

```css
.box {
  background: white;
  margin: 10px;
  width: 100px;
  height: 100px;
}
.box:hover {
  background: red;
}
```

- This just change the background color to `red` on the mouse enter on the element.

```css
.box {
  background: white;
  margin: 10px;
  width: 100px;
  height: 100px;
  transition: background 2s;
}
.box:hover {
  background: red;
}
```

- This will change the background of the `.box` div to color red in 2s.

### Notes!!

```css
.box {
  background: white;
  margin: 10px;
  width: 100px;
  height: 100px;
  position: relative
    /*Important especially when we want to move the div around*/;
  transition-property: background, border-radius, transform;
  /* transition-delay: 2s, 4s; */ /* applies a delay on both background and border radius for 2s and 1s respectively  */
  transition-property: all; /* for all properties*/
  transition-duration: 1s /* How long the transition should take*/;

  transition-timing-function: ease-in;
  /*
    linear : constant speed;
  ease-in: start fast;
  ease-out: start slow;
  ease-in-out: start fast then slow
   */
}
.box:hover {
  background: red;
  border-radius: 50%;
}
```

#### Transition Properties

The following are the transition properties we can apply on elements:

- background-color
- background-position
- border-color
- border-width
- border-spacing
- bottom
- color
- font-size
- font-weight
- height left
- letter-spacing
- line-height
- margin
- max-height
- max-width
- min-height
- min-width
- opacity
- outline-color
- outline-offset
- outline-width
- padding right
- text-indent
- text-shadow
- top
- vertical-align
- visibility
- width
- word-spacing
- z-index

#### Transform

- [Notes](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
