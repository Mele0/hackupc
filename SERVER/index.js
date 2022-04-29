const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT
const host = process.env.HOST
const user = process.env.USER
const password = process.env.PASSWORD

const mysql = require('mysql')


var connection = mysql.createConnection({
  host     : host,
  user     : user,
  password : password
});

connection.connect();


app.listen(port, () => {

})