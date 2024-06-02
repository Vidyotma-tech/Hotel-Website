// //
// var express = require("express");
// var bodyParser = require("body-parser");
// //
// var app = express();
//
// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({extended: true})); //to access form data
// // app.use(bodyParser.JSON()); //to support json encoded bodies
// //
// //
// // // const mysql = require('mysql');
// // // const con_db = mysql.createConnection({
// // //   host: 'localhost',
// // //   user: "root",
// // //   password: "",
// // //   database: "leelamahal"
// // // });
// // //
// // // con_db.connect(function(error){
// // //   if(error){
// // //     console.log("error in db connection");
// // //   }
// // //   else{
// // //     console.log("db connected successfully");
// // //   }
// // // });
// //
// app.get("/", function(req, res){
//   res.sendFile(__dirname + "/index.html");
// });
// //
// // app.get("/", function(req, res){
// //   res.sendFile( __dirname + "/index.html");
// // });
// //
// app.post("/addReview",function(req, res){
//   console.log(req.body);
// });
// //
// app.get("/rooms",function(req, res){
//   res.sendFile( __dirname + "/rooms.html");
// });
// // app.get("contact us.html",function(req, res){
// //   res.sendFile( __dirname + "/contact us.html");
// // });
// // app.get("/cart.html",function(req, res){
// //   res.sendFile( __dirname + "/cart.html");
// // });
// // app.get("/services.html",function(req, res){
// //   res.sendFile( __dirname + "/services.html");
// // });
// // app.get("/membership.html",function(req, res){
// //   res.sendFile( __dirname + "/membership.html");
// // });
// // app.get("/Join_Membership.html",function(req, res){
// //   res.sendFile( __dirname + "/Join_Membership.html");
// // });
// // app.get("/rooms.html",function(req, res){
// //   res.sendFile( __dirname + "/rooms.html");
// // });
// //
// app.listen(3000,function(){
//   console.log("server is runing on port 3000....");
// });
