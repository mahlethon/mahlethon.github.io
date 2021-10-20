/* eslint-disable */
function convertFahrenheit(farenheitTemp){
    let celsiusTemp = (farenheitTemp-32)*(5/9);
    return celsiusTemp;
    }
    console.log( convertFahrenheit (32));
    console.log( convertFahrenheit (0));
    console.log( convertFahrenheit (212));
    console.log( convertFahrenheit (100));

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