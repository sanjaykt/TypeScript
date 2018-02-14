//Electronics Shop from https://www.hackerrank.com/challenges/electronics-shop/problem

const keyboards = [3, 1];
const drives = [5,2,8];
const s = 10;


function getMoneySpent(keyboards, drives, s){
    let i = 0;
    let j = 0;
    let sum = 0;
    let max = -1;

    let kSorted = (keyboards.sort((a,b) => a - b));
    let dSorted = (drives.sort((a,b) => a - b));

    for(let i = 0; i<kSorted.length; i++){
        for(let j=0; j<dSorted.length; j++){
            sum = dSorted[j] + kSorted[i];
            if(sum === s){
                return max;
            }
            if(sum < s && sum > max){
                max = sum;
            }
        }
    }
    return max;
}


console.log(getMoneySpent(keyboards,drives,s));
