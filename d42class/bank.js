// (function () {
"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */
    
// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingsaccount.js");
// const SavingsAccount = sav.SavingsAccount; 


class Bank {
    
    constructor(){
        this._accounts = [];
        this._nextNumber = 0;
    }

    addAccount(){
        this._nextNumber += 1;
        this._accounts.push(new Account(this._nextNumber));
        return  this._accounts.length;
    }
    
    addSavingsAccount(interest){
        this._nextNumber += 1;
        this._accounts.push(new SavingsAccount(this._nextNumber, interest));
        return  this._accounts.length;
    }

    addCheckingAccount(overdraft){
        this._nextNumber += 1;
        this._accounts.push(new CheckingAccount(this._nextNumber, overdraft));
        return  this._accounts.length;
    }

    closeAccount(number){
        this._accounts.splice((number-1), 1);
    }

    accountReport(){
        let report = "";

        for (let value of this._accounts) {
            report += value.toString()+"\n";
        }

        return report;
    }

    endOfMonth(){
        let endReport = "";
        for (let value of this._accounts) {
            if(value instanceof SavingsAccount){
                endReport = "Interest added SavingsAccount " + value._number + ": balance: "+(value._balance+value._interest)+" interest: "+value._interest+"\n";
            }else if(value instanceof CheckingAccount){
                endReport += value.endOfMonth()+"\n";
            }
            
        }
        return endReport;
    }

}

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// exports.Bank = Bank;
// })();