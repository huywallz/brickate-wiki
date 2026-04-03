Creates a color from a vector3 where each component is a float between `0.0` and `1.0`.

```
bk.color.fromNormalized( vec )
```

## Parameters
**<code>bk.vector3 vec</code>**
> A 3D vector representing the normalized color.

>> The `x` component maps to Red.

>> The `y` component maps to Green.

>> The `z` component maps to Blue.

## Returns
**<code>[bk.color](?p=bk.color) color</code>**
> A color table where each component is scaled to the `[0..255]` range.