function generateArray(num1, num2) {
    let arr1 = [];
    
    for(let i =0; i< num1; i++){
        let arr2 = [];
        for(let j =0; j<num2; j++){
            
            arr2[j] = j+1;
        }
        arr1[i] = arr2;

    }
    
}
console.log( generateArray(3,3));

