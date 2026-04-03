Used for 3D rotations.

In Brickate, `bk.quaternion` is the standard way to handle 3D rotation. While most people find Euler Angles (Pitch, Yaw, Roll) easier to understand, they are mathematically broken for high-end game development.

### Why use Quaternions?

If you've ever rotated an object and had it suddenly "snap" or stop moving correctly, you likely hit Gimbal Lock. This happens because Euler angles (X, Y, Z) can overlap, causing you to lose a direction of movement.

If you are a beginner, don't try to edit the x, y, z, w values directly. Instead, use Euler angles for your logic and convert them at the end.

<pre class="codeblock">
-- Choose your rotation in degrees (Euler)
local myDegrees = { x = math.pi / 4, y = math.pi / 2, z = 0 }

-- Convert it so the engine can use it
local myQuat = bk.quaternion.fromEuler(myDegrees)

-- Apply it to your object
bk.brick.setRotation(myBrick, myQuat)
</pre>

## Functions
| | | |
|-|-|-|
| [bk.quaternion.add](?p=bk.quaternion.add) | Adds two quaternions together. | 7.0+ |
| [bk.quaternion.conjugate](?p=bk.quaternion.conjugate) | Returns the conjugate of a quaternion. | 7.0+ |
| [bk.quaternion.cubicHermiteSpline](?p=bk.quaternion.cubicHermiteSpline) | Performs cubic hermite spline interpolation. | 7.0+ |
| [bk.quaternion.divide](?p=bk.quaternion.divide) | Divides one quaternion by another. | 7.0+ |
| [bk.quaternion.equals](?p=bk.quaternion.equals) | Checks if two quaternions are equal. | 7.0+ |
| [bk.quaternion.fromAxisAngle](?p=bk.quaternion.fromAxisAngle) | Creates a quaternion from an axis and an angle. | 7.0+ |
| [bk.quaternion.fromEuler](?p=bk.quaternion.fromEuler) | Creates a quaternion from Euler angles (pitch, yaw, roll). | 7.0+ |
| [bk.quaternion.fromMatrix](?p=bk.quaternion.fromMatrix) | Creates a quaternion from a transformation matrix. | 7.0+ |
| [bk.quaternion.fromvector3Tovector3](?p=bk.quaternion.fromvector3Tovector3) | Creates a rotation from one vector to another. | 7.0+ |
| [bk.quaternion.identity](?p=bk.quaternion.identity) | Returns the identity quaternion (no rotation). | 7.0+ |
| [bk.quaternion.invert](?p=bk.quaternion.invert) | Returns the inverse of a quaternion. | 7.0+ |
| [bk.quaternion.length](?p=bk.quaternion.length) | Calculates the magnitude of a quaternion. | 7.0+ |
| [bk.quaternion.lerp](?p=bk.quaternion.lerp) | Linearly interpolates between two quaternions. | 7.0+ |
| [bk.quaternion.multiply](?p=bk.quaternion.multiply) | Multiplies two quaternions (combines rotations). | 7.0+ |
| [bk.quaternion.normalize](?p=bk.quaternion.normalize) | Returns a quaternion with a length of 1. | 7.0+ |
| [bk.quaternion.scale](?p=bk.quaternion.scale) | Scales a quaternion by a floating point value. | 7.0+ |
| [bk.quaternion.slerp](?p=bk.quaternion.slerp) | Spherical linear interpolation between rotations. | 7.0+ |
| [bk.quaternion.subtract](?p=bk.quaternion.subtract) | Subtracts one quaternion from another. | 7.0+ |
| [bk.quaternion.toAxisAngle](?p=bk.quaternion.toAxisAngle) | Converts a quaternion to axis and angle data. | 7.0+ |
| [bk.quaternion.toEuler](?p=bk.quaternion.toEuler) | Converts a quaternion to Euler angles. | 7.0+ |
| [bk.quaternion.toMatrix](?p=bk.quaternion.toMatrix) | Converts a quaternion to a transformation matrix. | 7.0+ |
| [bk.quaternion.transform](?p=bk.quaternion.transform) | Rotates a vector by a quaternion. | 7.0+ |