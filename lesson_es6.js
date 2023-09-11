// scope
// let x;
// x = 20;

// const myName ="huyen";
// myName = "le thi huye";

// const y; // hang so
// y = 7;

// const person = {
//     name: 'Huyen',
//     age: 34
// }

// person.age = 99;
// person.name = "Nguyen Huyen"
// person = {
//     name: 'huyen',
//     age: 99
// }

// console.log(person);

// template leteral ``
// let age = 90;
// let name = "Huyeh"
// // console.log(`my name is ${name} and my age is ${age}`)


// console.log(`My name is Huyen
// and my age is 23
// `);

// spread operator; clone // copy

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr = [...arr1, ...arr2, 7,8,9];

// const product ={
//     price: 2000,
//     name: "Iphone 13",
//     categoryId: 1
// }


// const myProduct = {
//     ...product,
//     image: 'iphone.png',
//     price: 4000
// }

// console.log(myProduct);
// console.log(arr);

// const iphone = {
//     name: "iphone4",
//     price: 1000,
//     category: "Apple"
// }

// function createProduct(product){
//     return {
//         ...product,
//         name: "Galayx",
//         category: 'Samsung',
//         price: 999
//     }
// }

// function createProduct(product){
//     product.name = "Galaxy";
//     product.price = 999;
//     product.category = "Samsung"
//     return product
// }

// const myPhone = createProduct(iphone);

// console.log("my Phone", myPhone);
// console.log("Your Phone", iphone);

// function xx(x){
//     return `My name is ${x}`
// }

// const xx = x =>  `My name is ${x}`;

// console.log(xx);

// function xxx(x, y){
//     let z = x+y;
//     return function(x){
//         return function (){};
//     }
// }

// const n = xxx(2,5);

// console.log(n);

// const yyy = (x, y) => (x) => () => 9;


// console.log(yyy(3,4))

// function Person(x, y){
//     this.x = 5;
//     this.y = 9;
//     return this.x + this.y;
//     // console.log(this);
// }

// const person = new Person(2,5);

// console.log(person);

// function getx(){
//     setTimeout(() => {
//         console.log(this);
//     },1000)
// }

// getx();


// const person = [22, 'Huyen', "Thanh hoa"];

// const myPerson = {
//     name: "Toan"
// }


// const myName = myPerson.age;

// console.log(myName);


// function getProducts(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const phone = {
//                 name: "iphone",
//                 price: 2000,
//                 quantity: 9
//             }
//             resolve(phone);
//         }, 4000)
//     });
// }

// /// side effect

// getProducts().then((res) => {
//     console.log(res.price*res.quantity);
// })


// async function getPosts(){
//     return await fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>res.json());

// }


// const xx = await getPosts();

// console.log(xx);
import express from 'express';
import {products} from './product.js';

// const myProducts = require('./product');

// const product = [
//     {id: 1, name: 'Iphone 4', price: 200, image: 'https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2020/07/iphone-4-ra-doi-nam-nao.jpg'},
//     {id: 2, name: 'Iphone 8', price: 1600, image: 'https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2020/07/iphone-4-ra-doi-nam-nao.jpg'},
//     {id: 3, name: 'Samsung Galaxy', price: 2000, image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/6/0/600_samsung-galaxy-s21-070620-020623-600x600.jpg'},
//     {id: 4, name: 'Oppo 12', price: 2000, image: 'https://cdn.tgdd.vn/Products/Images/42/237103/oppo-a95-5g-600x600.jpg'},
// ];

// const node = document.createElement(`

// `);
// const text = document.createTextNode("Hello world");
// node.appendChild(text);
// document.getElementById('content').appendChild(node);


// console.log(products);

const app = express();

app.get('/products', (req, res) => {
    res.json({data: products});
});

app.listen(8888, () => {
    console.log(`App is running on port 8888`)
})