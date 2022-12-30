// const webPush = require('web-push'); // new
// // console.log(webPush.generateVAPIDKeys()); // new
// const vapidKeys = { // new
//     publicKey: 'BC4KHwc7JWt-ZIpo8_B5XOZ0N7irG8eWdalBlsInti-BzuLh5zcIuY36yIlIZTVJEsQnC5sgBz5MEYnTUTJt-3U', // new
//     privateKey: 's0cNBbvJAgc13txQuMlzHu4Ts9NheD2JOQG9jhGfUBE' // new
//   }; // new
// // get client subscription config from db
// const subscription = {
//     endpoint: '',
//     expirationTime: null,
//     keys: {
//         auth: '',
//         p256dh: '',
//     },
// };

// const payload = {
//     notification: {
//         title: 'Title',
//         body: 'This is my body',
//         icon: 'assets/icons/icon-384x384.png',
//         actions: [
//             { action: 'bar', title: 'Focus last' },
//             { action: 'baz', title: 'Navigate last' },
//         ],
//         data: {
//             onActionClick: {
//                 default: { operation: 'openWindow' },
//                 bar: {
//                     operation: 'focusLastFocusedOrOpen',
//                     url: '/signin',
//                 },
//                 baz: {
//                     operation: 'navigateLastFocusedOrOpen',
//                     url: '/signin',
//                 },
//             },
//         },
//     },
// };

// const options = {
//     vapidDetails: {
//         subject: 'mailto:example_email@example.com',
//         publicKey: vapidKeys.publicKey,
//         privateKey: vapidKeys.privateKey,
//     },
//     TTL: 60,
// };

// // send notification
// webPush.sendNotification(subscription, JSON.stringify(payload), options)
//     .then((_) => {
//         console.log('SENT!!!');
//         console.log(_);
//     })
//     .catch((_) => {
//         console.log('xxx');
//     });
const express = require('express');
const router = express.Router();


const user = require('./user');
router.use('/user', user);

const user1 = require('./user1');
router.use('/user1', user1);


// const user2 = require('./user2');
// router.use('/user2', user2);




module.exports = router;
