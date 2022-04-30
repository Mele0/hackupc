const mysql = require('mysql2')

const db_connect = require('../helpers/db_connect')


async function get_hours_by_id(user){
    con = db_connect.db_connection()  
    
    sql = "SELECT hours FROM gym_hours WHERE id = "  + mysql.escape(user)
    previous_hours = await db_connect.db_query(sql, con)
    /*new_hours = previous_hours.hours -  add_hours.exit + add_hours.entrance
    sql = "INSERT INTO hours FROM gym_hours WHERE id "  + mysql.escape(user)*/
    return previous_hours
}

async function update_hours(user, date){
    con = db_connect.db_connection()
    previous_hours = await get_hours_by_id(user)
    var  sql = "SELECT entrance, end FROM gym WHERE id = " + mysql.escape(user) + "AND day = " + mysql.escape('2020-07-02')
    var adding_hours = await db_connect.db_query(sql, con)
    sql = "SELECT SUBTIME("+ mysql.escape(adding_hours[0].end) +", "+ mysql.escape(adding_hours[0].entrance) + ") AS Result"
    new_hours = await db_connect.db_query(sql, con)
    sql = "SELECT HOUR(" + mysql.escape(new_hours) + ") AS Result"
    hour_selected = await db_connect.db_query(sql, con)
    sql = "SELECT ADDTIME("+ mysql.escape(hour_selected) +", "+ mysql.escape(previous_hours) + ") AS Result"
    result = await db_connect.db_query(sql, con)

    return result
}

module.exports = {get_hours_by_id, update_hours};