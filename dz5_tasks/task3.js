const number = 5;
let sum;
let summary;
let i;
let j = 1;

for (i=1; i<=10; i++){
    sum = number * i;
    console.log(number + " * " + i + " = " + sum);
}

console.log("------------------------------------");

while(j<=10){
    summary = number * j;
    console.log(number + " * " + j + " = " + summary);
    j++;
}

