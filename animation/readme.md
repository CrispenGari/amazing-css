## Animations Css

CSS animations make it possible to animate transitions from one CSS style configuration to another.

### Animation Keyframes

To create a CSS animation sequence, you style the element you want to animate with the animation property or its sub-properties. This lets you configure the timing, duration, and other details of how the animation sequence should progress. This does not configure the actual appearance of the animation, which is done using the `@keyframes` at-rule as described in Defining the animation sequence using `keyframes` below.

### Changing the background of the `.box` box container:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: white;
  margin: 10px;
  animation: color-animation 1s;
}
@keyframes color-animation {
  from {
    background: red;
  }
  to {
    background: green;
  }
}
```

### `@keyframe`

This property holds all the animation style. it is used to declare an animation of a `container` for. The animation will then determine what to do for each and every time for example during `start` and at `stop`.

#### code

```css
@keyframes move {
  0% {
    width: 100px;
    height: 100px;
  }
  50% {
    width: 125px;
    height: 125px;
  }
  100% {
    width: 150px;
    height: 150px;
  }
}
```

> `@0%` the box remain the same, `@50%` the box then increase by `25px` and lastly at `100%` the box width and height will be changed to `150px`

### Basic most used animation properties:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: white;
  margin: 10px;
  position: relative
    /* an important property especially when we are moving the box around. */;
  animation-name: move /* This is the animation name.*/;
  animation-delay: 1s; /* How long does the animation takes before start*/
  animation-fill-mode: forwards; /* The box will not move back to the original position */
  animation-iteration-count: 2
    /* How many times to run the animation {infinite means run forever} */;
  animation-duration: 2s /* how long does the animation takes*/;
  animation-timing-function: ease-in; /*This defines the speed of the animation
  linear : constant speed;
  ease-in: start fast;
  ease-out: start slow;
  ease-in-out: start fast then slow
  .....
  */
  animation-direction: alternate-reverse /*
  reverse means the animation should reverse
  ....
  */;
}
@keyframes move {
  0% {
    left: 0;
    top: 0;
  }
  50% {
    left: 20px;
    right: 20px;
  }
  100% {
    left: 30px;
    right: 30px;
  }
}
```
