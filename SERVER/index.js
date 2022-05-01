const express = require('express')
const app = express()
require('dotenv').config();
const money = require('./routes/money.js');
const gym = require('./routes/gym.js');
const expenses = require('./routes/expenses.js');
const biblio = require('./routes/biblio.js');
const study_time = require('./routes/study_time.js');
const con = require('./helpers/db_connect.js')
const td = require('./testdata.js')
const port = process.env.PORT
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
app.use('/biblio', biblio)
app.use('/studytime', study_time)



app.listen(port, () => {

})