const mysql = require('mysql2')

const db_connect = require('../helpers/db_connect')


async function get_hours_by_id(user, date){
    con = db_connect.db_connection()  
    var  sql = "SELECT entrance, exit FROM gym WHERE id = " + mysql.escape(user)
    result = await db_connect.db_query(sql, con)
    console.log(result)
    return result

}

module.exports = {get_hours_by_id};