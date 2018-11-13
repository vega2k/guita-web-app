//Simple Server WebSocket 작성
const WebSocket = require('ws');
//WebSocket Server 객체 생성
const wss = new WebSocket.Server({port:40510});

//connection, message event 처리
wss.on('connection',function (ws) {
    //client에서 보낸 메시지를  server에서 수신 받음
    ws.on('message',function (msg) {
        console.log('수신 받은 메시지 : %s',msg);
    });
    //server에서 Client에게 메시지를 전송하기
    setInterval(() => ws.send(`${new Date()}`),
        3000);
});
