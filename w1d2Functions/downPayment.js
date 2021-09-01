function calcDownpayment(cost){
    let downPayment;
    if(cost>=0 && cost<50000 ){
        downPayment = cost*0.05;

    } if(cost>= 50000 && cost<100000){
        downPayment = 2500+0.1*(cost-50000);

    } if(cost>= 100000 && cost<200000){
        downPayment =  7500+0.15*(cost-100000);

    } if(cost>= 200000){
        downPayment =  20000+0.1*(cost-200000);

    }

return downPayment;
}
console.log( calcDownpayment(40000));
console.log( calcDownpayment(50000));
console.log( calcDownpayment(100000));
console.log( calcDownpayment(250000));