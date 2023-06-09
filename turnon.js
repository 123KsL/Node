
const screenshot = require('screenshot-desktop');
//shell:startup 开机启动项
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
var textEmail = null;
var srcValue = null;
// setInterval(() => {
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('邮件发送成功 ID:', info.messageId);
//     });
// }, 1000);
function ScreenShot(){
    screenshot().then(img => {
        // Save the screenshot to a file
        //img.save('screenshot.png');
        //console.log(img)
        srcValue = img;
        EmailSend()
        //EmailSend();
    });
}

function EmailSend() {
    // setInterval(()=>{
       
    // },1000 * 60 *10)
    const emailList = ['361617463@qq.com'];

    // const regex = /<img[^>]*src="([^"]*)"/;
    // const html = textImg;
    // const match = regex.exec(html);
    // const src = match[1];  // "image.jpg"
    const imageBase64=srcValue.toString('base64')
    
    emailList.forEach(_ => {
        const name=(_=='361617463@qq.com')?'KsL':'DDD'
        let mailOptions = {
            //1339422081
            from: `KsL <message-notice@qq.com>`,
            to: _,
            subject:'name',
            text: text,
            text: text,
            html: '<!DOCTYPE html>' +
                '<html><head><title>Appointment</title>' +
                '<style>img{width:100%;height:100%;} *{font-size: 20px;font-weight: 500;font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;text-align: center;width: 100%;}</style>' +
                '</head><body>' +
                `<div style="margin: 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: space-between;
            align-items: center;">
            <img src='data:image/jpeg;base64,${imageBase64}'>
            </div>`+
                '</body></html>'


            // html: '<!DOCTYPE html>' +
            //     '<html><head><title>Appointment</title>' +
            //     '<style>img{width:100%;height:100%;} *{font-size: 20px;font-weight: 500;font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;text-align: center;width: 100%;}</style>' +
            //     '</head><body><div>' +
            //     `<p>${textEmail}</p>` +
            //     `<p style="text-align: right;width: 100%;">Day:&nbsp;${textTime}</p>` +
            //     `${textImg}` +
            //     '</div></body></html>'
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
    })

}








ScreenShot();
// load()
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