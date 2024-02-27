#!/bin/bash
PT=/root/Minecraft-Server/ecosystem.config.js
pm2 stop $PT
pm2 delete $PT

pm2 kill
pm2 resurrect
