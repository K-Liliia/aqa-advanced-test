function divide (numerator, denominator){
    if(denominator === 0){
        throw new Error("You can't divide by 0, please change this number");
    } else if ((typeof numerator !== 'number') || (typeof denominator !== 'number')){
        throw new Error("Please check that both parameters are NUMBERS, not Strings or other types");
    }
    return numerator / denominator;
}

try {
    let result = divide(6, 10);
    console.log("Division result is: " + result);
 } catch (error) {
     console.error("Error reason", error.message);
 } finally{
     console.log("Function execution is finished");
 }

// try {
//    let result = divide(6, "10");
//    console.log("Division result is: " + result);
// } catch (error) {
//     console.error("Error reason", error.message);
// } finally{
//     console.log("Function execution is finished");
// }

// try {
//     let result = divide(6, 0);
//     console.log("Division result is: " + result);
//  } catch (error) {
//      console.error("Error reason", error.message);
//  } finally{
//      console.log("Function execution is finished");
//  }


