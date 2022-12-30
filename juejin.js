const axios = require('axios');

const { text } = require('express');
const nodemailer = require('nodemailer');
// 创建 nodemailer 配置
let transporter = nodemailer.createTransport({
    //支持列表： https://nodemailer.com/smtp/well-known/
    service: 'QQ',
    port: 465, // SMTP 端口 这个不用管
    secureConnection: true,
    auth: {
        user: 'message-notice@qq.com',
        pass: 'ndaybiysdkklbjeg',
    }
});
var textEmail=null

// setInterval(() => {
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('邮件发送成功 ID:', info.messageId);
//     });
// }, 1000);


function EmailSend() {
    let mailOptions = {
        from: '"NickName" <message-notice@qq.com>',
        to: '361617463@qq.com',
        subject: '发文章的标题',
        text: text,
        text: text,
        html: '<!DOCTYPE html>' +
            '<html><head><title>Appointment</title>' +
            '</head><body><div>' +
            '<img src="http://evokebeautysalon1.herokuapp.com/main/img/logo.png" alt="" width="160">' +
            `<p>${textEmail}</p>` +
            `<p>Here is summery:</p>` +
            '<p>Name: James Falcon</p>' +
            '<p>Date: Feb 2, 2017</p>' +
            '<p>Package: Hair Cut </p>' +
            '<p>Arrival time: 4:30 PM</p>' +
            '</div></body></html>'
        // html:'这里也可以写html'
    };
    console.log(textEmail)
    console.log(mailOptions)
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('邮件发送成功 ID:', info.messageId);
    });
}














var api = {
    // 签到
    checkIn: '/growth_api/v1/check_in',
    // 查询签到
    getCheckStatus: '/growth_api/v1/get_today_status',
    // 查询签到天数
    getCheckInDays: '/growth_api/v1/get_counts',
    // 查询当前矿石
    getCurrentPoint: '/growth_api/v1/get_cur_point',
    // 查询抽奖
    getlotteryStatus: '/growth_api/v1/lottery_config/get',
    // 抽奖
    draw: '/growth_api/v1/lottery/draw',
    // 沾喜气
    dipLucky: '/growth_api/v1/lottery_lucky/dip_lucky',
    // 获取沾喜气列表用户
    getLuckyUserList: '/growth_api/v1/lottery_history/global_big'
}
var headers = {
    'Content-Type': 'application/json',
    'Cookie': '_ga=GA1.2.1552759540.1672310321; _gid=GA1.2.117403224.1672310321; _tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227182518073781667361%2522%252C%2522user_unique_id%2522%253A%25227182518073781667361%2522%252C%2522timestamp%2522%253A1672310321563%257D; passport_csrf_token=cd4c880716b19a498c609d4fc8e66458; passport_csrf_token_default=cd4c880716b19a498c609d4fc8e66458; n_mh=i2a1GWUt2fNfatSZl3luM-aVn3l5TOs2nf2JV1Pe-1o; sid_guard=36b6dc30056333f9dc6a79b08b73d806%7C1672310396%7C31536000%7CFri%2C+29-Dec-2023+10%3A39%3A56+GMT; uid_tt=699c4a5617c0cfa21dad6d404eb4b2cf; uid_tt_ss=699c4a5617c0cfa21dad6d404eb4b2cf; sid_tt=36b6dc30056333f9dc6a79b08b73d806; sessionid=36b6dc30056333f9dc6a79b08b73d806; sessionid_ss=36b6dc30056333f9dc6a79b08b73d806; sid_ucp_v1=1.0.0-KDgzMDNkNmRhZjI1YWRlNTIwOGNkZWM5ZWM4NDg2NWRhNTRhNTNjYWMKFgi-oeCQkIyvAhD83LWdBhiwFDgIQDgaAmxmIiAzNmI2ZGMzMDA1NjMzM2Y5ZGM2YTc5YjA4YjczZDgwNg; ssid_ucp_v1=1.0.0-KDgzMDNkNmRhZjI1YWRlNTIwOGNkZWM5ZWM4NDg2NWRhNTRhNTNjYWMKFgi-oeCQkIyvAhD83LWdBhiwFDgIQDgaAmxmIiAzNmI2ZGMzMDA1NjMzM2Y5ZGM2YTc5YjA4YjczZDgwNg',
}

async function load() {
    // axios.defaults.headers.
    // console.log(axios.defaults.headers.common)
    axios.get(`https://api.juejin.cn${api.getCheckStatus}`, {
        headers
    })
        .then((res) => {
            
            if (!res.data.data) {
                textEmail=JSON.stringify(res.data);
                console.log(textEmail)
                EmailSend();
                //CheckIn()
            } else {
                textEmail=JSON.stringify(res.data);
                console.log(textEmail)
                EmailSend();
                //CheckIn()
                // LuckyDraw()
                //queryOre()
            }
            // return res.data.res.vertical
        })
        .catch((err) => {
            console.log('Error',err)
        })
    // await downloadFile(data)
    // await sleep(3000)
    // if (skip < 1000) {
    //   load(skip + 30)
    // } else {
    //   console.log('下载完成')
    // }
}
function CheckIn() {
    // axios.defaults.headers.
    // console.log(axios.defaults.headers.common)
    axios.post(`https://api.juejin.cn${api.checkIn}`, {
        headers
    })
        .then((res) => {
            console.log(res.data)
            // return res.data.res.vertical
        })
        .catch((err) => {
            console.log(err)
        })
}
function LuckyDraw() {
    // axios.defaults.headers.
    // console.log(axios.defaults.headers.common)
    axios.post(`https://api.juejin.cn${api.draw}`, {
        headers
    })
        .then((res) => {
            console.log(res.data)
            // return res.data.res.vertical
        })
        .catch((err) => {
            console.log(err)
        })
}
function queryOre() {
    // axios.defaults.headers.
    // console.log(axios.defaults.headers.common)
    axios.get(`https://api.juejin.cn${api.getCurrentPoint}`, {
        headers
    })
        .then((res) => {
            console.log(res.data.data)
            // return res.data.res.vertical
        })
        .catch((err) => {
            console.log(err)
        })
}

load()
// const getCheckStatus = async () => {
//     console.log('start');
//     try {
//         const getCheckStatusRes = await axios({
//             url: api.getCheckStatus,
//             method: 'get'
//         })
//         console.log(getCheckStatusRes.data);
//         return getCheckStatusRes.data
//     } catch (error) {
//         throw `查询签到失败!【${error}】`
//     }
// }