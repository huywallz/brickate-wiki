Converts `[0..255]` RGB values into a normalized `[0..1]` range.

```
bk.color.normalize( color )
```

## Parameters
**<code>[bk.color](?p=bk.color) color</code>**
> The color table to normalize.

## Returns
**<code>bk.vector3 vec</code>**
> A vector3 table where each component represents the color in a `0.0` to `1.0` range.