//Viral Advertising from https://www.hackerrank.com/challenges/strange-advertising/problem

const n = 3;

function viralAdvertising(n) {
    let people =5;
    let total = 0;
    for(let i=0; i<n; i++){
        people = Math.floor(people/2);
        total += people;
        people = people * 3;
    }
    return total;
}

console.log(viralAdvertising(n));
