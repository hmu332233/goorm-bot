const BobBot = require('./BobBot'); 
const cron = require('node-cron');


const botBot = new BobBot();

cron.schedule('* * * * * *', () => {
  const lunchMessage = botBot.getLunchMessage();
  botBot.sendMessage(lunchMessage);
});