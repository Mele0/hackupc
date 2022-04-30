const mysql = require('mysql2')

const money_result = require('../helpers/db_connect')


function get_money_by_id(user){
    con = db_connection()    
    var  sql = "SELECT * FROM money WHERE id = " + mysql.escape(user)
    result = await db_query(sql, con)
    return result

}

module.exports = get_money_by_id;