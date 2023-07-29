/*
function compareNumbers(a, b){
    return a - b;
}
const arr = [35,4,100,6,12,89,56];
console.log(arr.sort(compareNumbers)); 

function showMessage() {
    var Message1 = 'haha'
    console.log(Message1);

}

function showMessage() {
    var Message2 = 'khanhhuyen'
    console.log(Message2);

}

showMessage();
function writeLog() {
     var myString ='';
     for (var param of arguments) {
        myString += `${param} -`
     }
     console.log(myString)
}
writeLog('log1','log2','log3')
var myString='Hoc JS tai F8!';
console.log(myString.indexOf('a')) */

/*var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
    return str.split(',')
}

// Expected results
console.log(strToArray(coursesStr))*/


/*function numberObject(){
    return numberObject.toFixed();
    console.log(numberObject)
}*/

/*function isNumber(value) {
   if (typeof  value=='number') {
    return true;
   } else {
    return false;
   }
}
console.log(isNumber(999)); // true
console.log(isNumber(NaN)); // false
console.log(isNumber('100')); // false */

/*
function isNumber(value){
    var a= !!value;
    return a && typeof(value)=='number'
}
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false */

/*
var languages = [
    'javascript',
    'PHP',
    'ruby',
    'dart',
    null,
    undefined,
    function () {
        
    },
    {}
]


console.log(languages.slice(1,2)) */

/* LAM VIEC VOI MANG #1

function joinWithCharacter(array, charactor) {
    return array.join(charactor)
}

var cars = ['Honda', 'Mazda', 'Mercedes'];

var result = joinWithCharacter(cars, ' - ');

console.log(result) */

/* LAM VIEC VOI MANG #2

function getLastElement(a) {
     return a.slice(-1);
}

var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result);
console.log(animals) */

/*
function getFirstElement(a) {
    return a.slice(0,1);
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
//console.log(animals);
*/
/*
var date = new Date();

var getNextYear = date.getFullYear() +1 ;
console.log(getNextYear);
*/
var date = 5;
 
if(date === 2) {
    console.log('monday');
} else if(date === 3) {
    console.log('tuesday');
} else {
    console.log('sunday')
}