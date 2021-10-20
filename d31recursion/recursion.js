"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests

function sumTo(n){
    if(n===1){
        return 1
    }else{
        return n + sumTo(n-1);
    }

}
function factorial(n){
    if(n==1)
    return 1;
    return n*factorial(n-1);
}
function fibonacci(n){
    if(n<=1)
    return n;
    return fibonacci(n-2) + fibonacci(n-1);
    
}

function printList(list){
    if(list.next === null){
        console.log(list.value);
        
    }else{
        printList(list.next);
    }
}
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  printList(list);