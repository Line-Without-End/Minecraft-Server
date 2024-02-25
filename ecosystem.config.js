module.exports = {
  apps : [{
    name   : "mine-server",
    script : "/usr/bin/java",
    cwd : "/root/Minecraft-Server",
    args: "-Xmx8192M -Xms512M -jar paper-1.20.4-430.jar -nogui"
  },
  {
    name: "server-restarter",
    script: "/root/Minecraft-Server/scripts/restart.sh",
    autorestart : false,
    cron_restart: "30 */2 * * *"
  },
  {
    name: "avgload-status",
    script: "/root/Minecraft-Server/scripts/server_load.sh",
    autorestart : false,
    cron_restart: "*/15 * * * *"
  }
]
}
