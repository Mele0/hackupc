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
    return connection
}

function db_query(databaseQuery, connection) {
    return new Promise(data => {
        connection.query(databaseQuery, function (error, result) { 
            if (error) {
                console.log(error);
                throw error;
            }
            try {
                
  
                data(result);
  
            } catch (error) {
                data({});
                throw error;
            }
  
        });
    });
  
}

module.exports = {db_connection,db_query};