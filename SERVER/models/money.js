const mysql = require('mysql2')

const money_result = require('../helpers/db_connect')


async function get_money_by_id(user){
    con = money_result.db_connection()  
    console.log('hola')  
    var  sql = "SELECT * FROM money WHERE id = " + mysql.escape(user)
    result = await money_result.db_query(sql, con)
    console.log(result)
    return result

}

module.exports = {get_money_by_id};