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
    let max_value=0;
    if(a>b){
        max_value=a;
    }else{
        max_value=b;
    }
    if (c>max_value){
       max_value=c;
    }
    return max_value;
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
 * @returns {number} product of arr numbers
 */
function multiply(arr){
    let product = 1;

    for (const number of arr){
        product *= number;
    }
    return product;

}
/**
 * 
 * @param {Array} arr of strings
 * @returns {number} length of the longest word 
 */
function findLongestWord(words) {
    let longest = words[0];
    for(let i =0; i< words.length; i++){
        if(words[i].length > longest.length){
            longest = words[i];
        }
    }
    return longest.length;
}
/**
 * 
 * @param {Array} arr array of elements of any type
 * @returns {Array} a new array with the elements reversed
 */

function reverseArray(arr) {
    let newArr = [];
    
    for(let i = arr.length-1; i>=0; i--){
       
       newArr.push(arr.pop());
      
    }
    return newArr;
    
}

    console.log(reverseArray(["A", "B", "C"]));

/**
 * 
 * @param {Array} arr of elements of any type
 * @returns {Array} elements of arr modified to be in inversed positions
 */

    function reverseArrayInPlace(arr){
        let temp;
        let count = 0;
        for(let i=arr.length-1; i>=0; i--){
            temp = arr[i];
            arr[i] = arr[count];
            arr[count] = temp;
            if (count === i && arr.length%2 !== 0 || count + 1 === i && arr.length%2 === 0){
                break;
            }
            count++;
        }
        return arr;
    }
    console.log(reverseArrayInPlace([1,2,3,4,5]));

    
/**
 * 
 * @param {Array} answers is a multidimentional array of students' answers
 * @param {Array} correctAnswers is an array of correct answers
 * @returns {Array} array of count of correct answers of students
 */

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

/**
 * 
 * @param {number} num1 is a number
 * @param {number} num2 is a number
 * @returns {Array} a multidimentional array  
 */

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
    