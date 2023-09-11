
import {con} from '../config/index.js';


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM products";
        con.query(sql, function(err, results) {
           if (err) throw err;
           resolve(results)
         });
        
    })


}

export const addOneProduct = (name, price) => {
    return new Promise((resolve, reject) => {
        const sql = `insert into products(name, price) values("${name}", ${price})`;
        con.query(sql, function(err, results) {
           if (err) throw err;
           resolve(results)
         });
        
    }) 
}

export const deleteOneProduct = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `delete from products where id = ${id}`;
        con.query(sql, function(err, results) {
           if (err) throw err;
           resolve(results)
         });
        
    }) 
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `select * from products where id = ${id}`;
        con.query(sql, function(err, results) {
           if (err) throw err;
           resolve(results[0])
         });
        
    }) 
}

export const updateOneProduct = (id, name, price) => {
    return new Promise((resolve, reject) => {
        const sql = `update products set name = "${name}", price = ${price} where id = ${id}`;
        con.query(sql, function(err, results) {
           if (err) throw err;
           resolve(results)
         });
        
    }) 
}
