const mineflayer = require("mineflayer");
//const inventoryViewer = require('mineflayer-web-inventory')
const keep_alive  = require('./keep_alive.js")
const options = {
  host: "mc.blockdrop.org",
  username: "villagers",
  version: "1.20",
};


var bot = mineflayer.createBot(options);

bindEvents(bot);
//inventoryViewer(bot)
function bindEvents(bot) {
    bot.once("login", () => {
  console.log("Joined");
  LoginF();
});
    bot.on("message", (message) => {
  console.log("[Chat/Server] " + message.toString());
});

  bot.on("resourcePack", (url, hash) => {
    console.log(url, hash)
    bot.acceptResourcePack()
})
function LoginF() {
  bot.chat("/login huzaifa");
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

bot.once("spawn", async function () {
  await sleep(1200);
 // bot.setQuickBarSlot(4);
  //await sleep(1200);
  //bot.activateItem();
  bot.chat("/server survival");
    //bot.on("windowOpen", async function (window) {
      // Added async here
      //await sleep(1200);
      //console.log(window);
      await sleep(2000);
   //   bot.clickWindow(14, 0, 0);
    //  bot.clickWindow(14, 0, 0);
   //   await sleep(5000);
   
      bot.chat("/tpa GamerBoy321123");
      bot.chat("/tpahere GamerGenix");

      await sleep(10000);
      bot.chat("/afk");
      
    
   // });
});
// Fixed event name from 'messagestr' to 'message'
bot.on("message", function (message) {
  console.log("Received message:", message.toString());
});
}
bot.on('end', function(reason) { 
	console.log("I got end for", reason, "lol");
	bot = mineflayer.createBot(options);
    bindEvents(bot);
});
bot.on('kicked', function(reason) {
    console.log("I got kicked for", reason, "lol");
    bot = mineflayer.createBot(options);
    bindEvents(bot);
});
bot.on('error', function(reason) {
    console.log("I got error for", reason, "lol");
    bot = mineflayer.createBot(options);
    bindEvents(bot);
});
