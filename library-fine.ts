//Library Fine from https://www.hackerrank.com/challenges/library-fine/forum

const d1 = 2; //return day, month and year
const m1 = 5;
const y1 = 2015;
const d2 = 30;   //due date
const m2 = 5;
const y2 = 2015;
let fine = 0;

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Complete this function
    if(d1 <= d2 && m1 === m2 && y1 === y2){
        fine = 0;
    } else if(d1 > d2 && m1 === m2 && y1 === y2){
        fine = 15 * (d1 - d2)
    } else if(m1 > m2 && y1 === y2){
        fine = 500 * (m1 - m2)
    } else if(y1 > y2){
        fine = 10000;
    }
    return fine;
}

console.log("The result is: " + libraryFine(d1, m1, y1, d2, m2, y2));
