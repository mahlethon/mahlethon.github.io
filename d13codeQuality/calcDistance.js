/* eslint-disable */
function calcDistance(x1,y1,x2,y2){
    let distance;
let xdifferenceSquare = Math.pow((x2-x1),2);
let yDifferenceSquare = Math.pow((y2-y1),2);
let sum = xdifferenceSquare+yDifferenceSquare;
distance = Math.sqrt(sum);
return distance;

}
console.log(calcDistance (0, 0, 5, 5));
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