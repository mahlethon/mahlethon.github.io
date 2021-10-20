"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
return arr.map(num => num * 2);
}

function doubleAges(arr){
    
return arr.map(function(person){
    let newPerson = {};
    newPerson.name = person.name;
    newPerson.age = person.age * 2;
    return newPerson;
});
}

function filterEven(arr){
return arr.filter(num => num % 2 === 0);
}

function filterOver10(arr) {
 return arr.filter(person => person.age > 10);   

}

function findEvenNum(arr){
return arr.find(num => num%2 === 0)
}

function findEvenAge(arr){
return arr.find(person => person.age % 2 ===0);
}

function includesEvenNum(arr){
return arr.includes(num => num %2 === 0);
}

function includesEvenAge(arr){
return arr.includes(person => person.age > 10);
}

function findSum(arr){
return arr.reduce((tot, num) => num + tot, 0);
}

function findAvg(arr){
    return arr.reduce((tot, num) => num + tot, 0)/arr.length;
}

function findMax(arr){
    return arr.reduce((max, num) => num>max , 0);
}

function findMaxAge(arr){
    return arr.reduce((max, person) => person.age>max , 0);
}

function findEvenageAvg(arr){
    let evenAges = arr.filter(person => person.age % 2 === 0);
    return evenAges.reduce((tot, person)=> person.age + tot, 0)/evenAges.length;
}

