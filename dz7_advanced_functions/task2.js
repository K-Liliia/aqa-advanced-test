function recursionFunc (num){
    console.log("Current number is -> " + num);
    while(num > 0){
        return recursionFunc(num - 1);
    }
}

recursionFunc(5);


// Note: user will see message "Current number is -> 0" because console.log line is above while loop. When num == 0, while loop will be skipped