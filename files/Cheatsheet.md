## Server modules
<pre class="cheatsheet">
-- Brick related functions
bk.brick.getAlpha(id: bk.object): number                        -- Returns the current transparency state of a brick.
bk.brick.getColor(id: bk.object): bk.color                      -- Returns the color data of a brick.
bk.brick.getPosition(id: bk.object): bk.vector3                 -- Returns the location of a brick in the world.
bk.brick.getRotation(id: bk.object): bk.quaternion              -- Returns the rotation data for a brick.
bk.brick.getSize(id: bk.object): bk.vector3                     -- Returns the current dimensions of a brick.
bk.brick.isAnchored(id: bk.object): boolean                     -- Returns `true` if the brick is frozen in space and unaffected by gravity/physics
bk.brick.isCollidable(id: bk.object): boolean                   -- Returns `true` if the brick can physically interact and collide with other objects.
bk.brick.new(): bk.object                                       -- Spawn new physical brick object into the world.
bk.brick.setAlpha(id: bk.object, alpha: number): void           -- Sets the transparency level (0.0-1.0) for a specific brick.
bk.brick.setAnchored(id: bk.object, anchored: boolean): void    -- Toggles whether a brick stays frozen in place or falls/moves with physics.
bk.brick.setCollidable(id: bk.object, collide: boolean): void   -- Toggles whether players and objects can pass through the brick.
bk.brick.setColor(id: bk.object, color: bk.color): void         -- Applies a new color to the brick.
bk.brick.setPosition(id: bk.object, pos: bk.vector3): void      -- Moves the brick to a new coordinate.
bk.brick.setRotation(id: bk.object, rot: bk.quaternion): void   -- Sets the brick's orientation using a quaternion.
bk.brick.setSize(id: bk.object, size: bk.vector3): void         -- Scales the brick to new dimensions.

-- Object related functions
bk.object.destroy(id: bk.object): void                  -- Removes an object from the world.
bk.object.exists(id: bk.object): boolean                -- Checks if an object ID is valid.
bk.object.getType(id: bk.object): bk.enum.ObjectType    -- Returns the type of an object.

-- Physics related events
bk.physics.onContactAdded(callback: function(obj1: bk.object, obj2: bk.object): void): void     -- Triggered when two objects touch.
bk.physics.onContactRemoved(callback: function(obj1: bk.object, obj2: bk.object): void): void   -- Triggered when two objects stop touching.

-- Player related functions
bk.player.getName(id: bk.object): string                        -- Gets a player's username.
bk.player.getPing(id: bk.object): number                        -- Gets a player's latency.
bk.player.getPosition(id: bk.object): bk.vector3                -- Gets a player's current position.
bk.player.getRotation(id: bk.object): bk.quaternion 	        -- Gets a player's current rotation.
bk.player.setPosition(id: bk.object, pos: bk.vector3): void 	-- Sets a player's position.
bk.player.setRotation(id: bk.object, rot: bk.quaternion): void 	-- Sets a player's rotation.

-- Server related functions/events
bk.server.broadcast(data: string): void 	                                            -- Sends data to all players.
bk.server.getConfig(): table 	                                                        -- Gets server configuration data.
bk.server.getPlayers(): { bk.object } 	                                                -- Returns list of all player IDs.
bk.server.kick(plrId: bk.object, msg: string)                                           -- Removes a player from the server.
bk.server.send(plrId: bk.object, data: string)                                          -- Sends data to a specific player.
bk.server.onPlayerAdded(callback: function(plrId: number): void): void                  -- Triggered when a player joins.
bk.server.onPlayerRemoved(callback: function(plrId: number): void): void                -- Triggered when a player leaves.
bk.server.onReceived(callback: function(plrId: bk.object, data: string): void): void    -- Triggered when a message is received.
bk.server.onTick(callback: function(dt: number): void): void                            -- Triggered every server tick.
</pre>

## Client modules
<pre class="cheatsheet">
-- Camera related functions
bk.camera.getFieldOfView(): number              -- Gets current field of view.
bk.camera.getScreenSize(): bk.vector2           -- Gets current window dimensions.
bk.camera.setFieldOfView(fov: number): void     -- Sets current field of view.

-- Client related functions/events
bk.client.getPing(): number                                             -- Gets the current round-trip time (RTT) between the client and the server.
bk.client.send(data: string): void                                      -- Sends a string of data from the client to the server.
bk.client.onReceived(callback: function(data: string): void): void      -- Triggered when data arrives from the server.
bk.client.onTick(callback: function(dt: number): void): void            -- Triggers immediately after the network host services all pending events.

