"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
//module.exports = {maxOfThree, sum, multiply }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    let largest;
 largest = (a > b) ? a: b;
 (largest > c) ? largest : c;
 return largest;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;

    for (const number of arr){
        tot += number;
    }
    return tot;

}
function findLongestWords(words) {
    let longest = words[0];
    for(let i =0; i< words.length; i++){
        if(words[i].length > longest.length){
            longest = words[i];

        }


    }
    return longest.length;
   
}

function reverseArray(arr){
    let newArr = [];
    for(let i =0; i<arr.length; i++ ){
    newArr.push (arr.pop);
    }
    return newArr;
    }
    console.log(reverseArray(["A", "B", "C"]));


    function scoreExams (answers, correctAnswers){
        let report = [];
        for (let i =0; i<answers.length; i++){
            let count = 0;
            for(let j =0; j<answers[i].length; j++){
                if(correctAnswers[j] === answers[i][j]){
                    count++;
                }
            }
            report[i] = count;
        }
        return report;
    }
    function generateArray(num1, num2) {
        let arr = [];
        let count = 1;
        
        for(let i =0; i< num1; i++){
            let subArr = [];
            for(let j =0; j<num2; j++){
                
                subArr[j] = count;
                count++;
            }
            arr[i] = subArr;
    
        }
        return arr;
        
    }
    