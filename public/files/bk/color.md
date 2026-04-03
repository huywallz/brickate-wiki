Handles how objects and 2D shapes look on screen

A `bk.color` is represented as a table with 3 components:
* `r`: Red (0 - 255)
* `g`: Green (0 - 255)
* `b`: Blue (0 - 255)

Since colors are just tables, you can modify them directly or use the helper functions:

<pre class="codeblock">
-- Create a color from RGB (0-255)
local myColor = { r = 255, g = 100, b = 0 }

-- Adjust brightness
local dimColor = bk.color.brightness(myColor, 0.5)

-- Linearly interpolate between two colors
local blended = bk.color.lerp(myColor, bk.color.fromNormalized({ x = 1, y = 1, z = 1 }), 0.5)
</pre>

## Functions
| | | |
|-|-|-|
| [bk.color.brightness](?p=bk.color.brightness) | Adjusts the brightness of a color. | 7.0+ |
| [bk.color.contrast](?p=bk.color.contrast) | Adjusts the contrast level of a color. | 7.0+ |
| [bk.color.equals](?p=bk.color.equals) | Checks if two colors are identical. | 7.0+ |
| [bk.color.fromHSV](?p=bk.color.fromHSV) | Creates a color from Hue, Saturation, and Value. | 7.0+ |
| [bk.color.fromInt](?p=bk.color.fromInt) | Creates a color from a single integer value. | 7.0+ |
| [bk.color.fromNormalized](?p=bk.color.fromNormalized) | Creates a color from a vector3 where each component is a float between `0.0` and `1.0`. | 7.0+ |
| [bk.color.lerp](?p=bk.color.lerp) | Linearly interpolates (blends) between two colors based on a factor. | 7.0+ |
| [bk.color.normalize](?p=bk.color.normalize) | Converts `[0..255]` RGB values into a normalized `[0..1]` range. | 7.0+ |
| [bk.color.tint](?p=bk.color.tint) | Multiplies one color by another to create a tinted effect. | 7.0+ |
| [bk.color.toHSV](?p=bk.color.toHSV) | Converts a color to Hue, Saturation, and Value. | 7.0+ |
| [bk.color.toInt](?p=bk.color.toInt) | Converts a color to a single integer value. | 7.0+ |