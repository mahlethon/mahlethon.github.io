function calcDistance(x1,y1,x2,y2){
    let distance;
let xdifferenceSquare = Math.pow((x2-x1),2);
let yDifferenceSquare = Math.pow((y2-y1),2);
let sum = xdifferenceSquare+yDifferenceSquare;
distance = Math.sqrt(sum);
return distance;

}
console.log(calcDistance (0, 0, 5, 5));