-- 2D graphics related functions/events
bk.graphics.drawBox(): void                                         -- Renders a 2D box on screen.
bk.graphics.drawText(text: string): void                            -- Renders text on screen.
bk.graphics.getAlpha(): number                                      -- Gets current rendering transparency.
bk.graphics.getColor(): bk.color                                    -- Gets current rendering color.
bk.graphics.getFontSize(): number                                   -- Gets current font rendering size.
bk.graphics.getOrigin(): bk.vector2                                 -- Gets current rendering origin.
bk.graphics.getPosition(): bk.vector2                               -- Gets current rendering position.
bk.graphics.getRotation(): number                                   -- Gets current rendering rotation.
bk.graphics.getSize(): bk.vector2                                   -- Gets current shape rendering size.
bk.graphics.measureText(text: string): bk.vector2                   -- Gets width and height of a text string.
bk.graphics.setAlpha(alpha: number): void                           -- Sets current rendering transparency.
bk.graphics.setColor(color: bk.color): void    	                    -- Sets current rendering color.
bk.graphics.setFontSize(size: number): void                	        -- Sets current text font size.
bk.graphics.setOrigin(origin: bk.vector2): void               	    -- Sets current rendering origin.
bk.graphics.setPosition(pos: bk.vector2): void                	    -- Sets current rendering position.
bk.graphics.setRotation(rot: number): void                          -- Sets current rendering rotation.
bk.graphics.setSize(size: bk.vector2): void                 	    -- Sets current rendering size.
bk.graphics.onRendered(callback: function(dt: number): void): void 	-- Triggered after frames are drawn.

-- Input related functions
bk.input.getCharPressed(): string 	                            -- Gets the last character key pressed.
bk.input.getKeyPressed(): bk.enum.KeyInput   	                -- Gets the code of the key just pressed.
bk.input.getMouseDelta(): bk.vector2 	                        -- Gets mouse movement since last frame.
bk.input.getMousePosition(): bk.vector2 	                    -- Gets current cursor coordinates.
bk.input.getMouseWheelMove(): number                            -- Gets scroll wheel movement.
bk.input.isKeyDown(key: bk.enum.KeyInput): boolean              -- Checks if a key is being held.
bk.input.isKeyPressed(key: bk.enum.KeyInput): boolean	        -- Checks if a key was just pressed.
bk.input.isKeyPressedRepeat(key: bk.enum.KeyInput): boolean 	-- Checks if a key is held (repeating).
bk.input.isKeyReleased(key: bk.enum.KeyInput): boolean 	        -- Checks if a key was just released.
bk.input.isKeyUp(key: bk.enum.KeyInput): boolean 	            -- Checks if a key is currently up.
bk.input.isMouseDown(key: bk.enum.KeyInput): boolean 	        -- Checks if mouse button is held.
bk.input.isMousePressed(btn: bk.enum.MouseInput): boolean 	    -- Checks if mouse button was just clicked.
bk.input.isMouseReleased(btn: bk.enum.MouseInput): boolean  	-- Checks if mouse button was just released.
</pre>

## Math modules
<pre class="cheatsheet">
-- Color related functions
bk.color.brightness(color: bk.color, amount: number): bk.color      -- Adjusts the brightness of a color.
bk.color.contrast(color: bk.color, amount: number): bk.color   	    -- Adjusts the contrast level of a color.
bk.color.equals(color1: bk.color, color2: bk.color): boolean        -- Checks if two colors are identical.
bk.color.fromHSV(h: number, s: number, v: number): bk.color 	    -- Creates a color from Hue, Saturation, and Value.
bk.color.fromInt(hex: number): bk.color 	                        -- Creates a color from a single integer value.
bk.color.fromNormalized(vec: bk.vector3): bk.color 	                -- Creates a color from a vector3 where each component is a float between 0.0 and 1.0.
bk.color.lerp(color: bk.color, target: bk.color, amount: number) 	-- Linearly interpolates (blends) between two colors based on a factor.
bk.color.normalize(color: bk.color): bk.vector3 	                -- Converts [0..255] RGB values into a normalized [0..1] range.
bk.color.tint(color: bk.color, tint: bk.color): bk.color 	        -- Multiplies one color by another to create a tinted effect.
bk.color.toHSV(color: bk.color): number, number, number             -- Converts a color to Hue, Saturation, and Value.
bk.color.toInt(color: bk.color): number                     	    -- Converts a color to a single integer value.

