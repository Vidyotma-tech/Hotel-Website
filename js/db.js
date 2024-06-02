
var mysql = require('mysql');
// var portal = require('http');



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "leelamahal"
});

// ADD REVIEW
// con.connect(function(err){
//   if (err) {
//     console.log("error in connecting db");
//   }
//   else{
//     console.log("db connected");
//     var r = "insert into reviews values ?;"
//     var review_arr = [["Vidyotma","xyz@gmail.com",999999999,"Delhi","good hotel"]];
//     con.query(r,[review_arr],function(error,result){
//       if(error){
//         console.log("error");
//       }
//       else
//         console.log("values inserted");
//     });
//   }
// });


// Check rooms Availabilty
var adults = 4;
var children = 0;
var totalPersons = adults+children;
var rnum;
con.connect(function(err){
  if(err){
    console.log("Can't connect to database");
  }
  else{
    console.log("database connected");
    var que = "select rname from rooms where rno = ?;"
    switch(totalPersons){
      case 1:
        rnum = 1;
        break;
      case 2:
        rnum = 3;
        break;
      case 3:
        rnum = 4;
        break;
      case 4:
        rnum = 5;
        break;
      case 5:
        rnum = 6;
        break;
      case 6:
        rnum = 6;
        break;
    }
    con.query(que,rnum,function(error,result){
      if (error) {
        // console.log(error);
        console.log("can't fetch data");
      }
      else{
        console.log("data fetched successfully");
        console.log(result[0].rname);
      }
    });
  }
});
