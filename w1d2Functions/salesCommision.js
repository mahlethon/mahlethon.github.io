function computeSalesCommission(isSalaried, salesAmount){
    let commission = 0;
    if (isSalaried === true ){
        if(salesAmount >= 300 && salesAmount <= 500){
            commission = salesAmount*0.01;

        }if(salesAmount > 500){
            commission = salesAmount*0.02;

        }else{
            commission = 0;
        }
        
    }else {
        if(salesAmount >= 300 && salesAmount <= 500){
            commission = salesAmount*0.02;
        }if(salesAmount > 500){
            commission = salesAmount*0.03;
       

        }

    }
    return commission;
}
console.log( computeSalesCommission(true, 200));
console.log( computeSalesCommission(false, 200));
console.log(computeSalesCommission(true, 300));
console.log( computeSalesCommission(false, 300));
console.log( computeSalesCommission(true, 3500));
console.log( computeSalesCommission(false, 3500));