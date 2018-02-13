//Birthday Chocolate from https://www.hackerrank.com/challenges/the-birthday-bar/problem

const n = 5;
const s = [1,2,1,3,2];
const d = 3;
const m = 2;

function solve(n, s, d, m){
    let count = 0;
    let nOfWays = 0;
    for(let i=0; i<s.length; i++){
        for(let j=i; j<m+i; j++){
            count += s[j];
            // console.log("count: " + count)
        }
        if(count === d){
            nOfWays++
        }
        count = 0;
        // console.log("----------------")
    }
    console.log(nOfWays);
}

solve(n,s,d,m);
