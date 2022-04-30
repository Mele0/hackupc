const express = require('express')
const app = express()
require('dotenv').config();
const money = require('./routes/money.js');
const gym = require('./routes/gym.js');
const expenses = require('./routes/expenses.js');
const con = require('./helpers/db_connect.js')
const td = require('./testdata.js')
const port = process.env.PORT
const host = process.env.HOST
const user = process.env.USER
const password = process.env.PASSWORD
const mysql = require('mysql2')
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

var connection = con.db_connection();
connection.connect(function(err){
  console.log("Connected!");
  td.create_test_data(false);
});

app.use('/money', money)
app.use('/gym', gym)
app.use('/money/expenses', expenses)



app.listen(port, () => {

})