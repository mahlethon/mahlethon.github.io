"use strict";

const calculator = {};  // implement this
calculator.setValues = function (x,y){
    this.a  = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
    
}
calculator.sum = function () {
    return this.a + this.b;
};

calculator.mul = function  mul() {
    return this.a * this.b;
    
};











/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = {calculator }; //add all of your object names here that you need for the node mocha tests