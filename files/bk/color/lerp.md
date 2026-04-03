Linearly interpolates (blends) between two colors based on a factor.

```
bk.color.lerp( color, target, amount )
```

## Parameters
**<code>[bk.color](?p=bk.color) color</code>**
> The starting color table.

**<code>[bk.color](?p=bk.color) target</code>**
> The target color table.

**<code>[number](?p=number) amount</code>**
> The interpolation factor between `0.0` and `1.0`.

> `0.0` returns the start color; `1.0` returns the end color.

## Returns
**<code>[bk.color](?p=bk.color) color</code>**
> A new color table representing the blended result.