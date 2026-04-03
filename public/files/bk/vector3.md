Provides 3D coordinates and math for 3D positioning, physics, and world-space transformations.

A `bk.vector3` is represented as a table with 3 components:
* `x`: Left/Right axis
* `y`: Up/Down axis
* `z`: Forward/Backward axis

You can define a 3D position manually or use functions to calculate movement and direction in a 3D environment.

<pre class="codeblock">
-- Create a point in 3D space
local spawnPos = { x = 0, y = 10, z = -5 }

-- Calculate the distance to a player
local playerPos = bk.player.getPosition(playerId)
local dist = bk.vector3.distance(spawnPos, playerPos)

-- Find the direction from A to B and normalize it
local direction = bk.vector3.normalize(bk.vector3.subtract(playerPos, spawnPos))

-- Rotate a direction using a quaternion
local rotatedDir = bk.vector3.rotateByQuaternion(direction, myQuat)
</pre>

## Functions
| | | |
|-|-|-|
| [bk.vector3.add](?p=bk.vector3.add) | Adds two vectors together. | 7.0+ |
| [bk.vector3.angle](?p=bk.vector3.angle) | Returns the angle between two vectors. | 7.0+ |
| [bk.vector3.barycenter](?p=bk.vector3.barycenter) | Calculates the barycenter of a triangle. | 7.0+ |
| [bk.vector3.clamp](?p=bk.vector3.clamp) | Restricts a vector between a min and max range. | 7.0+ |
| [bk.vector3.cross](?p=bk.vector3.cross) | Returns the cross product of two vectors. | 7.0+ |
| [bk.vector3.cubicHermite](?p=bk.vector3.cubicHermite) | Performs cubic hermite interpolation. | 7.0+ |
| [bk.vector3.distance](?p=bk.vector3.distance) | Calculates the distance between two points. | 7.0+ |
| [bk.vector3.divide](?p=bk.vector3.divide) | Divides a vector by another vector or scalar. | 7.0+ |
| [bk.vector3.dot](?p=bk.vector3.dot) | Returns the dot product of two vectors. | 7.0+ |
| [bk.vector3.equals](?p=bk.vector3.equals) | Checks if two vectors are identical. | 7.0+ |
| [bk.vector3.invert](?p=bk.vector3.invert) | Inverts the components of a vector. | 7.0+ |
| [bk.vector3.length](?p=bk.vector3.length) | Returns the magnitude of a vector. | 7.0+ |
| [bk.vector3.lerp](?p=bk.vector3.lerp) | Linearly interpolates between two vectors. | 7.0+ |
| [bk.vector3.max](?p=bk.vector3.max) | Returns a vector with the maximum components. | 7.0+ |
| [bk.vector3.min](?p=bk.vector3.min) | Returns a vector with the minimum components. | 7.0+ |
| [bk.vector3.moveTowards](?p=bk.vector3.moveTowards) | Moves a vector toward a target position. | 7.0+ |
| [bk.vector3.multiply](?p=bk.vector3.multiply) | Multiplies two vectors together. | 7.0+ |
| [bk.vector3.negate](?p=bk.vector3.negate) | Returns the negative of a vector. | 7.0+ |
| [bk.vector3.normalize](?p=bk.vector3.normalize) | Scales a vector to a length of 1. | 7.0+ |
| [bk.vector3.one](?p=bk.vector3.one) | Returns a vector with all components set to 1. | 7.0+ |
| [bk.vector3.perpendicular](?p=bk.vector3.perpendicular) | Returns a perpendicular vector. | 7.0+ |
| [bk.vector3.project](?p=bk.vector3.project) | Projects a vector onto another vector. | 7.0+ |
| [bk.vector3.reflect](?p=bk.vector3.reflect) | Reflects a vector off a normal. | 7.0+ |
| [bk.vector3.refract](?p=bk.vector3.refract) | Calculates the refraction of a vector. | 7.0+ |
| [bk.vector3.reject](?p=bk.vector3.reject) | Calculates the rejection of a vector. | 7.0+ |
| [bk.vector3.rotateByAxisAngle](?p=bk.vector3.rotateByAxisAngle) | Rotates a vector around an axis by an angle. | 7.0+ |
| [bk.vector3.rotateByQuaternion](?p=bk.vector3.rotateByQuaternion) | Rotates a vector using a quaternion. | 7.0+ |
| [bk.vector3.scale](?p=bk.vector3.scale) | Multiplies a vector by a scalar value. | 7.0+ |
| [bk.vector3.subtract](?p=bk.vector3.subtract) | Subtracts one vector from another. | 7.0+ |
| [bk.vector3.transform](?p=bk.vector3.transform) | Transforms a vector by a matrix. | 7.0+ |
| [bk.vector3.unproject](?p=bk.vector3.unproject) | Converts screen coordinates to world space. | 7.0+ |
| [bk.vector3.zero](?p=bk.vector3.zero) | Returns a vector with all components set to 0. | 7.0+ |