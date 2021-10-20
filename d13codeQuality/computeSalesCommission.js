const assert = require("assert");
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

describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
   });