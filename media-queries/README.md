# Media Queries

## Basic Syntax

```
@media <media-query-list> {
  <group-rule-body>
}
```

### media-query-list

- print
- screen
- etc

#### Example

```
@media print {
  body { font-size: 10pt; }
}

@media screen {
  body { font-size: 13px; }
}

@media screen, print {
  body { line-height: 1.2; }
}

@media only screen
  and (min-width: 320px)
  and (max-width: 480px)
  and (resolution: 150dpi) {
    body { line-height: 1.4; }
}

```

## Screen sizes

```
  --mobile-device-min: 320px;
  --tablets-device-min: 481px;
  --laptops-device-min: 769px;
  --desktops-device-min: 1025px;
  --mobile-device-max: 480px;
  --tablets-device-max: 768px;
  --laptops-device-max: 1024px;
  --desktops-device-max: 1200px;
  --telephone-device-min: 1201px;

```

## A simple example

```
@media screen and (min-width: 1025px) {
  .main__header > h1:first-child {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  .main__images {
    flex-direction: column;
  }
  .main__images > img {
    flex: 1;
    width: 100%;
  }
  .main__profile {
    flex-direction: column;
  }
}

```

### Where to find more?

- [Media-Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)
