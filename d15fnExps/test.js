"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests
//const assert = require("assert"); 
/**
 * @param {number} num is a number
 *@returns {number} double the input

 */
function double(num){
    return 2*num;
}


/**
 * @param {number} num is a number
 * @returns {number} 100 times the input
 */
 function times100(num){
     return 100*num;
 }


/**
 * @param {Array} arr is an array
 * @param {Function} func is a function
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr, func){
    let newArr = [];
    for(let i =0; i<arr.length; i++){
        newArr[i] = func(arr[i]);
    }
    return newArr;
}


let arr = [1,2,3,4];
console.log(myMap(arr, times100));
console.log(myMap(arr, double));
console.log(myMap(arr, function (num){return num*3} ));
