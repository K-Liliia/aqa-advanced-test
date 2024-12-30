const numbersArray = [1, 2, 3, 4, 5, 6];
function multipliedArray(array){
    return array.map(number => number * (number-1));
}

let newArray = multipliedArray(numbersArray);
console.log(newArray);