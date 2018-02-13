//Divisible Sum Pairs from https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

const n = 6;
const k = 3;
const ar = [1,3,2,6,1,2];

function divisibleSumPairs(n, k, ar) {
    let sum=0;
    let count=0;
    let index=0;

    for(let i=0; i<ar.length-1; i++){
        for(let j=i+1; j<ar.length; j++){
            sum = ar[i] + ar[j];
          //  console.log("sum: " + sum)
            if(sum % k === 0){
                count++;
          //      console.log(count)
            }
        }
    }
    console.log("Count: "+count)
}



divisibleSumPairs(n,k,ar);
