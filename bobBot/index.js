const BobBot = require('./BobBot'); 
const cron = require('node-cron');


const botBot = new BobBot();

cron.schedule('40 12 * * *', () => {
  const lunchMessage = botBot.getLunchMessage();
  botBot.sendMessage(lunchMessage);
});