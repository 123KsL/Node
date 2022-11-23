const express = require('express');
const router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "simpleangular"
});


/* GET users listing. */
router.post('/register', async  (req, res, next)=> {
  console.log(req.body)
  try {
    res.send({ status: 1, data: req.body, token : 'token' });
  } catch (error) {
    res.send({ status: 0, error: error });
  }
  // try {
  //   let { username, email, password } = req.body; 
   
  //   const hashed_password = md5(password.toString())

  //   const checkUsername = `Select username FROM users WHERE username = ?`;
  //   con.query(checkUsername, [username], (err, result, fields) => {
  //     if(!result.length){
  //       const sql = `Insert Into users (username, email, password) VALUES ( ?, ?, ? )`
  //       con.query(
  //         sql, [username, email, hashed_password],
  //       (err, result, fields) =>{
  //         if(err){
  //           res.send({ status: 0, data: err });
  //         }else{
  //           let token = jwt.sign({ data: result }, 'secret')
  //           res.send({ status: 1, data: result, token : token });
  //         }
         
  //       })
  //     }
  //   });

    

   
  // } catch (error) {
  //   res.send({ status: 0, error: error });
  // }
});

// router.post('/login', async ctx => {
//     ctx.set('Access-Control-Allow-Origin','*');
//     console.log('data', ctx.request.body);
//     ctx.body = '添加成功'
//     ctx.send({ status: 0, error: ctx });
// })


// {
//     req.set('Access-Control-Allow-Origin', 'http://localhost:4000/');
//     console.log('data', req.request.body);
//     req.body = '添加成功'
//     req.send({ status: 0, error: req });
// //   try {
// //     console.log(req)
// //     // let { username, password } = req.body; 
   
// //     // const hashed_password = md5(password.toString())
// //     // const sql = `SELECT * FROM users WHERE username = ? AND password = ?`
// //     // con.query(
// //     //   sql, [username, hashed_password],
// //     // function(err, result, fields){
// //     //   if(err){
// //     //     res.send({ status: 0, data: err });
// //     //   }else{
// //     //     let token = jwt.sign({ data: result }, 'secret')
// //     //     res.send({ status: 1, data: result, token: token });
// //     //   }
     
// //     // })
// //     console.log(req)
// //     res.send({ status: 1, data: req, token: token });
// //   } catch (error) {
// //     res.send({ status: 0, error: req });
// //   }
// });



module.exports = router;