"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 

 * @returns {Accumulator} constructor function
 */
function Accumulator(value1){
//implement this
function Accumulator(startingValue) {
   this.value = startingValue;
 
   this.read = function() {
     this.value += +prompt('How much to add?', 0);
   };
 
};
}

/**
 * @returns {Calculator} this is a constructor function
 */
 function Calculator() {
    //implement this
    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
   };
}


