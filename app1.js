const express = require('express');
const indexRouter = require('./routers/index');
const cors = require('cors');
const app = express();
const pg = require('pg');

global.name//定义全局
//连接格式为:   tcp://用户名：密码@localhost/数据库名
global.client = new pg.Client('tcp://postgres:918918wsx@localhost:5432/test')
//建立连接，并在回调函数中输出是否连接成功
client.connect((err, res) => {
    if (err) {
        console.log(`clientConnectionReady Error:${err.message}`);
        client.end();
        return;
    }
    console.log('connection success!')

    exports.client = client;
    // const sql = `SELECT * FROM table1 , table2;`
    // client.query(sql).then(_ => {
    //     console.log(_.rows)

    // })
    //     .catch(error => {
    //         console.log(error)
    //     })
   
})
app.use(cors())
app.all("/*", (req, res, next) => {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})
app.use(express.json());
app.use('/', indexRouter);
app.listen(4000, () => {
    console.log('listening on port 4000');
})