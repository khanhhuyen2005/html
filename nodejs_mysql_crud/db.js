
const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
})

// mysqlPool.query('select * from employees').then((res) => {
//     console.log(res);
// })


module.exports = mysqlPool