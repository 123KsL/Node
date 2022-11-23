const express = require('express');
const indexRouter = require('./routers/index');
const cors = require('cors');
const app = express();
app.use(cors())
app.all("/*", (req, res, next)=>{
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