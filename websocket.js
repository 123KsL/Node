// 引入nodejs-websocket
// var ws = require("nodejs-websocket");
const WebSocket = require('ws');


// 创建websocket
function start() {
    console.log('start')
    // ws.createServer({ binary: true ,text:false},(conn) => {
    //     // conn.on('message', (str) => {
    //     //     console.log('监听消息',str)
    //     //     // 监听消息 example: Blob | ArrayBufferLike | ArrayBufferView
    //     //     conn.send(str);
    //     // })
    //     conn.on('binary', (str) => {
    //         if (typeof str === 'string') {
    //             console.log('Received a string message');
    //           } else if (str instanceof Buffer) {
    //             console.log('Received a Buffer message');
    //           } else {
    //             console.log('Received an unknown message type');
    //           }
    //         console.log('监听消息',str)
    //         // 监听消息 example: Blob | ArrayBufferLike | ArrayBufferView
    //         //conn.sendText(str);
    //         conn.sendBinary(Buffer.from(str.toString(), 'binary'));
            
    //     })
    //     // conn.on("text", (str) => {
    //     //     //  监听消息 example: string
    //     //     loadMessage(conn, str);
    //     // });
    //     // 监听关闭
    //     conn.on("close",  (code, reason)=> {
    //         console.log("关闭");
    //     });
    // })
    //     .listen(8001);
    
    var webws =new WebSocket.Server({ port: 8001 });
    webws.on('connection', (ws) => {
        ws.on('message', (message) => {
          // message is a Blob object
          console.log(message)
          ws.send(message);
        });
        ws.on('close',(code, reason)=>{
            console.log("关闭",code);
        })
          //     conn.on("close",  (code, reason)=> {
    //         console.log("关闭");
    //     });
      });
    console.log("开启成功~");
}



// 接收消息 并返回信息
// function loadMessage(conn, str) {
//     console.log(str.buffer)
//     conn.send(str.buffer);
// }
start()