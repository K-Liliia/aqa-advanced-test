let averageGrade = 70;


switch(true){
    case (averageGrade<60): 
        console.log("You have UNSATISFACTORY results");
        break;
    case (averageGrade >= 60 && averageGrade <= 70):
        console.log("You have SATISFACTORY results");
        break;
    case (averageGrade > 70 && averageGrade <= 80):
        console.log("You have GOOD results");
        break;
    case (averageGrade > 80 && averageGrade <= 90):
        console.log("You have VERY GOOD results");
        break;
    case (averageGrade > 90 && averageGrade <= 100):
        console.log("You have EXCELLENT results");
        break;
    default: {
        console.log("You are on your learning way, please don't stop");
    }
}
