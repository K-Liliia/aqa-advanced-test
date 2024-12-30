const numbersArray = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount= 0;
let negativeCount= 0;
let zeroCount= 0;

for(let i = 0; i < numbersArray.length; i++){
    debugger
    if(numbersArray[i]>0){
        positiveCount = positiveCount + 1;
    } else if (numbersArray[i]<0){
        negativeCount = negativeCount + 1;
    } else if(numbersArray[i]===0){
        zeroCount = zeroCount + 1;
    }
}

console.log("Amount of positive numbers in array is " + positiveCount);
console.log("Amount of nagative numbers in array is " + negativeCount);
console.log("Amount of zero numbers in array is " + zeroCount);