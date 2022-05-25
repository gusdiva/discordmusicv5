module.exports = {
  cmdPerPage: 10, //Number of commands per page of help command
  adminId: "UserId", // Admin of the bot
  token: process.env.token || "", //Bot's Token
  clientId: process.env.clientId || "", //ID of the bot
  clientSecret: process.env.clientSecret || "", //Client Secret of the bot
  port: 4200, //Port of the API and Dashboard
  scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  serverDeafen: true, //If you want bot to stay deafened
  defaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  supportServer: "https://www.youtube.com/channel/UCHU-w8K1fMx9fb2vIFbHf7A", //Support Server Link
  Issues: "", //Bug Report Link
  permissions: 277083450689, //Bot Inviting Permissions
  disconnectTime: 30000, //How long should the bot wait before disconnecting from the voice channel. in miliseconds. set to 1 for instant disconnect.
  alwaysplay: true, // when set to true music will always play no matter if theres no one in voice channel.
  debug: false, //Debug mode
  // Lavalink server; optional public lavalink -> https://lavalink-list.darrennathanael.com/
  // The default one should work fine.
  nodes: [
    {
      identifier: "Main Node", //- Used for indentifier in stats commands.
      host: "usui-linku.kadantte.moe",
      port: 443,
      password: "Usui#0256",
      retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
      retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
      secure: true, //- Can be either true or false. Only use true if ssl is enabled!
    },
  ],
  embedColor: "#db706c", //Color of the embeds, hex supported
  presence: {
    //PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
    status: "online", // You can have online, idle, and dnd(invisible too but it make people think the bot is offline)
    activities: [
      {
        name: "Hyemhyemu", //Status Text
        type: "WATCHING", // PLAYING, WATCHING, LISTENING, STREAMING
      },
    ],
  },
  iconURL: "https://media.giphy.com/media/dMH5v2ol3eMfkj90kw/giphy.gif", //This icon will be in every embed's author field
};
