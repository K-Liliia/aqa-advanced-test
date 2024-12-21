function ageVerification(age){
    // first variant
    
    // if(age>=18){
    //     return true;
    // } else {
    //     return false;
    // }

    // second variant
    let isAdult = age >= 18 ? true : false
    return isAdult;
}

let isPerson1Adult = ageVerification(25);
console.log("Is person 1 adult? ---> " + isPerson1Adult);

let isPerson2Adult = ageVerification(15);
console.log("Is person 2 adult? ---> " + isPerson2Adult);