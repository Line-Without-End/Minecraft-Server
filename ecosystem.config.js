module.exports = {
  apps : [{
    name   : "mine-server",
    script : "/usr/bin/java",
    cwd : "/root/Minecraft-Server",
    args: "-Xmx8192M -Xms512M -jar paper-1.20.4-430.jar -nogui"
  }]
}
