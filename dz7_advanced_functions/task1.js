function handleNum (number, callBackEvenFunc, callBackUnEvenFunc){
    if(number % 2 === 0){
        callBackEvenFunc();
    } else {
        callBackUnEvenFunc();
    }
}

function callBackEvenFunc() {
    console.log("Number is even");
}

function callBackUnEvenFunc() {
    console.log("Number is odd");
}

handleNum(5, callBackEvenFunc, callBackUnEvenFunc)
//handleNum(6, callBackEvenFunc, callBackUnEvenFunc)