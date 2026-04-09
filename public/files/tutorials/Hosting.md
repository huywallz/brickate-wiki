<div class="warning-box">
By hosting a server, you agree to the Brickate <a href="https://brickate.org/tos">Terms of Service</a> and are responsible for the content and security of your hosted instance.
</div>

## Overview
Brickate is currently in **pre-alpha**. Because we are in very early development and do not yet have the funding for large, dedicated server clusters, we use **manual hosting**.

This means that instead of us hosting the game for you, you will run the server on your own computer. Your system will act as the "host" for other players to join.

## Prerequisites
To host a game, you need two things:
- **Latest `bkserver` executable:** Download the hosting file from [brickate.org/download](https://brickate.org/download).
- **Game API key:** You must generate a unique key from your [game configuration](https://brickate.org/create) page. This key tells the system which game you are trying to host.

## Preparing
To get your server up and running, you need to set up your local environment correctly. Since you are hosting from your own system, organization is key to ensuring the `bkserver` runs smoothly.

### Game API key
Log in to your account and navigate to the **game configuration** page.

<img src="/assets/tutorials/Hosting/image1.png" class="doc-image">

Inside the configuration for your specific game, look for the section labeled **Security**.
- Click the button that says **"Generate API key"**.
- A long string of letters and numbers will appear.

<img src="/assets/tutorials/Hosting/image2.png" class="doc-image">

### File structure
#### Using bkserver without terminal
We recommend creating a specific folder so the `bkserver` files don't get mixed up with your other downloads.
```
/MyGame/
├── /static/
├── bkserver.exe
├── client.lua
├── config.lua
├── server.lua
└── *.dll
```

#### Using bkserver with terminal
If you are an advanced user, you don't have to stay in one folder. `bkserver.exe` supports **command line parameters**. This allows you to host from any directory using the terminal or a batch file.
```
/path/to/bkserver.exe /path/to/MyGame/
```
```
/MyGame/
├── /static/
├── client.lua
├── config.lua
├── server.lua
```

### Server configuration
The `config.lua` file tells the `bkserver` how to connect to the Brickate network and how to manage players. This file must use the `return {}` format.

Create a file named `config.lua` in your game folder and paste the following:
<pre class="codeblock">
return {
    max_players = 16,
    global = true,
    api_key = "<game-api-key>",
    join_ip = "<join-ip>",
    join_port = 12025,
    port = 12025
}
</pre>
#### Understanding the configuration
- `max_players`: The limit of how many players can be in your server at once.
- `global`: Set this to `true` if you want your server to show up on the Brickate public website.
- `api_key`: Paste your unique key from the game configuration page.
- `join_ip`: This is the IP address players will use to connect. If you are hosting from home, this is usually your Public IP.
- `join_port`: The port that the client-side game will try to connect to.
- `port`: The actual port your local `bkserver` will listen on. Usually, `join_port` and `port` should be the same.

## Starting the Server
Now that your files are organized and your `config.lua` is ready, it is time to launch.

### Run the Executable
To start your server, you can either double-click `bkserver.exe` directly inside your game folder, or run it through a terminal by specifying the path to your game directory.

### Check the console output
Watch the log in the window. You should see messages confirming the server status:

<img src="/assets/tutorials/Hosting/image3.png" class="doc-image">

### Verification
If `global` was set to `true` in your config, visit the Brickate website. Your game should appear online in the website after a few moments.

### Firewall
Ensure Windows Firewall isn't blocking `bkserver.exe`. You may need to click "Allow Access" when the popup appears.

## Port Forwarding & Networking
To allow other players to join your server, your computer needs to be reachable from the internet.

### Port Forwarding
If you want the best possible performance and a direct connection, you can **Port Forward** the port specified in your `config.lua` (e.g., 12025) through your router settings. 
- **Note:** Port forwarding is only available for users who want full performance and have reviewed and accepted our [Terms of Service](https://brickate.org/tos). 
- **Security:** Ensure you are comfortable opening a port on your network before proceeding.

### Tunneling Services (Recommended)
For a more secure and easier setup, we highly recommend using a tunneling service. These services allow you to host a server without modifying your router settings or exposing your home IP address.

- **[playit.gg](https://playit.gg/):** A popular and free service that creates a secure tunnel for your game server.
- **How to use:** Simply run the tunneling client alongside your `bkserver` and use the address they provide as your `join_ip` in the `config.lua`.