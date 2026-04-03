Provides the core interface for managing the client-side state and communicating with the server.

## Functions
| | | |
|-|-|-|
| [bk.client.getPing](?p=bk.client.getPing) | Gets the current round-trip time (RTT) between the client and the server. | 7.0+ |
| [bk.client.send](?p=bk.client.send) | Sends a string of data from the client to the server. | 7.0+ |
## Events
| | | |
|-|-|-|
| [bk.client.onReceived](?p=bk.client.onReceived) | Triggered when data arrives from the server. | 7.0+ |
| [bk.client.onTick](?p=bk.client.onTick) | Triggers immediately after the network host services all pending events. | 7.0+ |