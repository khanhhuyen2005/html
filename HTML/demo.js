/*function demo(a, b){
     return a>b?a:b;
}

console.log(demo(2,6));

var myInfo = {
    name: 'khanh huyen',
    age: 18,
    address: 'thanh hoa'
} 
myInfo.class = 12;
// console.log(myInfo)*/

//var d3 = new Date(2005,5,11,11,42,0,0);
//console.log(d3)

/*
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
  }
  setInterval(printTime, 1000);
  */

  /*
var date = new Date();

var year = date.getFullYear();
//var day = date.getDay();
console.log(year);
*/

/*
var a = 1;
var b = 5;

var c = a>0 ?a:b;
console.log(c)
*/

/*
for (var i = 1; i<=1000; i+=2){
  console.log(i)
}
*/

/*
function getRandNumbers(min,max,length) {
  var array = new Array(length);
  
  for(var i = 0; i<length; i++) {
    array [i]=Math.random()*(max-min) +min;
  }
  return array;
}
*/

/*
function getTotal(arr) {
  var total = 0;
  for(var i=0; i<arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(getTotal([1,2,3]));
console.log(getTotal([4,5,-3]));
console.log(getTotal([4,5,3,5]) )
*/
 

// var orders = [
//   {
//       name: 'Khóa học HTML - CSS Pro',
//       price: 3000000
//   },
//   {
//       name: 'Khóa học Javascript Pro',
//       price: 2500000
//   },
//   {
//       name: 'Khóa học React Pro',
//       price: 3200000
//   }
// ]

// function getTotal(orders) {
//   var total = 0;
//   for(var i=0; i<orders.length; i++) {
//     total += orders[i].price;
//   } 
//   return total;
// }
// console.log(getTotal(orders))



// var age= 9;
// var myAge = age;

// myAge = 20;

// console.log('Age is: ', age);

// var person = {
//   age: 9,
//   name: "huyen"
// }


// var myPerson = person;
// myPerson.age = 29;



// console.log('Age is:', person)


// reference


 var Object = {
  name:'Nguyen Van A',
   age: 16,
};
 for (var key in object) {
  console.log(key)
}



