//function declaration
function rectangleArea (width, height) {
    let rectangleAreaResult = width * height;
    return rectangleAreaResult;
}

//function expression
let rectangleAreaExp = function(width, height){
    return width * height;
}

//arrow function
let rectangleAreaCalc = (width, height) => {
    return width * height;
}

let result = rectangleArea(5, 10);
console.log("Rectangle area is ------> " + result + " square centimeters")

let result1 = rectangleAreaExp(6, 11);
console.log("Rectangle area is ------> " + result1 + " square centimeters")

let result2 = rectangleAreaCalc(4, 9);
console.log("Rectangle area is ------> " + result2 + " square centimeters")