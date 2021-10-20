function area() { return this.side * this.side }
const square1 = {side: 5};
square1.__proto__ = {area: area};

function Square(side){this.side = side; }
Square.prototype.area = area;

class Square2 {
    constructor(side){
    this.side = side;
} 

}
Square2.prototype.area = area;

class MorphableSquare extends Square2{
constructor(side, color, className){
    super(side) ;
    this.color = color;
    this.className = className;
}
}


// const morph2blue = new MorphableSquare(3, "blue", "white");
// const morph2green = new MorphableSquare(3, "green", "white");
// console.log("expect 9: ", morph2blue.area());
// console.log("expect 3: ", Object.getOwnPropertyNames(morph2blue).length);
// console.log(Object.getOwnPropertyNames(morph2blue));

    
  
//"use strict";
let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000);
    // if use strict mode did apply console.log(this) only print ... empty object and this.setTimeout cause a problem
    // if use strict mode didn't apply, will get empty object and global object
     

  
// console.log("expect 25: ", square1.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);
// const constSquare1 = new Square(7);
// console.log("expect 49: ", constSquare1.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);
// const classSquare = new Square2(10);
// console.log("expect 100: ", classSquare.area());
// console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);