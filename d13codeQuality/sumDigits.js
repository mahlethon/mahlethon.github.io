/* eslint-disable */
function sumDigits(num1){
    let str = num1+"";
    let sum = 0;
    for(let i = 0; i<str.length; i++){
        sum += +str.charAt(i);
    }
    return sum;
    }
    
    console.log(sumDigits(1234));
    console.log(sumDigits(102));
    console.log(sumDigits(8));
    
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