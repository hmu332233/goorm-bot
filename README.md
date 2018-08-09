## goorm-bot

### deploy
```
$ docker bulid -t goorm-bot:0.0.1 .
$ docker run -d -e BOBBOT_URL=[URL] --name goorm-bot:0.0.1 goorm-bot:0.0.1 /bin/bash -c "npm run-script [script name]"
```