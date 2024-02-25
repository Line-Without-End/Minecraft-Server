# Configured Minecraft Server

## Fast startup.
To start the server, you will need to copy the repository to a convenient folder.
```
git clone https://github.com/Line-Without-End/Minecraft-Server.git
cd Minecraft-Server
```
PM2 is used to operate the server and autostart it.
PM2 installation 
```
sudo apt-get install build-essential
sudo apt-get install curl openssl libssl-dev
git clone https://github.com/joyent/node.git
cd node
git checkout v0.10.24
./configure
make
sudo make install
sudo npm install pm2 -g
```
After that start the server app
```
pm2 start
```
pm2 will start your server
## Connection to server
Connect to game:
> your__server_ip:55055

Rcon port:
> your__server_ip:55056
## Requires
install mcrcon from https://github.com/Tiiffi/mcrcon
```
git clone https://github.com/Tiiffi/mcrcon.git
cd mcrcon
make
sudo make install
```
## Autostart.
To organize autostart after shutting down the server, save the list of workers.
```
pm2 save
```
To turn off the configuration service:
```
pm2 stop mine-server
```
To reboot the server manually:
```
pm2 restart mine-server
```
## Autorestart.
config the file ecosystem.config.js parameter - cron_restart
## PM2 app info
```
pm2 list
```
## Scripts
> restart.sh - displays a message about the server restart in 60 seconds, saves the world and restarts.
> server_load.sh - displays avgload information in the server chat.

> start.sh - start the server manually.