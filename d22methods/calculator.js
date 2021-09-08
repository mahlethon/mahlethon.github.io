"use strict";

const calculator = {
    
    
};  // implement this
calculator.read = function (){
    let num1 = +prompt("a?", 0);
    let num2 = +prompt("b?", 0);
    this.a = num1;
    this.b = num2;
}
calculator.sum = function (a,b) {
    return a+b;
};

calculator.mul = function  mul(a,b) {
    return a*b;
    
};











/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = {calculator }; //add all of your object names here that you need for the node mocha tests