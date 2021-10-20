/* input: cost 
output : down payment
process: use if else statements to calculate the down payment using the instructions:
Cost of House                     Down Payment
$0 to less than 50K             5% of the cost
$50K to less than 100K         $2500 + 10% of (cost - $50K)
$100K to less than 200K        $7500 + 15% of (cost - $100K)
$200K and above                 $20000 + 10% of (cost - $200K)
*/
/* eslint-disable */
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
describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(40000));
    });
    it("tests salaried and 200 sales", function(){
        assert.strictEqual(computeSalesCommission(5000));
        });
        it("tests salaried and 200 sales", function(){
            assert.strictEqual(computeSalesCommission(100000));
            });
            it("tests salaried and 200 sales", function(){
                assert.strictEqual(computeSalesCommission(250000));
                });

    
   });