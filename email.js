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

let mailOptions = {
    from: '"NickName" <message-notice@qq.com>',
    to: '1979882018@qq.com',
    subject: '发文章的标题',
    text: text,
    text: text,
    html: '<!DOCTYPE html>' +
        '<html><head><title>Appointment</title>' +
        '</head><body><div>' +
        '<img src="http://evokebeautysalon1.herokuapp.com/main/img/logo.png" alt="" width="160">' +
        '<p>Thank you for your appointment.</p>' +
        '<p>Here is summery:</p>' +
        '<p>Name: James Falcon</p>' +
        '<p>Date: Feb 2, 2017</p>' +
        '<p>Package: Hair Cut </p>' +
        '<p>Arrival time: 4:30 PM</p>' +
        '</div></body></html>'
    // html:'这里也可以写html'
};
// setInterval(() => {
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('邮件发送成功 ID:', info.messageId);
//     });
// }, 1000);
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('邮件发送成功 ID:', info.messageId);
});


