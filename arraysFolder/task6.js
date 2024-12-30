const numbersArray = [1, 10, 14, 2, 4, 5, 43, 34]

let copynumbersArray = numbersArray.slice();
copynumbersArray.sort((a,b) => (a-b));

console.log("Incomming array is ----> " + numbersArray);
console.log("Sorted array is ----> " + copynumbersArray);