-- Matrix math functions
bk.matrix.add(m1: bk.matrix, m2: bk.matrix): bk.matrix 	                            -- Adds two matrices together
bk.matrix.decompose(m: bk.matrix): bk.vector3, bk.quaternion, bk.vector3            -- Breaks a matrix into translation, rotation, and scale
bk.matrix.identity(): bk.matrix 	                                                -- Returns a neutral identity matrix
bk.matrix.invert(m: bk.matrix): bk.matrix 	                                        -- Reverses the transformation of a matrix
bk.matrix.lookAt(eye: bk.vector3, target: bk.vector3, up: bk.vector3): bk.matrix    -- Creates a rotation matrix pointing at a target
bk.matrix.multiply(m1: bk.matrix, m2: bk.matrix): bk.matrix 	                    -- Multiplies two matrices together
bk.matrix.rotate(axis: bk.vector3, angle: number): bk.matrix 	                    -- Rotates a matrix around a custom axis
bk.matrix.rotateX(val: number): bk.matrix 	                                        -- Rotates a matrix around the X axis
bk.matrix.rotateXYZ(xyz: bk.vector3): bk.matrix 	                                -- Applies rotation in X, Y, then Z order
bk.matrix.rotateY(val: number): bk.matrix 	                                        -- Rotates a matrix around the Y axis
bk.matrix.rotateZ(val: number): bk.matrix 	                                        -- Rotates a matrix around the Z axis
bk.matrix.rotateZYX(zyx: bk.vector3): bk.matrix 	                                -- Applies rotation in Z, Y, then X order
bk.matrix.scale(vec: bk.vector3): bk.matrix 	                                    -- Scales a matrix by a given vector
bk.matrix.subtract(m1: bk.matrix, m2: bk.matrix): bk.matrix                         -- Subtracts one matrix from another
bk.matrix.trace(m: bk.matrix): number                                               -- Returns the sum of the diagonal elements
bk.matrix.translate(vec: bk.vector3): bk.matrix                                     -- Moves a matrix by a given vector
bk.matrix.transpose(m: bk.matrix): bk.matrix                                        -- Flips a matrix over its diagonal

-- Quaternion math functions
bk.quaternion.add(q1: bk.quaternion, q2: bk.quaternion): bk.quaternion 	                    -- Adds two quaternions together.
bk.quaternion.conjugate(q: bk.quaternion): bk.quaternion 	                                -- Returns the conjugate of a quaternion.
bk.quaternion.cubicHermiteSpline(q1: bk.quaternion, outTangent1: bk.quaternion, q2: bk.quaternion, inTangent2: bk.quaternion, t: number): bk.quaternion     -- Performs cubic hermite spline interpolation.
bk.quaternion.divide(q1: bk.quaternion, q2: bk.quaternion): bk.quaternion                   -- Divides one quaternion by another.
bk.quaternion.equals(q1: bk.quaternion, q2: bk.quaternion): boolean                         -- Checks if two quaternions are equal.
bk.quaternion.fromAxisAngle(axis: bk.vector3, angle: number): bk.quaternion 	            -- Creates a quaternion from an axis and an angle.
bk.quaternion.fromEuler(euler: bk.vector3): bk.quaternion 	                                -- Creates a quaternion from Euler angles (pitch, yaw, roll).
bk.quaternion.fromMatrix(m: bk.matrix): bk.quaternion 	                                    -- Creates a quaternion from a transformation matrix.
bk.quaternion.fromVector3ToVector3(from: bk.vector3, to: bk.vector3): bk.quaternion 	    -- Creates a rotation from one vector to another.
bk.quaternion.identity(): bk.quaternion 	                                                -- Returns the identity quaternion (no rotation).
bk.quaternion.invert(q: bk.quaternion): bk.quaternion 	                                    -- Returns the inverse of a quaternion.
bk.quaternion.length(q: bk.quaternion): number                                              -- Calculates the magnitude of a quaternion.
bk.quaternion.lerp(q: bk.quaternion, target: quaternion, amount: number): bk.quaternion     -- Linearly interpolates between two quaternions.
bk.quaternion.multiply(q1: bk.quaternion, q2: bk.quaternion): bk.quaternion                 -- Multiplies two quaternions (combines rotations).
bk.quaternion.normalize(q: bk.quaternion): bk.quaternion                                    -- Returns a quaternion with a length of 1.
bk.quaternion.scale(q: bk.quaternion, mul: number): bk.quaternion                           -- Scales a quaternion by a floating point value.
bk.quaternion.slerp(q: bk.quaternion, target: quaternion, amount: number): bk.quaternion    -- Spherical linear interpolation between rotations.
bk.quaternion.subtract(q1: bk.quaternion, q2: bk.quaternion): bk.quaternion 	            -- Subtracts one quaternion from another.
bk.quaternion.toAxisAngle(q: bk.quaternion): bk.vector3, number 	                        -- Converts a quaternion to axis and angle data.
bk.quaternion.toEuler(q: bk.quaternion): bk.vector3 	                                    -- Converts a quaternion to Euler angles.
bk.quaternion.toMatrix(q: bk.quaternion): bk.matrix 	                                    -- Converts a quaternion to a transformation matrix.
bk.quaternion.transform(q: bk.quaternion, m: bk.matrix): bk.quaternion 	                    -- Rotates a vector by a quaternion.

