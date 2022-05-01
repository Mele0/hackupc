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
async function time_studied(user, date){
    previous_hours = await get_hours_by_id(user)
    console.log(previous_hours)
    var  sql = "SELECT entrance, end FROM biblio WHERE id = " + mysql.escape(user) + "AND day = " + mysql.escape(date)
    var adding_hours = await db_connect.db_query(sql, con)
    console.log(adding_hours)
    sql = "SELECT SUBTIME("+ mysql.escape(adding_hours[0].end) +", "+ mysql.escape(adding_hours[0].entrance) + ") AS result"
    new_hours = await db_connect.db_query(sql, con)
    console.log(new_hours)
    sql = "SELECT HOUR(" + mysql.escape(new_hours[0].result) + ") AS result"
    hour_selected = await db_connect.db_query(sql, con);
    var value = hour_selected[0].result;
    sql = "INSERT INTO biblio_hours (id, hours, day) VALUES ('49271168Q', " + mysql.escape(value) + ", " +  mysql.escape(date) + ")";
    result = await db_connect.db_query(sql, con);
    return result;
}
async function update_hours(user, date){
    con = db_connect.db_connection()
    previous_hours = await get_hours_by_id(user)
    console.log(previous_hours)
    var  sql = "SELECT entrance, end FROM gym WHERE id = " + mysql.escape(user) + "AND day = " + mysql.escape(date)
    var adding_hours = await db_connect.db_query(sql, con)
    console.log(adding_hours)
    sql = "SELECT SUBTIME("+ mysql.escape(adding_hours[0].end) +", "+ mysql.escape(adding_hours[0].entrance) + ") AS result"
    new_hours = await db_connect.db_query(sql, con)
    console.log(new_hours)
    sql = "SELECT HOUR(" + mysql.escape(new_hours[0].result) + ") AS result"
    hour_selected = await db_connect.db_query(sql, con)
    console.log(hour_selected)
    result = (hour_selected[0].result + previous_hours[0].hours)
    console.log(result)
    var sql = "UPDATE gym_hours SET hours = " + mysql.escape(result) + " WHERE id = " + mysql.escape(user)
    await db_connect.db_query(sql, con)

    return toString(result)
}
async function get_study_time_by_id(user){
    con = db_connect.db_connection();
    var  sql = "SELECT * FROM biblio_study WHERE id = " + mysql.escape(user);
    result = await db_connect.db_query(sql, con);
    console.log(result);
    return result

}
module.exports = {get_hours_by_id, update_hours, time_studied, get_study_time_by_id};