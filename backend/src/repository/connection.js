import mysql from 'mysql2/promise.js'

const con= await mysql.createConnection({

host: process.env.MYSQL_HOST,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_PWD,
database: process.env.MYSQL_DB
})

console.log('CONEXÃO COM BD REALIZADA!');
export default con;