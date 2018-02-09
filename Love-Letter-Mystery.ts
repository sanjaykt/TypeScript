//The Love-Letter Mystery from https://www.hackerrank.com/challenges/the-love-letter-mystery/problem

let s = "cba"

function theLoveLetterMystery(s){
    // Complete this function
    let noOfOperation = 0;
    for(let i=0; i<s.length/2; i++){
        noOfOperation += Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length-1-i))
    }
    return (noOfOperation);
}

console.log(theLoveLetterMystery(s));
