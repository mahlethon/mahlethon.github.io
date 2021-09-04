"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests
const assert = require("assert"); 
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
 
 const testArray = [-10, 0, 10, 20];

console.log(myMap(testArray, double));
console.log(myMap(testArray, times100));
console.log(myMap(testArray, function (num){return num*3} ));
console.log(myMap(testArray,  num => num*3 ));

/* 1.	1.	Write a function, double, that takes a number and returns 2 times the number..  */
describe("double", function () {
    it("tests double 10", function () {
        assert.strictEqual(double(10), 20);
    });
    it("tests double 0", function () {
        assert.strictEqual(double(0), 0);
    });
    it("tests double -10", function () {
        assert.strictEqual(double(-10), -20);
    });
});

/*  2.	Write a function times100 that takes a number and returns 100 times the number. */
describe("times100", function () {
    it("tests times100 10", function () {
        assert.strictEqual(times100(10), 1000);
    });
    it("tests times100 0", function () {
        assert.strictEqual(times100(0), 0);
    });
    it("tests times100 -10", function () {
        assert.strictEqual(times100(-10), -1000);
    });
});

    /* 3.	Write a function, myMap, that takes an array and a function and returns a new array that has the function applied to each element of the input array. */
    describe("myMap", function () {
        const testArray = [-10, 0, 10, 20];
        it("tests myMap on double", function () {
            assert.deepStrictEqual(myMap(testArray, double), [-20, 0, 20, 40]);
        });
        it("tests myMap on times100", function () {
            assert.deepStrictEqual(myMap(testArray, times100), [-1000, 0, 1000, 2000]);
        });
    });

    /* 4.	Demonstrate your myMap function with an anonymous function that triples the input value.  Write this as an anonymous function expression.  
    Then write it using an arrow expression. */
    describe("myMap", function () {
        const testArray = [-10, 0, 10, 20];
        it("tests myMap on triples anonymous function", function () {
            assert.deepStrictEqual(myMap(testArray /* YOUR CODE HERE */), [-30, 0, 30, 60]);
        });
        it("tests myMap on triples arrow function", function () {
            assert.deepStrictEqual(myMap(testArray /* YOUR CODE HERE */), [-30, 0, 30, 60]);
        });
    });