-- Vector2 math functions
bk.vector2.add(v1: bk.vector2, v2: bk.vector2): bk.vector2 	                                -- Adds two vectors together.
bk.vector2.angle(v1: bk.vector2, v2: bk.vector2): number 	                                -- Gets the angle between two vectors.
bk.vector2.clamp(v1: bk.vector2, v2: bk.vector2): bk.vector2 	                            -- Restricts a vector between a min and max range.
bk.vector2.distance(v1: bk.vector2, v2: bk.vector2): number 	                            -- Calculates the distance between two points.
bk.vector2.divide(v1: bk.vector2, v2: bk.vector2): bk.vector2 	                            -- Divides a vector by another vector.
bk.vector2.dot(v1: bk.vector2, v2: bk.vector2): number 	                                    -- Calculates the dot product of two vectors.
bk.vector2.equals(v1: bk.vector2, v2: bk.vector2): boolean 	                                -- Checks if two vectors are identical.
bk.vector2.invert(v: bk.vector2): bk.vector2 	                                            -- Inverts the components of a vector.
bk.vector2.length(v: bk.vector2): number 	                                                -- Gets the magnitude (length) of a vector.
bk.vector2.lerp(v: bk.vector2, target: bk.vector2, amount: number): bk.vector2 	            -- Linearly interpolates between two vectors.
bk.vector2.lineAngle(start: bk.vector2, _end: bk.vector2): number 	                        -- Gets the angle of a line defined by two points.
bk.vector2.max(v1: bk.vector2, v2: bk.vector2): bk.vector2 	                                -- Returns a vector with the maximum components.
bk.vector2.min(v1: bk.vector2, v2: bk.vector2): bk.vector2 	                                -- Returns a vector with the minimum components.
bk.vector2.moveTowards(v: bk.vector2, target: bk.vector2, maxDist: number): bk.vector2      -- Moves a vector toward a target by a step.
bk.vector2.multiply(v1: bk.vector2, v2: bk.vector2): bk.vector2 	                        -- Multiplies two vectors together.
bk.vector2.negate(v: bk.vector2): bk.vector2 	                                            -- Flips the direction of a vector.
bk.vector2.normalize(v: bk.vector2): bk.vector2 	                                        -- Scales vector length to 1 while keeping direction.
bk.vector2.one(): bk.vector2 	                                                            -- Returns a vector with components (1, 1).
bk.vector2.reflect(v: bk.vector2, normal: bk.vector2): bk.vector2 	                        -- Reflects a vector off a surface normal.
bk.vector2.refract(v: bk.vector2, normal: bk.vector2, ratio: number): bk.vector2            -- Calculates refraction through a surface.
bk.vector2.rotate(v: bk.vector2, angle: number): bk.vector2 	                            -- Rotates a vector by a given angle.
bk.vector2.scale(v: bk.vector2, scalar: number): bk.vector2 	                            -- Multiplies a vector by a scalar value.
bk.vector2.subtract(v1: bk.vector2, v2: bk.vector2): bk.vector2 	                        -- Subtracts one vector from another.
bk.vector2.transform(v: bk.vector2, m: bk.matrix): bk.vector2 	                            -- Transforms a vector by a matrix.
bk.vector2.zero(): bk.vector2 	                                                            -- Returns a vector with components (0, 0).

