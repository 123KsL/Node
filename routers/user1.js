const express = require('express');
const router = express.Router();




router.get('/tableGet', async (req, res, next) => {
    const sql = `SELECT * FROM table2;`
    if (global.client) {
        //console.log(sql)
        global.client.query(sql).then(_ => {
            console.log(_)
            res.send({ status: 200, data: _.rows, token: 'token' });
        })
            .catch(error => {
                res.send({ status: 400, data: error, token: 'token' });
            })
    } else {
        //console.log('no')
    }

})


module.exports = router;