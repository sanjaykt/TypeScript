//Birthday Cake Candles from https://www.hackerrank.com/challenges/birthday-cake-candles/problem

const n = 4;
const ar = [3,2,1,3];

function birthdayCakeCandles(n, ar) {
    let max = Math.max(...ar);
    let count = 0;
    console.log(max)

    for(let index of ar){
        if(index === max){
            count++;
        }
    }

    return count;

}


console.log(birthdayCakeCandles(n, ar));

