const mysql = require('mysql2')
const host = process.env.HOST
const user = process.env.USER
const password = process.env.PASSWORD


function db_connection(){
    var connection = mysql.createConnection({
        host     : host,
        user     : user,
        password : password,
        database : "mydb"
    });
}


module.exports = db_connection;