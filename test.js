const fs = require('fs');
const http = require('http');
const process = require('process'); // 引入 process 模块
// 模拟轮询的间隔时间（60秒）
const pollingInterval = 60 * 1000;
// 模拟资源列表

// 记事本文件的路径
const filePath = 'C:/Users/XYTECH1/Desktop/colorList.txt';


let resList_copy;
let resList=[];

function start() {
    // 读取记事本文件
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        } else {
            resList_copy = data.split(',').map(_ => { return _.replace(/"/g, '') });
            resList.push(...resList_copy); 
            startPolling()
            //console.log(data.split(',').map(_ => { return _.replace(/"/g, '') }));
        }
    })
}



// 模拟每批次加载的资源数量
const batchSize = 100;

let unSub = false;

function startPolling() {
    setInterval(() => {
        if (!unSub) {
            GetUrlList();
        }
    }, pollingInterval);
}

function GetUrlList() {
    if (resList.length == 0) {

        resList.push(...resList_copy);
        //console.log(resList_copy,'resList_copy');
    }

    const ulrList = resList.slice(0, batchSize);
    resList.splice(0, batchSize);

    console.log(ulrList, 'ulrList');

    ulrList.forEach(url => loadImage(url));
}

function loadImage(url) {
    // 发起 HTTP 请求
    http.get(url, (response) => {
        if (response.statusCode !== 200) {
            console.error(`HTTP request failed with status code: ${response.statusCode}`);
            return;
        }

        let imageData = Buffer.from([]);

        response.on('data', (chunk) => {
            //imageData = Buffer.concat([imageData, chunk]);
            console.log('ok');
        });

        response.on('end', () => {
            // 处理图像数据，例如保存到文件
            //  fs.writeFileSync('image.jpg', imageData);
            // console.log('Image downloaded and saved.');
        });
    }).on('error', (error) => {
        //console.error(`HTTP request error: ${error.message}`);
    });
}

// 启动轮询
start();
// 添加异常处理
process.on('uncaughtException', (err) => {
    console.error('未捕获的异常:', err);
    // 在此可以添加记录错误信息的代码
    // 重新启动脚本
    setTimeout(() => {
        console.log('重新启动脚本...');
        process.exit(1); // 1 表示非正常退出，触发自动重启
    }, 5000); // 5秒后重新启动
});

// // 模拟轮询结束
// setTimeout(() => {
//   unSub = true;
// }, 300000);  // 假设轮询运行5分钟