-- Vector3 math functions
bk.vector3.add(v1: bk.vector3, v2: bk.vector3): bk.vector3 	                                        -- Adds two vectors together.
bk.vector3.angle(v1: bk.vector3, v2: bk.vector3): number 	                                        -- Returns the angle between two vectors.
bk.vector3.barycenter(p: bk.vector3, a: bk.vector3, b: bk.vector3, c: bk.vector3): bk.vector3       -- Calculates the barycenter of a triangle.
bk.vector3.clamp(v1: bk.vector3, v2: bk.vector3): bk.vector3 	                                    -- Restricts a vector between a min and max range.
bk.vector3.cross(v1: bk.vector3, v2: bk.vector3): bk.vector3 	                                    -- Returns the cross product of two vectors.
bk.vector3.cubicHermite(v1: bk.vector3, tangent1: bk.vector3, v2: bk.vector3, tangent2: bk.vector3, amount: number): bk.vector3     -- Performs cubic hermite interpolation.
bk.vector3.distance(v1: bk.vector3, v2: bk.vector3): number                                         -- Calculates the distance between two points.
bk.vector3.divide(v1: bk.vector3, v2: bk.vector3): bk.vector3                                       -- Divides a vector by another vector or scalar.
bk.vector3.dot(v1: bk.vector3, v2: bk.vector3): number 	                                            -- Returns the dot product of two vectors.
bk.vector3.equals(v1: bk.vector3, v2: bk.vector3): boolean 	                                        -- Checks if two vectors are identical.
bk.vector3.invert(v: bk.vector3): bk.vector3 	                                                    -- Inverts the components of a vector.
bk.vector3.length(v: bk.vector3): number 	                                                        -- Returns the magnitude of a vector.
bk.vector3.lerp(v: bk.vector3, target: bk.vector3, amount: number): bk.vector3 	                    -- Linearly interpolates between two vectors.
bk.vector3.max(v1: bk.vector3, v2: bk.vector3): bk.vector3 	                                        -- Returns a vector with the maximum components.
bk.vector3.min(v1: bk.vector3, v2: bk.vector3): bk.vector3 	                                        -- Returns a vector with the minimum components.
bk.vector3.moveTowards(v: bk.vector3, target: bk.vector3, maxDist: number): bk.vector3 	            -- Moves a vector toward a target position.
bk.vector3.multiply(v1: bk.vector3, v2: bk.vector3): bk.vector3 	                                -- Multiplies two vectors together.
bk.vector3.negate(v: bk.vector3): bk.vector3 	                                                    -- Returns the negative of a vector.
bk.vector3.normalize(v: bk.vector3): bk.vector3 	                                                -- Scales a vector to a length of 1.
bk.vector3.one(): bk.vector3 	                                                                    -- Returns a vector with all components set to 1.
bk.vector3.perpendicular(v: bk.vector3): bk.vector3 	                                            -- Returns a perpendicular vector.
bk.vector3.project(v1: bk.vector3, v2: bk.vector3): bk.vector3 	                                    -- Projects a vector onto another vector.
bk.vector3.reflect(v: bk.vector3, normal: bk.vector3): bk.vector3 	                                -- Reflects a vector off a normal.
bk.vector3.refract(v: bk.vector3, normal: bk.vector3, ratio: number): bk.vector3 	                -- Calculates the refraction of a vector.
bk.vector3.reject(v1: bk.vector3, v2: bk.vector3): bk.vector3 	                                    -- Calculates the rejection of a vector.
bk.vector3.rotateByAxisAngle(v: bk.vector3, axis: bk.vector3, angle: number): bk.vector3 	        -- Rotates a vector around an axis by an angle.
bk.vector3.rotateByQuaternion(v: bk.vector3, q: bk.quaternion): bk.vector3 	                        -- Rotates a vector using a quaternion.
bk.vector3.scale(v: bk.vector3, scalar: number): bk.vector3 	                                    -- Multiplies a vector by a scalar value.
bk.vector3.subtract(v1: bk.vector3, v2: bk.vector3): bk.vector3 	                                -- Subtracts one vector from another.
bk.vector3.transform(v: bk.vector3, m: bk.matrix): bk.vector3 	                                    -- Transforms a vector by a matrix.
bk.vector3.unproject(src: bk.vector3, proj: bk.matrix, view: bk.matrix): bk.vector3 	            -- Converts screen coordinates to world space.
bk.vector3.zero(): bk.vector3 	                                                                    -- Returns a vector with all components set to 0.
</pre>