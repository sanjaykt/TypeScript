//Find Digits from https://www.hackerrank.com/challenges/find-digits/problem

const n = 12
let eachNumber: number[] = [];
let counter = 0;

function findDigits(n){
    let numStrArr = n.toString().split('');

    for(let i=0; i<numStrArr.length; i++){
        eachNumber.push(Number(numStrArr[i]));

        if (n % eachNumber[i] === 0) {
            counter += 1;
        }
    }

    return counter;
    // console.log(eachNumber);
}


console.log(findDigits(n));
