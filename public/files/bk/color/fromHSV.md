Creates a color from Hue, Saturation, and Value.

```
bk.color.fromHSV( h, s, v )
```

## Parameters
**<code>number h</code>**
> The hue of the color, representing the color type.

> Provided in degrees: `0.0` to `360.0`.

**<code>number s</code>**
> The intensity or "purity" of the color.

> Provided normalized: `0.0` to `1.0`.

**<code>number v</code>**
> The brightness of the color.

> Provided normalized: `0.0` to `1.0`.

## Returns
**<code>[bk.color](?p=bk.color) color</code>**
> A new color table generated from the HSV values.
