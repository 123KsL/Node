const express = require('express');
const router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "simpleangular"
// });



router.post('/tablePost', async (req, res, next) => {
<<<<<<< HEAD
  console.log(req.body)
  // const checkUsername = `INSERT INTO products VALUES (1, 'Cheese', 9.99);`;
  // //console.log(req.body)
  const count = Number(req.body.count)
  const name=String(req.body.name)
  const sql=`INSERT INTO table1 VALUES (${count},'${name}')`
  //console.log(sql)
=======
  // const checkUsername = `INSERT INTO products VALUES (1, 'Cheese', 9.99);`;
  // console.log(req.body)
  const count = Number(req.body.count)
  const name=String(req.body.name)
  const sql=`INSERT INTO table1 VALUES (${count},'${name}')`
  console.log(sql)
>>>>>>> b0e655f1837d54b46bc4b17023f2a506d30b0165
  if(global.client){
    global.client.query(sql).then(_=>{
      //console.log(_.rows)
      res.send({ status: 200, data: _.rows, token: 'token' });
    })
    .catch(error=>{
      res.send({ status: 400, data: error, token: 'token' });
    })
  }else{
    //console.log('no')
  }
  
  // con.query(name, [username], (err, result, fields) => {
  //   //console.log(result)
  //   res.send({ status: 1, data: req.body, token: 'token' });
  // })
  // try {
  //   const checkUsername = `INSERT INTO products VALUES (1, 'Cheese', 9.99);`;
  //   con.query(checkUsername, [username], (err, result, fields) => {
  //     //console.log(result)
  //     res.send({ status: 1, data: req.body, token: 'token' });
  //   })

  // } catch (error) {
  //   res.send({ status: 0, error: error });
  // }
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
router.put('/tablePut', async (req, res, next)=>{
  const sql=`UPDATE table1 SET count=${req.body.count} WHERE name=${req.body.name}`
  global.client.query(sql).then(_=>{
    //console.log(_)
    res.send({ status: 200, data:'ok', token: 'token' });
  })
  .catch(error=>{
    res.send({ status: 400, data: error, token: 'token' });
  })
});
router.delete('/tableDelete/:id', async (req,res,next)=>{
  console.log(req.url.split('/')[2])
    const sql =`DELETE FROM table1 WHERE name='${req.url.split('/')[2]}'`;
    global.client.query(sql).then(_=>{
      //console.log(_)
      res.send({ status: 200, data:'ok', token: 'token' });
    })
    .catch(error=>{
      res.send({ status: 400, data: error, token: 'token' });
    })
});
router.get('/tableGet', async (req, res, next) => {
  // const checkUsername = `INSERT INTO products VALUES (1, 'Cheese', 9.99);`;
  //const sql=`SELECT * FROM table2 , table1;`
  const sql=`SELECT * FROM table1;`
  if(global.client){
    //console.log(sql)
    global.client.query(sql).then(_=>{
      //console.log(_)
      res.send({ status: 200, data: _.rows, token: 'token' });
    })
    .catch(error=>{
      res.send({ status: 400, data: error, token: 'token' });
    })
  }else{
    //console.log('no')
  }
  
  // con.query(name, [username], (err, result, fields) => {
  //   //console.log(result)
  //   res.send({ status: 1, data: req.body, token: 'token' });
  // })
  // try {
  //   const checkUsername = `INSERT INTO products VALUES (1, 'Cheese', 9.99);`;
  //   con.query(checkUsername, [username], (err, result, fields) => {
  //     //console.log(result)
  //     res.send({ status: 1, data: req.body, token: 'token' });
  //   })

  // } catch (error) {
  //   res.send({ status: 0, error: error });
  // }
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
router.get('/tableGet', async (req, res, next) => {
  // const checkUsername = `INSERT INTO products VALUES (1, 'Cheese', 9.99);`;
  const sql=`SELECT * FROM table2 , table1;`
  if(global.client){
    console.log(sql)
    global.client.query(sql).then(_=>{
      console.log(_)
      res.send({ status: 200, data: _.rows, token: 'token' });
    })
    .catch(error=>{
      res.send({ status: 400, data: error, token: 'token' });
    })
  }else{
    console.log('no')
  }
  
  // con.query(name, [username], (err, result, fields) => {
  //   console.log(result)
  //   res.send({ status: 1, data: req.body, token: 'token' });
  // })
  // try {
  //   const checkUsername = `INSERT INTO products VALUES (1, 'Cheese', 9.99);`;
  //   con.query(checkUsername, [username], (err, result, fields) => {
  //     console.log(result)
  //     res.send({ status: 1, data: req.body, token: 'token' });
  //   })

  // } catch (error) {
  //   res.send({ status: 0, error: error });
  // }
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


var multer = require('multer');
// router.post('/files', async (req, res, next) => {
//   console.log(req.body,res.body); //has name property
//   console.log(req.files,req.files); //has all files that you upload
//   // try {
//   //   console.log('req',req)
//   //   res.send({ status: 200, data: req,});
//   // } catch (error) {
//   //   console.log('error')
//   // }
// })

// Configure Storage
var storage = multer.diskStorage({

  // Setting directory on disk to save uploaded files
  destination: function (req, file, cb) {
      cb(null, 'my_uploaded_files')
  },

  // Setting name of file saved
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.' + fileExtension(file.originalname))
  }
})


var upload = multer({
  storage: storage,
  limits: {
      // Setting Image Size Limit to 2MBs
      fileSize: 2000000
  },
  fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
          //Error 
          cb(new Error('Please upload JPG and PNG images only!'))
      }
      //Success 
      cb(undefined, true)
  }
})


router.post('/files', upload.single('uploadedImage'), (req, res, next) => {
  console.log(req.file)
  const file = req.file
  //console.log(req);
  if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
  }
  res.status(200).send({
      statusCode: 200,
      status: 'success',
      uploadedFile: file
  })

}, (error, req, res, next) => {
  res.status(400).send({
      error: error.message
  })
})










// router.post('/login', async ctx => {
//     ctx.set('Access-Control-Allow-Origin','*');
//     //console.log('data', ctx.request.body);
//     ctx.body = '添加成功'
//     ctx.send({ status: 0, error: ctx });
// })


// {
//     req.set('Access-Control-Allow-Origin', 'http://localhost:4000/');
//     //console.log('data', req.request.body);
//     req.body = '添加成功'
//     req.send({ status: 0, error: req });
// //   try {
// //     //console.log(req)
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
// //     //console.log(req)
// //     res.send({ status: 1, data: req, token: token });
// //   } catch (error) {
// //     res.send({ status: 0, error: req });
// //   }
// });



module.exports = router;