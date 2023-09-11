import {con} from '../config/index.js';

export const userSignup = (user) => {
    console.log(user)
    return new Promise((resolve, reject) => {
        const sql = `insert into users(name, username, email, password) values("${user.name}", "${user.username}", "${user.email}", "${user.password}")`;
        con.query(sql, function(err, results) {
           if (err) throw err;
           resolve(results)
         });
        
    }) 
}


export const userLogin = (email) => {
    // console.log(user)
    return new Promise((resolve, reject) => {
        const sql = `select * from users where email = "${email}"`;
        con.query(sql, function(err, results) {
           if (err) throw err;
           resolve(results[0])
         });
        
    }) 
}