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
  database : "mydb"
});


connection.connect(function(err){
  console.log("Connected!");  
  var sql = "CREATE TABLE money (name VARCHAR(255))";
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
function get_info(callback){
      
  var sql = "SELECT * FROM money";

  connection.query(sql, function(err, results){
        if (err){ 
          throw err;
        }
        console.log(results[0].objid);
        stuff_i_want = results[0].objid;  
        return callback(results[0].objid);  
  })
}


app.get('/', async function(req, res){
  var results = '';

  get_info(function(result){
    results = result
  })

  res.end(results)
});  

app.listen(port, () => {

})