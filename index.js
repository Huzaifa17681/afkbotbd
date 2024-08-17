const { versions } = require("minecraft-data");
const mineflayer = require("mineflayer");
const mineflayerViewer = require("prismarine-viewer").mineflayer;
const {
  pathfinder,
  Movements,
  goals: { GoalFollow },
} = require("mineflayer-pathfinder");
const { Vec3 } = require("vec3");

const options = {
  host: "mc.blockdrop.org",
  username: "zinx",
  version: "1.20",
};
const keep_alive = require('./keep_alive.js');
let playerfollowT = null;

const bot = mineflayer.createBot(options);
bot.loadPlugin(pathfinder);
bot.once("login", () => {
  console.log("Joined");
  LoginF();
});

bot.on("message", (message) => {
  console.log("[Chat/Server] " + message.toString());
});

function LoginF() {
  bot.chat("/login zinx");
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

bot.once("spawn", async function () {
  await sleep(1000);
  bot.setQuickBarSlot(4);
  await sleep(1000);
  bot.activateItem();

  bot.on("windowOpen", async function (window) {
    // Added async here
    await sleep(1000);
    bot.clickWindow(14, 0, 0);
    await sleep(1000);
    bot.chat("/afk");
  });
});

// Fixed event name from 'messagestr' to 'message'
bot.on("message", function (message) {
  console.log("Received message:", message.toString());
});
