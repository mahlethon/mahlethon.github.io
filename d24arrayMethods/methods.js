"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}
function mapToNames(users){
let nameArr = [];
for(let user of users){
  nameArr.push(user.name);
}
return nameArr;
}
function mapToObjects(users){
  let objArr = {};
  for(user of users){
    objArr.id = user.id;
    objArr.fullName = user.name + " " + user.surname;

  }
  return objArr;
}

function getAverageAge(users){
  let sum = 0;
  for(user of users){
    sum += user.age;
  }
  return sum / users.length;
  
}



  function unique(arr) {
    let uniqueArr = [];
    for(let item of arr){
      if(!uniqueArr.includes(item))
      uniqueArr.push(item);
    }
    return uniqueArr;
  }


  function groupById(array) {
    let newObj = {};
    for(obj of array){
      newObj[obj.id] = obj;

    }
    return newObj;
  }

  function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }