const mysql = require('mysql2')

const money_result = require('../helpers/db_connect')


async function get_money_by_id(user){
    con = money_result.db_connection()  
    var  sql = "SELECT balance FROM money WHERE id = " + mysql.escape(user)
    result = await money_result.db_query(sql, con)
    console.log(result)
    return result

}

async function get_expenses_by_id(user){
    con = money_result.db_connection()  
    var  sql = "SELECT * FROM expenses WHERE id = " + mysql.escape(user)
    result = await money_result.db_query(sql, con)
    return result

}

async function change_balance(user, input){
    con = money_result.db_connection()  
    balance = get_money_by_id(user).balance+input
    var sql = "UPDATE money SET balance = " + mysql.escape(balance) + " WHERE) id = " + mysql.escape(user)
    result = await money_result.db_query(sql, con)
    return result
}
module.exports = {get_money_by_id,change_balance,get_expenses_by_id};