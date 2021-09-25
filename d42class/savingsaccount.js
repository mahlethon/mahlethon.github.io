// (function () {
"use strict";
/* global Account require  */
// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

class SavingsAccount extends Account {
    
    constructor(number, interest) {
        super(number);
        this._interestAmount = 0;
        this._interest = interest;
        this._balance = 0.0;
    }
    
    getInterest() {
        return this._interest;
    }

    setInterest(interest){
        this._interest = interest
        this._balance = super.getBalance();
    }

    getBalance(){
        this._balance = super.getBalance();
        return this._balance;
    }

    addInterest(){
        this._interestAmount = (super.getBalance()*this.getInterest())/100;
        super.deposit(this._interestAmount);
        this._balance = super.getBalance();
    }

    toString() {
        return "SavingsAccount " + this._number + ": balance: " + super.getBalance() + " interest: "+this._interest;
    }

    endOfMonth() {
        super._balance = (super.getBalance()+this._interest);
        return "Interest added SavingsAccount " + this._number + ": balance: " + super.getBalance() + " interest: "+this._interest;
    }
}

/* global exports */
// exports.SavingsAccount = SavingsAccount;

// })();