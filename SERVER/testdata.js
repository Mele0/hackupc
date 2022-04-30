var express = require('express');
const con = require('./helpers/db_connect.js');

connection = con.db_connection();
function create_test_data(active){


connection.connect(function(err){
    if(active){

    
        console.log("Test data connected!");  
    
        var sqlmoney = "CREATE TABLE money (id VARCHAR(255), balance FLOAT(10))";
        connection.query(sqlmoney, function (err, result) {
            if (err) throw err;
        });
        var sqlexpenses = "CREATE TABLE expenses (id VARCHAR(255), input FLOAT(10), time DATETIME(2))";
        connection.query(sqlexpenses, function (err, result) {
            if (err) throw err;
        });
        var sqlgym = "CREATE TABLE gym (id VARCHAR(255), entrance TIME, end TIME, day DATE)";
        connection.query(sqlgym, function (err, result) {
            if (err) throw err;
        });
        var sqlgym_hours = "CREATE TABLE gym_hours (id VARCHAR(255), hours FLOAT(24))";
        connection.query(sqlgym_hours, function (err, result) {
            if (err) throw err;
        });
    
        console.log("tables created!");


        var sqlmoney = "INSERT INTO money (id, balance) VALUES ('49271168Q',3890),('49272268Q',590),('49273368Q',2076),('49274468Q',789)";
        connection.query(sqlmoney, function (err, result) {
            if (err) throw err;
        });
        var sqlexpenses = "INSERT INTO expenses (id, input, time) VALUES ('49271168Q',12,'2022-04-08 17:51:04.777'),('49271168Q',-3,'2022-04-10 17:51:04.777'),('49272268Q',-8.76,'2022-04-15 17:51:04.777'),('49272268Q',-8.4,'2022-3-08 17:51:04.777'),('49273368Q',-8.76,'2022-02-15 17:51:04.777'),('49273368Q',20,'2022-01-08 17:51:04.777'),('49274468Q',-6.89,'2022-04-15 07:51:04.777'),('49274468Q',-17.8,'2022-4-20 09:51:04.777')";
        connection.query(sqlexpenses, function (err, result) {
            if (err) throw err;
        });
        var sqlgym = "INSERT INTO gym (id,entrance,end,day) VALUES ('49271168Q','08:00:00','10:00:00','2022-04-01'),('49271168Q','11:32:00','13:00:00','2022-04-04'),('49272268Q','15:32:00','17:10:00','2022-04-01'),('49272268Q','10:17:00','12:09:00','2022-04-14')";
        connection.query(sqlgym, function (err, result) {
            if (err) throw err;
        });
        var sqlgym_hours = "INSERT INTO gym_hours (id,hours) VALUES ('49271168Q',24),('49272268Q',12),('49273368Q',16),('49274468Q',12)";
        connection.query(sqlgym_hours, function (err, result) {
            if (err) throw err;
        });
        console.log("values created!")
}
else{
     console.log('TD is already connected')
}
});
}
module.exports = {create_test_data};