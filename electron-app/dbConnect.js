//const { promisify } = require('util');
const sql =electron.require('mssql');

console.log("inside dbconn.js");
//$('#content').text("testr");
const config = {
   user: 'sa',
   password: 'ajoshi94',
  server: 'localhost',
  database: 'RMWIN_new_test',
  rejectUnauthorized: false,
  trustServerCertificate: true,
  options : {
    trustedConnection: true,
    enableArithAbort: true,
    instancename:'US-PF2HSXXY'
  },
  port:1433
};

async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Connected to the MSSQL database!');
  } catch (err) {
    console.log('Database connection error:', err);
  }
}

connectToDatabase();
// document.addEventListener("DOMContentLoaded", () => {
//   let btn= document.getElementById('dbconn')
//   btn.addEventListener("click",function(){
//     document.getElementById("content").innerHTML = "Hello World";
//   })
// });

// sql.connect(config, (err) => {
//   if (err) console.log(err);
//   console.log('Connected to the database!');
//   var req= new sql.Request();
// req.query("SELECT top 1 * FROM CLAIM",(err,rec)=>{
//   if(err)console.log(err);
 
//   //document.getElementById(content).innerText=rec;
//   console.log(rec);
// })
// });
// async function connectToDatabase() {
//   try {
//     await sql.connect(config);
//     console.log('Connected to the database!');

//     const req = new sql.Request();
//     const query = promisify(req.query.bind(req));

//     const rec = await query("SELECT top 1 * FROM CLAIM");
//     console.log(rec);
//   } catch (err) {
//     console.log(err);
//   }
// }

// connectToDatabase();


// var button= document.getElementById('dbconn');
// button.addEventListener('click',()=>{
//   var req= new sql.Request();
//   req.query("SELECT top 1 * FROM CLAIM",(err,rec)=>{
//     if(err)console.log(err);
//     //document.getElementById(content).innerText=rec;
//     console.log(rec);
//   })
// })

//const mysql = require('mysql');
// let button= document.getElementById('dbconn')

// const connection = mysql.createConnection({
//   host: 'US-PF2HSXXY',
//   user: 'sa',
//   password: 'ajoshi94',
//   database: 'RMWIN_new_test'
// });

// connection.connect((err,arg)=>{
//     if(err)console.log(err);
//     console.log(arg);
// });
// button.addEventListener('click',()=>{
//     connection.query('SELECT * FROM claim', (error, results, fields) => {
//         if (error){
//             console.log(error);
//         } 
//         console.log(results);
//       });
// })
