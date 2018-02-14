//Counting Valleys from https://www.hackerrank.com/challenges/counting-valleys/problem

const n = 8;
const s = "UDDDUDUU";


function countingValleys(n, s) {
    let level = 0;
    let valleyCount = 0;
    for(let i=0; i<n; i++){
        if(s.charAt(i) === "U"){
            level++;
        }
        if(s.charAt((i)) === "D"){
            level--;
        }

        if(level ===0 && s.charAt(i) === "U"){
            valleyCount++
        }
       // console.log("valleyCount: " + valleyCount)
    }
    return valleyCount;
}


console.log(countingValleys(n,s));
