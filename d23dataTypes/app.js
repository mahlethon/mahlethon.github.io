"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { ucFirst, getMaxSubSum, truncate , camelize}; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
 
  

  function checkSpam(str) {
    let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
 
  }


  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;

  }

  function extractCurrencyValue(str) {
    return +str.slice(1);
  }




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { 
    partialSum += item; 
    maxSum = Math.max(maxSum, partialSum); 
    if (partialSum < 0) partialSum = 0; 
  }

  return maxSum;


}


function camelize(str) {
  return str.split('-') .map(
      
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');

  }


