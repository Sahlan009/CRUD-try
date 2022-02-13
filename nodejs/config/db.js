const mysql = require('mysql')

const petsore = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '242468',
    database : 'petstore',
    port : '3306'
})

module.exports = petsore