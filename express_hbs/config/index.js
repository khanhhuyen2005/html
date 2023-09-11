import mysql from 'mysql';


  export const con = mysql.createConnection({
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_db",
    connectTimeout: 60000
  });