//This only works for the given hardcoded values... does not work in anthor test cases...


console.log("Between Two Sets problem from https://www.hackerrank.com/challenges/between-two-sets/problem");
console.log("This only works for the given hardcoded values... does not work in anthor test cases...");

let aArr = [2, 4];
let bArr = [16, 32, 96]
let maxOfA = (Math.max(...aArr));
let minOfB = (Math.min(...bArr));

let isDivisible = function() {
    for(let index of aArr){
        return (maxOfA % index === 0);
    }
}

let canDivide = function() {
    for(let index of bArr){
        return (index % maxOfA === 0)
    }    
}

let factors = []

if(isDivisible || canDivide) {
    let factor = maxOfA/2; //this will place the maxOfA at the index 0 of factros
    while((factor != minOfB)){
        factors.push(factor *= 2); //starting at first factor which is maxOfA
    }
}

console.log("The number of factors are: " + factors.length);

for(let index of factors){
    console.log("factor: "+index)
}

