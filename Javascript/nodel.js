// function Person(name) {
//   this.name = name;
// }

// var person = new Person('Hieu Bui');
// console.log('a  ' + person.constructor);


// obj = new Object();
// obj.toString = 'exists';
// console.log(obj.hasOwnProperty('prop')); // true
// console.log(obj.hasOwnProperty('toString')); // false
// console.log(obj.hasOwnProperty('hasOwnProperty')); // false


// obj = new Object();
// console.log(obj.toString());


// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// person = new Person();

// Person.prototype.toString = function objToString() {
//   return 'This is overriding string';
// }
// console.log(person.toString()); 


// const user = {
//   name: "Ha",
//   class: "10b1"
// }
// console.log(Object.keys(user));



// var arr = [
//   'a',
//   'b',
//   'c'
// ];
// console.log(Object.keys(arr))



// const courses = {
//   "javascript": 0,
//   "react": 10.5,
//   "html/css": 12.5
// }

// for (const entry of Object.entries(courses)) {
//   const [course, price] = entry;

//   if (price > 0) console.log(entry);
// }


// var student = {
//   name : "David Rayy",
//   sclass : "VI",
//   rollno : 12
// }

// //console.log(Object.keys(student))
// student.splice(2)
// console.log(student)

let boo = { c: true };
 
let foo = {
    a: 12,
    b: boo
};
 
let bar = {
    b: boo
};
 
// foo = { a: 12, b: { c: true } }
// bar = { b: { c: true } }
 
delete foo.b;
 
// foo = { a: 12 }
// bar = { b: { c: true } }

console.log(bar)
console.log(foo)