const request = require('request');

class BobBot {
  getLunchMessage() {
    const time = Math.floor(Math.random() * 10) + 45;
    const text = `밥봇이 알려주는 최적의 밥타임은 ${time}분입니다!`;
    return { message: text, time };
  }
  
  sendMessage(message) {
    var options = {
      method: 'POST',
      url: process.env.BOBBOT_URL,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        botName: 'Bob Bot',
        botIconImage: 'https://t1.daumcdn.net/cfile/tistory/156F7D384FD54E1526',
        text: message
      },
      json: true
    };

    request(options, (error, response, body) => {
      if (error) throw new Error(error);
      // console.log(response);
    });

  }
}

module.exports = BobBot;