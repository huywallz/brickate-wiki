Provides the core interface for managing the current server state and communicating with connected players.

## Functions
| | | |
|-|-|-|
| [bk.server.broadcast](?p=bk.server.broadcast) | Sends data to all players. | 7.0+ |
| [bk.server.getConfig](?p=bk.server.getConfig) | Gets server configuration data. | 7.0+ |
| [bk.server.getPlayers](?p=bk.server.getPlayers) | Returns list of all player IDs. | 7.0+ |
| [bk.server.kick](?p=bk.server.kick) | Removes a player from the server. | 7.0+ |
| [bk.server.send](?p=bk.server.send) | Sends data to a specific player. | 7.0+ |
## Events
| | | |
|-|-|-|
| [bk.server.onOutdated](?p=bk.server.onOutdated) | Triggered when the server is outdated and no longer supported. | 7.3+ |
| [bk.server.onPlayerAdded](?p=bk.server.onPlayerAdded) | Triggered when a player joins. | 7.0+ |
| [bk.server.onPlayerRemoved](?p=bk.server.onPlayerRemoved) | Triggered when a player leaves. | 7.0+ |
| [bk.server.onReceived](?p=bk.server.onReceived) | Triggered when a message is received. | 7.0+ |
| [bk.server.onTick](?p=bk.server.onTick) | Triggered every server tick. | 7.0+ |