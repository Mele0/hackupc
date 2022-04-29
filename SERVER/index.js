const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT
const host = process.env.HOST
const user = process.env.USER

const password = process.env.PASSWORD

const mysql = require('mysql2')


var connection = mysql.createConnection({
  host     : host,
  user     : user,
  password : password,
});


connection.connect(function(err){
  connection.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
  });
  var sql = "CREATE TABLE money (name VARCHAR(255), address VARCHAR(255))";
  connection.query(sql, function (err, result) {
      if (err) throw err;
    }
  )


});


app.listen(port, () => {

})