const express = require('express')
const app = express()
require('dotenv').config();
const money = require('./routes/money.js');
const port = process.env.PORT
const host = process.env.HOST
const user = process.env.USER
const password = process.env.PASSWORD

const mysql = require('mysql2')



var connection = mysql.createConnection({
  host     : host,
  user     : user,
  password : password,
  database : "mydb"
});


connection.connect(function(err){
  console.log("Connected!");  

  /*var sqlmoney = "CREATE TABLE money (id VARCHAR(255), balance FLOAT(10))";
  connection.query(sqlmoney, function (err, result) {
      if (err) throw err;
  });
  console.log("table created!"); 
  var sqlexpenses = "CREATE TABLE expenses (id VARCHAR(255), input FLOAT(10), time DATETIME(2))";
  connection.query(sqlexpenses, function (err, result) {
      if (err) throw err;
  });*/

  console.log("table created!");
  var sqlmoney = "INSERT INTO money (id, balance) VALUES ('49271168Q',3890)";
  connection.query(sqlmoney, function (err, result) {
      if (err) throw err;
  });

  var sqlexpenses = "INSERT INTO expenses (id, input, time) VALUES ('49271168Q',-1000, '2018-09-08 17:51:04.777')";


  /*var sqlmoney = "CREATE TABLE money (id VARCHAR(255), balance FLOAT(10))";
  connection.query(sqlmoney, function (err, result) {
      if (err) throw err;
  });
  console.log("table created!"); 
  var sqlexpenses = "CREATE TABLE expenses (id VARCHAR(255), input FLOAT(10), time DATETIME(2))";
  connection.query(sqlexpenses, function (err, result) {
      if (err) throw err;
  });*/

  console.log("table created!");
  var sqlmoney = "INSERT INTO money (id, balance) VALUES ('49271168Q',3890)";
  connection.query(sqlmoney, function (err, result) {
      if (err) throw err;
  });

  var sqlexpenses = "INSERT INTO expenses (id, input, time) VALUES ('49271168Q',-1000, '2018-09-08 17:51:04.777')";
  connection.query(sqlexpenses, function (err, result) {
      if (err) throw err;
  });
  console.log("value created!");  

});



function dbQuery(databaseQuery) {
  return new Promise(data => {
      connection.query(databaseQuery, function (error, result) { 
          if (error) {
              console.log(error);
              throw error;
          }
          try {
              console.log(result);

              data(result);

          } catch (error) {
              data({});
              throw error;
          }

      });
  });

}
function get_info(callback){
      
  var sql = "SELECT * FROM money";

  connection.query(sql, function(err, results){
        if (err){ 
          throw err;
        }
        console.log(results);
        stuff = results;  
        return callback(results);  
  })
}

var stuff = '';


app.get('/', async function(req, res){


  result = await dbQuery("SELECT * FROM expenses");
  var res_string = JSON.stringify(result);
  // result = await dbQuery("SELECT * FROM money");
  // var res_string = JSON.stringify(result);


  // res.end(res_string)


});

app.use('/money', money)

app.listen(port, () => {

})