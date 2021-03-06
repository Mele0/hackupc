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

async function set_expenses_by_id(user,input,time){
    con = money_result.db_connection()  
    var  sql = "INSERT INTO expenses (id, input, time) VALUES ("+mysql.escape(user)+","+mysql.escape(input)+","+mysql.escape(time)+")";
    change_balance(user,input);
    result = await money_result.db_query(sql, con)
    return result
}

async function change_balance(user, input){
    con = money_result.db_connection()  
    previous_balance = await get_money_by_id(user)
    var res_string = previous_balance[0].balance;
    previous_balance = parseFloat(res_string)
    balance = previous_balance + input
    var sql = "UPDATE money SET balance = " + mysql.escape(balance) + " WHERE id = " + mysql.escape(user)
    result = await money_result.db_query(sql, con)
    return result
}
module.exports = {get_money_by_id,change_balance,get_expenses_by_id,set_expenses_by_id};