function compoundInterest(initialAmount, annualInterestRate, years) {
    let interst;
     interest = initialAmount * (1 + annualInterestRate / 100 / 12) ** (years * 12) -
      initialAmount;
    return interst + initialAmount;
  }