const BobBot = require('./BobBot'); 
const cron = require('node-cron');


const botBot = new BobBot();

cron.schedule('40 12 * * *', () => {
  const lunchMessage = botBot.getLunchMessage();
  botBot.sendMessage(lunchMessage.message);
  const secondeSchedule = cron.schedule(`${lunchMessage.time} 12 * * *`, () => {
    botBot.sendMessage('최적의 밥타임은 지금입니다!');
    secondeSchedule.destroy();
  });
});