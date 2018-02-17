//Grading Students from https://www.hackerrank.com/challenges/grading/problem

const grades = [ 73, 67, 38, 33 ];

function solve(grades){
    let roundedGrades = [];
    for(let i=0; i<grades.length; i++){
        if(grades[i] < 38){
            roundedGrades.push((grades[i]));
        } else if (grades[i]%5 >= 3){
            roundedGrades.push(grades[i] - (grades[i]%5) + 5)
        } else {
            roundedGrades.push(grades[i]);
        }
    }
    return roundedGrades
}

console.log(solve(grades));
