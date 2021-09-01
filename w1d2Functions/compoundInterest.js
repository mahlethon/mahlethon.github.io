/**
 inputs: initial amount, annual interest rate, number of years to compound
 output: balance
 process: calculate the interest using the formula:
 interest = initialAmount * (1 + annualInterestRate / 100 / 12) ** (years * 12) -initialAmount
return the sum of the interest and the initial value.

 */
function compoundInterest(initialAmount, annualInterestRate, years) {
    let interst;
     interest = initialAmount * (1 + annualInterestRate / 100 / 12) ** (years * 12) -
      initialAmount;
    return interest + initialAmount;
  }
  console.log(compoundInterest(100, 10, 1));
console.log(compoundInterest(10000, 5, 10));