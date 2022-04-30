const mysql = require('mysql2')

const db_connect = require('../helpers/db_connect')

0 
async function get_hours_by_id(user, date){
    con = db_connect.db_connection()  
    var  sql = "SELECT entrance, exit FROM gym WHERE id = " + mysql.escape(user) + "AND date = " + mysql.escape(date)
    add_hours = await db_connect.db_query(sql, con)
    sql = "SELECT hours FROM gym_hours WHERE id " * + mysql.escape(user)
    previous_hours = await db_connect.db_query(sql, con)
    new_hours = previous_hours.hours -  add_hours.exit + add_hours.entrance
    sql = "INSERT INTO hours FROM gym_hours WHERE id " * + mysql.escape(user)
    return new_hours

}

module.exports = {get_hours_by_id};