var express = require('express');
const con = require('./helpers/db_connect.js');

connection = con.db_connection();
function create_test_data(active){


connection.connect(function(err){
    if(active){

    
        console.log("Test data connected!");  
    
        /*var sqlmoney = "CREATE TABLE money (id VARCHAR(255), balance FLOAT(10))";
        connection.query(sqlmoney, function (err, result) {
            if (err) throw err;
        });
        console.log("table created!"); 
        var sqlexpenses = "CREATE TABLE expenses (id VARCHAR(255), input FLOAT(10), time DATETIME(2))";
        connection.query(sqlexpenses, function (err, result) {
            if (err) throw err;
        });*/
        var sqlgym = "CREATE TABLE gym (id VARCHAR(255), entrance TIME, end TIME, day DATE)";
        connection.query(sqlgym, function (err, result) {
            if (err) throw err;
        });
        /*var sqlgym_hours = "CREATE TABLE gym_hours (id VARCHAR(255), hours FLOAT(24))";
        connection.query(sqlgym_hours, function (err, result) {
            if (err) throw err;
        });*/
    
        console.log("table created!");
        var sqlmoney = "INSERT INTO money (id, balance) VALUES ('49271168Q',3890),('49272268Q',590),('49273368Q',2076),('49274468Q',789)";
        connection.query(sqlmoney, function (err, result) {
            if (err) throw err;
        });
    
        var sqlexpenses = "INSERT INTO expenses (id, input, time) VALUES ('49271168Q',12, '2018-09-08 17:51:04.777'),('49271168Q',-3, '2018-09-10 17:51:04.777')('49272268Q',-1000, '2018-09-15 17:51:04.777') ,('49272268Q',-1000, '2018-10-08 17:51:04.777')";
        connection.query(sqlexpenses, function (err, result) {
            if (err) throw err;
        });
        console.log("value created!")
}
else{
    console.log('TD already connected')
}
});
}
module.exports = {create_test_data};