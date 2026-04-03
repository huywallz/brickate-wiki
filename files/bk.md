Main library which contains everything to interact with Brickate, including inputs, objects, and math

## Server
| | | |
|-|-|-|
| [bk.brick](?p=bk.brick) | Provides the core interface for spawning, transforming, and managing the physical properties and visual states of bricks in the world. | 7.0+ |
| [bk.object](?p=bk.object) | Provides a universal interface for managing shared properties across all entities, including players and bricks. | 7.0+ |
| [bk.physics](?p=bk.physics) | Provides the core interface for controlling the global physics environment and simulation state. | 7.0+ |
| [bk.player](?p=bk.player) | Provides the core interface for managing and querying the real-time state of the user's character within the engine. | 7.0+ |
| [bk.server](?p=bk.server)| Provides the core interface for managing the current server state and communicating with connected players. | 7.0+ |

## Client
| | | |
|-|-|-|
| [bk.camera](?p=bk.camera)| Provides the core interface for controlling the 3D viewport and managing how the world is rendered for the player. | 7.0+ |
| [bk.client](?p=bk.client)| Provides the core interface for managing the client-side state and communicating with the server. | 7.0+ |
| [bk.graphics](?p=bk.graphics)| Provides the core interface for low-level 2D graphics drawing. | 7.0+ |
| [bk.input](?p=bk.input)| Provides the core interface for checking the real-time status of physical input devices, such as the keyboard and mouse. | 7.0+ |

## Math
| | | |
|-|-|-|
| [bk.color](?p=bk.color)| Handles how objects and 2D shapes look on screen. | 7.0+ |
| [bk.matrix](?p=bk.matrix)| Handles complex transformations. | 7.0+ |
| [bk.quaternion](?p=bk.quaternion)| Used for 3D rotations. | 7.0+ |
| [bk.vector2](?p=bk.vector2)| Provide 2D coordinates. | 7.0+ |
| [bk.vector3](?p=bk.vector3)| Provides 3D coordinates and math for 3D positioning, physics, and world-space transformations. | 7.0+ |

## Generic
| | | |
|-|-|-|
| [bk.enum](?p=bk.enum)| Provides a collection of predefined constant values (enums) used to ensure consistency across the engine. | 7.0+ |