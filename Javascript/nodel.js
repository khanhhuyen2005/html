// var a = 1;
// var b = 3;
// console.log(a)

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// delete arr[3];
// console.log(arr)



// var student = {
//     name: 'khanh huyen',
//     class: '12c1',

// }
//  delete student.class;
//  console.log(student)



// Object.objsize = function(Myobj) {
//     var osize = 0, key;
//     for (key in Myobj) {
//         if (Myobj.hasOwnProperty(key)) osize++;
//     }
//     return osize;
// };

// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 };

// var objsize = Object.objsize(student);
// console.log('Size of the current object : '+objsize);

//TINH DO DAI OBJECT
function getObjectLength() {
     student = { 
        name : "David Rayy", 
        sclass : "VI", 
        rollno : 12
     };


        let key, count = 0;

for(key in student) {
    if(student.hasOwnProperty(key))
    count ++;
}
objectLength = count;
console.log(objectLength);
}

getObjectLength();

