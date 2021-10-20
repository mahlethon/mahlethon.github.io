// (function () {
"use strict";
/* global Account  */

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */


class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
        this._balance = 0.0;
    }

    getOverdraft() {
        return this._overdraft;
    }

    setOverdraft(overdraft){
        this._overdraft = overdraft
    }

    getBalance(){
        return super.getBalance();
    }
    
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
  
        this._balance -= amount;
        super._balance = this._balance;
        let temp =this._overdraft - (this._overdraft * 2);
        if (this._balance<temp) {
            
            this._balance += amount;
            super._balance = this._balance;
            throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        }

        
        
    }

    toString() {
        return "CheckingAccount " + this._number + ": balance: " + super.getBalance() + " overdraft limit: "+this._overdraft;
    }

    endOfMonth() {
        if (this.getBalance() < 0) {
            return "Warning, low balance CheckingAccount "+ this._number + ": balance: " + super.getBalance() + " overdraft limit: " + this._overdraft;
        }else{
            return "";
        }
    }
}


/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// exports.CheckingAccount = CheckingAccount;


// })();