Converts a color to Hue, Saturation, and Value.

```
bk.color.toHSV( color )
```

## Parameters
**<code>[bk.color](?p=bk.color) color</code>**
> The RGB color table to convert.

## Returns
**<code>number h</code>**
> The hue of the color in degrees.

> Range: `[0..360]`

**<code>number s</code>**
> The intensity or purity of the color.

> Normalized range: `[0..1]`

**<code>number v</code>**
> The brightness or lightness of the color.

> Normalized range: `[0..1]`