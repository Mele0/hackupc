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
  var sql = "CREATE TABLE money (name VARCHAR(255), value FLOAT(52))";
  connection.query(sql, function (err, result) {
      if (err) throw err;
  });
  console.log("table created!"); 

  var sql = "INSERT INTO money (name) VALUES ('hola')";
  connection.query(sql, function (err, result) {
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

  // result = await dbQuery("SELECT * FROM money");
  // var res_string = JSON.stringify(result);

  // res.end(res_string)


});

app.use('/money', money)

app.listen(port, () => {

})