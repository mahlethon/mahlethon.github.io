"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests

// let numArray = [5, 0, 7, 77, -20, 300, 51, 2];
 //let peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];

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
return arr.reduce((num, tot) => num + tot, 0);
}

function findAvg(arr){
    return arr.reduce((num, tot) => (num + tot)/ arr.length, 0);
}

function findAvg(arr){
    return arr.reduce((num, max) => num>max , 0);
}

function findAvg(arr){
    return arr.reduce((person, max) => person.age>tot , 0);
}

function findAvg(arr){
    let evenAges = arr.filter(person => person.age % 2 === 0);
    return evenAges.reduce((person, tot)=> (person.age + tot)/evenAges.length, 0);
}

console.log(JSON.stringify(findEvenAge(peopleArray)));