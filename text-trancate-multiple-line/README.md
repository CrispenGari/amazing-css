### Multiline ellipsis

In this readme we will learn how to create text `ellipsis` for which works on multiline. Firstly we will start by creating a single line ellipsis.

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <p class="multi-line">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eveniet
      magnam officia doloremque consectetur ipsum sunt minus modi possimus
      cumque delectus iusto ipsa sint est cum maxime libero et non. Repellat
      magni tempore autem dolorum. Deleniti sapiente, debitis incidunt iusto
      ratione sit quis quia est iste? Sint dolorum facere autem!
    </p>
  </body>
</html>
```

1. First line text ellipsis

```css
.multi-line {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

2. Multiline ellipsis

```css
.multi-line {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* mention the number of lines*/
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
```
